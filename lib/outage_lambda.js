import * as lambda from '@aws-cdk/aws-lambda'
import {Duration} from '@aws-cdk/core'
import {Schedule} from '@aws-cdk/aws-events'
import * as iam from '@aws-cdk/aws-iam'
import {ssmPath} from './config'
import {Rule} from '@aws-cdk/aws-events'
import * as targets from '@aws-cdk/aws-events-targets'
import {getRolePermissions} from './cdk_helper'

export const telstraOutage = (scope) => {

  const lambdaFunction = new lambda.Function(scope, 'outageCheck', {
    code: lambda.Code.fromAsset('./builds'),
    handler: 'index.main',
    runtime: lambda.Runtime.NODEJS_12_X,
    memorySize: 128,
    timeout: Duration.seconds(29),
  })

  const rule = new Rule(scope, 'Rule', {
    schedule: Schedule.expression('cron(*/30 * * * ? *)')
  })

  rule.addTarget(new targets.LambdaFunction(lambdaFunction))

  new iam.Policy(
    scope,
    'ssmAccess',
    {
      policyName: 'ssmAccess',
      statements: [new iam.PolicyStatement({
        actions: ['ssm:GetParameter'],
        effect: iam.Effect.ALLOW,
        resources: [ssmPath]
      }),
      new iam.PolicyStatement({
        actions: ['iam:GetRole'],
        effect: iam.Effect.ALLOW,
        resources: [getRolePermissions(lambdaFunction)]
      })
      ]
    }
  ).attachToRole(lambdaFunction.role)

  return lambdaFunction
}

import * as cdk from '@aws-cdk/core'
import {telstraOutage}  from './outage_lambda'
export class OutageCdkStack extends cdk.Stack {
  /**
   *
   * @param {cdk.Construct} scope
   * @param {string} id
   * @param {cdk.StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props)

    telstraOutage(this)
  }
}

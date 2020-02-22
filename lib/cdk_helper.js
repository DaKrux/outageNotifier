export function getRolePermissions(lambdaFunction) {
  if (lambdaFunction.role?.roleArn === undefined)
    throw new Error('Role ARN is undefined')
  else
    return lambdaFunction.role.roleArn
}

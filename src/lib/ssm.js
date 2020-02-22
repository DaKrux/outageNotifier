import AWS from 'aws-sdk'

const WithDecryption = true

export async function getSecret(Name) {
  try {
    const ssm = new AWS.SSM()
    const result = await ssm.getParameter({Name, WithDecryption}).promise()

    const {Parameter} = result
    const {Value} = Parameter

    if (!Value)
      throw new Error('Empty SSM Value')

    return Value
  } catch (e) {
    throw new Error(`Could not retrieve ${Name} from SSM\n${e}`)
  }
}

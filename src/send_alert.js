import AWS from 'aws-sdk'
import {getSecret} from './lib/ssm'

const sns = new AWS.SNS()

export async function sendMessage(message) {

  if (message.length === 0)
    return

  const topic = await getSecret('/outage/telstra/snstopic')

  await sns.publish({Message: JSON.stringify(message), TopicArn: topic}).promise()

}


import axios from 'axios'
import {getSecret} from './lib/ssm'

export async function checkTelstra() {

  const validateStatus = status => status === 200
  const address = await getSecret('/outage/telstra/address')
  const url = `https://outages.telstra.com/api/fixed?address=${address}`

  const {data} = await axios.get(url, {timeout: 60000, validateStatus})

  const connectionType = ['Cable', 'NBN']

  return Object.values(data.serviceStatus)
    .filter((outage) => connectionType.includes(outage.name))

}


import 'source-map-support/register'
import {checkTelstra} from './telstra_outages'
import {sendMessage} from './send_alert'

export const outageHandler = async () =>  {

  const telstra = await checkTelstra()
  await sendMessage(telstra)

}

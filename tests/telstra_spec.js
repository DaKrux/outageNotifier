import {expect, sinon, subjectEach} from './test_helper'
import axios from 'axios'
import * as ssmModule from './../src/lib/ssm'
import {checkTelstra} from '../src/telstra_outages'

const name = 'Cable'
const description = 'Cable stuff broke'
const eta = 'Wed Oct 16 2019 23:15:50 GMT+1100'

const axiosOutage = {
  data: {
    serviceStatus: [
      {name, description, eta},
      {name: 'PTSN', description: 'PTSN stuff broke', eta: 'Wed Oct 16 2019 23:15:50 GMT+1100'},
    ]
  }
}

const axiosNoOutage = {data: {
  serviceStatus: []
}

}

describe('#Telstra Outages', () => {
  beforeEach(() => {
    sinon.stub(ssmModule, 'getSecret').resolves()
  })

  describe('Outage found:', () => {
    beforeEach(() => {
      sinon.stub(axios, 'get').resolves(axiosOutage)
    })

    let result

    subjectEach(async () => {
      result = await checkTelstra()
    })

    it('Returns message that can be used in the SNS message', () => {
      expect(result).to.deep.eq([ {name, description, eta} ])

    })

  })

  describe('Outage not found:', () => {
    beforeEach(() => {
      sinon.stub(axios, 'get').resolves(axiosNoOutage)
    })

    let result

    subjectEach(async () => {
      result = await checkTelstra()
    })

    it('Returns no outages string', () => {
      expect(result).to.be.empty
    })

  })

})

#!/usr/bin/env node

import * as cdk from '@aws-cdk/core'
import {region} from '../lib/config'
import {OutageCdkStack} from '../lib/outage_cdk_stack'

const app = new cdk.App()
new OutageCdkStack(app, 'OutageCdkStack', {
  env: {
    region
  }
})

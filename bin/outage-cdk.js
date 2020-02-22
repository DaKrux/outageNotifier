#!/usr/bin/env node

const cdk = require('@aws-cdk/core');
const { OutageCdkStack } = require('../lib/outage-cdk-stack');

const app = new cdk.App();
new OutageCdkStack(app, 'OutageCdkStack');

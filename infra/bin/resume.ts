#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { ResumeStack } from '../lib/resume-stack';

const app = new cdk.App();
new ResumeStack(app, 'ResumeStack', {
  env: {
    region: "eu-west-2" // London
  },
});
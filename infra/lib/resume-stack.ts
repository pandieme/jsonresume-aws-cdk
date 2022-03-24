import { RemovalPolicy, Stack, StackProps } from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';
import * as s3Deployment from 'aws-cdk-lib/aws-s3-deployment';

export class ResumeStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    // Create the bucket that will host your resume
    const ResumeBucket = new s3.Bucket(this, 'ResumeBucket', {
      publicReadAccess: true,
      removalPolicy: RemovalPolicy.DESTROY,
      websiteIndexDocument: 'index.html',
      autoDeleteObjects: true,
      bucketName: 'resume.yourdomain.com'
    });
    
    // Deploy the built json resume to your bucket
    const ResumeDeployment = new s3Deployment.BucketDeployment(this, 'ResumeDeployment', {
      sources: [s3Deployment.Source.asset('../resume/public')],
      destinationBucket: ResumeBucket
    });
  }
}

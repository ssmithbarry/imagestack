const images = [
    { src: 'https://s3.amazonaws.com/www.duckstalk.com/explore/codesandimages/api_sqs_lambda_stack.png', alt: 'Image 1', title: 'API Gateway + SQS + Lambda' },
    { src: 'https://s3.amazonaws.com/www.duckstalk.com/explore/codesandimages/static+site.JPG', alt: 'Image 2', title: 'Static Site with AWS CDK' },
    { src: 'https://s3.amazonaws.com/www.duckstalk.com/explore/codesandimages/rekognition_lambda_s3_trigger.JPG', alt: 'Image 3', title: 'Lambda function that performs image classification via AWS Rekognition' },
    { src: 'https://s3.amazonaws.com/www.duckstalk.com/explore/codesandimages/s3_sns_sqs_lambda_chain_stack.JPG', alt: 'Image 4', title: 'S3 + SNS + SQS + Lambda' },
    { src: 'https://s3.amazonaws.com/www.duckstalk.com/explore/codesandimages/S3_lambda.JPG', alt: 'Image 1', title: 'S3 triggers Lambda' },
    { src: 'https://s3.amazonaws.com/www.duckstalk.com/explore/codesandimages/codepipeline_build_deploy.JPG', alt: 'Image 2', title: 'Building and Deploying a Docker Image With AWS CodePipeline' },
];

const gridContainer = document.getElementById('image-grid');
images.forEach((image) => {
    const gridItem = document.createElement('div');
    gridItem.classList.add('grid-item');

    const img = document.createElement('img');
    img.src = image.src;
    img.alt = image.alt;

    const title = document.createElement('h3');
    title.textContent = image.title;

    gridItem.appendChild(img);
    gridItem.appendChild(title);

    gridContainer.appendChild(gridItem);
});

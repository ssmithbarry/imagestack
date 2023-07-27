// New script section using AWS SDK for JavaScript for S3 file upload
// Update with your AWS configuration and bucket name

AWS.config.update({
  region: 'your-s3-bucket-region',
  accessKeyId: 'your-access-key-id',
  secretAccessKey: 'your-secret-access-key',
});

const bucketName = 'your-s3-bucket-name'; // Replace with your S3 bucket name

function uploadFile() {
  const fileInput = document.getElementById('file-input');
  const file = fileInput.files[0];

  if (!file) {
    console.error('No file selected for upload.');
    // Add code here to handle case where no file is selected.
    return;
  }

  const s3 = new AWS.S3();

  const params = {
    Bucket: bucketName,
    Key: file.name,
    ContentType: file.type,
    ACL: 'public-read', // Set the ACL to public-read for public access to the uploaded file
    Body: file,
  };

  s3.upload(params, (err, data) => {
    if (err) {
      console.error('Error uploading the file:', err);
    } else {
      console.log('File uploaded successfully:', data.Location);
      window.location.href = data.Location; // Redirect to the uploaded file URL
    }
  });
}

// Show and hide loading indicator when file input changes
document.getElementById('file-input').addEventListener('change', function (event) {
  const loadingContainer = document.querySelector('.loading-container');
  
  if (event.target.files.length > 0) {
    loadingContainer.style.display = 'block';
  } else {
    loadingContainer.style.display = 'none';
  }
});

# Get Started

Welcome to the Data Consumer section of the user manual. \
As a Data Consumer, you will receive the results of the algorithm (insights). These are typically stored in an S3 bucket. For other data sources, please contact the support.

A data consumer has a data contract that describes how the insights will be structured. These are validated before exporting to ensure data quality.

## Key Responsibilities

- **Collaborator Setup:** Configure a distinct collaborator for every consumed data schema.
- **Data Security (optional):** Provide an encryption key to safeguard sensitive information.
- **Storage:** Receive your encrypted data in an S3 bucket.

## Workflow

Follow these steps to get started as a Data Consumer:

1. **Accept Your Invitation**  
   If you haven't done so already, accept your invitation to join the collaboration space. More detailed explanation can be found in the [Accept Invitation](/docs/user-manual/data-consumer/accept-invite) section.

2. **Create Your Encryption Key (optional)**  
   When using Parquet files, you can encrypt the data to enhance security. This is explained in the [Generate encryption key](/docs/user-manual/data-consumer/encryption/create-encryption-key) section.

3. **Set up your storage**  
   Upload your data to your secure storage and get credentials.

   - **With Google Cloud Storage**  
      Securely upload your encrypted data to a designated Google Cloud bucket.  
      [Create Bucket](/docs/user-manual/data-consumer/google-cloud-storage/create-bucket)  
      [Create Service Account](/docs/user-manual/data-consumer/google-cloud-storage/create-service-account)

4. **Configure your collaborator**  
   Configure the collaborator, to provide the collaboration space the needed information to push data to your GCS. This is explained in the [Configure Collaborator](/docs/user-manual/data-consumer/configure-data-consumer) section.

---

By following these steps, you will ensure that your collaborator is securely managed and properly integrated into the collaboration space. For further assistance, please consult the relevant sections of our documentation or contact support.

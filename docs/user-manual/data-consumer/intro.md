# Get Started

Welcome to the Data Consumer section of your collaboration space. As a Data Consumer, you are responsible to make available a secure repository to receive data from the collaboration space.For each data source you consume, you must configure a separate collaborator. Additionally, all data will be encrypted in a parquet file and stored securely in a Google Cloud bucket.
Datavillage is able to work other file format and storage, for more information, contact the support.

## Key Responsibilities

- **Collaborator Setup:** Configure a distinct collaborator for every consumed data schema.
- **Data Security:** Provide an encryption key to safeguard sensitive information.
- **Cloud Storage:** Receive your encrypted data in a Google Cloud bucket.

## Workflow

Follow these steps to get started as a Data Consumer, this process must be followed for each consumed data:

1. **Accept Your Invitation**  
   If you haven't done so already, accept your invitation to join the collaboration space.  
   You will receive one invitation per consumed source.  
   [Accept Invitation](/docs/user-manual/data-consumer/accept-invitation)

2. **Create Your Encryption Key**  
   Ensure that all data is encrypted.  
   [Generate encryption key](/docs/user-manual/data-consumer/encryption/create-encryption-key)  

3. **Set up your storage**  
   Upload your data to your secure storage and get credentials.  
   - **With Google Cloud Storage**  
      Securely upload your encrypted data to a designated Google Cloud bucket.  
      [Create Bucket](/docs/user-manual/data-consumer/google-cloud-storage/create-bucket)  
      [Create Service Account](/docs/user-manual/data-consumer/google-cloud-storage/create-service-account)  

4. **Configure your collaborator**  
   Configure the collaborator, to provide the collaboration space the needed information to push data to your GCS.   
   [Configure Collaborator](/docs/user-manual/data-consumer/configure-collaborator/configure-data-source)  

---

By following these steps, you will ensure that your collaborator is securely managed and properly integrated into the collaboration space. For further assistance, please consult the relevant sections of our documentation or contact support.

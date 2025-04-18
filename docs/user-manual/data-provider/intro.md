# Get Started

Welcome to the **Data Provider** section of your collaboration space.  
As a Data Provider, you are responsible for delivering high-quality, secure data.  
For each **Data Source** you provide, you must configure a  **Collaborator**.  
Datavillage standard accept **s3 storage** and **JSON**, **CSV** and **Parquet** files format.  
Parquet files can be duckDB  encrypted.  

## Key Responsibilities

- **Data Provisioning:** Supply data to the collaboration solution.
- **Collaborator Setup:** Configure a distinct **Data Provider** collaborator for every data source.
- **Data Security:** Encrypt your data to safeguard sensitive information.
- **Storage:** Upload your encrypted data to a secure **s3** storage.

## Workflow

Follow these steps to get started as a Data Provider:

1. **Accept Your Invitation**  
   If you haven't done so already, accept your invitation to join the collaboration space.  
   You will receive one invitation per data source.  
   [Join Space](/docs/user-manual/data-provider/accept-invite)

2. **Encrypt Your Data**  
   You can also provide unencrypted data in JSON or CSV format, but Datavillage does not recommend this for security reasons.    
   Ensure that all data is encrypted.  
   [Generate encryption key](/docs/user-manual/data-provider/encryption/create-encryption-key)  
   [Encrypt parquet file](/docs/user-manual/data-provider/encryption/encrypt-parquet-file)  

3. **Set up your storage**  
   Upload your data to your secure storage and get credentials.  
   - **With Google Cloud Storage**  
      Securely upload your encrypted data to a designated Google Cloud bucket.  
      [Create Bucket](/docs/user-manual/data-provider/google-cloud-storage/create-bucket)  
      [Create Service Account](/docs/user-manual/data-provider/google-cloud-storage/create-service-account)  

4. **Configure your collaborator**  
   For every unique data source, configure the collaborator.  
   [Configure Collaborator](/docs/user-manual/data-provider/configure-data-provider)  

5. **Add your storage credentials**  
   For every unique data source, add secret credentials.  
   [Configure Data Source Secrets](/docs/user-manual/data-provider/configure-secrets)     

---

By following these steps, you will ensure that your data is securely managed and properly integrated into the collaboration space. For further assistance, please consult the relevant sections of our documentation or contact support.

# Get Started

Welcome to the **Data Provider** section of your collaboration space.  
As a Data Provider, you are responsible for delivering high-quality, secure data. For each input to the algorithm you contribute, you must configure a **collaborator**.  
The platform supports reading from an **S3 bucket**. It can read **JSON**, **CSV** and **Parquet** files.  
Parquet files can be encrypted.

## Key Responsibilities

- **Data Provisioning:** Supply data to the collaboration solution.
- **Collaborator Setup:** Configure a distinct collaborator for every data source.
- **Storage:** Upload your encrypted data to a secure **s3** storage.

Data can optionally be encrypted to enhance security of sensitive informtion.

## Workflow

Follow these steps to get started as a Data Provider:

1. **Accept Your Invitation**  
   If you haven't done so already, accept your invitation to join the collaboration space.  
   You will receive one invitation per data source.  
   This is further explained in the [Join Space](/docs/user-manual/data-provider/accept-invite) section.

2. **Encrypt Your Data** (optional)
   If you want, you can supply data encrypted using the Parquet file format.  
   For this, you need to [generate an encryption key](/docs/user-manual/data-provider/encryption/create-encryption-key) and [encrypt the parquet file](/docs/user-manual/data-provider/encryption/encrypt-parquet-file)

3. **Set up your storage**  
   Upload your data to your secure storage and get the credentials to access them.

   - **With Google Cloud Storage (GCS)**  
      Securely upload your encrypted data to a designated GCS bucket.  
      [Create Bucket](/docs/user-manual/data-provider/google-cloud-storage/create-bucket)  
      [Create Service Account](/docs/user-manual/data-provider/google-cloud-storage/create-service-account)

4. **Configure your collaborator**  
   For every unique data source, configure the collaborator.  
   This is further explained in the [Configure Collaborator](/docs/user-manual/data-provider/configure-data-provider) section.

5. **Add your storage credentials**  
   For every collaborator, add the credentials for access.  
   This is further explained in the [Configure Data Source Secrets](/docs/user-manual/data-provider/configure-secrets) section.

---

By following these steps, you will ensure that your data is securely managed and properly integrated into the collaboration space. For further assistance, please consult the relevant sections of our documentation or contact support.

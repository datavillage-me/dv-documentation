# Getting started

Welcome to the **data provider** section of your collaboration space.  
As a Data Provider, you are responsible for delivering high-quality, secure data. For each input to the algorithm you contribute, you must configure a **collaborator**.  
The platform supports reading from an **S3 bucket**. It can read **JSON**, **CSV** and **Parquet** files.  
Parquet files can be encrypted.

## Key responsibilities

- **Data provisioning:** Supply data to the collaboration solution.
- **Collaborator setup:** Configure a distinct collaborator for every data source.
- **Storage:** Upload your encrypted data to a secure **s3** storage.

Data can optionally be encrypted to enhance security of sensitive information.

## Workflow

Follow these steps to get started as a Data Provider:

1. **Accept your invitation**  
   If you haven't done so already, accept your invitation to join the collaboration space.  
   You will receive one invitation per data source.  
   This is further explained in the [Join space](/docs/user-manual/data-provider/accept-invite) section.

2. **Encrypt your data** (optional)
   If you want, you can supply data encrypted using the Parquet file format.  
   For this, you need to [generate an encryption key](/docs/user-manual/data-provider/encryption/create-encryption-key) and [encrypt the parquet file](/docs/user-manual/data-provider/encryption/encrypt-parquet-file)

3. **Set up your storage**  
   Upload your data to your secure storage and get the credentials to access them.

   - **With Google cloud storage (GCS)**  
      Securely upload your encrypted data to a designated GCS bucket.  
      [Create bucket](/docs/user-manual/data-provider/google-cloud-storage/create-bucket)  
      [Create service account](/docs/user-manual/data-provider/google-cloud-storage/create-service-account)

4. **Configure your collaborator**  
   For every unique data source, configure the collaborator.  
   This is further explained in the [Configure collaborator](/docs/user-manual/data-provider/configure-data-provider) section.

5. **Add your storage credentials**  
   For every collaborator, add the credentials for access.  
   This is further explained in the [Configure data source secrets](/docs/user-manual/data-provider/configure-secrets) section.

---

By following these steps, you will ensure that your data is securely managed and properly integrated into the collaboration space. For further assistance, please consult the relevant sections of our documentation or contact support.

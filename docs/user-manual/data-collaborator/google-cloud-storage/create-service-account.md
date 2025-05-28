# Creating service account HMAC key

Service account HMAC keys allow your service accounts to authenticate using HMAC-based signatures. This is the preferred method for applications that require S3-compatible authentication when working with Google Cloud Storage.

In this guide, you’ll learn how to create an HMAC key using both the Cloud Console and the command-line tool.

## Prerequisites

Before proceeding, ensure you have:

- A [Google Cloud project](https://cloud.google.com/).
- Sufficient permissions to manage service accounts and HMAC keys.
- (Optional) The [Google Cloud SDK](https://cloud.google.com/sdk) installed if you prefer using the command line.

## Creating a service account HMAC Key via the cloud console

### 1. Create or select a service account

- Go to the [service sccounts page](https://console.cloud.google.com/iam-admin/serviceaccounts).
- Create a new service account or select an existing one.

### 2. Assign the correct permissions to the service account

- Navigate to your bucket
- Select the **Permissions** tab
- Add the `Storage Bucket Viewer` role to the service account

### 3. Create the HMAC Key

- From the bucket overview, select **Settings** from the menu on the left hand side
- Select the **Interoperability** tab
- Under the section **Service account HMAC**, create an HMAC key tied to the service account
  - You can only see the secret once, make sure you store it somewhere local and safe

### 4. Upload the key

- Create the JSON file and upload it to the cage as described in the section [Configure Data Source Secrets](/docs/user-manual/data-collaborator/configure-secrets)

## Creating a service account HMAC Key via the command line

### 1. Create or select a service account

If you don’t have a service account yet, create one using the Cloud SDK:

```bash
gcloud iam service-accounts create my-service-account --display-name "My Service Account"
```

## External documentation

Consult the official [GCS documentation](https://cloud.google.com/storage/docs/authentication/managing-hmackeys) for a more detailed explanation.

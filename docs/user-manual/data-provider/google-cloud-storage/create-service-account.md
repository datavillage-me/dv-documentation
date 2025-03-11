# Creating Service Account HMAC Key

Service Account HMAC keys allow your service accounts to authenticate using HMAC-based signatures. This method is especially useful for applications that require S3-compatible authentication when working with Google Cloud Storage.

In this guide, you’ll learn how to create an HMAC key using both the Cloud Console and the command-line tool.

---

## Prerequisites

Before proceeding, ensure you have:

- A [Google Cloud project](https://cloud.google.com/).
- Sufficient permissions to manage service accounts and HMAC keys.
- (Optional) The [Google Cloud SDK](https://cloud.google.com/sdk) installed if you prefer using the command line.

---

## Creating a Service Account HMAC Key via the Cloud Console

### 1. Create or Select a Service Account

- Go to the [Service Accounts page](https://console.cloud.google.com/iam-admin/serviceaccounts).
- Create a new service account or select an existing one.

### 2. Access the HMAC Keys Section

- Navigate to the [Cloud Storage HMAC Keys page](https://console.cloud.google.com/storage/hmacKeys).
- Ensure your project is selected.

### 3. Create the HMAC Key

- Click the **Create key** button.
- In the dialog that appears, select the service account you want to associate with this key.
- Confirm the creation.

### 4. Retrieve and Secure Your Keys

- Once created, the page displays both the **Access Key ID** and **Secret Access Key**.
- **Important:** Copy and securely store the Secret Access Key immediately. For security reasons, you cannot retrieve it later.

---

## Creating a Service Account HMAC Key via the Command Line

### 1. Create or Select a Service Account

If you don’t have a service account yet, create one using the Cloud SDK:

```bash
gcloud iam service-accounts create my-service-account --display-name "My Service Account"

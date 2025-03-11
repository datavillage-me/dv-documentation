# Creating a Bucket

This guide explains how to create a new bucket in Google Cloud Storage. You can create a bucket using either the Google Cloud Console or the command-line tool `gsutil`.

## Prerequisites

Before you begin, make sure you have:
- A [Google Cloud account](https://cloud.google.com/).
- A Google Cloud project with billing enabled.
- (Optional) The [Google Cloud SDK](https://cloud.google.com/sdk) installed if you plan to use the command-line interface.

## Using the Google Cloud Console

1. **Open the Cloud Storage Browser:**  
   Visit the [Google Cloud Storage Browser](https://console.cloud.google.com/storage/browser) and log in with your Google account. Select the project in which you want to create the bucket.

2. **Create a New Bucket:**  
   Click on the **Create bucket** button.

3. **Configure Your Bucket:**
   - **Name:** Enter a unique name for your bucket. Bucket names must be globally unique.
   - **Location Type and Location:** Choose the location type (Region, Multi-region, or Dual-region) and select your preferred geographic location.
   - **Storage Class:** Select Standart for the storage.
   - **Access Control:** Choose Uniform and  access control.

4. **Review and Create:**  
    Once you have configured the bucket settings, click **Create** to finalize the process.

5. **Upload your parquet file**:  
    You can upload you file via drag and drop or with the uploads button.  

## Using the Command-Line with `gsutil`

Alternatively, you can use the `gsutil` command-line tool to create a bucket:

1. **Authenticate and Set Your Project:**
   Open your terminal and run the following commands:
   ```bash
   gcloud auth login
   gcloud config set project YOUR_PROJECT_ID

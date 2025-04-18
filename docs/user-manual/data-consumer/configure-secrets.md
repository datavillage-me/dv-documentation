# Configure Data Source Secrets

To write your data from the **Collaboration Space**, you must upload your **s3 credentials**. 
It must be in a **JSON** file.
The needed values are:
- key_id 
- secret
- encryption_key

```json
{
    "key_id": "XXXXXXXXXXXXXXXXXXXXXXXX",
    "secret": "XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
	"encryption_key": "09528bfd444ccbd1891ac54f627dab3b",
}
```

1. Open the **Data Consumer** page
![screenshot of data Consumer](img/34_configure_data_consumer.png)

2. Click on the **Add Secret** 
![screenshot of data Consumer](img/34_configure_data_consumer_secret.png)

3. Click on **Select a file**, and select your **JSON** file containing your data source credentials. 
![screenshot of administration](img/23_upload_secret_dataConsumer.png)

6. Click on **Upload**
![screenshot of administration](img/data_Consumer_secret_file_selected.png)

7. Your **Secret** are now saved in the secret manager.   


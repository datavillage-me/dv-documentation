# Configure Data Source Secrets

To fetch your data from the **Collaboration Space**, you must upload your **s3 credentials**. 
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

1. Open the **Data Provider** page
![screenshot of data provider](img/22_configure_data_provider_page.png)

2. Click on the **Add Secret** 
![screenshot of data provider](img/22_configure_data_provider_secret.png)

3. Click on **Select a file**, and select your **JSON** file containing your data source credentials. 
![screenshot of administration](img/23_upload_secret_dataprovider.png)

6. Click on **Upload**
![screenshot of administration](img/data_provider_secret_file_selected.png)

7. Your **Secret** are now saved in the secret manager.   


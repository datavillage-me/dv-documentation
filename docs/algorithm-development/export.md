# Export Consumers

- To **export** data to a **consumer**:
  - **Mount** the consumer [mount provider](/docs/algorithm-development/mount)
  - **Append** the data to the consumer
  - **Export** the data to the consumer

## Append data

- Turned the data frame into a in memory csv
- Append the data to the collaborator with **append_collaborator.sync_detailed()**
  - **client** created with **create_client()** from dv_utils
  - **collaborator_id**, you can get the collaborator id from the label with **os.environ[\"ID_\{COLLABORATOR_ID}"]**
  - **body** with **AppendCollaboratorBody()** and the in memory csv
- After appending the data check that the collaborator status it is **mounted** [check status](/docs/algorithm-development/check-status).

```python
import pandas as pd
from dv_data_engine_client.models.append_collaborator_body import AppendCollaboratorBody
from dv_utils.data_engine import create_client
from dv_data_engine_client.api.default import append_collaborator

def __append_results(results: pd.DataFrame, consumer_id: str) -> bool:
    csv_str = results.to_csv(index=False, header=False)
    csv_bytes = csv_str.encode('utf-8')
    f = File(payload=csv_bytes, file_name="data.csv")
    body = AppendCollaboratorBody(data=f)
    with create_client() as c:
      append_collaborator.sync(client=c,collaborator_id=consumer_id,body=body)
```

## Export data

- Export the data to the provider with **query_collaborator.sync()**
  - **client** created with **create_client()** from dv_utils
  - **collaborator_id**, you can get the collaborator id from the label with **os.environ[\"ID_\{COLLABORATOR_ID}"]**
- After exporting the data check that the collaborator status it is **exported** [check status](/docs/algorithm-development/check-status).

```python
from dv_utils.data_engine import create_client
from dv_data_engine_client.api.default import  export_collaborator

def __export_results(consumer_id) -> bool:
  with create_client() as c:
    export_collaborator.sync(client=c, collaborator_id=consumer_id)
```

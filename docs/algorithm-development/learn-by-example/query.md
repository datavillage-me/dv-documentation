# Query data providers

- To **query** data in a **provider**:
  - **Mount** the provider [mount provider](/docs/algorithm-development/learn-by-example/mount)
  - **Query** the provider with **query_collaborator.sync()**
    - **client** created with **create_client()** from dv_utils
    - **collaborator_id**, you can get the collaborator id from the label with **os.environ[\"ID_\{COLLABORATOR_ID}"]**
    - **body** with **QueryCollaboratorBody.from_dict()**

```python
from dv_data_engine_client.models.query_collaborator_body import QueryCollaboratorBody
from dv_data_engine_client.api.default import query_collaborator
from dv_utils.data_engine import create_client
from io import StringIO
import pandas as pd

GET_FRAUDULENT_ACCOUNTS_QUERY = {
  "select": [
    {
      "property": {"property": "account_number"}
    }
  ],
  "where": {
    "equalA": {
      "property": "bank_id"
    },
    "equalB": {
      "stringValue": config.BANK_ID
    }
  }
}

def __query(provider_id) -> pd.DataFrame:
  body = QueryCollaboratorBody.from_dict(GET_FRAUDULENT_ACCOUNTS_QUERY)
  with create_client() as c:
    resp: str = query_collaborator.sync(client=c, collaborator_id=provider_id, body=body)
    return pd.read_csv(StringIO(resp), delimiter=',')
```

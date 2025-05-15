# Mount Collaborators

- Mounting a collaborator is the first step to read or write data.
- It fetches the data of the providers.
- It creates the output schema of the consumers.

## Mount provider

- To mount the provider use the **mount_collaborator** function from the dv_data_engine with:
  - **client** created with **create_client()** from dv_utils.
  - **collaborator_id**, you can get the collaborator id from the label with **os.environ[\"ID_\{COLLABORATOR_ID}"]**.
  - **body** with **MountCollaboratorBody()**.
- After mounting the collaborator check that it is **mounted** [check status](/docs/algorithm-development/check-status).

```python
from dv_utils.data_engine import create_client
from dv_data_engine_client.api.default import mount_collaborator
from dv_data_engine_client.models.mount_collaborator_body import MountCollaboratorBody

def __mount_provider(provider_id) -> bool:
  with create_client() as c:
    mount_collaborator.sync(client=c, collaborator_id=provider_id, body=MountCollaboratorBody())
```

## Mount consumer

- To mount the consumer use the **mount_collaborator** function from the dv_data_engine with:
  - **client** created with **create_client()** from dv_utils.
  - **collaborator_id**, you can get the collaborator id from the label with **os.environ[\"ID_\{COLLABORATOR_ID}"]**.
  - **body** with **MountCollaboratorBody().from_dict()** with in it the schema of the output data.
- After mounting the collaborator check that it is **mounted** [check status](/docs/algorithm-development/check-status).

```python
RESULT_COLUMNS = [
    {
      "name": "account_number",
      "type": "VARCHAR"
    },
    {
      "name": "line_count",
      "type": "VARCHAR"
    }
  ]

def __mount_consumer(consumer_id) -> bool:
  body = MountCollaboratorBody.from_dict({"columns": constants.RESULT_COLUMNS})
  with create_client() as c:
    mount_collaborator.sync(client=c, collaborator_id=consumer_id, body=body)
```

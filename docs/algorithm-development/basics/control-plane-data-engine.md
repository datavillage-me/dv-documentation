# Control Plane & Data Engine

To communicate with the Control Plane and the Data Engine, the `control_plane_cage_client` and `dv_data_engine_client` libs are available.

## Structure of the libs

These libs contain 2 packages:

- `api` contains classes to communicate with the api. Every object represents an endpoint and has following methods
  - `sync` performs a synchronous call and returns the parsed response
  - `asyncio` performs an asynchronous call and returns the parsed response
  - `sync_detailed` performs a synchronous call and returns the status code, content in bytes, response headers and parsed body
  - `asyncio_detailed` performs an asynchronous call and returns the status code, content in bytes, response headers and parsed body
- `model` contains classes representing the bodies of the requests and responses.
  - to create an instance of these classes, use the `from_dict` class method with a `dict` object representing the json structure
  - instances of these classes can be parsed to a `dict` object using the `to_dict` method
  - the buillt-in Python method `isinstance` can be used to check the response type

You can find the complete api documentation [here](/docs/reference/).

To create the clients that enable communication with the APIs, helper methods are included in `dv_utils`.

For the control plane client:

```python
from dv_utils.client import create_client

with create_client() as c:
  ...
```

For the data engine client:

```python
from dv_utils.data_engine import create_client

with create_client() as c:
  ...
```

## Basic examples

Get a collaborator from the Control Plane:

```python
from dv_utils.client import create_client
from control_plane_cage_client.api.collaboration_spaces import get_collaborator

from control_plane_cage_client.models.collaborator import Collaborator
from control_plane_cage_client.models.get_collaborator_404 import GetCollaboratorResponse404

from dv_utils.log_utils import log, LogLevel

collaborator_id = "abc"
with create_client() as c:
  resp = get_collaborator.sync(client=c, collaborator_id=collaborator_id)
  if isinstance(resp, Collaborator):
    # handle 200 response
    collaborator_json = resp.to_dict()
  elif isinstance(resp, GetCollaboratorResponse404):
    # handle 404 response
    log("collaborator not found", LogLevel.ERROR)
```

Query a collaborator from the Data Engine:

```python
from dv_utils.data_engine import create_client

from dv_data_engine_client.api.default import query_collaborator
from dv_data_engine_client.models.query_collaborator_body import QueryCollaboratorBody
from dv_data_engine_client.models.query_collaborator_response_400 import QueryCollaboratorResponse400
from dv_data_engine_client.models.query_collaborator_response_404 import QueryCollaboratorResponse404

from dv_utils.log_utils import log, LogLevel

collaborator_id = "abc"

# query to select the `release_year` property of the first 5 rows
query = {
  "select": [
    {
      "property": {"property": "release_year"}
    }
  ],
  "limit": 5
}

body = QueryCollaboratorBody.from_dict(query)
with create_client() as c:
  resp = query_collaborator.sync(client=c, body=body, collaborator_id=collaborator_id)
  if isinstance(resp, str):
    # handle succesfull response
    log(f"got results {resp}")
  elif isinstance(resp, QueryCollaboratorResponse400):
    # handle 400 response
    log(f"could not query collaborator: response was 400 {resp.error_message}", LogLevel.ERROR)
  elif isinstance(resp, QueryCollaboratorResponse404):
    # handle 404 response
    log(f"could not query collaborator: collaborator not found")
```

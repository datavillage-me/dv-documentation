# List and sort collaborators

- To **list and sort** the space **collaborator**:
  - Get the space collaborators by using the **get_collaborators** api
  - Sort them by role
    - DataProvider
    - DataConsumer
    - CodeProvider

```python
from dv_utils.client import create_client
from control_plane_cage_client.api.collaboration_spaces import get_collaborators
from control_plane_cage_client.models.collaborator import Collaborator

collaborators = read_collaborators()

providers, code, consumers = categorize_collaborators(collaborators)

def read_collaborators() -> list[Collaborator]:
  with create_client() as c:
    return get_collaborators.sync(client=c)

def categorize_collaborators(collaborators: list[Collaborator]) -> tuple[list[str], str, list[str]]:
  providers = []
  consumers = []
  code = None

  for col in collaborators:
    c = col.to_dict()
    if c['role'] == 'DataProvider':
      providers.append(get_label_safe(c))
    elif c['role'] == 'CodeProvider':
      code = get_label_safe(c)
    elif c['role'] == 'DataConsumer':
      consumers.append(get_label_safe(c))

  return (providers, code, consumers)
```

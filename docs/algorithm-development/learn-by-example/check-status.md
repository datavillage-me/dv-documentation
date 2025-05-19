# Check Collaborators Status

- Checking the **status** is crucial to make sure the collaborator is either:

  - **Error**
  - **Exported**
  - **Exporting**
  - **Initialized**
  - **Mounted**
  - **Unmounted**
  - **Writing**

- To do that we use two functions
  - **\_\_wait_for_status**
  - **\_\_get_collab_status**

## Check status

- Keeps checking collaborator's status, using **\_\_get_collab_status**, until it either:
  - Matches the expected **status**.
  - Hits the number of tries **MAX_TRIES**.

```python
def __wait_for_status(client: Client, collab_id: str, expected_status: str) -> bool:
  status = __get_collab_status(client, collab_id)
  while expected_status != status and config.TRIES < config.MAX_TRIES:
    if status == "error":
      log(f"error for collaborator {collab_id}", LogLevel.ERROR)
      return False
    time.sleep(config.SLEEP_S)
    status = __get_collab_status(client, collab_id)
    config.TRIES += 1

  return status == expected_status
```

## Get collaborator status

- Get the collaborator **status** using **collaborator_status.sync_detailed()** with:
  - **client** created with **create_client()** from dv_utils

```python
def __get_collab_status(client: Client, collab_id: str) -> str:
  resp = collaborator_status.sync_detailed(client=client, collaborator_id=collab_id)
  return resp.parsed.to_dict()["]
```

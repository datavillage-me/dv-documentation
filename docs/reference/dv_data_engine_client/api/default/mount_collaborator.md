---
sidebar_label: mount_collaborator
title: dv_data_engine_client.api.default.mount_collaborator
---

#### sync\_detailed

```python
def sync_detailed(
    collaborator_id: str, *, client: Union[AuthenticatedClient,
                                           Client], body: MountCollaboratorBody
) -> Response[Union[Any, MountCollaboratorResponse400,
                    MountCollaboratorResponse404]]
```

Mount a new collaborator

**Arguments**:

  collaborator_id (str):
  body (MountCollaboratorBody):
  

**Raises**:

- `errors.UnexpectedStatus` - If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
- `httpx.TimeoutException` - If the request takes longer than Client.timeout.
  

**Returns**:

  Response[Union[Any, MountCollaboratorResponse400, MountCollaboratorResponse404]]

#### sync

```python
def sync(
    collaborator_id: str, *, client: Union[AuthenticatedClient,
                                           Client], body: MountCollaboratorBody
) -> Optional[Union[Any, MountCollaboratorResponse400,
                    MountCollaboratorResponse404]]
```

Mount a new collaborator

**Arguments**:

  collaborator_id (str):
  body (MountCollaboratorBody):
  

**Raises**:

- `errors.UnexpectedStatus` - If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
- `httpx.TimeoutException` - If the request takes longer than Client.timeout.
  

**Returns**:

  Union[Any, MountCollaboratorResponse400, MountCollaboratorResponse404]

#### asyncio\_detailed

```python
async def asyncio_detailed(
    collaborator_id: str, *, client: Union[AuthenticatedClient,
                                           Client], body: MountCollaboratorBody
) -> Response[Union[Any, MountCollaboratorResponse400,
                    MountCollaboratorResponse404]]
```

Mount a new collaborator

**Arguments**:

  collaborator_id (str):
  body (MountCollaboratorBody):
  

**Raises**:

- `errors.UnexpectedStatus` - If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
- `httpx.TimeoutException` - If the request takes longer than Client.timeout.
  

**Returns**:

  Response[Union[Any, MountCollaboratorResponse400, MountCollaboratorResponse404]]

#### asyncio

```python
async def asyncio(
    collaborator_id: str, *, client: Union[AuthenticatedClient,
                                           Client], body: MountCollaboratorBody
) -> Optional[Union[Any, MountCollaboratorResponse400,
                    MountCollaboratorResponse404]]
```

Mount a new collaborator

**Arguments**:

  collaborator_id (str):
  body (MountCollaboratorBody):
  

**Raises**:

- `errors.UnexpectedStatus` - If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
- `httpx.TimeoutException` - If the request takes longer than Client.timeout.
  

**Returns**:

  Union[Any, MountCollaboratorResponse400, MountCollaboratorResponse404]


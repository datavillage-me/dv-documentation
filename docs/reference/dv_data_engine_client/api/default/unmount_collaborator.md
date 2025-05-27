---
sidebar_label: unmount_collaborator
title: dv_data_engine_client.api.default.unmount_collaborator
---

#### sync\_detailed

```python
def sync_detailed(
    collaborator_id: str, *, client: Union[AuthenticatedClient, Client]
) -> Response[Union[Any, UnmountCollaboratorResponse404]]
```

Unmount a collaborator

**Arguments**:

  collaborator_id (str):
  

**Raises**:

- `errors.UnexpectedStatus` - If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
- `httpx.TimeoutException` - If the request takes longer than Client.timeout.
  

**Returns**:

  Response[Union[Any, UnmountCollaboratorResponse404]]

#### sync

```python
def sync(
    collaborator_id: str, *, client: Union[AuthenticatedClient, Client]
) -> Optional[Union[Any, UnmountCollaboratorResponse404]]
```

Unmount a collaborator

**Arguments**:

  collaborator_id (str):
  

**Raises**:

- `errors.UnexpectedStatus` - If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
- `httpx.TimeoutException` - If the request takes longer than Client.timeout.
  

**Returns**:

  Union[Any, UnmountCollaboratorResponse404]

#### asyncio\_detailed

```python
async def asyncio_detailed(
    collaborator_id: str, *, client: Union[AuthenticatedClient, Client]
) -> Response[Union[Any, UnmountCollaboratorResponse404]]
```

Unmount a collaborator

**Arguments**:

  collaborator_id (str):
  

**Raises**:

- `errors.UnexpectedStatus` - If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
- `httpx.TimeoutException` - If the request takes longer than Client.timeout.
  

**Returns**:

  Response[Union[Any, UnmountCollaboratorResponse404]]

#### asyncio

```python
async def asyncio(
    collaborator_id: str, *, client: Union[AuthenticatedClient, Client]
) -> Optional[Union[Any, UnmountCollaboratorResponse404]]
```

Unmount a collaborator

**Arguments**:

  collaborator_id (str):
  

**Raises**:

- `errors.UnexpectedStatus` - If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
- `httpx.TimeoutException` - If the request takes longer than Client.timeout.
  

**Returns**:

  Union[Any, UnmountCollaboratorResponse404]


---
sidebar_label: get_collaborator
title: control_plane_cage_client.api.collaboration_spaces.get_collaborator
---

#### sync\_detailed

```python
def sync_detailed(
    collaborator_id: str, *, client: Union[AuthenticatedClient, Client]
) -> Response[Union[Collaborator, GetCollaboratorResponse404]]
```

Get Collaborator

Get a collaborator by ID. Allowed if the client is owner or collaborator of the collaboration space.

**Arguments**:

  collaborator_id (str):
  

**Raises**:

- `errors.UnexpectedStatus` - If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
- `httpx.TimeoutException` - If the request takes longer than Client.timeout.
  

**Returns**:

  Response[Union[Collaborator, GetCollaboratorResponse404]]

#### sync

```python
def sync(
    collaborator_id: str, *, client: Union[AuthenticatedClient, Client]
) -> Optional[Union[Collaborator, GetCollaboratorResponse404]]
```

Get Collaborator

Get a collaborator by ID. Allowed if the client is owner or collaborator of the collaboration space.

**Arguments**:

  collaborator_id (str):
  

**Raises**:

- `errors.UnexpectedStatus` - If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
- `httpx.TimeoutException` - If the request takes longer than Client.timeout.
  

**Returns**:

  Union[Collaborator, GetCollaboratorResponse404]

#### asyncio\_detailed

```python
async def asyncio_detailed(
    collaborator_id: str, *, client: Union[AuthenticatedClient, Client]
) -> Response[Union[Collaborator, GetCollaboratorResponse404]]
```

Get Collaborator

Get a collaborator by ID. Allowed if the client is owner or collaborator of the collaboration space.

**Arguments**:

  collaborator_id (str):
  

**Raises**:

- `errors.UnexpectedStatus` - If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
- `httpx.TimeoutException` - If the request takes longer than Client.timeout.
  

**Returns**:

  Response[Union[Collaborator, GetCollaboratorResponse404]]

#### asyncio

```python
async def asyncio(
    collaborator_id: str, *, client: Union[AuthenticatedClient, Client]
) -> Optional[Union[Collaborator, GetCollaboratorResponse404]]
```

Get Collaborator

Get a collaborator by ID. Allowed if the client is owner or collaborator of the collaboration space.

**Arguments**:

  collaborator_id (str):
  

**Raises**:

- `errors.UnexpectedStatus` - If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
- `httpx.TimeoutException` - If the request takes longer than Client.timeout.
  

**Returns**:

  Union[Collaborator, GetCollaboratorResponse404]


---
sidebar_label: append_collaborator
title: dv_data_engine_client.api.default.append_collaborator
---

#### sync\_detailed

```python
def sync_detailed(
    collaborator_id: str, *, client: Union[AuthenticatedClient, Client],
    body: AppendCollaboratorBody
) -> Response[Union[Any, AppendCollaboratorResponse400,
                    AppendCollaboratorResponse404]]
```

Append data on a Data Consumer

**Arguments**:

  collaborator_id (str):
  body (AppendCollaboratorBody):
  

**Raises**:

- `errors.UnexpectedStatus` - If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
- `httpx.TimeoutException` - If the request takes longer than Client.timeout.
  

**Returns**:

  Response[Union[Any, AppendCollaboratorResponse400, AppendCollaboratorResponse404]]

#### sync

```python
def sync(
    collaborator_id: str, *, client: Union[AuthenticatedClient, Client],
    body: AppendCollaboratorBody
) -> Optional[Union[Any, AppendCollaboratorResponse400,
                    AppendCollaboratorResponse404]]
```

Append data on a Data Consumer

**Arguments**:

  collaborator_id (str):
  body (AppendCollaboratorBody):
  

**Raises**:

- `errors.UnexpectedStatus` - If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
- `httpx.TimeoutException` - If the request takes longer than Client.timeout.
  

**Returns**:

  Union[Any, AppendCollaboratorResponse400, AppendCollaboratorResponse404]

#### asyncio\_detailed

```python
async def asyncio_detailed(
    collaborator_id: str, *, client: Union[AuthenticatedClient, Client],
    body: AppendCollaboratorBody
) -> Response[Union[Any, AppendCollaboratorResponse400,
                    AppendCollaboratorResponse404]]
```

Append data on a Data Consumer

**Arguments**:

  collaborator_id (str):
  body (AppendCollaboratorBody):
  

**Raises**:

- `errors.UnexpectedStatus` - If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
- `httpx.TimeoutException` - If the request takes longer than Client.timeout.
  

**Returns**:

  Response[Union[Any, AppendCollaboratorResponse400, AppendCollaboratorResponse404]]

#### asyncio

```python
async def asyncio(
    collaborator_id: str, *, client: Union[AuthenticatedClient, Client],
    body: AppendCollaboratorBody
) -> Optional[Union[Any, AppendCollaboratorResponse400,
                    AppendCollaboratorResponse404]]
```

Append data on a Data Consumer

**Arguments**:

  collaborator_id (str):
  body (AppendCollaboratorBody):
  

**Raises**:

- `errors.UnexpectedStatus` - If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
- `httpx.TimeoutException` - If the request takes longer than Client.timeout.
  

**Returns**:

  Union[Any, AppendCollaboratorResponse400, AppendCollaboratorResponse404]


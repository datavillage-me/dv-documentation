---
sidebar_label: query_collaborator
title: dv_data_engine_client.api.default.query_collaborator
---

#### sync\_detailed

```python
def sync_detailed(
    collaborator_id: str, *, client: Union[AuthenticatedClient,
                                           Client], body: QueryCollaboratorBody
) -> Response[Union[QueryCollaboratorResponse400, QueryCollaboratorResponse404,
                    str]]
```

Query on a collaborator

**Arguments**:

  collaborator_id (str):
  body (QueryCollaboratorBody):
  

**Raises**:

- `errors.UnexpectedStatus` - If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
- `httpx.TimeoutException` - If the request takes longer than Client.timeout.
  

**Returns**:

  Response[Union[QueryCollaboratorResponse400, QueryCollaboratorResponse404, str]]

#### sync

```python
def sync(
    collaborator_id: str, *, client: Union[AuthenticatedClient,
                                           Client], body: QueryCollaboratorBody
) -> Optional[Union[QueryCollaboratorResponse400, QueryCollaboratorResponse404,
                    str]]
```

Query on a collaborator

**Arguments**:

  collaborator_id (str):
  body (QueryCollaboratorBody):
  

**Raises**:

- `errors.UnexpectedStatus` - If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
- `httpx.TimeoutException` - If the request takes longer than Client.timeout.
  

**Returns**:

  Union[QueryCollaboratorResponse400, QueryCollaboratorResponse404, str]

#### asyncio\_detailed

```python
async def asyncio_detailed(
    collaborator_id: str, *, client: Union[AuthenticatedClient,
                                           Client], body: QueryCollaboratorBody
) -> Response[Union[QueryCollaboratorResponse400, QueryCollaboratorResponse404,
                    str]]
```

Query on a collaborator

**Arguments**:

  collaborator_id (str):
  body (QueryCollaboratorBody):
  

**Raises**:

- `errors.UnexpectedStatus` - If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
- `httpx.TimeoutException` - If the request takes longer than Client.timeout.
  

**Returns**:

  Response[Union[QueryCollaboratorResponse400, QueryCollaboratorResponse404, str]]

#### asyncio

```python
async def asyncio(
    collaborator_id: str, *, client: Union[AuthenticatedClient,
                                           Client], body: QueryCollaboratorBody
) -> Optional[Union[QueryCollaboratorResponse400, QueryCollaboratorResponse404,
                    str]]
```

Query on a collaborator

**Arguments**:

  collaborator_id (str):
  body (QueryCollaboratorBody):
  

**Raises**:

- `errors.UnexpectedStatus` - If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
- `httpx.TimeoutException` - If the request takes longer than Client.timeout.
  

**Returns**:

  Union[QueryCollaboratorResponse400, QueryCollaboratorResponse404, str]


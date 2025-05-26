---
sidebar_label: get_collaborator_reports
title: dv_data_engine_client.api.quality.get_collaborator_reports
---

#### sync\_detailed

```python
def sync_detailed(
    collaborator_id: str, *, client: Union[AuthenticatedClient, Client]
) -> Response[Union[
        GetCollaboratorReportsResponse400,
        GetCollaboratorReportsResponse404,
        list[Union["FinishedSummary", "PendingReport"]],
]]
```

Get Collaborator Reports

**Arguments**:

  collaborator_id (str):
  

**Raises**:

- `errors.UnexpectedStatus` - If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
- `httpx.TimeoutException` - If the request takes longer than Client.timeout.
  

**Returns**:

  Response[Union[GetCollaboratorReportsResponse400, GetCollaboratorReportsResponse404, list[Union[&#x27;FinishedSummary&#x27;, &#x27;PendingReport&#x27;]]]]

#### sync

```python
def sync(
    collaborator_id: str, *, client: Union[AuthenticatedClient, Client]
) -> Optional[Union[
        GetCollaboratorReportsResponse400,
        GetCollaboratorReportsResponse404,
        list[Union["FinishedSummary", "PendingReport"]],
]]
```

Get Collaborator Reports

**Arguments**:

  collaborator_id (str):
  

**Raises**:

- `errors.UnexpectedStatus` - If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
- `httpx.TimeoutException` - If the request takes longer than Client.timeout.
  

**Returns**:

  Union[GetCollaboratorReportsResponse400, GetCollaboratorReportsResponse404, list[Union[&#x27;FinishedSummary&#x27;, &#x27;PendingReport&#x27;]]]

#### asyncio\_detailed

```python
async def asyncio_detailed(
    collaborator_id: str, *, client: Union[AuthenticatedClient, Client]
) -> Response[Union[
        GetCollaboratorReportsResponse400,
        GetCollaboratorReportsResponse404,
        list[Union["FinishedSummary", "PendingReport"]],
]]
```

Get Collaborator Reports

**Arguments**:

  collaborator_id (str):
  

**Raises**:

- `errors.UnexpectedStatus` - If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
- `httpx.TimeoutException` - If the request takes longer than Client.timeout.
  

**Returns**:

  Response[Union[GetCollaboratorReportsResponse400, GetCollaboratorReportsResponse404, list[Union[&#x27;FinishedSummary&#x27;, &#x27;PendingReport&#x27;]]]]

#### asyncio

```python
async def asyncio(
    collaborator_id: str, *, client: Union[AuthenticatedClient, Client]
) -> Optional[Union[
        GetCollaboratorReportsResponse400,
        GetCollaboratorReportsResponse404,
        list[Union["FinishedSummary", "PendingReport"]],
]]
```

Get Collaborator Reports

**Arguments**:

  collaborator_id (str):
  

**Raises**:

- `errors.UnexpectedStatus` - If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
- `httpx.TimeoutException` - If the request takes longer than Client.timeout.
  

**Returns**:

  Union[GetCollaboratorReportsResponse400, GetCollaboratorReportsResponse404, list[Union[&#x27;FinishedSummary&#x27;, &#x27;PendingReport&#x27;]]]


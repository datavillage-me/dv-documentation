---
sidebar_label: collaborator_status
title: dv_data_engine_client.api.default.collaborator_status
---

#### sync\_detailed

```python
def sync_detailed(
    collaborator_id: str, *, client: Union[AuthenticatedClient, Client]
) -> Response[Union[
        CollaboratorStatusResponse404,
        Union[
            "StatusError",
            "StatusExported",
            "StatusExporting",
            "StatusInitialized",
            "StatusMounted",
            "StatusUnmounted",
            "StatusWriting",
        ],
]]
```

Status of a collaborator in the data engine

**Arguments**:

  collaborator_id (str):
  

**Raises**:

- `errors.UnexpectedStatus` - If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
- `httpx.TimeoutException` - If the request takes longer than Client.timeout.
  

**Returns**:

  Response[Union[CollaboratorStatusResponse404, Union[&#x27;StatusError&#x27;, &#x27;StatusExported&#x27;, &#x27;StatusExporting&#x27;, &#x27;StatusInitialized&#x27;, &#x27;StatusMounted&#x27;, &#x27;StatusUnmounted&#x27;, &#x27;StatusWriting&#x27;]]]

#### sync

```python
def sync(
    collaborator_id: str, *, client: Union[AuthenticatedClient, Client]
) -> Optional[Union[
        CollaboratorStatusResponse404,
        Union[
            "StatusError",
            "StatusExported",
            "StatusExporting",
            "StatusInitialized",
            "StatusMounted",
            "StatusUnmounted",
            "StatusWriting",
        ],
]]
```

Status of a collaborator in the data engine

**Arguments**:

  collaborator_id (str):
  

**Raises**:

- `errors.UnexpectedStatus` - If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
- `httpx.TimeoutException` - If the request takes longer than Client.timeout.
  

**Returns**:

  Union[CollaboratorStatusResponse404, Union[&#x27;StatusError&#x27;, &#x27;StatusExported&#x27;, &#x27;StatusExporting&#x27;, &#x27;StatusInitialized&#x27;, &#x27;StatusMounted&#x27;, &#x27;StatusUnmounted&#x27;, &#x27;StatusWriting&#x27;]]

#### asyncio\_detailed

```python
async def asyncio_detailed(
    collaborator_id: str, *, client: Union[AuthenticatedClient, Client]
) -> Response[Union[
        CollaboratorStatusResponse404,
        Union[
            "StatusError",
            "StatusExported",
            "StatusExporting",
            "StatusInitialized",
            "StatusMounted",
            "StatusUnmounted",
            "StatusWriting",
        ],
]]
```

Status of a collaborator in the data engine

**Arguments**:

  collaborator_id (str):
  

**Raises**:

- `errors.UnexpectedStatus` - If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
- `httpx.TimeoutException` - If the request takes longer than Client.timeout.
  

**Returns**:

  Response[Union[CollaboratorStatusResponse404, Union[&#x27;StatusError&#x27;, &#x27;StatusExported&#x27;, &#x27;StatusExporting&#x27;, &#x27;StatusInitialized&#x27;, &#x27;StatusMounted&#x27;, &#x27;StatusUnmounted&#x27;, &#x27;StatusWriting&#x27;]]]

#### asyncio

```python
async def asyncio(
    collaborator_id: str, *, client: Union[AuthenticatedClient, Client]
) -> Optional[Union[
        CollaboratorStatusResponse404,
        Union[
            "StatusError",
            "StatusExported",
            "StatusExporting",
            "StatusInitialized",
            "StatusMounted",
            "StatusUnmounted",
            "StatusWriting",
        ],
]]
```

Status of a collaborator in the data engine

**Arguments**:

  collaborator_id (str):
  

**Raises**:

- `errors.UnexpectedStatus` - If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
- `httpx.TimeoutException` - If the request takes longer than Client.timeout.
  

**Returns**:

  Union[CollaboratorStatusResponse404, Union[&#x27;StatusError&#x27;, &#x27;StatusExported&#x27;, &#x27;StatusExporting&#x27;, &#x27;StatusInitialized&#x27;, &#x27;StatusMounted&#x27;, &#x27;StatusUnmounted&#x27;, &#x27;StatusWriting&#x27;]]


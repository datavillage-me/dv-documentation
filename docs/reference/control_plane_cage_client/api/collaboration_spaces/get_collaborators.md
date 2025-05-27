---
sidebar_label: get_collaborators
title: control_plane_cage_client.api.collaboration_spaces.get_collaborators
---

#### sync\_detailed

```python
def sync_detailed(
    *, client: Union[AuthenticatedClient, Client]
) -> Response[Union[GetCollaboratorsResponse401, GetCollaboratorsResponse404,
                    list["Collaborator"]]]
```

Get Collaborators

Get all collaborators of a collaboration space. Allowed if the client owns it or is a collaborator.

**Raises**:

- `errors.UnexpectedStatus` - If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
- `httpx.TimeoutException` - If the request takes longer than Client.timeout.
  

**Returns**:

  Response[Union[GetCollaboratorsResponse401, GetCollaboratorsResponse404, list[&#x27;Collaborator&#x27;]]]

#### sync

```python
def sync(
    *, client: Union[AuthenticatedClient, Client]
) -> Optional[Union[GetCollaboratorsResponse401, GetCollaboratorsResponse404,
                    list["Collaborator"]]]
```

Get Collaborators

Get all collaborators of a collaboration space. Allowed if the client owns it or is a collaborator.

**Raises**:

- `errors.UnexpectedStatus` - If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
- `httpx.TimeoutException` - If the request takes longer than Client.timeout.
  

**Returns**:

  Union[GetCollaboratorsResponse401, GetCollaboratorsResponse404, list[&#x27;Collaborator&#x27;]]

#### asyncio\_detailed

```python
async def asyncio_detailed(
    *, client: Union[AuthenticatedClient, Client]
) -> Response[Union[GetCollaboratorsResponse401, GetCollaboratorsResponse404,
                    list["Collaborator"]]]
```

Get Collaborators

Get all collaborators of a collaboration space. Allowed if the client owns it or is a collaborator.

**Raises**:

- `errors.UnexpectedStatus` - If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
- `httpx.TimeoutException` - If the request takes longer than Client.timeout.
  

**Returns**:

  Response[Union[GetCollaboratorsResponse401, GetCollaboratorsResponse404, list[&#x27;Collaborator&#x27;]]]

#### asyncio

```python
async def asyncio(
    *, client: Union[AuthenticatedClient, Client]
) -> Optional[Union[GetCollaboratorsResponse401, GetCollaboratorsResponse404,
                    list["Collaborator"]]]
```

Get Collaborators

Get all collaborators of a collaboration space. Allowed if the client owns it or is a collaborator.

**Raises**:

- `errors.UnexpectedStatus` - If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
- `httpx.TimeoutException` - If the request takes longer than Client.timeout.
  

**Returns**:

  Union[GetCollaboratorsResponse401, GetCollaboratorsResponse404, list[&#x27;Collaborator&#x27;]]


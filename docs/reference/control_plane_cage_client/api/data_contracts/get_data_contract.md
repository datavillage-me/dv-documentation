---
sidebar_label: get_data_contract
title: control_plane_cage_client.api.data_contracts.get_data_contract
---

#### sync\_detailed

```python
def sync_detailed(
    contract_id: str, *, client: Union[AuthenticatedClient, Client]
) -> Response[Union[DataContract, GetDataContractResponse404]]
```

Get Data Contract

Get a data contract by ID.

**Arguments**:

  contract_id (str):
  

**Raises**:

- `errors.UnexpectedStatus` - If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
- `httpx.TimeoutException` - If the request takes longer than Client.timeout.
  

**Returns**:

  Response[Union[DataContract, GetDataContractResponse404]]

#### sync

```python
def sync(
    contract_id: str, *, client: Union[AuthenticatedClient, Client]
) -> Optional[Union[DataContract, GetDataContractResponse404]]
```

Get Data Contract

Get a data contract by ID.

**Arguments**:

  contract_id (str):
  

**Raises**:

- `errors.UnexpectedStatus` - If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
- `httpx.TimeoutException` - If the request takes longer than Client.timeout.
  

**Returns**:

  Union[DataContract, GetDataContractResponse404]

#### asyncio\_detailed

```python
async def asyncio_detailed(
    contract_id: str, *, client: Union[AuthenticatedClient, Client]
) -> Response[Union[DataContract, GetDataContractResponse404]]
```

Get Data Contract

Get a data contract by ID.

**Arguments**:

  contract_id (str):
  

**Raises**:

- `errors.UnexpectedStatus` - If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
- `httpx.TimeoutException` - If the request takes longer than Client.timeout.
  

**Returns**:

  Response[Union[DataContract, GetDataContractResponse404]]

#### asyncio

```python
async def asyncio(
    contract_id: str, *, client: Union[AuthenticatedClient, Client]
) -> Optional[Union[DataContract, GetDataContractResponse404]]
```

Get Data Contract

Get a data contract by ID.

**Arguments**:

  contract_id (str):
  

**Raises**:

- `errors.UnexpectedStatus` - If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
- `httpx.TimeoutException` - If the request takes longer than Client.timeout.
  

**Returns**:

  Union[DataContract, GetDataContractResponse404]


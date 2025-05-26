---
sidebar_label: get_quality_report
title: dv_data_engine_client.api.quality.get_quality_report
---

#### sync\_detailed

```python
def sync_detailed(
    report_id: str, *, client: Union[AuthenticatedClient, Client]
) -> Response[Union[GetQualityReportResponse404, Union["FinishedReport",
                                                       "PendingReport"]]]
```

Get Quality Report

**Arguments**:

  report_id (str):
  

**Raises**:

- `errors.UnexpectedStatus` - If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
- `httpx.TimeoutException` - If the request takes longer than Client.timeout.
  

**Returns**:

  Response[Union[GetQualityReportResponse404, Union[&#x27;FinishedReport&#x27;, &#x27;PendingReport&#x27;]]]

#### sync

```python
def sync(
    report_id: str, *, client: Union[AuthenticatedClient, Client]
) -> Optional[Union[GetQualityReportResponse404, Union["FinishedReport",
                                                       "PendingReport"]]]
```

Get Quality Report

**Arguments**:

  report_id (str):
  

**Raises**:

- `errors.UnexpectedStatus` - If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
- `httpx.TimeoutException` - If the request takes longer than Client.timeout.
  

**Returns**:

  Union[GetQualityReportResponse404, Union[&#x27;FinishedReport&#x27;, &#x27;PendingReport&#x27;]]

#### asyncio\_detailed

```python
async def asyncio_detailed(
    report_id: str, *, client: Union[AuthenticatedClient, Client]
) -> Response[Union[GetQualityReportResponse404, Union["FinishedReport",
                                                       "PendingReport"]]]
```

Get Quality Report

**Arguments**:

  report_id (str):
  

**Raises**:

- `errors.UnexpectedStatus` - If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
- `httpx.TimeoutException` - If the request takes longer than Client.timeout.
  

**Returns**:

  Response[Union[GetQualityReportResponse404, Union[&#x27;FinishedReport&#x27;, &#x27;PendingReport&#x27;]]]

#### asyncio

```python
async def asyncio(
    report_id: str, *, client: Union[AuthenticatedClient, Client]
) -> Optional[Union[GetQualityReportResponse404, Union["FinishedReport",
                                                       "PendingReport"]]]
```

Get Quality Report

**Arguments**:

  report_id (str):
  

**Raises**:

- `errors.UnexpectedStatus` - If the server returns an undocumented status code and Client.raise_on_unexpected_status is True.
- `httpx.TimeoutException` - If the request takes longer than Client.timeout.
  

**Returns**:

  Union[GetQualityReportResponse404, Union[&#x27;FinishedReport&#x27;, &#x27;PendingReport&#x27;]]


# Logging

This is where we explain how to log. The logs are available in the algorithm logs endpoint.

```python
from dv_utils.log_utils import log, LogLevel

def process_event(evt: dict):
  try:
    log("event started")
    ...
    log("event processed")
  except:
    log("something went wrong", LogLevel.ERROR)
```

Available log levels:

- TRACE
- DEBUG
- INFO
- WARN
- ERROR
- AUDIT

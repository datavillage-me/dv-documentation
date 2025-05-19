# Process Events

- Events are the only way to communicate to the algorithm.
- In a **index.py** file put the below code.
  - It will catch the events with **DefaultListener** and send it to the **event_processor** function.

```python
from dv_utils import DefaultListener
from process import event_processor

DefaultListener(event_processor, daemon=True)
```

- In a **process.py** file implement the **event_processor** function.
  - In **event_handlers**, match your event names with the functions that will handle them
  - Events are dictionaries with a **type** field, and that type is the name of the event
    - In the code below, the only event that exists is "EX_GET_FRAUDULENT_ACCOUNTS"

```python
from dv_utils.log_utils import log, LogLevel

def event_processor(evt: dict):
    event_handlers = {
        "EX_GET_FRAUDULENT_ACCOUNTS": get_fraudulent_accounts,
    }
    if evt["type"] in event_handlers:
        event_handlers[evt["type"]](evt)

```

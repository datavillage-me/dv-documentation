# Process an event

## Listen for events

The `dv_utils` lib contains helper objects to listen for events. These are created in the `index.py` file, which is the entrypoint of the algorithm.

```python
from dv_utils import DefaultListener
from process import event_processor

DefaultListener(event_processor, daemon=True)
```

The arguments are:

- `event_processor`: a function that takes the payload of the event as `dict` and processes it. See [next section](#process-an-event).
- `daemon`: when `True`, a daemon is started that continues to listen to events. If `False`, only one event is processed and the algorithm shuts down.

### Priority Listener

This shows how the priority listener works.

## Event processing function

The event processor is a function that takes a `dict` as argument containing the payload of the event.

```python
from dv_utils.log_utils import log

def event_processor(evt: dict):
  evt_type = evt["type"]
  log(f"Processing event of type {evt_type}")

  if evt_type == "type1":
    process_type1_event(evt)
  elif evt_type == "type2":
    process_type2_event(evt)
```

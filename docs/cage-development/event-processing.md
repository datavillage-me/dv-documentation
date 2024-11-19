# Event Processing In a Cage

This section shows how to setup a 'Hello World'-example for processing an event in a cage.
In this document, we go through the process of setting up a repository to be run in the cage and proces a basic `{type: "HELLO_WORLD"}` event that prints `Hello World` to the stdout.

## Create Git(Hub) repository from template

A [template repository](https://github.com/datavillage-me/cage-process-template-personal-data) is available on GitHub to kickstart the Python implementation of an algorithm to be run in a cage.
The following files are of importance:

- `index.py`: entrypoint of the algorithm
- `process.py`: contains the `process_event(event: dict)` method where the actual processing of the event starts
- `requirements.txt`: keep track of needed libraries to run the code

## Process an event

To process an event, a method needs to be declared with signature

```python
def event_processor(evt: dict)
```

It is typically declared in the `process.py` file (found in the template).

What needs to be done depends on the `type` property in the `evt` dict. The developer of the algorithm is free to choose the possible values for this property.

For our 'Hello World'-example, we will handle events of type `HELLO_WORLD`. The process method would look as follows

```python
def event_processor(evt: dict):
  evt_type = evt['type']
  if evt_type == 'HELLO_WORLD':
    print("Hello World")
```

## Listen for events

Events are added to a Redis queue in named streams, the default stream being `events`.
The `dv_utils` package contains classes to aid the developer in listening to events. There are 2 different listeners

- The `DefaultListener` listens to events in the default stream `events`
- The `PriorityListener` can be used to prioritize different event streams.

### DefaultListener

When the template repository is forked, `index.py` looks as follows

```python
"""
Example file for processing dv events in a datacage and pushing the output to the user pod
"""
from dv_utils import DefaultListener, default_settings

from process import event_processor

default_settings.daemon = True
print("DEFAULT SETTINGS", default_settings)

DefaultListener(event_processor, daemon=default_settings.daemon)
```

For our 'Hello World'-example, this implementation will do. Let's go through the code line per line

```python
from dv_utils import DefaultListener, default_settings
```

Imports following needed objects from the `dv_utils` package

- _DefaultListener_ listens for events on the default stream `events`
- _default_settings_ is a set of default settings to kickstart development

```python
from process import event_processor
```

Imports the `event_processor` method from `process.py`, as defined in [the previous paragraph](#process-an-event).

```python
default_settings.daemon = True
```

Sets the `daemon` property of the settings to True. When kept on False, execution will end after processing one event.

```python
DefaultListener(event_processor, daemon=default_settings.daemon)
```

Creates the listener and starts the daemon.

### PriorityListener

Given our 'Hello World'-example, we add an event of type `IMPORTANT_WORK`. This is an event that has to be processed asap and thus should get priority over `HELLO_WORLD` events.

We update the `event_processor` method as follows

```python
def event_processor(evt: dict):
  evt_type = evt['type']
  if evt_type == 'HELLO_WORLD':
    print("Hello World")
  elif evt_type == 'IMPORTANT_WORK':
    do_important_work()
```

If there is an event of both `HELLO_WORLD` and `IMPORTANT_WORK` ready to be processed, we want the algorithm to prioritize the latter.
To accomplish this, we send events of type `IMPORTANT_WORK` to a different event stream, for example `prio`

To make sure events in the stream `prio` are prioritized over `events`, we adapt the `index.py` as follows

```python
"""
Example file for processing dv events in a datacage and pushing the output to the user pod
"""
from dv_utils import default_settings
from dv_utils.listeners.priority import PriorityListener

from process import event_processor

default_settings.daemon = True
print("DEFAULT SETTINGS", default_settings)

PriorityListener(event_processor, daemon=default_settings.daemon, stream_priorities = ['prio', 'events'])
```

The `stream_priorities` property in the constructor of `PriorityListener` defines the order of event streams in which events need to be processed.

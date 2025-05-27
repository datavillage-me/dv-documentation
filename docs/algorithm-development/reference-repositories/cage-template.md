https://github.com/datavillage-me/cage-template # Cage Algorithm Template

This repository is a template from which one can start to develop an algorithm to be run in a cage in the Datavillage DCP.
To implement your own algorithm, clone this repo and edit `process.py`. To test, run `python process.py` from the root folder.

## Content

Here is a list of the files in this repo and what their use is

| File name                           | Usage                                                                                                                                                           |
| ----------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| requirements.txt                    | The python dependencies needed to run the code.                                                                                                                 |
| process.py                          | The implementation of the algorithm. It contains a method `event_processor(evt: dict)` where processing begins.                                                 |
| index.py                            | Entry point of the code when it's ran in a cage. It starts an event listener that registers the incoming events and passes them to the `event_processor` method |
| Dockerfile                          | Bundles the project in a self contained Docker image                                                                                                            |
| .github/workflows/release-image.yml | Builds and pushes the image using github actions                                                                                                                |

## Run in cage

When the algorithm is deployed, the listener created in `index.py` will start and listen to the Redis queue for events.
When an event is received, it is first registered in the logging module. This makes sure the event is printed with every log statement from the execution of that event.
After that, the event is passed to the `event_processor` method that is passed in the constructor.

## Local development

To test the algorithm locally, use the `dispatch_event_local(evt: dict)` method. This will make sure logging is properly configured as it would be in the cage. In the cage, this functionality is implemented by the listener.
To have the correct `app_id` set in the logs, run the code in an environment with the variable `DV_APP_ID` set.
To run the code, simply run `python process.py`.

## Versioning

The docker images created are assigned tags to support versioning. These tags are taken from the git tags and should follow [PEP440](https://peps.python.org/pep-0440/).

To set the version of the algorithm to version `x.y.z`, simply run

```bash
git tag x.y.z
git push --tags
```

The docker image will be build and pushed automatically, assigning the tags `x.y.z` and `latest` to the image. The `latest` tag will always be assigned to the highest version number.

### Release candidates

There is the possibility to create release candidates when still in development phase. Release candidates have tags of the form `x.y.zrc1` and **will not** be assigned the `latest` tag.

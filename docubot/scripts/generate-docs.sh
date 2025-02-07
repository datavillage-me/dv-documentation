#!/bin/bash
docker run --rm -v $(pwd)/$1/api:/spec redocly/cli bundle api.yaml -o bundle.yaml
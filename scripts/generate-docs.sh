#!/usr/bin/env bash

# regenerate most recent versions
yarn docusaurus clean-api-docs all
yarn docusaurus gen-api-docs all

# regenerate control-plane versions
yarn docusaurus clean-api-docs:version control-plane:all
yarn docusaurus gen-api-docs:version control-plane:all

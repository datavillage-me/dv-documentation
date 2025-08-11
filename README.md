# Datavillage Documentation

Created with [docusaurus-openapi-docs](https://github.com/PaloAltoNetworks/docusaurus-openapi-docs) plugin for [Docusaurus](https://docusaurus.io/).

## Start development server

To start the project, do the expected steps:

```bash
yarn
```

```bash
yarn build
```

```bash
yarn start
```

A development server will start on `http://localhost:3000`.

## File structure docs folder

When running `yarn build`, Docusaurus will parse the markdown files in the `docs/` folder to static HTML pages that are saved in the `build` folder.

The [Redocusaurus plugin](https://github.com/rohit-gohri/redocusaurus) will generate static html pages in the `build/` folder to render the APIs. This is dynamically configured in `docusaurus.config.ts` using util methods from `loadConfiguration.ts`.

## Generate from OpenAPI specs

This sections shows how to apply changes to the OpenAPI files in the `api/` folder and regenerate the corresponding files in the `docs/api` folder.

### File structure

The configuration is loaded from the file structure in the `api/` folder. This looks as follows

```text
|-- api/
|---- <project1_id>/
|------ <version1>.yaml
|------ <version2>.yaml
|------ ...
|---- <project2_id>/
|------ <version1>.yaml
|------ <version2>.yaml
|------ ...
|---- ...
```

## Global versions

In the future, we will want a way to version the platform, which will be a collection of versions of components that are well integrated. We can achieve this with [docusaurus versioning](https://docusaurus.io/docs/versioning) (you can already see it in action in the Docusaurus documentation itself)

We should be carefull with this as it significantly increases the size of the repository and makes it harder to manage. Also, we need to consider the fact that if someone wants to find the documentation of an older version of a certain component, that person needs to know to which global version this belongs.

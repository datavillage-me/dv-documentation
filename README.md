# Datavillage Documentation

Created with (docusaurus-openapi-docs)[https://github.com/PaloAltoNetworks/docusaurus-openapi-docs] plugin for (Docusaurus)[https://docusaurus.io/].

To start the project, do the expected steps:

```bash
yarn install
```

```bash
yarn build
```

```bash
yarn start
```

A development server will start on `http://localhost:3000`.

Parse all OpenAPI specs to mdx files for Docusaurus

```bash
yarn docusaurus gen-api-docs all
```

Clean previously generated mdx files

```bash
yarn docusaurus clean-api-docs all
```

Parse/clean specific OpenAPI specs (ids found in `docusaurus.config.ts`)

```bash
yarn docusaurus gen-api-docs <id>
```

```bash
yarn build
```

```bash
yarn docusaurus clean-api-docs <id>
```

```bash
yarn start
```

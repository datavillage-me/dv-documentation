---
title: Authentication & Authorization
---

Within the Data Collaboration Platform, every registered organisation is called a **client**. These organisations often consist of several people, each having their own role within the organisation.
Different organisations will also have different governance rules on how their members should log in (MFA, biometrics, certificates...). To offer optimal flexibility for the client in this regard, every client in the DCP is associated with an IDP. The roles that are given to the different users should follow the convention as defined in the [authorization section](#authorization).

## Authentication

Every client is associated with a unique IDP. Every request to the control plane should have an access token send as a [Bearer authentication token](https://swagger.io/docs/specification/v3_0/authentication/bearer-authentication/). The token should contain an `iss` field, indicating which IDP issued the token. If it is not related to a known client, the request will be blocked.

The control plane will validate the token against the IDP and retreive the roles of the user that send the token.

Although the client is free to bring it's own IDP to the table, a [Keycloak](https://www.keycloak.org/) instance is delivered by default. This allows the management of multiple IDPs. It offers a lot of features concerning user management.

## Authorization

An organisation can assign roles to its members for the DCP on two levels: _client level_ and _collaboration space level_.

The possible roles on _client level_ are

- **ADMIN**
  - create and delete collaboration spaces owned by the client
  - manage metadata of the client in the platform
- **DATA-STEWARD**
  - manage data contracts of the client

For the roles on _collaboration space level_, the id of the space is needed. It is formatted here as `{space_id}`.
The possible roles are

- **CS-\{space_id\}-ADMIN**
  - invite other clients as collaborator to a space owned by the client
- **CS-\{space_id\}-COLLABORATOR**
  - accept/decline invites
  - configure data contracts and data sources for the space (if the client was invited as data provider or data consumer)
  - configure algorithm settings (if the client was invited as algorithm provider)

### Authorization of clients

Not only will the control plane check the roles of the user given by the client, it will also check the role of the client within the collaboration space.
This is to prevent clients to edit (or even see) a collaboration space it is not part of.

## Platform Admin

Every instance of the control plane, has a **platform admin** configured. This could be seen as 'the client owning the instance of the DCP'. It can add and remove clients from the platform.
To be able to do this, the user must have the `PLATFORM-ADMIN` role.

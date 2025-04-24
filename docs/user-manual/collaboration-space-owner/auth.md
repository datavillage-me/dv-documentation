# Authentication & Authorization

Welcome to the Authentication & Authorization section of our documentation. This page outlines the roles and permissions required for each collaborator in your collaboration space. Please note that the creation of clients and accounts must be requested through the DataVillage support team.

Within the Data Collaboration Platform, every registered organization is called a client. These organizations often consist of several people, each having their own role within the organization. The roles that are given to the different users should follow the convention as defined in the authorization section.

## Required Roles and Permissions

Each user in the space must have specific roles that grant them the necessary permissions. The table below details each role and the corresponding actions they are allowed to perform:

| Role                             | Permissions (Plain Language)                                                                                                                                                  |
| -------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **collaboration-space:reader**   | Can view all details and content of the collaboration space.                                                                                                                  |
| **collaboration-space:writer**   | Can view and make updates or modifications to the collaboration space.                                                                                                        |
| **collaboration-space:admin**    | Has full administrative rights, including: <br />• Creating and deleting collaboration spaces <br />• Viewing and updating content <br />• Inviting or removing collaborators |
| **collaboration-space:operator** | Can publish events within the space and view system logs for monitoring purposes.                                                                                             |
| **collaborator:reader**          | Can view collaborator information and details.                                                                                                                                |
| **collaborator:writer**          | Can view and update collaborator information.                                                                                                                                 |
| **data-contract:reader**         | Can view the data contract that defines the terms and conditions.                                                                                                             |
| **data-contract:writer**         | Can view and modify the data contract as needed.                                                                                                                              |

> **Note:** Ensure that each collaborator is granted the appropriate permissions according to their role. This configuration is key to maintaining a secure and efficient collaboration environment.

## Client and Account Creation

All client and account creations must be requested through the DataVillage support team. This process guarantees that every new client and account is set up correctly with the proper permissions and security measures.

## Example

For our real-word use case you must require the creation of the following clients and accounts:

**Client: Financial Institution** - Account roles: - collaboration-space:admin - data-contract:writer - collaborator:writer - collaboration-space:operator

**Client: Bank A** - Account roles: - collaboration-space:reader - collaborator:writer - data-contract:reader

**Client: Bank B** - Account roles: - collaboration-space:reader - collaborator:writer - data-contract:reader

The support will send an email to the users with their url and credentials.

## Bring Your Own Identity Provider (IDP)

If you wish to integrate your own Identity Provider (IDP) into your collaboration space, you can do so. For more information on integrating your custom IDP, please [contact us](mailto:support@datavillage.com).

---

This section details the required roles and their permissions, ensuring that you have a clear and secure framework for managing access within your collaboration space. For any questions or further assistance, feel free to reach out to our support team.

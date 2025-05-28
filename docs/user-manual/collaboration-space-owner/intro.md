# Getting started

As the Collaboration Space Owner, you play a crucial role in creating and managing the collaboration space.  
Your responsibilities span from the initial setup to ongoing maintenance and collaboration.  
Below is a high-level overview of what you’ll need to do:

## Workflow

As the **Collaboration Space Owner**, you manage the overall space, handle authentication, maintain space settings, manage data contracts, oversee space management,create the algorithm, and invite collaborators.  
Your workflow includes:

1. **Create clients and accounts**  
   Request the creation of a client and user accounts for each participating organization.

   - [Register your organization](/docs/user-manual/auth)

2. **Create the collaboration space**  
   Set up the collaboration space, which serves as the central hub for managing all subsequent activities and invitations.

   - [Create space](/docs/user-manual/collaboration-space-owner/space-management/create-space)

3. **Create the algorithm**  
   If you act as **collaboration space owner** and provide the algorithm follow the **Algorithm** section to configure the algorithm.  
   If an **external organization** provides the algorithm, make sure that they followed the **Algorithm** before to start the next step.

   - [Algorithm workflow](/docs/user-manual/collaboration-space-owner/algorithm/intro)

4. **Deploy the initial space**  
   Once the initial algorithm is setup, you can deploy the space. Verify its operation by reviewing the logs.

   - [Deploy space](/docs/user-manual/collaboration-space-owner/deploy-space)
   - [Logs](/docs/user-manual/collaboration-space-owner/logs)

5. **Create data contracts**  
   For each unique input or output schema, create an individual data contract to ensure data quality and consistency.  
   Data contracts aren't linked to a space, you can create them even if the space isn't created and you can use them in different spaces.

   - [Create data contract](/docs/user-manual/collaboration-space-owner/data-contract-management/create-data-contract)

6. **Invite data collaborators**  
   Extend invitations to the Data Provider and Data Consumer, including the corresponding Data Contract ID with each invitation.

   - [Create invite](/docs/user-manual/collaboration-space-owner/invite-collaborator/create-invite)

7. **Deploy the final space**  
   After all collaborators have completed their configurations, deploy the final version of the space. Confirm system stability by checking the logs.
   - [Deploy space](/docs/user-manual/collaboration-space-owner/deploy-space)
   - [Logs](/docs/user-manual/collaboration-space-owner/logs)

## Example

This documentation follows a real-world use case where

- **Financial Institution** creates a data collaboration platform for two banks
  - **Bank A**
  - **Bank B**

The goal of the collaborative platform is to easily and securely match suspicious account list.  
As the collaboration space owner your are **Financial institution**.

Here’s how the scenario unfolds:

Everyday:

- Bank A and Bank B provide a list of suspicious accounts.
- Bank A receives a aggregated list of its accounts that were flagged by Bank B.

In this user manual, you will be guided through the steps to setup a collaboration space like this.  
The roles of the different parties are the following

- **Financial institution** is:

  - The collaboration space owner
    - Creates the space
    - Invites the data collaborators
  - Provides the algorithm

- **Bank A** and **Bank B** are:
  - Data providers (providing suspicious accounts list)
  - Data consumers (getting the aggregated list)

Follow the subsequent guides in this documentation for detailed instructions on each of these steps.  
This structured approach will help you create and manage an efficient, fraud-fighting collaboration space.

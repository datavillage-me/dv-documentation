# Welcome

As the Collaboration Space Owner, you play a crucial role in creating and managing a dynamic collaboration space. Your responsibilities span from the initial setup to ongoing maintenance and collaboration. Below is a high-level overview of what you’ll need to do:

## Workflow

As a Collaboration Space Owner, you manage the overall space, handle authentication, maintain space settings, manage data contracts, oversee cage management, and invite collaborators. Your workflow includes:

1. **Create Client and Accounts**  
   Request the creation of a client and user accounts for each participating organization.  
   - [Auth Page](/docs/user-manual/collaboration-space-owner/auth)
  
2. **Create the Collaboration Space**  
   Set up the collaboration space, which serves as the central hub for managing all subsequent activities and invitations.  
   - [Create Space](/docs/user-manual/collaboration-space-owner/space-management/create-space)
  
3. **Invite the Code Provider**  
   Send an invitation to the Code Provider, who will configure the initial algorithm image. This configuration is essential for running the cage and securely storing secrets.  
   - [Create Invite](/docs/user-manual/collaboration-space-owner/invite-collaborator/create-invite)

5. **Create the algorithm image**  
    If you act as **collaboration space owner and also code provider** follow the **code provider workflow** to create and configure the algorithm image.  
    If an **external organization acts as the code provider**, make sure that they followed the **code provider workflow** before to start the next step.
    - [Code Provider Workflow](/docs/user-manual/code-provider/intro)

6. **Deploy the Initial Cage**  
   Once the Code Provider has set up the initial algorithm image, you can deploy the cage. Verify its operation by reviewing the logs.  
   - [Deploy Cage](/docs/user-manual/collaboration-space-owner/cage-management/deploy-cage)  
   - [Logs](/docs/user-manual/collaboration-space-owner/cage-management/logs)
  
7. **Create Data Contracts**  
   For each unique input or output schema, create an individual data contract to ensure data quality and consistency.  
   Data contracts aren't linked to a space, you can create them even if the space isn't created and you can use them in different spaces.
   - [Create Data Contract](/docs/user-manual/collaboration-space-owner/data-contract-management/create-data-contract)
  
8. **Invite Data Collaborators**  
   Extend invitations to the Data Provider and Data Consumer, including the corresponding Data Contract ID with each invitation.  
   - [Create Invite](/docs/user-manual/collaboration-space-owner/invite-collaborator/create-invite)
  
9. **Deploy the Final Cage**  
   After all collaborators have completed their configurations, deploy the final version of the cage. Confirm system stability by checking the logs.  
   - [Deploy Cage](/docs/user-manual/collaboration-space-owner/cage-management/deploy-cage)  
   - [Logs](/docs/user-manual/collaboration-space-owner/cage-management/logs)


## Example

This documentation follows a real-world use case where the "Finance Institution" creates a data collaboration platform for two banks, **bank_a** and **bank_b**.  
The goal of the collaborative platform is to detect bank accounts that are used for financal criminality.  
As the collaboration space owner your are **"Finance Institution"**.

Here’s how the scenario unfolds:

- **Daily Data Transfer:**  
  Every day, **bank_b** receives a file containing accounts from **bank_a** that have been flagged as criminal and are present in **bank_b**'s records.

- **Roles and Responsibilities:**  
  - **Data Providers:**  
    Both **bank_a** and **bank_b** supply critical data.
  - **Data Consumer:**  
    **bank_b** acts as the data consumer by receiving and utilizing the processed information.
  - **Code Provider:**  
    A designated code provider will be responsible for setting up and managing the code that drives this process.
    In our case the code provider and the collaboration space owner is the same organization (client).

- **Getting Started**  
  Follow the **workflow** describe above.  
  In each page you'll have a **example section** following this real-wrold use case.
     
Follow the subsequent guides in this documentation for detailed instructions on each of these steps. This structured approach will help you create and manage an efficient, fraud-fighting collaboration space.

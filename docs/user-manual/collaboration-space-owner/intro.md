# Get Started

As the Collaboration Space Owner, you play a crucial role in creating and managing a dynamic collaboration space. Your responsibilities span from the initial setup to ongoing maintenance and collaboration. Below is a high-level overview of what you’ll need to do:

## Workflow

As a Collaboration Space Owner, you manage the overall space, handle authentication, maintain space settings, manage data contracts, oversee cage management,create the algorithm, and invite collaborators. Your workflow includes:

1. **Create Clients and Accounts**  
   Request the creation of a client and user accounts for each participating organization.  
   - [Auth Page](/docs/user-manual/collaboration-space-owner/auth)
  
2. **Create the Collaboration Space**  
   Set up the collaboration space, which serves as the central hub for managing all subsequent activities and invitations.  
   - [Create Space](/docs/user-manual/collaboration-space-owner/space-management/create-space)
  
3. **Create the algorithm**  
    If you act as **collaboration space owner and also code provider** follow the **Algorithm** to create and configure the algorithm image.  
    If an **external organization acts as the code provider**, make sure that they followed the **Algorithm** before to start the next step.
    - [Code Provider Workflow](/docs/user-manual/code-provider/intro)

4. **Deploy the Initial Cage**  
   Once the Code Provider has set up the initial algorithm image, you can deploy the cage. Verify its operation by reviewing the logs.  
   - [Deploy Cage](/docs/user-manual/collaboration-space-owner/cage-management/deploy-cage)  
   - [Logs](/docs/user-manual/collaboration-space-owner/cage-management/logs)
  
5. **Create Data Contracts**  
   For each unique input or output schema, create an individual data contract to ensure data quality and consistency.  
   Data contracts aren't linked to a space, you can create them even if the space isn't created and you can use them in different spaces.
   - [Create Data Contract](/docs/user-manual/collaboration-space-owner/data-contract-management/create-data-contract)
  
6. **Invite Data Collaborators**  
   Extend invitations to the Data Provider and Data Consumer, including the corresponding Data Contract ID with each invitation.  
   - [Create Invite](/docs/user-manual/collaboration-space-owner/invite-collaborator/create-invite)
  
7. **Deploy the Final Cage**  
   After all collaborators have completed their configurations, deploy the final version of the cage. Confirm system stability by checking the logs.  
   - [Deploy Cage](/docs/user-manual/collaboration-space-owner/cage-management/deploy-cage)  
   - [Logs](/docs/user-manual/collaboration-space-owner/cage-management/logs)


## Example

This documentation follows a real-world use case where the "Financial Institution" creates a data collaboration platform for two banks, **Bank A** and **Bank B**.  
The goal of the collaborative platform is to easily and securely match suspicious account list.  
As the collaboration space owner your are **"Financial Institution"**.

Here’s how the scenario unfolds:

- **Daily Data Transfer:**  
   Bank A and Bank B provide everyday a list of suspicious account, and receive a list of matching accounts from this files.  

- **Roles and Responsibilities:**  
  - **Collaboration Space Owner:**   
      As the collaboration space owner your are **"Financial Institution"**.  
      You must create the collaboration platform, the algorithm and invite the Banks.  
  - **Data Providers:**  
    Both **Bank A** and **Bank B** supply critical data.  
  - **Data Consumer:**  
     Both **Bank A** and **Bank B** receive data.  


- **Getting Started**  
  Follow the **workflow** describe above.  
  In each page you'll have a **Example** section following this real-world use case.
     
Follow the subsequent guides in this documentation for detailed instructions on each of these steps. This structured approach will help you create and manage an efficient, fraud-fighting collaboration space.

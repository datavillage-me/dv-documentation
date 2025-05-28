# Invite collaborator

**Invites** are the primary mechanism for onboarding new collaborators into your collaboration space.  
They serve as secure, unique access keys that grant specific permissions based on the type of collaborator you are inviting.

There are three types of collaborators:

- **Data provider**

  - An organization that supplies data.
  - When creating an **invite** for a data Provider, you must select a **data contract** to ensure that the provided data adheres to a defined schema.

- **Data consumer**

  - An organization that receives and uses data.
  - **Invite** for data consumers also require a data contract, to ensure that the created data complies with the agreed-upon format.

- **Code provider**
  - An entity responsible for supplying or managing the algorithm that supports the collaboration.
  - Invites for code provider do not require a data contract.

The **data contract** attached to the **invite** will be used to create the collaborator.  
The **data contract** attached to the collaborator is immutable.

For the data providers and data consumers

- If an organization provides or consumes multiple data inputs/outputs, each input or output must be managed separately.

For example, if Organization A has three distinct data inputs/outputs, it should create three individual **data contracts**, one for each input/output, and then create a separate **invite** for each corresponding **data source**.

## Steps to create an invite

1. **Open the invite modal:**

   - In the space **Overview** panel, click on the **+** under a collaborator column.

     ![empty space overview](img/empty_space.png)

2. **Select a data contract (if applicable):**

   - For **data provider** and **data consumer**, select the corresponding Data contract.

     ![create invite ](img/16_invite_data_provider_withDC.png)

3. **Create the invite:**

   - Click on **Create Invite** button. An Invite ID will be generated upon successful creation.

     ![create invite ](img/16_invite_data_provider_withDC_create.png)

4. **Distribute the invite ID:**

   - Share the generated **Invite ID** with the organization that will join your space.

     ![create invite ](img/17_invite_data_provider_copy_invite.png)

## Example

### Overview

- **Bank A** and **Bank B** provide a daily file of accounts flagged as suspicious.
- **Bank B** consumes the results of the algorithm (insights) for processing.
- **Financial institution** provides the algorithm that turn the data into insights.

### Join as algorithm provider

- Click on the **+** button under **Algorithm** or directly in the onboarding checklist **Create Algorithm**.
- Click on **Join as** in the modal, the interface will create the Invite and make you join automatically.
- The **Algorithm** is now created and you are ready to [configure it](/docs/user-manual/collaboration-space-owner/algorithm/configure) and [deploy the space](/docs/user-manual/collaboration-space-owner/deploy-space).

### Join as data provider or consumer

- When the space is **deployed** and the **data contracts** are created, you can send the other **invites**.

To manage these distinct data flows, you must create separate Invites, each linked to a **data contract**:

- **Invite 1:** For **Bank A** as a **data provider** with data contract **Fraudulent Bank Account List**.
- **Invite 2:** For **Bank B** as a **data provider** with data contract **Fraudulent Bank Account List**.
- **Invite 3:** For **Bank B** as a **data consumer** with data contract **Fraudulent Bank Account Aggregated**.

Send the the **Invite IDs** to **BankA** and **Bank B**.  
They will join the space and configure their **collaborators**.

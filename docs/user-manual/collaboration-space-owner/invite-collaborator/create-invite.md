# Create Invite

Invitations are the primary mechanism for onboarding new collaborators into your collaboration space. They serve as secure, unique access keys that grant specific permissions based on the type of collaborator you are inviting. There are three types of collaborators:

- **Data Provider:**  
  An organization that supplies data. When creating an invitation for a Data Provider, you can link a Data Contract ID to ensure that the provided data adheres to a defined schema. 
 
- **Data Consumer:**  
  An organization that receives and uses data. Invitations for Data Consumers also allow you to specify a Data Contract ID, ensuring the received data complies with the agreed-upon format.

- **Code Provider:**  
  An entity responsible for supplying or managing the code that supports the collaboration. Invitations for Code Providers do not require a Data Contract ID.

<br />The data contract ID of the invitation will be used to create the collaborator. The data contract ID in the collaborator is an immutable value.
<br />For Data Providers and Data Consumers: if an organization provides or consumes multiple data inputs/outputs, each input or output must be managed separately.
<br />For example, if Organization A has three distinct data inputs/outputs, you should create three individual data contracts, one for each input/output, and then generate a separate invitation for each corresponding data contract.

By using invitations, you maintain precise control over which organizations participate in each aspect of your collaboration space.

## Steps to Create an Invitation

1. **Open the Invitation Modal:**  
   In the space management panel, click on the **+ Collaborator** button to open the invitation modal.

2. **Select Collaborator Type:**  
   Choose one of the following options:
   - **Data Provider**
   - **Data Consumer**
   - **Code Provider**

3. **Enter Data Contract ID (if applicable):**  
   For **Data Provider** or **Data Consumer**, enter the corresponding Data Contract ID that defines the schema for the data flow.

4. **Submit the Invitation:**  
   Click the **Create Invite** button. An Invitation ID will be generated upon successful creation.

5. **Distribute the Invitation ID:**  
   Share the generated Invitation ID with the organization that will join your space.

## Example

For our real-world use case:

- **bank_a** and **bank_b** provides a daily file of accounts flagged as criminal.
- **bank_b** consumes the processed data for analysis.
- **Finance Institution** acts as collaboration space owner and also a code provider

First, you must create the code provider invitation:
- **Invitation 1:** For **Finance Institution** as **Code Provider**

**When the first cage will be deployed and the data contracts created, you'll be able to send the other invitations.**

To manage these distinct data flows, you must create separate invitations, each linked to its own data contract:

- **Invitation 1:** For **bank_a** as a **Data Provider** with data contract criminal_account.
- **Invitation 2:** For **bank_b** as a **Data Provider** with data contract criminal_account.
- **Invitation 3:** For **bank_b** as a **Data Consumer** with data contract processed_criminal_account.


---

This guide outlines the purpose and proper use of invitations, helping you effectively onboard collaborators with the appropriate permissions for your space.

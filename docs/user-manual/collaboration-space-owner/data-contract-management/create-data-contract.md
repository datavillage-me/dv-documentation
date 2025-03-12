# Create Data Contract

# Data Contract

Data contracts are a fundamental concept in the Data Collaboration Platform (DCP). They define the schema of the data that an organization delivers or receives. By establishing a data contract, you ensure that the data's integrity is checked before any algorithm is executed, and the process can be halted if the data does not comply with the defined schema.

## Key Concepts

- **ODC Standard:**  
  We follow the ODC standard. The data model is defined using ODCS, with current implementation support up to version 3.0.0, while maintaining backward compatibility down to v2.2.0.

- **Separate from Collaboration Spaces:**  
  Data contracts are defined independently from collaboration spaces. An organization can already define all its schemas before creating/joining a collaboration space.

- **Single Schema per Data Contract:**  
  Each data contract is limited to one schema. This design allow to have for each data collaborator a data contract and a data source. The data provide/generated in the data source will have to be compliant with the data contract 

## Role of the Collaboration Space Owner

The collaboration space owner is responsible for defining the data contract for the space. This definition is critical as it:
- Validates data quality by ensuring the provided data meets the required schema.
- Supports the integrity checks that determine whether the algorithm execution proceeds.

## Data Contract ID

When a data contract is created, DataVillage returns a unique ID. This ID must be included when sending invitations, ensuring that all collaborators are linked to the correct data contract.

## Create Data Contract

Follow these steps to create a new data contract:

1. **Access the Data Contract Creation Page:**  
   Navigate to the data contract section from the left main menu.

2. **Define the Schema:**  
   Input the required schema details following the ODC standard.

3. **Submit the Data Contract:**  
   Click the **Create** button to submit your data contract. Upon creation, DataVillage will return a unique Data Contract ID.

4. **Utilize the Data Contract ID:**  
   The returned ID is essential and must be used when inviting collaborators, ensuring that everyone is aligned with the correct data contract.

## Real World Use Case

For our real world use case, we need two create two data contract. One for the input and one for the output. 

- **Scenario Overview:**  
  **bank_a** and **bank_b** provides a daily file containing accounts flagged as criminal, and **bank_b** receives the processed data for analysis.

- **Data Contract Role:**  
  The collaboration space owner creates a data contract that defines:
  - The schema for the incoming data from **bank_a** and **bank_b**.
  - The  schema for the output data processed for **bank_b**.
  
  This data contract ensures that quality checks are applied and that only data conforming to the agreed schema is processed by the fraud detection algorithm.

- **Integration with Invitations:**  
  Once the data contract is created, the unique Data Contract ID is provided. This ID must be included when sending invitations to collaborators, linking them to the correct data contract and ensuring consistency across the collaboration.


---

This page provides an overview of data contracts within the DCP. A well-defined data contract is essential to maintain data quality and integrity throughout your collaboration space.

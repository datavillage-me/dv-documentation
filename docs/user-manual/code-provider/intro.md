# Get Started

Welcome to the Code Provider section of your collaboration space. As a Code Provider, you are responsible for developing and maintaining the algorithms that drive data processing and analytics. Your work transforms raw data into actionable insights that empower collaborative decision-making.

## What is a Code Provider?

A Code Provider is an organization or individual that supplies the executable code (algorithms) for the collaboration space. Your key responsibilities include:
- **Developing Algorithms:** Build and refine algorithms that process data according to defined data contracts.
- **Maintaining Code Quality:** Ensure your code is efficient, reliable, and compliant with the required data schemas.
- **Enabling Integration:** Configure your solutions to integrate seamlessly with the overall collaboration environment.

At DataVillage, the development process is streamlined. Your final delivery must be a Docker image, and you can leverage our Python library `dv_utils` and the Data Engine to facilitate your development.

## Your Workflow

Follow these steps to get started as a Code Provider:

1. **Accept Your Invitation**  
   Begin by accepting the invitation you received to join the collaboration space.  
   [Accept Invitation](/docs/user-manual/code-provider/accept-invitation)

2. **Get the Docker Image Template/Example**  
   Download the Docker image template or example, which serves as the foundation for your development.  
   [Docker Template](/docs/user-manual/code-provider/create-algorithm/get-docker-template)

3. **Develop Your Algorithm**  
   Use the template to develop your algorithm. Utilize the `dv_utils` Python library for common tasks and integrate with our Data Engine to ensure seamless data processing.  
   [Develop Your Algorithm](/docs/user-manual/code-provider/create-algorithm/develop-algorithm)

4. **Build Your Algorithm Image**  
   Build and push your algorithm image to be deployed in the datavillage collaboration space.  
   [Create Your Algorithm Image](/docs/user-manual/code-provider/create-algorithm/create-docker-image)

5. **Configure the Registry Source in the Collaborator**  
   Set up the connection to your Docker registry or artifact repository. This configuration enables the collaboration platform to fetch and deploy your Docker image when needed.  
   [Configure Registry Source](/docs/user-manual/code-provider/configure-collaborator/configure-registry)

6. **Configure Environment Variables**  
   Define the necessary environment variables so that your algorithm runs correctly within the collaboration space.  
   [Configure Environment Variables](/docs/user-manual/code-provider/configure-collaborator/configure-variables)

7. **Configure Secrets**   
    **The cage must have been deployed to save the secrets**
   Define the secrets variables so that your algorithm runs correctly within the collaboration space.  
   [Configure Secrets](/docs/user-manual/code-provider/configure-collaborator/configure-secrets)
---

By following these steps, you ensure a smooth onboarding process and seamless integration of your code into the collaboration environment. For additional details or support, please refer to our documentation or contact our support team.

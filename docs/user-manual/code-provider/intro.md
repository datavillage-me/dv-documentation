# Getting started

Welcome to the **Algorithm** section of your collaboration space.  
As a Collaboration Space Owner, you are responsible for developing and maintaining the Algorithm.  
If another organization is responsible for the Algorithm, it will be called a code provider, you just have to send a collaborator invitation to this organization.

## Your workflow

Follow these steps to get create your algorithm:

1. **Create the collaborator**  
   As the **collaboration space owner**, follow the **create invite flow**, instead of copying the ID, click on **Join As**  
   [Create algorithm provider](/docs/user-manual/code-provider/create-invite)

   If you are not the **collaboration space owner**, create the invite, and share the ID  
   [Accept invite](/docs/user-manual/code-provider/accept-invite)

2. **Configure the algorithm provider**  
   Configure your Algorithm provider with default values to deploy it.  
   [Configure algorithm provider](/docs/user-manual/code-provider/configure-collaborator/general)

3. **Deploy the collaboration space**  
   Before to do anything else, deploy your space.  
   [Deploy space](/docs/user-manual/collaboration-space-owner/cage-management/deploy-cage)

4. **Get the Docker image template or example**  
   Download the Docker image template or example, which serves as the foundation for your development.  
   [Docker template](/docs/user-manual/code-provider/create-algorithm/get-docker-template)

5. **Develop your algorithm**  
   Use the template to develop your algorithm. Utilize the `dv_utils` Python library for common tasks and integrate with our Data Engine to ensure seamless data processing.  
   [Develop your algorithm](/docs/user-manual/code-provider/create-algorithm/develop-algorithm)

6. **Build your algorithm image**  
   Build and push your algorithm image to be deployed in the datavillage collaboration space.  
   [Create your algorithm image](/docs/user-manual/code-provider/create-algorithm/create-docker-image)

7. **Configure the algorithm provider**  
   Configure your Algorithm provider and set up the connection to your Docker registry or artifact repository. This configuration enables the collaboration platform to fetch and deploy your Docker image when needed.  
   [Configure algorithm provider](/docs/user-manual/code-provider/configure-collaborator/general)

8. **Configure secrets**  
    **The cage must have been deployed to save the secrets**
   Define the secrets variables so that your algorithm runs correctly within the collaboration space.  
   [Configure secrets](/docs/user-manual/code-provider/configure-collaborator/configure-secrets)

---

By following these steps, you ensure a smooth onboarding process and seamless integration of your code into the collaboration environment. For additional details or support, please refer to our documentation or contact our support team.

# Deploy space

Deploying the space will deploy a cage.  
A cage is a confidential computing environment containing the algorithm and datavillage utilities that make the collaboration space secured and easy to use.
<br />**If the space isn't deployed, it is not possible to configure the secrets and collaborator's server/data source.**

## Deployment process

When you trigger the first deployment, the system initiates the creation of the cage. During its lifecycle, the cage can be in one of several states, each indicating a different stage of the deployment process. When you deploy a cage that it is already deployed it will deploy the new version of the cage with zero down time. Which means that the previous cage will stop only when the new one will be running.

## Space status

- To deploy a space you must open the space **Administration** page.
- Find the status of the space on the top right of your screen.
- There are two status **Active** and **Inactive**

  ![screenshot of an inactive space](img/06_space_algo_created.png)

  ![screenshot of an active space](img/33_space_overview_dataconsumer_joined.png)

## Deploy space

- Open the **Administration** page
- If the space is **Inactive** a message will appear to ask you to **Deploy** the space.

  ![screenshot of the deploy cage page](img/10_deploy_first_time_space.png)

- If the space is **Active**, you can deploy by clicking on the **Deploy** button.

  ![screenshot of the deploy cage page](img/40_administration.png)

## Troubleshooting tips

If you encounter an **Inactive** status after a deployment:

- **Review logs**  
  Check the deployment logs for detailed error messages.
  - [Logs](/docs/user-manual/collaboration-space-owner/logs)
- **Verify configuration**  
  Ensure that your docker image is correctly configured and that it can be run locally.

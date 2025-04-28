# Create Algorithm Image

Your algorithm is delivered as a Docker image. Since the cage-example repository already contains the necessary Dockerfile, you can focus on building your image, pushing it to your registry, and obtaining a private access token for secure deployments.

## Step 1: Build Your Docker Image

Navigate to the root of the cage-example repository in your terminal and run the following command to build your Docker image:

```bash
docker build -t your-username/your-image-name:tag .
```

Replace `your-username/your-image-name:tag` with your desired image name and tag.

## Step 2: Push Your Docker Image to a Registry

Once the image is built, push it to your container registry (e.g., Docker Hub):

1. **Log in to your registry:**

```bash
docker login
```

Enter your credentials when prompted.

2. **Push your image:**

```bash
docker push your-username/your-image-name:tag
```

This command uploads your Docker image to the registry under your repository.

## Step 3: Obtain a Private Access Token

A private access token is required to authenticate deployments and securely pull your Docker image:

1. **Log in to your container registry’s website:**  
   For example, on Docker Hub, go to your account settings.

2. **Generate a new access token:**  
   Locate the option for creating a Personal Access Token (PAT) or a similar feature, and generate a new token.

3. **Store the token securely:**  
   Save this token securely, as it will be used in your deployment configurations to authenticate image pulls.

---

By following these steps, you'll have successfully built your Docker image, pushed it to your registry, and secured it with a private access token—ready for deployment on the Datavillage platform.

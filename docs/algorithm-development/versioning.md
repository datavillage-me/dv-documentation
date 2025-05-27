# Automated versioning

Our GitHub versioning workflow will automatically build and publish Docker images whenever you push a new Git tag matching `X.Y.Z` or `X.Y.ZrcN`. Here’s how to use it:

1. **Ensure the workflow file is in place**  
   We provide `.github/workflows/release-image.yml` in the repository.

2. **Create and push a release tag**

   ```bash
   # For a stable release
   git tag 1.2.0
   git push origin 1.2.0

   # For a release candidate
   git tag 1.3.0rc1
   git push origin 1.3.0rc1
   ```

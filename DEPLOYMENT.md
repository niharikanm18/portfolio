# Deployment Instructions

Your portfolio is now configured for GitHub Pages deployment!

## Automatic Deployment (Recommended)

The GitHub Actions workflow is already set up. To enable automatic deployment:

1. Go to your GitHub repository settings
2. Navigate to **Settings** → **Pages**
3. Under "Build and deployment", select:
   - **Source**: GitHub Actions
4. Push your code to the main branch
5. The workflow will automatically build and deploy your site

Your site will be available at: `https://niharikanm18.github.io/portfolio/`

## Manual Deployment (Alternative)

If you prefer to deploy manually:

```bash
npm run deploy
```

This will build your project and push it to the `gh-pages` branch.

Then in GitHub settings:
- Go to **Settings** → **Pages**
- Under "Build and deployment", select:
  - **Source**: Deploy from a branch
  - **Branch**: gh-pages / (root)

## Local Development

```bash
npm run dev        # Start development server
npm run build      # Build for production
npm run preview    # Preview production build
```

## Notes

- The base URL is set to `/portfolio/` in vite.config.js
- All assets are properly configured for GitHub Pages
- The workflow runs automatically on every push to main

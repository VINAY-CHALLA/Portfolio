# Vinay Challa — Java Backend Developer Portfolio

A responsive, animated portfolio built with React + Vite, Framer Motion, Lucide icons and custom CSS.

## Requirements
- Node.js 18+ (Node.js 20 LTS recommended)
- npm

## Run locally
1. Extract this ZIP.
2. Open a terminal in the `vinay-java-portfolio` folder.
3. Run:

   ```bash
   npm install
   npm run dev
   ```

4. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Before publishing — personalize these items
Open `src/App.jsx`:
- Add your preferred public email to `profile.email`.
- Add a public resume PDF URL to `profile.resumeUrl` after uploading the PDF somewhere accessible.
- Replace the Quiz Microservices GitHub profile link with the direct repository URL.
- Review all experience, project and certification details for accuracy.

Do not add confidential employer source code or internal data. The professional project is intentionally described at a high level.

## Build check
```bash
npm run build
```
The production site is generated in `dist/`.

## Free deployment option: Vercel
1. Push this project to a GitHub repository.
2. Sign in to Vercel with GitHub and import the repository.
3. Framework preset: Vite. Build command: `npm run build`. Output directory: `dist`.
4. Deploy and copy the public URL into LinkedIn's Featured section and your Naukri profile.

Alternative: GitHub Pages can also host a static Vite site, but requires a small base-path configuration if deployed under a repository subpath.

## Important
This is a frontend portfolio. It does not include a backend contact form or store visitor information. The contact section uses direct profile links.

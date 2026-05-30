<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://ai.google.dev/static/site-assets/images/share-ais-513315318.png" />
</div>

# Fluxora - Creative Agency Landing Page

Fluxora is a premium creative agency landing page designed with a gorgeous pure black aesthetic, glowing orange accent structures, dynamic micro-animations, and a Sandbox copy editor.

It also features a glassmorphic AI chat assistant powered by an **n8n workflow automation backend** running locally.

For a full list of components, features, and setup parameters, please refer to the detailed [FEATURES.md](FEATURES.md) file.

## Run Locally

**Prerequisites:** Node.js

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Set up environment variables:**
   Configure your environment variables in `.env.local` as needed.

3. **Start the n8n chatbot backend (Optional):**
   Ensure your local n8n instance is running at `http://localhost:5678` with the appropriate chat workflow active to connect with the AI assistant.

4. **Run the React/Vite development server:**
   ```bash
   npm run dev
   ```


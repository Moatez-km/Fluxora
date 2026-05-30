# Fluxora - Features & System Architecture

Fluxora is a high-fidelity, premium creative agency landing page built with a gorgeous pure black aesthetic, smooth interactive transitions, and an integrated AI assistant chatbot.

Below is a detailed breakdown of all the features and systems implemented in the project.

---

## 🌌 Modern Premium Aesthetic
- **Visual Design**: Sleek dark mode / pure black canvas (`#000000`) styled with vanilla CSS, neon orange gradients, glassmorphism, and custom borders.
- **Micro-Animations**: Immersive hover effects, transitions, and spring animations powered by Framer Motion (`motion/react`).
- **Media Backgrounds**: High-resolution looping video background displaying abstract cinematic portrait concepts.

---

## 🛠️ Feature Breakdown

### 1. Interactive Hero & Silhouette Section
- **Slogan and Tag**: Displays the core philosophy: *"We start from zero, delivering only what matters."* and the category tag `| Creative Agency`.
- **Character Tracker**: A hovering tooltip shows the slogan's length and indicates whether it complies with layout density requirements.
- **Ratings & Social Proof**: A metrics badge showcasing a 5-star rating with over 5,000 customers.
- **Silhouette Visual**: Displays a glowing orange-visored portrait overlay that complements the agency's creative futuristic identity.

### 2. Live Copy Editor (Sandbox Suite)
- Clicking on the hero slogan or category tag triggers the **CopySuite** sidebar editor.
- **Live Editing**: Allows real-time editing of the slogan and category tag.
- **Swiss Grid Layout Safety**: Includes an automated character diff tracker. It warns users if their custom text deviates from the original copy density, ensuring the layout remains pixel-perfect.
- **One-Click Reset**: Easily reset edits back to original copy.

### 3. Product Showcase (Interactive Portfolio)
- Displays four primary offerings in an elegant card grid:
  - **Website Development**
  - **Digital Menu for Restaurants**
  - **QR Business Cards**
  - **Development Team Showcase**
- **Video Previews**: Cards feature premium, auto-playing video loops that show high-quality visual mockups of each product.

### 4. About & Services Grid
- **About Us**: Explains the execution timeline, zero-to-one design craft, and consultation scheduling.
- **Services Details**: Users can click service offerings to automatically prepare subjects for consultation inquiries.

### 5. High-Conversion Contact Form
- Fully responsive form allows prospective clients to get in touch.
- Pre-filled options link directly from the Services Section to speed up user submissions.

---

## 🤖 GlassDiscussion AI Chatbot Widget (with n8n)

Located in the bottom-right corner, the **GlassDiscussion** widget provides a floating, glassmorphic conversational assistant interface.

### Dynamic Availability Indicator
- The chatbot features an indicator dot showing if the agency specialists are online.
- It dynamically checks the local time in **Paris (CET/CEST)**:
  - **Online**: 8:00 AM - 6:00 PM CET (Directly Online).
  - **Offline**: Outside these hours (Away • Auto Concierge mode).

### Quick-Reply Prompt Chips
- Offers quick presets to help visitors inquire about core agency concepts:
  - `✦ Zero-to-One Philosophy`
  - `✦ Design Style & Identity`
  - `✦ Work Timeline`
  - `✦ Direct Consultation`

### 🔗 n8n Workflow Automation Integration
The chatbot connects directly to a self-hosted **n8n automation backend** to drive responses:
- **Webhook Endpoint**: `http://localhost:5678/webhook/923b864d-0531-4613-921e-dd65ba925ff0/chat`
- **Request Payload**:
  ```json
  {
    "message": "User text input",
    "chatInput": "User text input",
    "sessionId": "sess-[random-hash]"
  }
  ```
- **Session Persistence**: Maintains conversation state with a unique `sessionId` generated per browser visit.
- **Graceful Error Handling**: If the local n8n server is offline or fails to respond, the chat widget automatically displays a helpful fallback message prompting the developer to check their n8n instance and verify CORS permission configurations.

---

## 💻 Tech Stack
- **Framework**: Vite + React + TypeScript
- **Styling**: Vanilla Tailwind CSS + Custom CSS modules
- **Animations**: Framer Motion (`motion/react`)
- **Icons**: Lucide React
- **Integration**: n8n Workflow Automation API

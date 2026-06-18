# 🚀 Krishnakumar A — Portfolio Website

A **Deep Space Galaxy** themed full-stack developer portfolio built with the **MERN Stack + Tailwind CSS v4**.

## ✨ Features

- 🌌 **Deep Space / Galaxy** animated background with stars, nebulas, shooting stars
- ⚡ **React + Vite** blazing fast frontend
- 🎨 **Tailwind CSS v4** — latest version with `@theme` tokens
- 🌐 **Node.js + Express.js** backend API
- 📊 **Contact form → CSV** — all messages auto-saved to `backend/data/contacts.csv`
- 📱 **Fully Responsive** — mobile, tablet, desktop
- 🎯 **Scroll animations** on every section
- ⌨️ **Typewriter** role animation in Hero
- 🔢 **Animated skill bars** with % levels
- 🎛️ **Project filter** by tech stack
- ✅ **Form validation** + success/error feedback

---

## 📁 Project Structure

```
krishnakumar-portfolio/
├── backend/
│   ├── server.js         # Express server + contact API
│   ├── .env              # Environment variables
│   ├── data/
│   │   └── contacts.csv  # Auto-created on first contact submission
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── StarField.jsx      # Canvas galaxy background
│   │   │   ├── Navbar.jsx         # Sticky responsive navbar
│   │   │   ├── Hero.jsx           # Hero with typewriter + orbit
│   │   │   ├── Skills.jsx         # Animated skill bars + tech bubbles
│   │   │   ├── Projects.jsx       # Filterable project cards
│   │   │   ├── Experience.jsx     # Timeline experience
│   │   │   ├── Certifications.jsx # Certification badge cards
│   │   │   └── Contact.jsx        # Form + contact info
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css     # Tailwind v4 + custom galaxy styles
│   ├── index.html
│   ├── vite.config.js
│   └── package.json
│
└── README.md
```

---

## 🛠️ Setup & Run

### Step 1 — Install Dependencies

**Backend:**
```bash
cd backend
npm install
```

**Frontend:**
```bash
cd frontend
npm install
```

---

### Step 2 — Start Backend

```bash
cd backend
npm run dev     # With nodemon (auto-restart)
# OR
npm start       # Without nodemon
```

Backend runs on → **http://localhost:5000**

---

### Step 3 — Start Frontend

Open a new terminal:

```bash
cd frontend
npm run dev
```

Frontend runs on → **http://localhost:5173**

---

## 📊 Contact Form → CSV

Every contact form submission is saved to:
```
backend/data/contacts.csv
```

Format: `Name, Email, Subject, Message, Date`

You can open this file in Excel anytime to view all messages!

---

## 🌐 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/api/contact` | Submit contact form → saves to CSV |
| GET | `/api/contacts` | View all saved contacts (admin) |
| GET | `/` | Health check |

---

## 🎨 Tech Stack

| Layer | Technology |
|-------|-----------|
| Frontend | React 18 + Vite |
| Styling | Tailwind CSS v4 |
| Icons | Lucide React |
| Backend | Node.js + Express.js |
| Storage | CSV (contacts.csv) |
| Fonts | Orbitron + Space Grotesk |

---

## 🚀 Build for Production

```bash
cd frontend
npm run build
```

Then serve the `frontend/dist` folder with your backend or a static host like **Vercel** / **Netlify**.

---

## 📞 Contact

**Krishnakumar A**
- 📧 krishnakumara7226@gmail.com
- 📱 +91 8248903156
- 🔗 [LinkedIn](https://www.linkedin.com/in/krishna-kumar-a-65309135b)

---

*Built with 💜 by Krishnakumar A — "Glow like a star" ⭐*

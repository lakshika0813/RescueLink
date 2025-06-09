# 🚨 RescueLink
## Disaster Management App

A cross-platform mobile application developed to assist people during natural calamities. It provides real-time alerts, reporting features, and essential resources to ensure safety and quick action. The app is supported by a backend server to handle data and requests efficiently.

---

## 📱 Features

- 🔔 Real-time disaster alerts
- 📍 Location tracking and geo-based warnings
- 🆘 Emergency contact integration
- 📤 Report incidents with text and media
- 📚 Guidelines and resources for disaster preparedness

---

## 🧰 Tech Stack

### Frontend
- React Native
- Expo
- TypeScript

### Backend
- Node.js
- Express.js
- REST APIs

---

## 🚀 Getting Started

### 📦 Prerequisites

- Node.js (v14+ recommended)
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)

---

### 🔧 Installation Steps

```bash
# Clone the repository
git clone https://github.com/lakshika0813/RescueLink.git
cd RescueLink

# Install frontend dependencies
cd Frontend
npm install

# Install backend dependencies
cd ../server
npm install
```

---

### ▶️ Running the Project

#### 📱 Start the Frontend App (Expo)

```bash
cd Frontend
npm start
```

> Expo CLI will launch in your browser. Use QR code or emulator to run.

#### 🌐 Start the Backend Server

```bash
cd server
npm start
```

> Server will run on default port (e.g., `http://localhost:3000`)

---

## 📁 Folder Structure

```
RescueLink/
    ├── Frontend/        # Frontend - React Native App
    │   ├── App.tsx
    │   ├── app.json
    │   ├── babel.config.js
    │   ├── package.json
    │   ├── tsconfig.json
    │   ├── custom-jest-setup.js
    │   ├── .expo/
    │   ├── node_modules/
    │   └── src/
    │       └── ... (your source files)
    │
    └── server/                       # Backend - Node.js API
        ├── package.json
        ├── node_modules/
        ├── index.js (or app.js)
        └── ... (routes, controllers, etc.)
```

---

## 👨‍💻 Contributors

- **Your Name** – [lak081303@gmail.com](mailto:lak081303@gmail.com)

---

## 📃 License

This project is licensed under the **MIT License** – feel free to use, modify, and distribute.

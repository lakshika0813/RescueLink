
# 🚨 RescueLink - Your Personal Emergency Companion App
### *Disaster Alerts & Crisis Management. Anytime. Anywhere.*

> A fully functional emergency assistance mobile application built with **React Native (Expo SDK 49)** and **Node.js**, offering real-time alerts, location-based rescue support, weather updates, emergency contact management, and much more — right from your pocket.

---

## ✨ Highlights at a Glance

🌍 Real-time Location Support with Smart Alerts  
📍 Red Zones, Safe Zones & Rescue Centers Locator  
📦 Emergency Kit Preparation & Instructional Videos  
🌤 Live Weather Updates  
📞 Custom Family Contacts & Emergency Dialer  
🔔 Push-style Alert System with Animations  
🛠️ Backend APIs for Authentication & Contact Management  

---

## 📲 Live Demo Preview
Experience the UI and flow:  
👉 [Watch App Preview](https://drive.google.com/drive/folders/1aTONukDhP-DaGxtUqt-JyfizDvpJ9Vqd?usp=sharing)

---

## 📦 Features

- 🔐 **User Authentication** – Secure Login and Signup  
- 📺 **Video-Based Emergency Preparation Guide**  
- 📍 **Red Zones, Safe Zones & Rescue Center Mapping**  
- 📡 **Live Location Tracking & Update**  
- ☁️ **Real-time Weather Feed for Current Location**  
- 📞 **Add Emergency & Custom Family Contacts**  
- 🔁 **Animated Transitions & Navigations**  
- 🧭 **Offline Support for Previously Fetched Zones & Centers**

---

## 🔁 Running the App on Expo & Android Studio

### 📱 On Physical Device (Expo Go)

1. Make sure your **mobile and PC are on the same Wi-Fi**.
2. Use your **Local IP Address** in API calls (e.g., `http://192.168.1.101:5000/api/...`).
3. Start Backend:
    ```bash
    cd server
    node src/app.js
    ```
4. Start Frontend (Expo):
    ```bash
    cd Frontend
    npm install
    npm start
    ```
5. Scan QR code with **Expo Go** on your phone.

> ✅ Best for real-device testing and rapid development.

---

### 💻 On Android Studio Emulator

1. Use `http://10.0.2.2:5000/api/...` as your API base URL instead of your IP.
2. Start Backend as usual.
3. Start Frontend with:
    ```bash
    npm start
    ```
4. Launch Android Emulator via Android Studio and open the Expo app from the emulator.

> ⚠️ **Make sure Metro Bundler runs without errors and emulator is connected to internet.**

---

## 🔗 API Endpoints Used

| Endpoint                                  | Method | Purpose                          |
|-------------------------------------------|--------|----------------------------------|
| `/api/auth/login`                         | POST   | User Login                       |
| `/api/auth/signup`                        | POST   | User Signup                      |
| `/api/contacts/addContact`                | POST   | Add Emergency Contact            |
| `/api/contacts/customFamilyContacts`      | POST   | Add Custom Family Contact        |

---

## 🧩 Folder Structure

```
RescueLink/
├── Frontend/
│   ├── .expo/ / node_modules/
│   ├── src/
│   │   ├── assets/ (Images)
│   │   ├── components/ (Reusable UI)
│   │   ├── homeComp/ (Home page feature tiles)
│   │   ├── nav/ (Footer)
│   │   ├── screens/ (Alerts, Location, Weather etc.)
│   │   └── utils/locationUtil.js (Geolocation helper)
│   │   ├── Login.js, Signup.js, Home.js etc.
│   ├── App.tsx
│   └── package.json etc.
│
├── server/
│   ├── node_modules/
│   ├── src/
│   │   ├── config/db.js
│   │   ├── models/UserModel.js
│   │   ├── routes/authRoutes.js & contactRoutes.js
│   │   └── app.js (entry)
```

---

## 🛠 Technologies Used

- **Frontend:** React Native (Expo SDK 49), TypeScript, React Navigation  
- **Backend:** Node.js, Express.js, MongoDB  
- **Others:** Native Alerts, Location API, Expo Go

---

## 🌠 Animations and UI

- Smooth Page Transitions using **Animated API**  
- Reusable Buttons & Cards with Tap Effects  
- Animated Map Zones (Red/Safe)  
- Toasts and Alert Feedback on Actions

---

## 🤝 Contributing

Ideas, suggestions, or fixes?

**Fork → Improve → Pull Request 🚀**

Together, let’s make RescueLink smarter & more impactful.

---

## 🧑‍💻 Developed By

**Lakshika Vijayvargiya**  
📩 [lak081303@gmail.com](mailto:lak081303@gmail.com)

---

## 📜 License

This project is licensed under the **MIT License**.

---

> Built with ❤️ to help during emergencies — Stay Safe, Stay Informed.

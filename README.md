# ShareWheels

A modern React Native car‑pooling and ride‑sharing application built with Expo.

## 📱 Features

- **Search rides** – Find available trips based on origin, destination and date.
- **Publish a ride** – Offer your own ride with details, price and seats.
- **Carpool passes** – Manage shared rides and view participants.
- **Notifications** – Real‑time alerts for ride requests and updates.
- **User profile & authentication** – Sign‑up, login, password reset, and profile management.
- **Car & account certification** – Verify vehicle documents and user identity.
- **Multi‑screen navigation** – Bottom‑tab navigation with dedicated stacks for each feature.

## 🛠️ Tech Stack

- **React Native** with **Expo** (v54)
- **MySQL Workbench** for authentication & storage
- **Node.js Express** for backend

## 📂 Project Structure (high‑level)

```
src/
 ├─ screens/          # All screen components (Search, Details, Publish, etc.)
 ├─ components/       # Re‑usable UI components (Annonce, Evaluer, …)
 ├─ context/          # Auth, profile and refresh contexts
 ├─ assets/           # Images, fonts and icons
 └─ App.js            # Root navigation & providers
```

## 🚀 Getting Started

### Prerequisites

- **Node.js** (>=18) and **npm**
- **Expo CLI** (`npm i -g expo-cli`)
- Android Studio or Xcode simulator for device testing (optional)

### Installation

```bash
git clone https://github.com/yourusername/sharewheels.git
cd sharewheels
npm install
```

### Running the app

```bash
npx expo start
```

## 📖 Usage

1. **Sign up / Login** – Create an account or log in with email & password.
2. **Search** – Browse available rides on the **Search** tab.
3. **Publish** – Add a new ride via the **Publish** tab.
4. **My Rides** – View and manage your own rides and participants.
5. **Profile** – Edit personal information, certify your car, and change password.
6. **Rating users** – rate the user

---
*Happy riding! 🚗💨*
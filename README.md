# 📰 NewsApp - Jagrut Bharat

## 📌 Overview
Jagrut Bharat is a modern and responsive news application built using **React.js**, powered by **NewsAPI**, and styled with **TailwindCSS** & **DaisyUI**. It allows users to browse the latest news across various categories in a clean and user-friendly interface.

---

## ✨ Features
- 🔥 **Real-time news updates** using NewsAPI
- 📌 **Category-based filtering** (Technology, Business, Health, Sports, Entertainment)
- 🎨 **Modern UI with TailwindCSS & DaisyUI**
- ⚡ **Optimized performance with React hooks**

---

## 🛠️ Tech Stack
- **Frontend:** React.js, TailwindCSS, DaisyUI
- **API:** NewsAPI (https://newsapi.org/)
- **Icons & UI Components:** DaisyUI

---
## 🚀 Getting Started

### 1️⃣ Clone the Repository
```sh
git clone https://github.com/rochanshah15/aajtak.git
cd aajtak
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Get Your NewsAPI Key
- Sign up at [NewsAPI](https://newsapi.org/)
- Generate an API key
- Replace the API key in `newsBoard.jsx`:
  ```jsx
  const url = `https://newsapi.org/v2/top-headlines?category=${category}&apiKey=YOUR_NEWSAPI_KEY`;
  ```

### 4️⃣ Start the Development Server
```sh
npm run dev
```

---

## 📂 Project Structure
```
📦 aajtak
├── 📂 src
│   ├── 📂 components
│   │   ├── nav.jsx
│   │   ├── newsBoard.jsx
│   │   ├── newsCard.jsx
│   │   ├── footer.jsx
│   ├── main.jsx
│   ├── index.css
│   ├── App.jsx
├── 📄 vite.config.js
├── 📄 package.json
├── 📄 README.md
```

---

## 💡 How It Works
1. Users select a **news category** from the navigation bar.
2. The app fetches news **from NewsAPI** based on the selected category.
3. News articles are displayed in a **grid layout** with images, titles, and descriptions.
4. Clicking **View More** redirects to the **full news article**.

---

## 🌟 Contributing
Contributions are welcome! To contribute:
1. Fork the repo
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit your changes (`git commit -m 'Added new feature'`)
4. Push to your branch (`git push origin feature-branch`)
5. Open a Pull Request

---

## 🛡️ License
This project is licensed under the **MIT License**.

---

## 📞 Contact
For any queries, reach out to me at:
📧 **rochanshah15@gmail.com**

---

### ⭐ Don't forget to give a star if you like this project! ⭐


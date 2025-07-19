
# 🌤️ Skyveil – Elegant Weather Web App

**Skyveil** is a stylish and responsive weather web application that allows users to quickly check the current weather conditions of any city using the OpenWeatherMap API.

---

## 📌 Features

- 🌍 Real-time weather data for any location worldwide  
- 🎨 Beautiful animated interface with weather icons  
- 📱 Fully responsive design  
- 🧠 Smart input sanitization to prevent XSS attacks  
- 🔒 Secure front-end implementation with CSP headers  
- 🔗 Seamless navigation between welcome page and main app

---

## 🚀 Live Demo

[🔗 Click here to view Skyveil](https://amjad-altarefe.github.io/Skyveil/)

---

## 🛠️ Tech Stack

- **HTML5**
- **CSS3** (with gradients & animations)
- **Vanilla JavaScript**
- **OpenWeatherMap API**

---

## 📁 Project Structure

```
Skyveil/
│
├── index.html              # Welcome screen with weather icons
├── index2.html             # Main weather interface
│
├── .vscode/
│   └── settings.json       # Optional VSCode project settings
│
└── assets/
    ├── css/
    │   ├── style1.css      # Style for index.html
    │   └── style2.css      # Style for index2.html
    │
    ├── img/
    │   └── Skyveil.jpg     # Site icon
    │
    └── js/
        └── script.js       # Weather fetch + input sanitization
```

---

## 🧠 Security Highlights

- `Content-Security-Policy` header added to prevent script injection
- All user input is sanitized via `sanitizeInput()` function
- `encodeURIComponent` used for safe API query composition

---

## 📦 Installation

```bash
git clone https://github.com/amjad-altarefe/Skyveil.git
cd skyveil
# Open index.html in your browser
```

No dependencies or build steps needed — just open in any browser.

---

## 📜 License

This project is licensed under the [MIT License](LICENSE).

---

## 👨‍💻 Author

Developed with passion by **Amjad Qandeel**  
📫 [linkedin](https://www.linkedin.com/in/amjadeqandeel/)

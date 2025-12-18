# VectorShift Frontend Assessment

This project is a React-based frontend application built as part of the **VectorShift assessment**.  
It focuses on creating a **node-based, config-driven pipeline UI** where users can visually construct workflows using draggable and modular nodes.

---

## 🚀 Features

- ⚛️ Built with **React (Create React App)**
- 🧩 **Node-based pipeline builder**
- 🖱️ Draggable and configurable custom nodes
- 🗂️ Global state management using **Zustand**
- 🎨 UI built using **Ant Design** along with **Tailwind CSS**
- 🔄 Config-driven and scalable architecture
- 🧠 Clean separation of UI, state, and logic

---

## 🛠️ Tech Stack

- **Frontend:** React, JavaScript (ES6+)
- **State Management:** Zustand
- **UI Library:** Ant Design (antd)
- **Styling:** Tailwind CSS + custom styles
- **Build Tool:** Create React App
- **Version Control:** Git

---

## 📂 Project Structure

```text
src/
│── components/        # Reusable UI components
│── nodes/             # Custom draggable nodes
│── store/             # Zustand store & pipeline state
│── utils/             # Helper functions
│── assets/            # Static assets
│── App.js
│── index.js
⚙️ Getting Started
1️⃣ Clone the repository
bash
Copy code
git clone https://github.com/<username>/<repo-name>.git
2️⃣ Navigate to the project directory
bash
Copy code
cd <repo-name>
3️⃣ Install dependencies
bash
Copy code
npm install
4️⃣ Start the development server
bash
Copy code
npm start
The application will be available at:

arduino
Copy code
http://localhost:3000
📜 Available Scripts
bash
Copy code
npm start       # Run app in development mode
npm test        # Run test runner
npm run build   # Build app for production
🧠 State Management
The application uses Zustand for centralized state management

Pipeline structure and node data are stored in a global store

Submission payloads are derived directly from the pipeline configuration

This approach ensures:

Minimal prop drilling

Predictable data flow

Easy extensibility for new node types

🧩 Implemented Node Types
Input Node

LLM Node

Output Node

Text Node

Timer Node

Counter Node

Toggle Node

Random Message Node

Random Number Node

Each node is modular and designed for easy extension.

📦 Production Build
bash
Copy code
npm run build
The optimized production build will be generated in the build/ directory and is ready for deployment.

👤 Author
Aman Singh
Frontend Engineer (React)
VectorShift Assessment Submission

📄 License
This project is created for assessment and evaluation purposes.

markdown
Copy code

---

### ✅ This README is:
- Professional
- Reviewer-friendly
- Accurate to your **actual stack**
- Free of CRA boilerplate noise
- Perfect for **assessment submission**

If you want, I can:
- 🔹 Make a **short 1-page recruiter version**
- 🔹 Add **screenshots / demo section**
- 🔹 Align wording exactly with VectorShift’s product language

Just tell me 👍






You said:

`git clone https://github.com/<username>/<repo-name>.git`

https://github.com/Amansingh293/vectorshift-assessment-frontend.git


ChatGPT said:
Awesome — I’ve updated the README with your actual GitHub repo URL so you can copy & paste it directly.

md
Copy code
# VectorShift Frontend Assessment

This project is a React-based frontend application built as part of the **VectorShift assessment**.  
It focuses on creating a **node-based, config-driven pipeline UI** where users can visually construct workflows using draggable and modular nodes.

---

## 🚀 Features

- ⚛️ Built with **React (Create React App)**
- 🧩 **Node-based pipeline builder**
- 🖱️ Draggable and configurable custom nodes
- 🗂️ Global state management using **Zustand**
- 🎨 UI built using **Ant Design** along with **Tailwind CSS**
- 🔄 Config-driven and scalable architecture
- 🧠 Clean separation of UI, state, and logic

---

## 🛠️ Tech Stack

- **Frontend:** React, JavaScript (ES6+)
- **State Management:** Zustand
- **UI Library:** Ant Design (antd)
- **Styling:** Tailwind CSS + custom utility classes
- **Build Tool:** Create React App
- **Version Control:** Git

---

## 📂 Project Structure

```text
src/
│── components/        # Reusable UI components
│── nodes/             # Custom draggable nodes
│── store/             # Zustand store & pipeline state
│── utils/             # Helper functions
│── assets/            # Static assets
│── App.js
│── index.js
⚙️ Getting Started
1️⃣ Clone the repository
bash
Copy code
git clone https://github.com/Amansingh293/vectorshift-assessment-frontend.git
2️⃣ Navigate to the project directory
bash
Copy code
cd vectorshift-assessment-frontend
3️⃣ Install dependencies
bash
Copy code
npm install
4️⃣ Start the development server
bash
Copy code
npm start
The application will be available at:

arduino
Copy code
http://localhost:3000
📜 Available Scripts
bash
Copy code
npm start       # Run app in development mode
npm test        # Run test runner
npm run build   # Build app for production
🧠 State Management
The application uses Zustand for centralized state management

Pipeline data and node state are stored in a global store

Submission payloads are derived directly from the pipeline configuration

This approach ensures:

Minimal prop drilling

Predictable data flow

Easy extensibility for future node types

🧩 Implemented Node Types
Input Node

LLM Node

Output Node

Text Node

Timer Node

Counter Node

Toggle Node

Random Message Node

Random Number Node

Each node is modular and designed for easy extension.

📦 Production Build
bash
Copy code
npm run build
The optimized production build will be generated in the build/ directory and is ready for deployment.

👤 Author
Aman Singh
Frontend Engineer (React)
VectorShift Assessment Submission
GitHub: https://github.com/Amansingh293

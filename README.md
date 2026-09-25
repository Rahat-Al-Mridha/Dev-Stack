# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some Oxlint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Oxc](https://oxc.rs)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/)

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the Oxlint configuration

If you are developing a production application, we recommend enabling type-aware lint rules by installing `oxlint-tsgolint` and editing `.oxlintrc.json`:

```json
{
  "$schema": "./node_modules/oxlint/configuration_schema.json",
  "plugins": ["react", "typescript", "oxc"],
  "options": {
    "typeAware": true
  },
  "rules": {
    "react/rules-of-hooks": "error",
    "react/only-export-components": ["warn", { "allowConstantExport": true }]
  }
}
```

See the [Oxlint rules documentation](https://oxc.rs/docs/guide/usage/linter/rules) for the full list of rules and categories.


=================================================================================================================================================================================================================




# 🚀 Dev Stack

**Dev Stack** is a web application that helps developers explore different technologies and build their ideal development stack. Users can browse technologies by category, select technologies, and manage their personalized stack.

## ✨ Features

* 🔍 Browse different technologies
* 📂 Explore technologies by category:

  * Frontend
  * Backend
  * Database
  * Language
  * Styling
  * DevOps
  * Tools
* ➕ Add technologies to a personal development stack
* ❌ Remove technologies from the selected stack
* 📋 View selected technologies in a dedicated **Your Stack** section
* ⚛️ Built with React components and state management

## 🛠️ Technologies Used

* **React.js**
* **JavaScript**
* **Tailwind CSS**
* **JSON Data**
* **Vite**

## 📁 Project Structure

```text
Dev-Stack/
├── src/
│   ├── components/
│   │   ├── AvailableTechnology.jsx
│   │   ├── TechnologyCard.jsx
│   │   └── YourStack.jsx
│   │
│   ├── data/
│   │   └── technologies.json
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── public/
├── package.json
└── README.md
```

## ⚛️ React Questions & Answers

### 1. What is JSX, and why is it used in React?

**JSX** is a syntax that lets us write HTML-like code inside JavaScript.

It makes React components easier to create, understand, and read.

```jsx
const heading = <h1>Dev Stack</h1>;
```

---

### 2. What is the difference between props and state?

**Props** are used to pass data from a parent component to a child component.

**State** stores data inside a component and can change over time.

**Example:**

```text
Props → Parent → Child

State → Data managed inside a component
```

---

### 3. What does the `useState` hook do, and where did you use it in this project?

`useState` is a React Hook used to store and update data inside a component.

In this project, I used `useState` to manage the user's selected technologies and update the **Your Stack** section.

```jsx
const [stack, setStack] = useState([]);
```

When a user adds a technology:

```jsx
setStack([...stack, technology]);
```

---

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after a component renders.

I used `useEffect` to load the technology data from the JSON file when the application starts.

```jsx
useEffect(() => {
  // Load technology data
}, []);
```

The empty dependency array `[]` means the effect runs when the component initially loads.

---

### 5. Why does every item in a `.map()` list need a unique `key` prop?

A unique `key` helps React identify each item in a list.

This allows React to efficiently update the UI when the list changes.

```jsx
technologies.map((technology) => (
  <TechnologyCard
    key={technology.id}
    technology={technology}
  />
));
```

Here, `technology.id` provides a unique key for each technology.

---

### 6. What is conditional rendering? Show one place you used it.

**Conditional rendering** means displaying different content depending on a condition.

In this project, I used conditional rendering to display **"Your stack is empty"** when no technology has been selected.

```jsx
{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <div>
    {/* Selected technologies */}
  </div>
)}
```

If `stack.length === 0`, the empty-stack message is displayed.

Otherwise, the selected technologies are displayed.

---

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

A **parent component sends data to a child component using props**.

A child component can communicate back to the parent by calling a function that the parent passes through props.

### Parent

```jsx
<TechnologyCard
  technology={technology}
  onAdd={handleAdd}
/>
```

Here:

* `technology` passes technology data to the child.
* `onAdd` passes a function to the child.

### Child

```jsx
<button onClick={() => onAdd(technology)}>
  Add to Stack
</button>
```

When the user clicks **Add to Stack**, the child calls `onAdd()`.

The parent then updates the stack state.

```jsx
const handleAdd = (technology) => {
  setStack([...stack, technology]);
};
```

This creates a simple data flow:

```text
Parent
  ↓
Props
  ↓
Child
  ↓
Function call
  ↓
Parent
  ↓
State update
```

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone YOUR_REPOSITORY_URL
```

### 2. Navigate to the project

```bash
cd Dev-Stack
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the development server

```bash
npm run dev
```

The application will then be available on the local development server provided by Vite.

## 🎯 Project Goal

The main goal of **Dev Stack** is to practice and demonstrate fundamental React concepts such as:

* Components
* Props
* State
* `useState`
* `useEffect`
* Conditional rendering
* `.map()`
* `key` props
* Parent-to-child data flow
* Child-to-parent communication

## 👨‍💻 Developer

**Rahat**

Built with ❤️ using **React.js, JavaScript, Tailwind CSS, JSON, and Vite**.

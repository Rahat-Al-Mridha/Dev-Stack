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


=================================================================================================================================================================================================================

Dev Stack
Project Name
Dev Stack

Description
Dev Stack is a web application that helps developers explore different technologies and build their ideal development stack. Users can compare technologies and add them to a personalized stack.

Technologies Used
React.js
JavaScript
Tailwind CSS
JSON Data
Vite
Features
Browse technologies by category (Frontend, Backend, Database, etc.).
Add technologies to a personal development stack.
View selected technologies in a dedicated stack section.
React Questions & Answers
i. What is JSX, and why is it used in React?
JSX is a syntax that lets us write HTML-like code inside JavaScript. It makes React components easier to create and read.

ii. What is the difference between props and state?
Props are used to pass data from a parent component to a child component.
State stores data inside a component and can change over time.
iii. What does the
useState hook do, and where did you use it in this project?
useState is used to store and update data in a component. In this project, I used it to manage the user’s selected technologies (the Dev Stack).

iv. What does the
useEffect hook do, and why did you need it to load the JSON data?
useEffect runs code after a component renders. I used it to load the technology data from a JSON file when the application starts.

v. Why does every item in a
.map() list need a unique key prop?
A unique key helps React identify each item efficiently and update the UI correctly when data changes.

vi. What is conditional rendering? Show one place you used it.
Conditional rendering means showing different content based on a condition.

Example:

{stack.length === 0 ? (
  <p>Your stack is empty.</p>
) : (
  <StackList />
)}
I used it to display the “Your stack is empty” message when no technology is selected.

vii. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
A parent component sends data to a child using props. A child sends data back by calling a function passed from the parent through props.

Example:

<TechnologyCard
  technology={tech}
  onAdd={handleAddToStack}
/>
The child component calls onAdd() when the user clicks Add to Stack, and the parent updates the stack state.

These answers are short, simple, and suitable for a beginner React project README.


import React from "react";
import { FillButton } from "tailwind-react-ui";
import "./App.css";

export default function App() {
  const MyButton = () => <FillButton brand="primary">Submit</FillButton>;
  return (
    <div className="App">
      <h1>Tailwind Practice</h1>
      <MyButton />
    </div>
  );
}

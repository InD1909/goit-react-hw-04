import { useState } from "react";
import s from "./SearchBar.module.css";

export const SearchBar = ({ onSubmit }) => {
  const [input, setInput] = useState("");

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim() === "") {
      alert("Please enter a search term");
      return;
    }
    onSubmit(input);
    setInput("");
  };

  return (
    <header>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={input}
          onChange={handleChange}
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
        <button type="submit">Search</button>
      </form>
    </header>
  );
};

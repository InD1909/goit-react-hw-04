import { useState } from "react";
import s from "./SearchBar.module.css";
import toast from "react-hot-toast";

export const SearchBar = ({ onSubmit }) => {
  const [query, setQuery] = useState("");
  const handleInputChange = (evt) => {
    setQuery(evt.target.value);
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (query.trim() === "") {
      toast.error("Please enter a search query");
      return;
    }
    onSubmit(query);
    setQuery("");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Search..."
          type="text"
          value={query}
          onChange={handleInputChange}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

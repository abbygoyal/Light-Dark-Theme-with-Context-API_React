import React, { useContext } from "react";
import { ThemeContext } from "../context/themeContext";
const Posts = () => {
  const { theme, handleOnClick } = useContext(ThemeContext);
  return (
    <div>
      <h4 style={{ textAlign: "center" }}>My Post With {theme}</h4>
      <button
        className={`btn ${theme === "dark" ? "btn-light" : "btn-dark"} border`}
        onClick={handleOnClick}
      >
        {theme === "dark" ? "Light" : "Dark"}
      </button>
    </div>
  );
};

export default Posts;

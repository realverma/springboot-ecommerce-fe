import React from "react";

const NavSearch = () => {
  return (
    <label class="open-search" for="open-search">
      <i class="fas fa-search"></i>
      <input
        class="input-open-search"
        id="open-search"
        type="checkbox"
        name="menu"
      />
      <div class="search">
        <button class="button-search">
          <i class="fas fa-search"></i>
        </button>
        <input
          type="text"
          placeholder="What are you looking for?"
          class="input-search"
        />
      </div>
    </label>
  );
};

export default NavSearch;

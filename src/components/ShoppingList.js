import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items,onItemFormSubmit }) {

  const [selectedCategory, setSelectedCategory] = useState("All");
  const [search,setSearch]=useState("")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchChange(event){
    setSearch(event.target.value)
  }

  const itemsToDisplay = items.filter((item) => {
    return (item.name.toLowerCase().includes(search.toLowerCase()) && selectedCategory.toLowerCase()===item.category.toLowerCase())
    ||(search==="" && selectedCategory==="All")
    || (item.name.toLowerCase().includes(search.toLowerCase()) && selectedCategory==="All")
    || (search==="" && selectedCategory.toLowerCase()===item.category.toLowerCase())
  });

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter search={search} selectedCategory={selectedCategory} onSearchChange={handleSearchChange} onCategoryChange={handleCategoryChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
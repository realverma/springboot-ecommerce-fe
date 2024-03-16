import React from "react";
import "../Styles/CategoryCard.css";
const CategoryCard = () => {
  let categoryData = [
    {
        category: "Mobile",
        image:
            require('../assets/2.jpg'),
    },
    {
        category: "Shoe",
        image:
        require('../assets/1.jpg'),
    },
    {
        category: "Cloth",
        image:
            require('../assets/3.jpg'),
    },
    {
        category: "Laptop",
        image:
            require('../assets/4.jpg'),
    },
  ];
  return (
    <div style={{display:'flex', overflowY:'auto'}}>
      {categoryData.map((item, index) => {
        return (
          <figure class="snip1163">
            <img
              src={item.image}
              alt="sample48"
            />
            <figcaption>
              <h2>{item.category} </h2>
              <div>
                <p>Reality continues to ruin my life.</p>
              </div>
              <a href="#"></a>
            </figcaption>
          </figure>
        );
      })}
    </div>
  );
};

export default CategoryCard;

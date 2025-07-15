
import React from 'react';
import { NavLink, useNavigate } from 'react-router';


// const categories = [
//   {
//     id: 1,
//     name: 'Electronics',
//     image: 'https://via.placeholder.com/300x200?text=Electronics',
//   },
//   {
//     id: 2,
//     name: 'Fashion',
//     image: 'https://via.placeholder.com/300x200?text=Fashion',
//   },
//   {
//     id: 3,
//     name: 'Home & Kitchen',
//     image: 'https://via.placeholder.com/300x200?text=Home+%26+Kitchen',
//   },
//   {
//     id: 4,
//     name: 'Sports',
//     image: 'https://via.placeholder.com/300x200?text=Sports',
//   },
// ];

const CategoryCards = ({products,uniqueByCategory}) => {
const cetagorys = uniqueByCategory.map(product => product.category);
const navigate = useNavigate();
// const differentvetagory = products.map(product => product.category);
  

  const handleCategoryClick = (categoryName) => {
    for (let product of products) {
      if (product.category === categoryName) {
       const cetagoryProducts = products.filter(item => item.category === categoryName);
        
        navigate('/productcetagory', {
          state: {
            products : cetagoryProducts
          }
        })
        
      }
    }
    
  };

  

  return (
    <div className="grid grid-cols-3 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4">
      {cetagorys.map((category) => (
      //  <NavLink>
         <div
          
          onClick={() => handleCategoryClick(category)}
          className="cursor-pointer bg-white rounded-2xl shadow-md hover:shadow-xl transition duration-300 overflow-hidden"
        >
          {/* <img
            src={category.image}
            alt={category.name}
            className="w-full h-16 object-cover"
          /> */}
          <div className="p-4 text-center">
            <h2 className=" font-semibold text-gray-800">
              {category}
            </h2>
          </div>
        </div>
      //  </NavLink>
      ))}
    </div>
  );
};

export default CategoryCards;

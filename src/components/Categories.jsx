import { useEffect, useState } from "react";
import CategoryCard from "./CategoryCard";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("https://painting-server-six.vercel.app/subcategory")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data);
      });
  }, []);

  return (
    <div className="grid grid-cols-2 gap-12  p-4">
      {categories.map((category) => (
        <CategoryCard key={category._id} category={category}></CategoryCard>
      ))}
    </div>
  );
};

export default Categories;

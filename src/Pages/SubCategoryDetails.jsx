import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import SubCategoryDetailsCard from "../components/SubCategoryDetailsCard";

const SubCategoryDetails = () => {
  const { subcategory } = useLoaderData();

  const [subCategories, setSubCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://painting-server-six.vercel.app/arts-craft"
      );
      const result = await response.json();
      setSubCategories(result);
    };
    fetchData();
  }, []);

  const matchingSubCategories = subCategories.filter(
    (sub_category) => sub_category.subcategoryName === subcategory
  );

  console.log(matchingSubCategories);

  return (
    <div className="w-[90%] mx-auto">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {matchingSubCategories.map((subcategory) => (
          <SubCategoryDetailsCard
            key={subcategory._id}
            subcategory={subcategory}
          ></SubCategoryDetailsCard>
        ))}
      </div>
    </div>
  );
};

export default SubCategoryDetails;

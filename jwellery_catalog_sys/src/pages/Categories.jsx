import React, { useState } from "react";
import CategoryFormModal from "@/components/category/CategoryFormModal";
import CategoryTable from "@/components/category/CategoryTable";
import { Button } from "@/components/ui/button";

const Categories = () => {
  const [openModal, setOpenModal] = useState(false);
  const [categories, setCategories] = useState([
    {
      id: 1,
      name: "Rings",
      description: "Various gold and diamond rings",
    },
    {
      id: 2,
      name: "Necklaces",
      description: "Elegant necklaces in different styles",
    },
    {
      id: 3,
      name: "Bracelets",
      description: "Stylish and modern bracelets",
    },
  ]);

  const handleAddCategory = (newCategory) => {
    setCategories((prev) => [
      ...prev,
      { ...newCategory, id: prev.length + 1 },
    ]);
    setOpenModal(false);
  };

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-4">
        <h1 className="text-3xl font-bold">Categories</h1>
        <Button onClick={() => setOpenModal(true)}>Add Category</Button>
      </div>
      <CategoryTable categories={categories} />
      <CategoryFormModal
        open={openModal}
        onClose={() => setOpenModal(false)}
        onSubmit={handleAddCategory}
      />
    </div>
  );
};

export default Categories;

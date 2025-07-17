import React from "react";
import ProductTable from "@/components/product/ProductTable";
import ProductFormModal from "@/components/product/ProductFormModal";

const Products = () => {
  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Products</h1>
        <ProductFormModal />
      </div>
      <ProductTable />
    </div>
  );
};

export default Products;

import React, { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

const ProductFormModal = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: ""
  });

  const handleChange = (e) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    console.log("Submitted Product:", product);
    // Reset after submit
    setProduct({ name: "", price: "", category: "", description: "" });
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Product</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px]">
        <DialogHeader>
          <DialogTitle>Add New Product</DialogTitle>
        </DialogHeader>
        <form onSubmit={(e) => { e.preventDefault(); handleSubmit(); }} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Product Name</Label>
            <Input name="name" value={product.name} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="price">Price</Label>
            <Input name="price" type="number" value={product.price} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Input name="category" value={product.category} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <Label htmlFor="description">Description</Label>
            <Input name="description" value={product.description} onChange={handleChange} />
          </div>
          <Button type="submit" className="w-full">Submit</Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ProductFormModal;

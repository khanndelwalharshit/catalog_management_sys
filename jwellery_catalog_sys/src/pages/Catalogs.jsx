import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import CatalogsFormModal from "@/components/catalog/CatalogsFormModal";
import CatalogsTable from "@/components/catalog/CatalogsTable";

const Catalogs = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="p-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold">Catalogs</h1>
        <Button onClick={() => setShowModal(true)}>Add Catalog</Button>
      </div>

      {/* Catalog Creation Modal */}
      <CatalogsFormModal open={showModal} onOpenChange={setShowModal} />

      {/* Catalog Table */}
      <CatalogsTable />
    </div>
  );
};

export default Catalogs;

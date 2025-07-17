import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import ClientFormModal from "@/components/clients/ClientFormModal";
import ClientTable from "@/components/clients/ClientTable";

const Clients = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold">Clients</h1>
        <Button onClick={() => setOpen(true)}>
          <Plus className="mr-2 h-4 w-4" />
          Add Client
        </Button>
      </div>

      <ClientFormModal open={open} setOpen={setOpen} />
      <ClientTable />
    </div>
  );
};

export default Clients;

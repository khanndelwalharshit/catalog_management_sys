import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const ClientFormModal = ({ open, setOpen }) => {
  const [client, setClient] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Client submitted:", client);
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add New Client</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label>Name</Label>
            <Input
              value={client.name}
              onChange={(e) => setClient({ ...client, name: e.target.value })}
              placeholder="Client name"
              required
            />
          </div>
          <div>
            <Label>Email</Label>
            <Input
              type="email"
              value={client.email}
              onChange={(e) => setClient({ ...client, email: e.target.value })}
              placeholder="Client email"
              required
            />
          </div>
          <div>
            <Label>Phone</Label>
            <Input
              value={client.phone}
              onChange={(e) => setClient({ ...client, phone: e.target.value })}
              placeholder="Phone number"
              required
            />
          </div>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default ClientFormModal;

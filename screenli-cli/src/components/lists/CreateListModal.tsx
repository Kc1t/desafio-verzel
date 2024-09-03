// Modules
import { useState } from "react";
import { useRouter } from "next/navigation";

// Services
import { createList } from "@/services/list";

// Components
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

interface CreateListModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function CreateListModal({
  isOpen,
  onClose,
}: CreateListModalProps) {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await createList(name, description);
      onClose();
      window.location.reload();
    } catch (error) {
      console.error("Error creating list:", error);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[380px] sm:max-w-[425px] rounded-2xl bg-sub-dark text-white border-white/20">
        <DialogHeader>
          <DialogTitle>Crie uma lista</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="flex flex-col w-full gap-2">
          <Input
            type="text"
            className="w-full bg-sub-dark border-2 border-white/20 rounded-xl py-6 pr-12 pl-6 text-white focus:border-white/20"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Nome da lista"
            required
          />
          <Textarea
            className="w-full bg-sub-dark border-2 border-white/20 rounded-xl py-2 pr-12 pl-6 text-white focus:border-white/20 resize-none"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Descrição"
            required
          />
          <Button
            className="inline-flex px-6 rounded-xl bg-sub-dark text-white border-2 border-white/20 hover:border-white/60 transition-all ease-in-out duration-300 hover:bg-sub-dark"
            type="submit"
          >
            Criar Lista
          </Button>
        </form>
        <DialogFooter>
          {/* <Button className="hidden md:inline-flex px-6 rounded-xl bg-sub-dark text-white border-2 border-white/20" onClick={onClose}>
            Fechar
          </Button> */}
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

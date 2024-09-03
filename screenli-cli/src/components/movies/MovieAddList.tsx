// Modules
import React, { useState } from "react";

// Services
import { addMovieToList } from "@/services/list";

// Components
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";

// Props
interface MovieAddListProps {
  isOpen: boolean;
  onClose: () => void;
  lists: Array<{ _id: string; name: string }>;
  movieId: number;
}

export default function MovieAddList({
  isOpen,
  onClose,
  lists,
  movieId,
}: MovieAddListProps) {
  const [selectedList, setSelectedList] = useState<string>("");
  const [addSuccess, setAddSuccess] = useState<string | null>(null);
  const [addError, setAddError] = useState<string | null>(null);
  const { toast } = useToast();
  
  const handleAddMovieToList = async () => {
    if (selectedList && movieId) {
      try {
        await addMovieToList(selectedList, movieId);
        setAddSuccess("Filme adicionado à lista com sucesso!")
        toast({
          title: "🍿 Filme Adicionado!",
          // description: "Friday, February 10, 2023 at 5:57 PM",
        });
        setAddError(null);
        onClose();
      } catch (error) {
        console.error("Error adding movie to list:", error);
        setAddError("Erro ao adicionar filme à lista.");
        setAddSuccess(null);
      }
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] bg-sub-dark text-white border-white/20">
        <DialogHeader>
          <DialogTitle>Escolha uma lista</DialogTitle>
        </DialogHeader>
        <RadioGroup value={selectedList} onValueChange={setSelectedList}>
      {lists.map((list) => (
        <div
          key={list._id}
          className="flex items-start space-x-2 bg-sub-dark border-2 border-white/40 text-white py-4 px-2 rounded-xl justify-start cursor-pointer"
          onClick={() => setSelectedList(list._id)} // Atualiza o valor selecionado ao clicar
        >
          <RadioGroupItem value={list._id} id={list._id} className="bg-white" />
          <Label htmlFor={list._id}>{list.name}</Label>
        </div>
      ))}
    </RadioGroup>
        <DialogFooter>
          <Button className="hidden md:inline-flex px-6 rounded-xl bg-sub-dark text-white border-2 border-white/20" onClick={handleAddMovieToList} disabled={!selectedList}>
            Adicionar
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

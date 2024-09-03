// Components
import { Button } from "@/components/ui/button";

// Services
import { createList } from "@/services/list";

export default function CreateFavoriteListButton() {
  const handleCreateFavoriteList = async () => {
    try {
      await createList("favorito", "aaa");
      alert("Lista 'favorito' criada com sucesso!");
      window.location.reload();
    } catch (error) {
      console.error("Erro ao criar lista:", error);
    }
  };

  return (
    <Button
      onClick={handleCreateFavoriteList}
      className="inline-flex px-6 rounded-xl bg-blue-500 text-white border-2 border-blue-600 hover:border-blue-700 transition-all ease-in-out duration-300 hover:bg-blue-600"
    >
      Criar Lista Favorito
    </Button>
  );
}

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createList } from "@/services/list";

const CreateListPage = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    try {
      await createList(name, description);
      router.push("/lists");
    } catch (error) {
      console.error("Error creating list:", error);
    }
  };

  
  return (
    <div>
      <h1>Create a New List</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="List Name"
          required
        />
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Descrição"
          required
        />
        <button type="submit">Create List</button>
      </form>
    </div>
  );
};

export default CreateListPage;

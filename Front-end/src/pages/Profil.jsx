import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import CarouselSpacing from "@/layout/CarouselSpacing";
import ModalChangePassword from "../layout/ModalChangePassword";
import { useBooks } from "../layout/BookContext"; // Assurez-vous d'importer correctement le hook useBooks

const Profil = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const { books } = useBooks(); // Assurez-vous d'obtenir les livres depuis le contexte approprié

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div className="flex flex-col items-center p-6">
      <h1 className="text-4xl mb-6">Profil</h1>
      <div className="grid justify-center max-w-lg mb-8">
        <p className="mb-2">Email:</p>
        <input
          type="text"
          disabled
          className=" bg-gray-200 rounded-md py-2 px-3 mb-4"
          placeholder="Email"
        />
        <p className="mb-2">Pseudo:</p>
        <input
          type="text"
          disabled
          className=" bg-gray-200 rounded-md py-2 px-3 mb-4"
          placeholder="Pseudo"
        />
        <div className="flex justify-center mb-6">
          <Button onClick={openModal}>Changer de mot de passe</Button>
        </div>
        {modalOpen && <ModalChangePassword closeModal={closeModal} />}
      </div>
      <div className="w-full">
        <h1 className="text-3xl mb-8 text-center">Mes Livres:</h1>
        {books && books.length > 0 ? (
          <CarouselSpacing books={books} />
        ) : (
          <p>Aucun livre à afficher pour le moment.</p>
        )}
      </div>
    </div>
  );
};

export default Profil;

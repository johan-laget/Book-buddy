import { Button } from "@/components/ui/button";
import CarouselSpacing from "@/layout/CarouselSpacing";
import React, { useState } from "react";
import ModalChangePassword from "../layout/ModalChangePassword";

const Profil = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <div>
      <h1>Profil</h1>
      <p>Email:</p>
      <input
        type="text"
        disabled
        className="w-full bg-gray-200 rounded-md py-2 px-3 mb-4"
        placeholder="Email"
      />
      <p>Pseudo:</p>
      <input
        type="text"
        disabled
        className="w-full bg-gray-200 rounded-md py-2 px-3 mb-4"
        placeholder="Pseudo"
      />
      <Button onClick={openModal}>Changer de mot de passe</Button>
      {modalOpen && (
        <ModalChangePassword closeModal={closeModal} />
      )}
      <div className="">
        <h1 className="text-3xl mb-8">Mes Livres:</h1>
        <CarouselSpacing />
      </div>
    </div>
  );
};

export default Profil;

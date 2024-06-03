import { Button } from "@/components/ui/button";
import CarouselSpacing from "@/layout/CarouselSpacing";
import { useEffect, useState } from "react";
import ModalChangePassword from "../layout/ModalChangePassword";

const Profil = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");

  // Function to fetch user data
  const fetchUserData = async () => {
    try {
      const userId = localStorage.getItem("userId");

      const response = await fetch(`http://localhost:3000/get/user/${userId}`); // Adjust the endpoint as needed
      if (response.ok) {
        const data = await response.json();
        setEmail(data.email);
        setUsername(data.username);
      } else {
        console.error("Failed to fetch user data");
      }
    } catch (error) {
      console.error("An error occurred while fetching user data", error);
    }
  };

  // Fetch user data when the component mounts
  useEffect(() => {
    fetchUserData();
  }, []);

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
          className="bg-gray-200 rounded-md py-2 px-3 mb-4"
          value={email}
          placeholder="Email"
        />
        <p className="mb-2">Pseudo:</p>
        <input
          type="text"
          disabled
          className="bg-gray-200 rounded-md py-2 px-3 mb-4"
          value={username}
          placeholder="Pseudo"
        />
        <div className="flex justify-center mb-6">
          <Button onClick={openModal}>Changer de mot de passe</Button>
        </div>
        {modalOpen && <ModalChangePassword closeModal={closeModal} />}
      </div>
      <div className="w-full">
        <h1 className="text-3xl mb-8 text-center">Mes Livres:</h1>
        <CarouselSpacing />
      </div>
    </div>
  );
};

export default Profil;

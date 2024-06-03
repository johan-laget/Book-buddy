// src/pages/HomeUser.jsx

import React, { useState } from "react";
import { Button } from "../components/ui/button";
import { X } from "lucide-react";
import CardAdd from "../layout/CardAdd";
import { useBooks } from "../layout/BookContext";
import CarouselSpacing from "../layout/CarouselSpacing";
import CardBook from "../layout/CardBook"; // Import de CardBook

const HomeUser = () => {
  const [isCardOpen, setIsCardOpen] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null); // État pour le livre sélectionné
  const { books, addBook, toggleFavorite } = useBooks();

  const handleAddButtonClick = () => {
    setIsCardOpen(true);
  };

  const handleCloseCard = () => {
    setIsCardOpen(false);
  };

  const handleAddBook = (book) => {
    addBook(book);
    handleCloseCard();
  };

  const handleToggleFavorite = (id) => {
    toggleFavorite(id);
  };

  const booksToRead = books.filter((book) => book.status === "ALire");
  const booksInProgress = books.filter((book) => book.status === "EnCours");
  const booksFinished = books.filter((book) => book.status === "Termine");

  const handleOpenCardBook = (book) => {
    setSelectedBook(book);
  };

  const handleCloseCardBook = () => {
    setSelectedBook(null);
  };

  return (
    <div className="container mx-auto my-8 px-4">
      <h1 className="text-3xl font-bold underline mb-4">Mes Livres à lire:</h1>
      <CarouselSpacing books={booksToRead} toggleFavorite={handleToggleFavorite} />

      <h1 className="text-3xl font-bold underline mt-8 mb-4">En cours de lecture</h1>
      <CarouselSpacing books={booksInProgress} toggleFavorite={handleToggleFavorite} />

      <h1 className="text-3xl font-bold underline mt-8 mb-4">Finit</h1>
      <CarouselSpacing books={booksFinished} toggleFavorite={handleToggleFavorite} />

      <h1 className="text-3xl font-bold underline mt-8 mb-4">Ajouter un livre</h1>
      <Button className="w-[130px] h-[200px] bg-gray-700" onClick={handleAddButtonClick}>
        <X className="text-black w-12 h-24" />
      </Button>

      {isCardOpen && <CardAdd onAddBook={handleAddBook} onClose={handleCloseCard} />}
      
      {selectedBook && <CardBook book={selectedBook} onClose={handleCloseCardBook} />}
    </div>
  );
};

export default HomeUser;

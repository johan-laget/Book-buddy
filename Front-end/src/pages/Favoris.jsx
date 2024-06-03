// src/pages/Favoris.jsx

import React from "react";
import { useBooks } from "../layout/BookContext.jsx";
import CarouselSpacing from "../layout/CarouselSpacing.jsx";

const Favoris = () => {
  const { books } = useBooks();
  const favoriteBooks = books.filter((book) => book.favorite);

  return (
    <div className="container mx-auto my-8 px-4">
      <h1 className="text-3xl font-bold underline mb-4">Vos Favoris</h1>
      {favoriteBooks && favoriteBooks.length > 0 ? (
        <CarouselSpacing books={favoriteBooks} />
      ) : (
        <p>Aucun livre favori à afficher pour le moment.</p>
      )}
    </div>
  );
};

export default Favoris;

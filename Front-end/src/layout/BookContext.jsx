// src/layout/BookContext.jsx

import React, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid"; // Assurez-vous que "uuid" est installé

const BookContext = createContext();

export const useBooks = () => {
  return useContext(BookContext);
};

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  // Fonction pour ajouter un livre
  const addBook = (newBook) => {
    const bookWithId = { ...newBook, id: uuidv4(), favorite: false }; // Ajouter un ID unique et marquer comme non favori par défaut
    setBooks([...books, bookWithId]);
  };

  // Fonction pour marquer un livre comme favori
  const toggleFavorite = (id) => {
    const updatedBooks = books.map((book) =>
      book.id === id ? { ...book, favorite: !book.favorite } : book
    );
    setBooks(updatedBooks);
  };

  // Autres fonctions et valeurs du contexte
  const contextValues = {
    books,
    addBook,
    toggleFavorite,
    // Autres valeurs et fonctions à exporter
  };

  return (
    <BookContext.Provider value={contextValues}>
      {children}
    </BookContext.Provider>
  );
};

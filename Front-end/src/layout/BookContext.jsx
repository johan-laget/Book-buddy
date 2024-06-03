import React, { createContext, useContext, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const BookContext = createContext();

export const useBooks = () => {
  return useContext(BookContext);
};

export const BookProvider = ({ children }) => {
  const [books, setBooks] = useState([]);

  const addBook = (newBook) => {
    const bookWithId = { ...newBook, id: uuidv4(), favorite: false };
    setBooks([...books, bookWithId]);
  };

  const toggleFavorite = (id) => {
    const updatedBooks = books.map((book) =>
      book.id === id ? { ...book, favorite: !book.favorite } : book
    );
    setBooks(updatedBooks);
  };

  const contextValues = {
    books,
    addBook,
    toggleFavorite,
  };

  return (
    <BookContext.Provider value={contextValues}>
      {children}
    </BookContext.Provider>
  );
};

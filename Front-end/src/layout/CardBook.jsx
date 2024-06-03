// src/layout/CardBook.jsx

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X } from "lucide-react";
import { useBooks } from "../layout/BookContext";

const CardBook = ({ book, onClose }) => {
  const { updateBook } = useBooks();
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState({
    title: book.title,
    author: book.author,
    image: book.image,
    currentPage: book.currentPage,
    category: book.category,
    nombrepage: book.nombrepage,
  });

  useEffect(() => {
    setFormData({
      title: book.title,
      author: book.author,
      image: book.image,
      currentPage: book.currentPage,
      category: book.category,
      nombrepage: book.nombrepage,
    });
  }, [book]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = () => {
    updateBook(book.id, formData);
    setIsEditing(false);
  };

  const handleClickOutside = (e) => {
    if (e.target.classList.contains("fixed")) {
      onClose();
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50" onClick={handleClickOutside}>
      <Card className="w-[480px]" onClick={(e) => e.stopPropagation()}>
        <CardHeader className="flex justify-between items-center">
          <CardTitle>{isEditing ? "Edit Book" : "Book Details"}</CardTitle>
          <button className="text-black" onClick={onClose}>
            <X />
          </button>
        </CardHeader>
        <CardContent>
          {isEditing ? (
            <div className="flex flex-wrap items-center gap-1 justify-between">
              <div className="flex justify-between gap-8">
                <img src={formData.image} alt={formData.title} className="w-[80px] h-[120px] object-cover mb-10" />
              </div>
              <div className="grid gap-4">
                <label>
                  <strong>Titre: </strong>
                  <input type="text" name="title" value={formData.title} onChange={handleChange} />
                </label>
                <label>
                  <strong>Auteur(s): </strong>
                  <input type="text" name="author" value={formData.author} onChange={handleChange} />
                </label>
                <label>
                  <strong>Nombre de pages: </strong>
                  <input type="number" name="nombrepage" value={formData.nombrepage} onChange={handleChange} />
                </label>
                <label>
                  <strong>Page actuelle: </strong>
                  <input type="number" name="currentPage" value={formData.currentPage} onChange={handleChange} />
                </label>
                <label>
                  <strong>Catégorie: </strong>
                  <input type="text" name="category" value={formData.category} onChange={handleChange} />
                </label>
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <button onClick={() => setIsEditing(false)} className="bg-gray-500 text-white px-4 py-2 rounded">Annuler</button>
                <button onClick={handleSave} className="bg-blue-500 text-white px-4 py-2 rounded">Sauvegarder</button>
              </div>
            </div>
          ) : (
            <div className="flex flex-wrap items-center gap-1 justify-between">
              <div className="flex justify-between gap-8">
                <img src={book.image} alt={book.title} className="w-[160px] h-[280px] object-cover mb-10" />
              </div>
              <div className="grid gap-4">
                <p>
                  <strong>Titre: </strong>{book.title}
                </p>
                <p>
                  <strong>Auteur(s): </strong>{book.author}
                </p>
                <p>
                  <strong>Nombre de pages: </strong>{book.nombrepage}
                </p>
                <p>
                  <strong>Page actuelle: </strong>{book.currentPage}
                </p>
                <p>
                  <strong>Catégorie: </strong>{book.category}
                </p>
              </div>
              <div className="flex justify-end gap-2 mt-4">
                <button onClick={() => setIsEditing(true)} className="bg-blue-500 text-white px-4 py-2 rounded">Edit</button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default CardBook;

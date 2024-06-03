// src/layout/CardBook.jsx

import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { X } from "lucide-react";

const CardBook = ({ book, onClose }) => {
  const { title, author, image, currentPage, category, nombrepage } = book;

  const handleClickOutside = (e) => {
    if (e.target.classList.contains("fixed")) {
      onClose();
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50" onClick={handleClickOutside}>
      <Card className="w-[480px]" onClick={(e) => e.stopPropagation()}>
        <CardHeader className="flex justify-between items-center">
          <button className="text-black" onClick={onClose}>
            <X />
          </button>
        </CardHeader>
        <CardContent>
          <div>
            <div className="flex flex-wrap items-center gap-1 justify-between">
              <div className="flex justify-between gap-8"></div>
              <div className="flex justify-between gap-6 m-4">
                <div className="gap-6">
                  <img src={image} alt={title} className="w-[160px] h-[280px] object-cover mb-10" />
                </div>
                <div className="grid">
                  <p className="item-center">
                    <strong>Titre: </strong>
                    {title}
                  </p>

                  <div className="">
                    <p>
                      <strong>Auteur(s): </strong>
                      {author}
                    </p>
                  </div>
                  <div className="">
                    <p>
                      <strong>Nombre de pages: </strong>
                      {nombrepage}
                    </p>
                  </div>
                  <div className="">
                    <p>
                      <strong>Page actuelle: </strong>
                      {currentPage}
                    </p>
                  </div>
                  <div className="">
                    <p>
                      <strong>Catégorie: </strong>
                      {category}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardBook;

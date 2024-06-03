import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { X } from "lucide-react";
import SelectScrollable from "./SelectScrollable";

const CardAdd = ({ onClose }) => {
  const [image, setImage] = useState(null);
  const [imagePreview, setImagePreview] = useState("https://fakeimg.pl/130x200");
  const [selectedButton, setSelectedButton] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      setImagePreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const dataForm = new FormData(e.target);
    const newBook = {
      title: dataForm.get("title"),
      author: dataForm.get("author"),
      image: image,
      currentPage: dataForm.get("page"),
      category: dataForm.get("framework"),
      status: selectedButton, // Ajout de la propriété "status" pour enregistrer le statut du livre
    };

    // Ajoutez votre logique de soumission ici
    console.log(newBook);
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <Card className="w-[460px]">
        <CardHeader className="flex justify-between items-center">
          <button
            className="text-black"
            onClick={onClose}
          >
            <X />
          </button>
          <CardTitle>Enregistrer votre livre</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit}>
            <div className="flex flex-wrap items-center gap-1 justify-between">
              <div className="flex justify-between gap-8" >
              <div className="">
                <Label htmlFor="title">Titre du livre</Label>
                <Input id="title" name="title" placeholder="Nom du titre du livre" />
              </div>
              <div className="">
                <Label htmlFor="author">Auteur(s)</Label>
                <Input id="author" name="author" placeholder="Nom de(s) l'auteur(s) du livre" />

              </div>
              </div>
              <div className="flex justify-between gap-6 m-4 " >
              <div className="gap-6">
                <img src={imagePreview} alt="Preview" className="w-[80px] h-[130px] object-cover" />
              </div>
              <div className="">
                <Label htmlFor="image">Importer l'image de ton livre</Label>
                <Input id="image" name="image" type="file" onChange={handleImageChange} />
              </div>
              </div>
              <div className="flex gap-8">
                
              <div className="  ">
                <Label htmlFor="page">Nombre de pages</Label>
                <Input id="page" name="page" placeholder="Exemple:20" />
              </div>
              <div className=" ">
                <Label htmlFor="currentPage">Page actuelle</Label>
                <Input id="currentPage" name="currentPage" placeholder="Exemple: 10" />
              </div>
              </div>
              <div className="items-center mt-4 ">
                <Label htmlFor="framework">Catégorie</Label>
                <SelectScrollable/>
              </div>
            </div>
            <div className="flex gap-4 justify-center mt-4">
              <Button
                type="button"
                variant={selectedButton === "ALire" ? "solid" : "outline"}
                onClick={() => setSelectedButton("ALire")}
                className={selectedButton === "ALire" ? "text-white bg-blue-500" : ""}
              >
                À lire
              </Button>
              <Button
                type="button"
                variant={selectedButton === "EnCours" ? "solid" : "outline"}
                onClick={() => setSelectedButton("EnCours")}
                className={selectedButton === "EnCours" ? "text-white bg-orange-500" : ""}
              >
                En cours
              </Button>
              <Button
                type="button"
                variant={selectedButton === "Termine" ? "solid" : "outline"}
                onClick={() => setSelectedButton("Termine")}
                className={selectedButton === "Termine" ? "text-white bg-green-700" : ""}
              >
                Terminé
              </Button>
            </div>
            <CardFooter className="flex justify-center mt-4">
              <Button type="submit">Ajouter</Button>
            </CardFooter>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default CardAdd;

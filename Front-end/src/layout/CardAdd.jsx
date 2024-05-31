import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { X } from "lucide-react";

const CardAdd = ({ onClose }) => {
  return (
    <div className="mt-8 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
      <Card className="w-[350px]">
        <CardHeader>
          <CardTitle>
            <button
              className="text-black absolute top-4 right-4"
              onClick={onClose}
            >
              <X />
            </button>
          </CardTitle>
          <CardDescription className="text-black text-3xl text-bold flex justify-center">
            Enregistrer votre livre
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form>
            <div className="grid w-full items-center gap-4">
              <div className="flex flex-col space-y-1.5">
                <Label htmlFor="name">Titre du livre</Label>
                <Input id="name" placeholder="Nom du titre du livre" />
                <Label htmlFor="name">Auteur(s)</Label>
                <Input
                  id="author"
                  placeholder="Nom de(s) l'auteur(s) du livre"
                />
                <Label htmlFor="name">Importe l'image de ton livre</Label>
                <Input id="image" placeholder="C://..." />
                <Label htmlFor="name">Page actuelle</Label>
                <Input id="page" placeholder="Exemple: [0/100]" />
                <div className="flex flex-col space-y-1.5">
                  <Label htmlFor="framework">Framework</Label>
                  <Select>
                    <SelectTrigger id="framework">
                      <SelectValue placeholder="Select" />
                    </SelectTrigger>
                    <SelectContent position="popper">
                      <SelectItem value="Rommance">Rommance</SelectItem>
                      <SelectItem value="Action">Action</SelectItem>
                      <SelectItem value="Commique">Commique</SelectItem>
                      <SelectItem value="Historique">Historique</SelectItem>
                      <SelectItem value="Aventure">Aventure</SelectItem>
                      <SelectItem value="Fantasy">Fantasy</SelectItem>
                      <SelectItem value="ScienceFiction">Science Fiction</SelectItem>
                      <SelectItem value="Psychologique">Psychologique</SelectItem>
                      <SelectItem value="Satire">Satire</SelectItem>
                      <SelectItem value="Apprentissage">Apprentissage</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          </form>
          <div className="flex gap-4 justify-center mt-2 ">
            <Button>A lire</Button>
            <Button>En cours</Button>
            <Button>Terminé</Button>
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button>Ajouter</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default CardAdd;

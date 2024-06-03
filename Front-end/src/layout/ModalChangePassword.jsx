import { Button } from "@/components/ui/button";
import { Form, FormField, FormItem, FormLabel } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { zodResolver } from "@hookform/resolvers/zod";
import { X } from "lucide-react";
import { useForm } from "react-hook-form";
import { z } from "zod";

const FormSchema = z
  .object({
    currentPassword: z
      .string()
      .min(1, { message: "Current password is required." }),
    newPassword: z
      .string()
      .min(6, { message: "New password must be at least 6 characters." }),
    confirmNewPassword: z.string().min(6, {
      message: "Confirm new password must be at least 6 characters.",
    }),
  })
  .refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "New passwords do not match.",
    path: ["confirmNewPassword"], // Set the error on the confirmNewPassword field
  });

const ModalChangePassword = ({ closeModal }) => {
  const form = useForm({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      currentPassword: "",
      newPassword: "",
      confirmNewPassword: "",
    },
  });

  const onSubmit = async (data) => {
    try {
      const token = localStorage.getItem("token");
      const userId = localStorage.getItem("userId");

      if (!userId) {
        toast({
          title: "Erreur",
          description: "ID utilisateur non trouvé.",
        });
        return;
      }

      const response = await fetch(`http://localhost:3000/put/user/${userId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
          Authorization: `${token}`,
        },
        body: JSON.stringify({
          currentPassword: data.currentPassword,
          newPassword: data.newPassword,
        }),
      });

      if (response.ok) {
        alert("Mot de passe changé avec succès.")
        closeModal();
      } else {
        const errorData = await response.json();
        toast({
          title: "Erreur",
          description:
            errorData.message || "Erreur lors du changement du mot de passe.",
        });
      }
    } catch (error) {
      toast({
        title: "Erreur",
        description:
          "Une erreur est survenue lors du changement du mot de passe.",
      });
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center bg-black bg-opacity-50 z-50">
      <div className="bg-white rounded-md p-8 w-96">
        <Button onClick={closeModal}>
          <X />
        </Button>
        <h2 className="text-lg mb-4">Changer le mot de passe</h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="currentPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Mot de passe actuel</FormLabel>
                  <Input
                    type="password"
                    placeholder="Mot de passe actuel"
                    {...field}
                  />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="newPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Nouveau mot de passe</FormLabel>
                  <Input
                    type="password"
                    placeholder="Nouveau mot de passe"
                    {...field}
                  />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="confirmNewPassword"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Confirmer le nouveau mot de passe</FormLabel>
                  <Input
                    type="password"
                    placeholder="Confirmer le nouveau mot de passe"
                    {...field}
                  />
                </FormItem>
              )}
            />
            <Button type="submit" className="flex justify-center items-center">
              Enregistrer
            </Button>
          </form>
        </Form>
      </div>
    </div>
  );
};

export default ModalChangePassword;

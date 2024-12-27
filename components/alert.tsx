import React from "react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { createRoot } from "react-dom/client";

const showAlertDialog = (title: string) => {
  return new Promise((resolve) => {
    const containerElement = document.createElement("div");
    document.body.appendChild(containerElement);
    const root = createRoot(containerElement);

    const handleClose = (result: boolean) => {
      root.unmount();
      containerElement.remove();
      resolve(result);
    };

    root.render(
      <AlertDialog open={true} onOpenChange={() => handleClose(false)}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>{title}</AlertDialogTitle>
            {/* <AlertDialogDescription>{description}</AlertDialogDescription> */}
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction onClick={() => handleClose(true)}>
              Ok
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    );
  });
};

export default showAlertDialog;

import React, { useState } from "react";
import SuccessDialog from "../components/SuccessDialog";
import { useLocation } from "react-router-dom";

export default function Tasks() {
  const location = useLocation();
  var successDialogRenderer = null;
  if (location.state) {
    if (location.state.success) {
      successDialogRenderer = (
        <SuccessDialog
          title={"Authentication Successful!"}
          description={
            "Congratulations, Your authentication was successful! We're delighted to grant you access to your account. Your credentials have been verified, and you are now securely logged in. Welcome back, and we hope you have a great experience using our platform!"
          }
          openstate={true}
        />
      );
    }
  }
  return (
    <div>
      Tasks
      {successDialogRenderer}
    </div>
  );
}

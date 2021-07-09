import React from "react";

import { Button } from "@chakra-ui/react";
import { auth } from "../../utils/firebase";
import { IonHeader, IonTitle, IonToolbar } from "@ionic/react";
import { SignOut } from "../../components/authbutton/Authbutton";

const Logout: React.FC = () => {
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Logout</IonTitle>
        </IonToolbar>
      </IonHeader>
      <Button onClick={() => auth.signOut()}>Logout</Button>
    </>
  );
};

export default Logout;

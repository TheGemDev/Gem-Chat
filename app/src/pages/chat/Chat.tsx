import React from "react";
import { Button, Avatar, Stack, Divider, AvatarBadge } from "@chakra-ui/react";
import ExploreContainer from "../../components/ExploreContainer";
import {
  IonAvatar,
  IonButtons,
  IonContent,
  IonHeader,
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import { useParams } from "react-router";

const Chat: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  return (
    <>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'></IonButtons>
          <IonTitle>Chats</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent
        scrollEvents={true}
        onIonScrollStart={() => {}}
        onIonScroll={() => {}}
        onIonScrollEnd={() => {}}></IonContent>
      <Stack direction='column' spacing={6}>
        <Avatar name='Dan Abrahmov' src='https://bit.ly/code-beast'>
          <AvatarBadge boxSize='1.25em' bg='white' borderColor='green.500' />
        </Avatar>
        <Divider />
        <Avatar
          name='Dan Abrahmov'
          src='https://images.unsplash.com/photo-1606787947360-4181fe0ab58c?ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80'>
          <AvatarBadge boxSize='1.25em' bg='white' borderColor='gray.500' />
        </Avatar>
        <Divider />
        <Avatar
          name='Dan Abrahmov'
          src='https://images.unsplash.com/photo-1563669528538-1f3d1d08791b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8M3wyNTQ4Mzg2fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=700&q=60'>
          <AvatarBadge boxSize='1.25em' bg='white' borderColor='gray.500' />
        </Avatar>
        <Divider />
        <Avatar
          name='Dan Abrahmov'
          src='https://images.unsplash.com/photo-1495385717656-597bdd033044?ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8NnwyNTQ4Mzg2fHxlbnwwfHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'>
          <AvatarBadge boxSize='1.25em' bg='white' borderColor='green.500' />
        </Avatar>
        <Divider />
        <Avatar
          name='Dan Abrahmov'
          src='https://images.unsplash.com/photo-1520409364224-63400afe26e5?ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDR8dG93SlpGc2twR2d8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=60'>
          <AvatarBadge boxSize='1.25em' bg='white' borderColor='green.500' />
        </Avatar>
        <Divider />
        <Avatar name='Dan Abrahmov' src='https://bit.ly/code-beast' />
      </Stack>
    </>
  );
};

export default Chat;

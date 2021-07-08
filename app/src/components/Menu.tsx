import {
  IonContent,
  IonIcon,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonMenu,
  IonMenuToggle,
  IonNote,
  IonAvatar,
} from "@ionic/react";

import { useLocation } from "react-router-dom";
import {
  archiveOutline,
  archiveSharp,
  archive,
  bookmarkOutline,
  heartOutline,
  heartSharp,
  mailOutline,
  mailSharp,
  paperPlaneOutline,
  paperPlaneSharp,
  paperPlane,
  trashOutline,
  trashSharp,
  warningOutline,
  warningSharp,
  peopleCircleOutline,
  peopleCircleSharp,
  peopleCircle,
  homeOutline,
  homeSharp,
  home,
  logOutOutline,
  logOutSharp,
  logOut,
} from "ionicons/icons";
import "./Menu.css";

import { AvatarBadge, Avatar } from "@chakra-ui/avatar";
import { Wrap, WrapItem } from "@chakra-ui/react";
import { auth } from "../utils/firebase";

interface AppPage {
  url: string;
  iosIcon: string;
  mdIcon: string;
  title: string;
}

const appPages: AppPage[] = [
  {
    title: "Chats",
    url: "/Chat",
    iosIcon: paperPlaneOutline,
    mdIcon: paperPlane,
  },
  {
    title: "Group",
    url: "/Group",
    iosIcon: peopleCircleOutline,
    mdIcon: peopleCircle,
  },
  {
    title: "House",
    url: "/House",
    iosIcon: homeOutline,
    mdIcon: home,
  },
  {
    title: "Status",
    url: "/Status",
    iosIcon: archiveOutline,
    mdIcon: archive,
  },
  {
    title: "Logout",
    url: "/Logout",
    iosIcon: logOutOutline,
    mdIcon: logOut,
  },
];

const labels = ["Family", "Friends", "Notes", "Work", "Travel", "Reminders"];

const Menu: React.FC = () => {
  const location = useLocation();
  const user = auth.currentUser;
  const unknown: string = "User";
  return (
    <IonMenu contentId='main' type='overlay'>
      <IonContent>
        {/*<IonAvatar>
          <img src={user?.photoURL} />
        </IonAvatar>*/}
        <IonList id='inbox-list'>
          <IonListHeader>{user?.displayName || unknown}</IonListHeader>
          <IonNote>about User...</IonNote>
          {appPages.map((appPage, index) => {
            return (
              <IonMenuToggle key={index} autoHide={false}>
                <IonItem
                  className={
                    location.pathname === appPage.url ? "selected" : ""
                  }
                  routerLink={appPage.url}
                  routerDirection='none'
                  lines='none'
                  detail={false}>
                  <IonIcon
                    slot='start'
                    ios={appPage.iosIcon}
                    md={appPage.mdIcon}
                  />
                  <IonLabel>{appPage.title}</IonLabel>
                </IonItem>
              </IonMenuToggle>
            );
          })}
        </IonList>

        <IonList id='labels-list'>
          <IonListHeader>Labels</IonListHeader>
          {labels.map((label, index) => (
            <IonItem lines='none' key={index}>
              <IonIcon slot='start' icon={bookmarkOutline} />
              <IonLabel>{label}</IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;

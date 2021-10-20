import { IonApp, IonRouterOutlet, IonSplitPane } from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";
import Menu from "./components/Menu";
import Chat from "./pages/chat/Chat";
import House from "./pages/house/House";
import Start from "./pages/start/Start";
import Logout from "./pages/logout/Logout";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Light Theme variables */
import "./themes/lightTheme/variables.css";

/* Dark Theme Variables */
//import "./themes/darkTheme/variables.css";

import { auth } from "../src/utils/firebase";
import { useAuthState } from "react-firebase-hooks/auth";

const App: React.FC = () => {
  const user = auth.currentUser;
  return (
    <IonApp>
      <IonReactRouter>
        <IonSplitPane contentId='main'>
          <Menu />
          <IonRouterOutlet id='main'>
            <Route path='/' exact={true}>
              <section>
                <Start />
              </section>
            </Route>
            <Route path='/Chat' exact={true}>
              <section>{user ? <Chat /> : <Start />}</section>
            </Route>
            <Route path='/House' exact={true}>
              <House />
            </Route>
            <Route path='/Logout' exact={true}>
              <Logout />
            </Route>
          </IonRouterOutlet>
        </IonSplitPane>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;

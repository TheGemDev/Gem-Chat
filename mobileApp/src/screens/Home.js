import React from "react";
import { View, Linking } from "react-native";
import * as firebase from "firebase";
import { Ionicons } from "@expo/vector-icons";
//import config from "../../config";

import {
  Layout,
  Button,
  Text,
  TopNav,
  Section,
  theme,
  SectionContent,
  Avatar,
} from "react-native-rapi-ui";

export default function ({ navigation }) {
  return (
    <Layout>
      <TopNav
        middleContent="Gem Chat"
        leftContent={
          <Avatar source={require("./login.png")} size="md" shape="round" />
        }
        leftAction={() => {
          navigation.navigate("Profile");
        }}
        rightContent={
          <Ionicons name="settings-outline" size={25} color={theme.black} />
        }
      />
      <View
        style={{
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
          marginHorizontal: 20,
        }}
      >
        <Section>
          <SectionContent>
            <Button
              text="Go to second screen"
              onPress={() => {
                navigation.navigate("SecondScreen");
              }}
              style={{
                marginTop: 10,
              }}
            />
            <Button
              status="danger"
              text="Logout"
              onPress={() => {
                firebase.default.auth().signOut();
              }}
              style={{
                marginTop: 10,
              }}
            />
          </SectionContent>
        </Section>
      </View>
    </Layout>
  );
}

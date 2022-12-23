import {
  Profiles,
  LensProvider,
} from "@lens-protocol/react-native-lens-ui-kit";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ProfileView from "./ProfileView";
import ViewComments from "./ViewComments";
import ViewFollowing from "./ViewFollowing";
const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: "black",
  },
};

export default function App() {
  return (
    <LensProvider environment="testnet" theme="dark">
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={ProfileComponent} />
          <Stack.Screen name="Profile" component={ProfileView} />
          <Stack.Screen name="ViewFollowing" component={ViewFollowing} />
          <Stack.Screen name="ViewComments" component={ViewComments} />
        </Stack.Navigator>
      </NavigationContainer>
    </LensProvider>
  );
}

function ProfileComponent({ navigation }: { navigation: any }) {
  return (
    <Profiles
      onProfilePress={(profile: any) =>
        navigation.navigate("Profile", { profile })
      }
    />
  );
}

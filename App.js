import Login from './auth/Login';
import { SafeAreaView, StyleSheet, StatusBar } from "react-native";
import { ClerkProvider, SignedIn, SignedOut } from "@clerk/clerk-expo";
import { NavigationContainer } from '@react-navigation/native';
import TabNavigation from './Navigations/TabNavigation';



export default function App() {
  return (
    <ClerkProvider publishableKey={"pk_test_aW50ZWdyYWwtaGlwcG8tNDQuY2xlcmsuYWNjb3VudHMuZGV2JA"}>
      <SafeAreaView style={styles.container}>
        <StatusBar hidden />
      <SignedIn>
          <NavigationContainer>
            <TabNavigation />
          </NavigationContainer>
        </SignedIn>
        <SignedOut>
        <Login />
        </SignedOut>
      </SafeAreaView>
    </ClerkProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});

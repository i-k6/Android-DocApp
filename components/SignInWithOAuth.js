//copy pasted from clerk docs used for social auths

import React from "react";
import * as WebBrowser from "expo-web-browser";
import { Dimensions, Text, TouchableOpacity } from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../Hooks/Hook";

WebBrowser.maybeCompleteAuthSession();

const SignInWithOAuth = () => {
  useWarmUpBrowser();

  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });

  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();

      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);

  return (
    <TouchableOpacity
          onPress={onPress}
          style={{
          padding: 25,
          alignItems:'center',
          backgroundColor:'#4169e1',
          borderRadius: 80,
          marginTop: 25,
          width:Dimensions.get('screen').width*0.8
        }}>
          <Text style={{fontSize:15,
            color:'white',
            fontWeight: "bold"
            }}>Login With Google</Text>
        </TouchableOpacity>
  );
}

export default SignInWithOAuth;

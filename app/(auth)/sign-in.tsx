/*
  Code created by Tech4L and modified for ProofVault.Global
*/

import { useQueryClient } from "@tanstack/react-query";
import { useRouter } from "expo-router";
import { useState } from "react";
import { Alert, Text, TextInput, TouchableOpacity, View } from "react-native";

import { trpc } from "@/utils/api";
import { authClient } from "@/utils/auth";

import styles from "@/global/styles";

export default function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();
  const queryClient = useQueryClient();

  const handleEmailSignIn = async () => {
    // Implement email/password authentication logic here
    console.log("Sign in with email:", email, "and password:", password);
    await authClient.signIn.email(
      {
        email,
        password,
      },
      {
        onError: (error) => {
          console.error(error);
        },
        onSuccess: async () => {
          await queryClient.refetchQueries({
            queryKey: trpc.auth.getSession.queryKey(),
          });
          router.replace("/(tabs)");
        },
      },
    );
  };
  const handleSocialSignIn = async (provider: "discord" | "google") => {
    // Implement Discord authentication logic here
    console.log("Sign in with Discord");
    const { error, data } = await authClient.signIn.social({
      provider: provider,
      callbackURL: `/`,
    });
    if (error) {
      Alert.alert("Error", error.message);
      console.error(error);
    }
    if (data) {
      console.log("data when sign in with discord", data);
      router.replace("/");
    }
  };

  return (
    <View>
      <View>
        <Text style={[styles.title, styles.centerText]}>
          ProofVault.Global
        </Text>
      </View>
      <View>
        <Text style={[styles.centerText]}>{'\n'}</Text>
      </View>
      <View>
        <Text style={[styles.heading2, styles.centerText]}>
          Sign in to your account
        </Text>
      </View>

      <View>
        <View>
          <TextInput
            style={styles.centerText}
            placeholder="Enter your email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
            autoCapitalize="none"
          />
        </View>

        <View>
          <TextInput
            style={styles.centerText}
            placeholder="Enter your password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
        </View>
      </View>

      <View>
        <Text style={[styles.centerText]}>{'\n'}</Text>
      </View>

      <TouchableOpacity
        onPress={handleEmailSignIn}
      >
        <Text style={[styles.heading2, styles.centerText]}>Sign In</Text>
      </TouchableOpacity>

      <View>
        <Text style={[styles.centerText]}>{'\n'}</Text>
      </View>

      <TouchableOpacity
        onPress={() => handleSocialSignIn("discord")}
      >
        <Text style={[styles.heading2, styles.centerText]}>Continue with Discord</Text>
      </TouchableOpacity>

      <View>
        <Text style={[styles.centerText]}>{'\n'}</Text>
      </View>

      <View>
        <TouchableOpacity onPress={() => router.push("/sign-up")}>
          <Text style={[styles.heading2, styles.centerText]}>Don't have an account? Sign up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

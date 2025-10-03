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

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const router = useRouter();
  const queryClient = useQueryClient();
  const handleSignUp = async () => {
    // Validate passwords match
    if (password !== confirmPassword) {
      console.error("Passwords do not match");
      return;
    }
    // Implement sign up logic here
    console.log(
      "Sign up with email:",
      email,
      "username:",
      username,
      "and password:",
      password,
    );
    // After successful registration, navigate to the main app or sign-in
    await authClient.signUp.email(
      {
        email,
        password,
        name: username || email,
      },
      {
        onError: (error) => {
          Alert.alert(
            "An error occured while signing up: ",
            error.error.message,
          );
        },
        onSuccess: async () => {
          await queryClient.invalidateQueries({
            queryKey: trpc.auth.getSession.queryKey(),
          });
          router.replace("/");
        },
      },
    );
  };

  const navigateToSignIn = () => {
    router.push("/sign-in");
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
          Create your account
        </Text>
      </View>

      <View className="mb-6 space-y-4">
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
            placeholder="Enter your username"
            value={username}
            onChangeText={setUsername}
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

        <View>
          <TextInput
            style={styles.centerText}
            placeholder="Confirm your password"
            value={confirmPassword}
            onChangeText={setConfirmPassword}
            secureTextEntry
          />
        </View>
      </View>

      <View>
        <Text style={[styles.centerText]}>{'\n'}</Text>
      </View>

      <TouchableOpacity
        className="mb-4 rounded-md bg-primary p-4"
        onPress={handleSignUp}
      >
        <Text style={[styles.heading2, styles.centerText]}>
          Sign Up
        </Text>
      </TouchableOpacity>
      
      <View>
        <Text style={[styles.centerText]}>{'\n'}</Text>
      </View>

      <View className="flex-row justify-center">
        <TouchableOpacity onPress={navigateToSignIn}>
          <Text style={[styles.heading2, styles.centerText]}>Already have an account? Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

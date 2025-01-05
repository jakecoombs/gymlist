import { Stack } from "expo-router";
import React from "react";
import { StyleSheet, useColorScheme } from "react-native";
import { ThemedText } from "./ThemedText";
import { Ionicons } from "@expo/vector-icons";
import { ThemedView } from "./ThemedView";
import { Colors } from "@/constants/Colors";

export default function NotFoundScreen() {
  const colorScheme = useColorScheme() ?? "light";
  return (
    <>
      <Stack.Screen options={{ title: "Not Found" }} />
      <ThemedView
        style={[
          styles.container,
          { backgroundColor: Colors[colorScheme].background },
        ]}
      >
        <Ionicons name="warning" size={50} color={Colors[colorScheme].text} />
        <ThemedText type="title">Page not found.</ThemedText>
      </ThemedView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

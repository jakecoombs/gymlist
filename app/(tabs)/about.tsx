import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { Text, View, StyleSheet } from "react-native";

export default function AboutScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>About screen</ThemedText>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

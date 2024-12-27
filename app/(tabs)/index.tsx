import { Text, View, StyleSheet } from "react-native";
import WorkoutList from "@/components/WorkoutList";
import { ThemedView } from "@/components/ThemedView";
import { ThemedText } from "@/components/ThemedText";

export default function Index() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText>Workouts</ThemedText>
      <WorkoutList />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});

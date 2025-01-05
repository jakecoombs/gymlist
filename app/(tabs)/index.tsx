import { StyleSheet } from "react-native";
import WorkoutList from "@/components/WorkoutList";
import { ThemedView } from "@/components/ThemedView";

export default function Index() {
  return (
    <ThemedView style={styles.container}>
      <WorkoutList />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
  },
});

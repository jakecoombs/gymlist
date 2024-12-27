import { Text, View, StyleSheet } from "react-native";
import WorkoutList from "@/components/workoutList";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Workouts</Text>
      <WorkoutList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
  },
  text: {
    color: "#fff",
  },
  button: {
    fontSize: 20,
    textDecorationLine: "underline",
    color: "#fff",
  },
});

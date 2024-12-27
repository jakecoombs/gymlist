import React from "react";
import { FlatList, Text, View } from "react-native";
import { WORKOUTS } from "@/data";

const WorkoutList = () => {
  const workouts = WORKOUTS;

  return (
    <View>
      <FlatList
        data={workouts}
        renderItem={({ item }) => (
          <View>
            <Text>{item.name}</Text>
            <Text>{item.description}</Text>
          </View>
        )}
      />
    </View>
  );
};

export default WorkoutList;

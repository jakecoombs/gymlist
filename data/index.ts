export interface Exercise {
  id: number;
  name: string;
  description: string;
  sets: number;
  reps: number;
  weight: {
    unit: string;
    value: number;
  };
}

export interface Workout {
  id: number;
  name: string;
  description: string;
  created: string;
  lastWorkout: string;
  exercises: Exercise[];
}

export const EXERCISES: Exercise[] = [
  {
    id: 1,
    name: "Pull-ups",
    description: "Pull-ups are a great exercise for your back and biceps.",
    sets: 3,
    reps: 12,
    weight: {
      unit: "kg",
      value: 20,
    },
  },
  {
    id: 2,
    name: "Bicep Curls",
    description: "Bicep curls are a great exercise for your biceps.",
    sets: 3,
    reps: 12,
    weight: {
      unit: "kg",
      value: 15,
    },
  },
  {
    id: 3,
    name: "Bench Press",
    description: "Bench press is a great exercise for your chest and triceps.",
    sets: 3,
    reps: 10,
    weight: {
      unit: "kg",
      value: 40,
    },
  },
  {
    id: 4,
    name: "Tricep Dips",
    description: "Tricep dips are a great exercise for your triceps.",
    sets: 3,
    reps: 12,
    weight: {
      unit: "kg",
      value: 0,
    },
  },
];

export const WORKOUTS: Workout[] = [
  {
    id: 1,
    name: "Back and Biceps",
    description: "This workout is designed to target your back and biceps.",
    created: "2021-09-01T00:00:00Z",
    lastWorkout: "2024-12-27T00:00:00Z",
    exercises: [
      EXERCISES[0],
      EXERCISES[1],
    ],
  },
  {
    id: 2,
    name: "Chest and Triceps",
    description: "This workout is designed to target your chest and triceps.",
    created: "2021-09-02T00:00:00Z",
    lastWorkout: "2024-12-28T00:00:00Z",
    exercises: [
      EXERCISES[2],
      EXERCISES[3]
    ],
  },
];

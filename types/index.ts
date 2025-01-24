
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

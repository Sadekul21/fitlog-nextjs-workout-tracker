import { Workout } from "@/types/workout";

const BASE_URL = "https://api.abcz.workers.dev/api/fitlog";

const getNumber = (value: unknown, fallback = 0) => {
  if (typeof value === "number") return value;

  if (typeof value === "string") {
    const number = Number(value.match(/[\d.]+/)?.[0]);

    return Number.isNaN(number) ? fallback : number;
  }

  return fallback;
};

const normalizeWorkout = (item: any): Workout => {
  const categories =
    item.categories ||
    item.category ||
    item.tags ||
    item.muscleGroups ||
    item.muscle_groups ||
    [];

  const instructions =
    item.instructions ||
    item.steps ||
    [];

  return {
    id: String(
      item.id ??
      item._id ??
      item.workoutId ??
      ""
    ),

    name:
      item.name ??
      item.title ??
      item.workoutName ??
      "Workout",

    image:
      item.image ??
      item.imageUrl ??
      item.image_url ??
      "",

    categories: Array.isArray(categories)
      ? categories
      : [categories],

    equipment:
      item.equipment ??
      "Bodyweight",

    difficulty:
      item.difficulty ??
      item.level ??
      "Intermediate",

    sets: item.sets ?? "4",

    reps: String(item.reps ?? "8-10"),

    duration: getNumber(item.duration),

    calories: getNumber(item.calories),

    rating: getNumber(
      item.rating,
      4.5
    ),

    description:
      item.description ??
      "Build strength and improve performance with this workout.",

    instructions: Array.isArray(instructions)
      ? instructions
      : [],
  };
};

export const getWorkouts = async (): Promise<Workout[]> => {
  const res = await fetch(BASE_URL, {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed to load workouts");
  }

  const json = await res.json();

  const rawData = Array.isArray(json)
    ? json
    : json.data ?? json.workouts ?? [];

  return rawData.map(normalizeWorkout);
};

export const getWorkout = async (
  id: string
): Promise<Workout | null> => {
  try {
    const res = await fetch(
      `${BASE_URL}/${id}`,
      {
        cache: "no-store",
      }
    );

    if (!res.ok) return null;

    const json = await res.json();

    return normalizeWorkout(
      json.data ?? json.workout ?? json
    );
  } catch {
    return null;
  }
};

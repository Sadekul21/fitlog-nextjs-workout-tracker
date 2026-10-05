import Hero from "@/components/home/Hero";
import WorkoutLibrary from "@/components/home/WorkoutLibrary";
import { getWorkouts } from "@/lib/api";

const HomePage = async () => {
  const workouts = await getWorkouts();

  return (
    <>
      <Hero />

      <WorkoutLibrary
        workouts={workouts}
      />
    </>
  );
};

export default HomePage;

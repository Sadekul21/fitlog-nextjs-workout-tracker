"use client";

import { FitlogContext } from "@/context/FitlogContext";
import { Workout } from "@/types/workout";
import { useContext } from "react";

const WorkoutActions = ({
  workout,
}: {
  workout: Workout;
}) => {
  const {
    addToPlan,
    saveWorkout,
    isInPlan,
    isSaved,
    plan,
  } = useContext(FitlogContext);

  const inPlan = isInPlan(workout.id);
  const saved = isSaved(workout.id);

  const planFull =
    plan.length >= 5 && !inPlan;

  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">

      <button
        onClick={() =>
          addToPlan(workout)
        }
        disabled={inPlan || planFull}
        className="btn border-0 bg-[#ccff00] text-black hover:bg-white disabled:bg-gray-700 disabled:text-gray-400"
      >
        +{" "}
        {inPlan
          ? "Already in plan"
          : planFull
          ? "Plan is full"
          : "Add to today's plan"}
      </button>

      <button
        onClick={() =>
          saveWorkout(workout)
        }
        disabled={saved}
        className="btn border border-[#ccff00] bg-transparent text-[#ccff00]"
      >
        ♡{" "}
        {saved
          ? "Saved"
          : "Save for later"}
      </button>

    </div>
  );
};

export default WorkoutActions;

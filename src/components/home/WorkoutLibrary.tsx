"use client";

import { useMemo, useState } from "react";

import { Workout } from "@/types/workout";
import WorkoutCard from "./WorkoutCard";

interface WorkoutLibraryProps {
  workouts: Workout[];
}

type SortOption =
  | "duration"
  | "calories"
  | "rating";

const WorkoutLibrary = ({
  workouts,
}: WorkoutLibraryProps) => {
  const [sortBy, setSortBy] =
    useState<SortOption>("duration");

  const sortedWorkouts = useMemo(() => {
    return [...workouts].sort((a, b) => {
      if (sortBy === "rating") {
        return b.rating - a.rating;
      }

      if (sortBy === "calories") {
        return b.calories - a.calories;
      }

      return a.duration - b.duration;
    });
  }, [workouts, sortBy]);

  return (
    <section
      id="library"
      className="fitlog-container py-20"
    >

      {/* HEADING */}
      <div className="mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">

        <div>
          <p className="mb-3 text-xs font-black tracking-[0.3em] text-[#ccff00]">
            WORKOUTS
          </p>

          <h2 className="fitlog-title text-4xl md:text-5xl">
            THE LIBRARY
          </h2>

          <p className="mt-3 text-gray-400">
            Twelve lifts covering every major
            muscle group.
          </p>
        </div>

        {/* SORT */}
        <div className="flex items-center gap-3">

          <span className="text-xs font-bold uppercase text-gray-400">
            Sort By
          </span>

          <select
            value={sortBy}
            onChange={(e) =>
              setSortBy(
                e.target.value as SortOption
              )
            }
            className="select border-[#343939] bg-[#171a1a]"
          >
            <option value="duration">
              Duration
            </option>

            <option value="calories">
              Calories
            </option>

            <option value="rating">
              Rating
            </option>
          </select>

        </div>
      </div>

      {/* GRID */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

        {sortedWorkouts.map((workout) => (
          <WorkoutCard
            key={workout.id}
            workout={workout}
          />
        ))}

      </div>

    </section>
  );
};

export default WorkoutLibrary;

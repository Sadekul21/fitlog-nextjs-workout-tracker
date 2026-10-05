"use client";

import Link from "next/link";

import { Workout } from "@/types/workout";

interface Props {
  workout: Workout;
  type: "plan" | "saved";

  done?: boolean;

  onDone?: () => void;
  onRemove: () => void;
}

const PlanWorkoutCard = ({
  workout,
  type,
  done,
  onDone,
  onRemove,
}: Props) => {
  return (
    <div className="grid gap-5 border border-[#2a2e2e] bg-[#171a1a] p-5 md:grid-cols-[160px_1fr_auto] md:items-center">

      {/* IMAGE */}
      <div className="h-[130px] overflow-hidden bg-[#202424]">

        {workout.image ? (
          <img
            src={workout.image}
            alt={workout.name}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-500">
            Image
          </div>
        )}

      </div>

      {/* INFO */}
      <div>

        <h3 className="text-xl font-black uppercase">
          {workout.name}
        </h3>

        <p className="mt-2 text-sm text-gray-400">
          {workout.equipment}
        </p>

        <div className="mt-4 flex flex-wrap gap-5 text-xs text-gray-300">

          <span>
            ⏱ {workout.duration} min
          </span>

          <span>
            🔥 {workout.calories} kcal
          </span>

          <span>
            ★ {workout.rating}
          </span>

        </div>

      </div>

      {/* ACTIONS */}
      <div className="flex flex-wrap gap-2 md:flex-col">

        <Link
          href={`/workout/${workout.id}`}
          className="btn btn-sm bg-[#ccff00] text-black"
        >
          View Details
        </Link>

        {type === "plan" && (
          <button
            onClick={onDone}
            disabled={done}
            className="btn btn-sm border border-[#ccff00] bg-transparent text-[#ccff00]"
          >
            {done
              ? "✓ Done"
              : "Mark as Done"}
          </button>
        )}

        <button
          onClick={onRemove}
          className="btn btn-sm border-red-500 bg-transparent text-red-400"
        >
          ✕
        </button>

      </div>
    </div>
  );
};

export default PlanWorkoutCard;

"use client";

import Link from "next/link";
import {
  useContext,
  useState,
} from "react";

import { FitlogContext } from "@/context/FitlogContext";
import PlanWorkoutCard from "@/components/plan/PlanWorkoutCard";

type TabType =
  | "plan"
  | "saved";

const MyPlanPage = () => {
  const {
    plan,
    saved,
    completed,

    removeFromPlan,
    removeFromSaved,
    markAsDone,
  } = useContext(FitlogContext);

  const [activeTab, setActiveTab] =
    useState<TabType>("plan");

  const totalMinutes =
    plan.reduce(
      (total, workout) =>
        total + workout.duration,
      0
    );

  const totalCalories =
    plan.reduce(
      (total, workout) =>
        total + workout.calories,
      0
    );

  const currentList =
    activeTab === "plan"
      ? plan
      : saved;

  return (
    <section className="fitlog-container py-14">

      {/* HEADER */}
      <div>
        <p className="text-xs font-black tracking-[0.3em] text-[#ccff00]">
          WORKOUT LOG
        </p>

        <h1 className="fitlog-title mt-3 text-5xl">
          MY PLAN
        </h1>

        <p className="mt-3 text-gray-400">
          Cap of five lifts for today.
          Finish them, then load more.
        </p>
      </div>

      {/* METRICS */}
      <div className="mt-10 grid gap-4 sm:grid-cols-3">

        <div className="border border-[#2a2e2e] bg-[#171a1a] p-6">
          <p className="text-xs font-black text-gray-500">
            EXERCISES
          </p>

          <p className="mt-3 text-4xl font-black">
            {plan.length}
          </p>
        </div>

        <div className="border border-[#2a2e2e] bg-[#171a1a] p-6">
          <p className="text-xs font-black text-gray-500">
            MINUTES
          </p>

          <p className="mt-3 text-4xl font-black">
            {totalMinutes}
          </p>
        </div>

        <div className="border border-[#2a2e2e] bg-[#171a1a] p-6">
          <p className="text-xs font-black text-gray-500">
            CALORIES
          </p>

          <p className="mt-3 text-4xl font-black">
            {totalCalories}
          </p>
        </div>

      </div>

      {/* TABS */}
      <div className="mt-12 flex border-b border-[#2a2e2e]">

        <button
          onClick={() =>
            setActiveTab("plan")
          }
          className={`px-6 py-4 text-sm font-black uppercase ${
            activeTab === "plan"
              ? "border-b-2 border-[#ccff00] text-[#ccff00]"
              : "text-gray-500"
          }`}
        >
          Today&apos;s Plan ({plan.length})
        </button>

        <button
          onClick={() =>
            setActiveTab("saved")
          }
          className={`px-6 py-4 text-sm font-black uppercase ${
            activeTab === "saved"
              ? "border-b-2 border-[#ccff00] text-[#ccff00]"
              : "text-gray-500"
          }`}
        >
          Saved ({saved.length})
        </button>

      </div>

      {/* LIST */}
      <div className="mt-8 space-y-4">

        {currentList.length > 0 ? (
          currentList.map((workout) => (
            <PlanWorkoutCard
              key={workout.id}
              workout={workout}
              type={activeTab}
              done={completed.includes(
                workout.id
              )}
              onDone={() =>
                markAsDone(workout.id)
              }
              onRemove={() => {
                if (
                  activeTab === "plan"
                ) {
                  removeFromPlan(
                    workout.id
                  );
                } else {
                  removeFromSaved(
                    workout.id
                  );
                }
              }}
            />
          ))
        ) : (
          <div className="flex min-h-[360px] flex-col items-center justify-center border border-[#2a2e2e] bg-[#141717] text-center">

            <p className="text-xs font-black tracking-[0.25em] text-[#ccff00]">
              EMPTY LOG
            </p>

            <h2 className="mt-3 text-3xl font-black">
              NOTHING HERE YET
            </h2>

            <p className="mt-3 max-w-md text-gray-400">
              Browse the library and add a
              lift to get today moving.
            </p>

            <Link
              href="/#library"
              className="mt-7 bg-[#ccff00] px-6 py-3 font-black text-black"
            >
              GO TO WORKOUTS
            </Link>

          </div>
        )}

      </div>

    </section>
  );
};

export default MyPlanPage;

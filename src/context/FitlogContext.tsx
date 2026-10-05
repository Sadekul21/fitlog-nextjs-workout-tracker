"use client";

import { Workout } from "@/types/workout";
import {
  createContext,
  ReactNode,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";

interface FitlogContextType {
  plan: Workout[];
  saved: Workout[];
  completed: string[];

  addToPlan: (workout: Workout) => void;
  saveWorkout: (workout: Workout) => void;

  removeFromPlan: (id: string) => void;
  removeFromSaved: (id: string) => void;

  markAsDone: (id: string) => void;

  isInPlan: (id: string) => boolean;
  isSaved: (id: string) => boolean;
}

export const FitlogContext =
  createContext<FitlogContextType>(
    {} as FitlogContextType
  );

const FitlogProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [plan, setPlan] = useState<Workout[]>([]);
  const [saved, setSaved] = useState<Workout[]>([]);
  const [completed, setCompleted] = useState<string[]>([]);

  useEffect(() => {
    const storedPlan = localStorage.getItem("fitlog-plan");
    const storedSaved = localStorage.getItem("fitlog-saved");
    const storedCompleted =
      localStorage.getItem("fitlog-completed");

    if (storedPlan) {
      setPlan(JSON.parse(storedPlan));
    }

    if (storedSaved) {
      setSaved(JSON.parse(storedSaved));
    }

    if (storedCompleted) {
      setCompleted(JSON.parse(storedCompleted));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(
      "fitlog-plan",
      JSON.stringify(plan)
    );
  }, [plan]);

  useEffect(() => {
    localStorage.setItem(
      "fitlog-saved",
      JSON.stringify(saved)
    );
  }, [saved]);

  useEffect(() => {
    localStorage.setItem(
      "fitlog-completed",
      JSON.stringify(completed)
    );
  }, [completed]);

  const addToPlan = (workout: Workout) => {
    const exists = plan.some(
      (item) => item.id === workout.id
    );

    if (exists) {
      toast.info("Workout already in today's plan");
      return;
    }

    if (plan.length >= 5) {
      toast.error("Today's plan can contain only 5 workouts");
      return;
    }

    setPlan((prev) => [...prev, workout]);

    toast.success("Added to today's plan");
  };

  const saveWorkout = (workout: Workout) => {
    const exists = saved.some(
      (item) => item.id === workout.id
    );

    if (exists) {
      toast.info("Workout already saved");
      return;
    }

    setSaved((prev) => [...prev, workout]);

    toast.success("Saved for later");
  };

  const removeFromPlan = (id: string) => {
    setPlan((prev) =>
      prev.filter((item) => item.id !== id)
    );

    toast.success("Workout removed from plan");
  };

  const removeFromSaved = (id: string) => {
    setSaved((prev) =>
      prev.filter((item) => item.id !== id)
    );

    toast.success("Workout removed from saved list");
  };

  const markAsDone = (id: string) => {
    setCompleted((prev) => {
      if (prev.includes(id)) return prev;

      return [...prev, id];
    });

    toast.success("Workout marked as done");
  };

  const isInPlan = (id: string) =>
    plan.some((item) => item.id === id);

  const isSaved = (id: string) =>
    saved.some((item) => item.id === id);

  return (
    <FitlogContext.Provider
      value={{
        plan,
        saved,
        completed,

        addToPlan,
        saveWorkout,

        removeFromPlan,
        removeFromSaved,

        markAsDone,

        isInPlan,
        isSaved,
      }}
    >
      {children}
    </FitlogContext.Provider>
  );
};

export default FitlogProvider;

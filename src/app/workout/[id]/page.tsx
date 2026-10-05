import { notFound } from "next/navigation";

import WorkoutActions from "@/components/workout/WorkoutActions";
import { getWorkout } from "@/lib/api";

interface PageProps {
  params: Promise<{
    id: string;
  }>;
}

const WorkoutDetailsPage = async ({
  params,
}: PageProps) => {
  const { id } = await params;

  const workout =
    await getWorkout(id);

  if (!workout) {
    notFound();
  }

  const defaultInstructions = [
    "Set up the equipment and choose an appropriate working weight.",
    "Brace your core and establish a stable starting position.",
    "Perform every repetition with controlled technique.",
    "Finish the set safely and rest before your next set.",
  ];

  const instructions =
    workout.instructions.length > 0
      ? workout.instructions
      : defaultInstructions;

  return (
    <section className="fitlog-container py-14">

      <div className="grid gap-12 lg:grid-cols-2">

        {/* LEFT IMAGE */}
        <div className="min-h-[500px] overflow-hidden bg-[#171a1a]">

          {workout.image ? (
            <img
              src={workout.image}
              alt={workout.name}
              className="h-full min-h-[500px] w-full object-cover"
            />
          ) : (
            <div className="flex min-h-[500px] items-center justify-center text-gray-500">
              Workout Image
            </div>
          )}

        </div>

        {/* RIGHT */}
        <div>

          <div className="mb-4 flex flex-wrap gap-2">

            {workout.categories.map(
              (category) => (
                <span
                  key={category}
                  className="bg-[#ccff00] px-3 py-1 text-xs font-black uppercase text-black"
                >
                  {category}
                </span>
              )
            )}

          </div>

          <h1 className="fitlog-title text-4xl md:text-5xl">
            {workout.name}
          </h1>

          <p className="mt-5 leading-7 text-gray-400">
            {workout.description}
          </p>

          {/* SPECS */}
          <div className="mt-8 border border-[#2a2e2e]">

            {[
              [
                "EQUIPMENT",
                workout.equipment,
              ],
              [
                "DIFFICULTY",
                workout.difficulty,
              ],
              ["SETS", workout.sets],
              ["REPS", workout.reps],
              [
                "DURATION",
                `${workout.duration} min`,
              ],
              [
                "CALORIES",
                `${workout.calories} kcal`,
              ],
              ["RATING", workout.rating],
            ].map(([label, value]) => (
              <div
                key={String(label)}
                className="flex justify-between border-b border-[#2a2e2e] px-5 py-4 last:border-0"
              >
                <span className="text-xs font-black text-gray-500">
                  {label}
                </span>

                <span className="font-bold">
                  {value}
                </span>
              </div>
            ))}

          </div>

          {/* INSTRUCTIONS */}
          <div className="mt-10">

            <h2 className="fitlog-title text-2xl">
              Instructions
            </h2>

            <div className="mt-5 space-y-5">

              {instructions.map(
                (instruction, index) => (
                  <div
                    key={index}
                    className="flex gap-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center bg-[#ccff00] font-black text-black">
                      {index + 1}
                    </span>

                    <p className="text-gray-300">
                      {instruction}
                    </p>
                  </div>
                )
              )}

            </div>
          </div>

          <WorkoutActions
            workout={workout}
          />

        </div>
      </div>

    </section>
  );
};

export default WorkoutDetailsPage;

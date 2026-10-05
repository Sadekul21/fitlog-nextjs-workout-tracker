import { Workout } from "@/types/workout";
import Image from "next/image";
import Link from "next/link";

interface WorkoutCardProps {
  workout: Workout;
}

const WorkoutCard = ({
  workout,
}: WorkoutCardProps) => {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group overflow-hidden border border-[#2a2e2e] bg-[#171a1a] hover:border-[#ccff00]"
    >

      {/* IMAGE */}
      <div className="h-[230px] overflow-hidden bg-[#202424]">

        {workout.image ? (
          <Image
            src={workout.image}
            alt={workout.name}
            className="h-full w-full object-cover transition duration-300 group-hover:scale-105"
            width={400}
            height={230}
          />
        ) : (
          <div className="flex h-full items-center justify-center text-gray-500">
            Workout Image
          </div>
        )}

      </div>

      {/* CONTENT */}
      <div className="p-5">

        <div className="mb-4 flex flex-wrap gap-2">

          {workout.categories.map(
            (category) => (
              <span
                key={category}
                className="bg-[#ccff00] px-2 py-1 text-[10px] font-black uppercase text-black"
              >
                {category}
              </span>
            )
          )}

        </div>

        <h3 className="text-xl font-black uppercase">
          {workout.name}
        </h3>

        <p className="mt-2 text-sm text-gray-400">
          {workout.equipment}
        </p>

        <div className="mt-5 flex items-center justify-between border-t border-[#2a2e2e] pt-4 text-xs text-gray-300">

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

    </Link>
  );
};

export default WorkoutCard;

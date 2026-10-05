import Link from "next/link";

const NotFound = () => {
  return (
    <div className="fitlog-container flex min-h-[70vh] flex-col items-center justify-center text-center">
      
      <p className="text-sm font-black tracking-[0.3em] text-[#ccff00]">
        ERROR 404
      </p>

      <h1 className="fitlog-title mt-4 text-6xl">
        PAGE NOT FOUND
      </h1>

      <p className="mt-5 text-gray-400">
        The page you are looking for does not exist.
      </p>

      <Link
        href="/"
        className="mt-8 bg-[#ccff00] px-6 py-3 font-black text-black"
      >
        BACK TO WORKOUTS
      </Link>
    </div>
  );
};

export default NotFound;

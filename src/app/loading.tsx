const Loading = () => {
  return (
    <div className="flex min-h-[70vh] flex-col items-center justify-center gap-4">

      <span className="loading loading-spinner loading-lg text-[#ccff00]"></span>

      <p className="font-bold text-gray-400">
        Loading workouts...
      </p>

    </div>
  );
};

export default Loading;

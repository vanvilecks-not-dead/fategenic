const RollButton = () => {
  return (
    <button
      className="mt-8.5 flex h-20 w-full flex-row items-center justify-center rounded-3xl bg-green text-center"
      type="button"
    >
      <span className="text-2xl font-bold uppercase leading-9 text-white">
        Roll again
      </span>
    </button>
  );
};

export { RollButton };

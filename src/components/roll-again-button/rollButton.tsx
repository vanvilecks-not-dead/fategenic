import { addRolledDiceWrapper } from "@/shared/addRolledDiceWrapper";
import { setModifier } from "@/store/modifierStore";
import { addRolledDice } from "@/store/store";

const RollButton = () => {
  const onClickDiceWrapper = () => {
    addRolledDice(addRolledDiceWrapper());
    setModifier(0);
  };

  return (
    <button
      className="mt-8.5 flex h-20 w-48 flex-row items-center justify-center rounded-3xl bg-green text-center sm:w-60 sm:justify-self-center md:w-full"
      type="button"
      onClick={onClickDiceWrapper}
    >
      <span className="text-2xl font-bold uppercase leading-9 text-white">
        Roll again
      </span>
    </button>
  );
};

export { RollButton };

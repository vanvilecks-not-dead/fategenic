import { rollFateDice } from "@/shared/rollDice";
import { $modifierStore } from "@/store/modifierStore";
import { RolledDice, addRolledDice } from "@/store/store";
import { useStore } from "effector-react";

const addRolledDiceWrapper = (values: number[], mod: number): RolledDice => {
  return {
    value: values,
    modifier: mod,
    result: values.reduce((acc, number) => acc + number, 0) + mod,
  };
};

const RollButton = () => {
  const modStore = useStore($modifierStore);

  const onClickDiceWrapper = () => {
    const rolled = rollFateDice(4);
    addRolledDice(addRolledDiceWrapper(rolled, modStore));
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

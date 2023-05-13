import PlusIcon from "./images/plus.inline.svg";
import MinusIcon from "./images/minus.inline.svg";
import { addModifier, downsizeModifier } from "@/store/modifierStore";

const PlusModifierButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className="rounded-r-3xl bg-light-green px-5 dark:bg-d-light-green"
      onClick={onClick}
    >
      <PlusIcon className="dark:fill-dark-deep-green" width={30} height={30} />
    </button>
  );
};

const MinusModifierButton = ({ onClick }: { onClick: () => void }) => {
  return (
    <button
      className="rounded-l-3xl bg-light-green px-5 dark:bg-d-light-green"
      onClick={onClick}
    >
      <MinusIcon className="dark:fill-dark-deep-green" width={30} height={30} />
    </button>
  );
};

const TextModifierButton = () => {
  return (
    <div className="mx-2.5 flex w-34 items-center justify-center bg-light-green px-3 py-5 text-center dark:bg-d-light-green">
      <span className="select-none text-base font-bold uppercase leading-6 text-deep-green dark:text-dark-deep-green">
        Modify roll
      </span>
    </div>
  );
};

const ModifyButton = () => {
  return (
    <>
      <div className="mt-3 flex h-[80px] flex-row justify-center self-center">
        <MinusModifierButton onClick={() => downsizeModifier(1)} />
        <TextModifierButton />
        <PlusModifierButton onClick={() => addModifier(1)} />
      </div>
    </>
  );
};

export { ModifyButton };

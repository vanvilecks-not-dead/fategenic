import { useEffect, useState } from "react";
import Empty from "./images/empty.inline.svg";
import Minus from "./images/minus.inline.svg";
import Plus from "./images/plus.inline.svg";
import { rollFateDice } from "@/shared/rollDice";
import { $modifierStore } from "@/store/modifierStore";
import { useStore } from "effector-react";
import { $history, RolledDice, addRolledDice } from "@/store/store";

const Dice = () => {
  const addRolledDiceWrapper = (values: number[], mod: number): RolledDice => {
    return {
      value: values,
      modifier: mod,
      result: values.reduce((acc, number) => acc + number, 0) + mod,
    };
  };

  const [dice, setDice] = useState<number[]>([]);
  const modStore = useStore($modifierStore);
  const historyStore = useStore($history);

  useEffect(() => {
    if (historyStore.length == 0) {
      const rolled = rollFateDice(4);
      setDice(rolled);

      addRolledDice(addRolledDiceWrapper(rolled, modStore));
    }

    setDice(historyStore[historyStore.length - 1]?.value);
  }, [historyStore, modStore]);

  const renderSide = (value: number, key: number): JSX.Element | null => {
    const css = "w-28 h-28 sm:h-28 sm:w-28 lg:h-34 lg:w-34 xl:h-48 xl:w-48";

    switch (value) {
      case -1:
        return <Minus className={css} key={key} />;
      case 0:
        return <Empty className={css} key={key} />;
      case 1:
        return <Plus className={css} key={key} />;
      default:
        return null;
    }
  };

  const onClickDiceWrapper = () => {
    const rolled = rollFateDice(4);
    addRolledDice(addRolledDiceWrapper(rolled, modStore));
    setDice(rolled);
  };

  return (
    <div className="dice-wrapper" onClick={onClickDiceWrapper}>
      {dice.map((value, index) => renderSide(value, index))}
    </div>
  );
};

export { Dice };

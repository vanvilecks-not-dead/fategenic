import { useEffect, useState } from "react";
import Empty from "./images/empty.inline.svg";
import Minus from "./images/minus.inline.svg";
import Plus from "./images/plus.inline.svg";
import { $modifierStore, setModifier } from "@/store/modifierStore";
import { useStore } from "effector-react";
import { $history, addRolledDice } from "@/store/store";
import { addRolledDiceWrapper } from "@/shared/addRolledDiceWrapper";

const Dice = () => {
  const [dice, setDice] = useState<number[]>([]);
  const modStore = useStore($modifierStore);
  const historyStore = useStore($history);

  useEffect(() => {
    if (historyStore.length == 0) {
      const rolled = addRolledDiceWrapper();
      setDice(rolled.value);
      addRolledDice(addRolledDiceWrapper());
    }

    setDice(historyStore[historyStore.length - 1]?.value);
  }, [historyStore, modStore]);

  const renderSide = (value: number, key: number): JSX.Element | null => {
    const css =
      "w-20 rounded-xl h-20 sm:h-20 sm:w-20 lg:h-34 lg:w-34 xl:h-48 xl:w-48";

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
    const rolled = addRolledDiceWrapper();
    addRolledDice(rolled);
    setDice(rolled.value);
    setModifier(0);
  };

  return (
    <div className="dice-wrapper" onClick={onClickDiceWrapper}>
      {dice.map((value, index) => renderSide(value, index))}
    </div>
  );
};

export { Dice };

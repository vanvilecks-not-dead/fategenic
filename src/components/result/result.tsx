import { useStore } from "effector-react";
import { useEffect, useState } from "react";
import { $modifierStore } from "@/store/modifierStore";
import { $history } from "@/store/store";
import { getDescription } from "@/shared/values-description";
import clsx from "clsx";

const Result = () => {
  const [total, setTotal] = useState<number>(0);
  const [totalMod, setTotalMod] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [totalMessage, setTotalMessage] = useState<string>("");
  const [modMessage, setmodMessage] = useState<string>("");

  const history = useStore($history);
  const modifierStore = useStore($modifierStore);
  const currentRoll = history[history.length - 1];

  useEffect(() => {
    if (currentRoll) {
      setTotal(currentRoll.result + currentRoll.modifier);
      setTotalMod(currentRoll.modifier);
      setDescription(getDescription(currentRoll.value, currentRoll.modifier));
    }
  }, [currentRoll, modifierStore, totalMod]);

  useEffect(() => {
    setTotalMessage(total > 0 ? `+${total}` : `${total}`);
    setmodMessage(totalMod > 0 ? `+${totalMod}` : `${totalMod}`);
  }, [currentRoll, modifierStore, totalMod, total]);

  const getTextColor = () => {
    if (total == 0) {
      return "text-deep-green";
    } else if (total < 0) {
      return "text-red";
    } else {
      return "text-green";
    }
  };

  return (
    <div
      className={clsx(
        getTextColor(),
        "max-w-[300px] select-none text-center  text-deep-green md:min-w-[300px]"
      )}
    >
      <div className="text-[96px] font-bold">{totalMessage}</div>
      <span className="mt-2 text-4xl font-bold uppercase leading-10">
        {description}
      </span>

      <div className="pt-4 text-2xl font-normal leading-9 lg:h-7">
        {modifierStore !== 0 && <span>modified by {modMessage}</span>}
      </div>
    </div>
  );
};

export { Result };

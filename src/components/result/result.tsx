import { useStore } from "effector-react";
import { useEffect, useState } from "react";
import { $modifierStore } from "@/store/modifierStore";
import { $history } from "@/store/store";

const Result = () => {
  const [total, setTotal] = useState<number>(0);

  const history = useStore($history);
  const modifierStore = useStore($modifierStore);
  const currentRoll = history[history.length - 1];

  useEffect(() => {
    if (currentRoll) {
      const sum = currentRoll.value.reduce((a, b) => a + b, 0);
      setTotal(currentRoll.result + modifierStore);
    }
  }, [currentRoll, modifierStore]);

  return (
    <div className={"text-dark w-[300px] text-center"}>
      <div className="text-[96px] font-bold uppercase">{total}</div>
    </div>
  );
};

export { Result };

import { RolledDice } from "@/store/store";
import { rollFateDice } from "./rollDice";

const addRolledDiceWrapper = (): RolledDice => {
  const rolled = rollFateDice(4);
  const res = {
    value: rolled,
    modifier: 0,
    result: rolled.reduce((acc, number) => acc + number),
  };
  return res;
};

export { addRolledDiceWrapper };

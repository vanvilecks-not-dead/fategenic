import { createEvent, createStore } from "effector";
import { addModifierInHistory } from "./store";

const addModifier = createEvent<number>();
const downsizeModifier = createEvent<number>();
const setModifier = createEvent<number>();
const $modifierStore = createStore<number>(0)
  .on(addModifier, (state, payload) => {
    const res = state + payload;
    if (res >= 8) return 8;
    return res;
  })
  .on(downsizeModifier, (state, payload) => {
    const res = state - payload;
    if (res <= -4) return -4;
    addModifierInHistory(res);
    return res;
  })
  .on(setModifier, (state, payload) => {
    if (payload >= 10) return 10;
    if (payload <= -10) return -10;
    return payload;
  });

export { addModifier, setModifier, downsizeModifier, $modifierStore };

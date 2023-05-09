import { createEvent, createStore } from "effector";

export interface RolledDice {
  value: number[];
  modifier: number;
  result: number;
}

const addRolledDice = createEvent<RolledDice>();
const addModifierInHistory = createEvent<number>();

const $history = createStore<RolledDice[]>([]);

$history.on(addRolledDice, (state, payload) => [...state, payload]);

$history.on(addModifierInHistory, (state, payload) => {
  const latestItem = state[state.length - 1];
  latestItem.modifier = payload;
  state.pop();
  return [...state, latestItem];
});

export { addRolledDice, addModifierInHistory, $history };

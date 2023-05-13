import { createEvent, createStore } from "effector";
import connectLocalStorage from "effector-localstorage";

export interface RolledDice {
  value: number[];
  modifier: number;
  result: number;
}

const addRolledDice = createEvent<RolledDice>();
const addModifierInHistory = createEvent<number>();

const localStorageHistory = connectLocalStorage("history");

const $history = createStore<RolledDice[]>(localStorageHistory.init() || []);
$history.on(addRolledDice, (state, payload) => [...state, payload]);

$history.watch(localStorageHistory);

$history.on(addModifierInHistory, (state, payload) => {
  const latestItem = state[state.length - 1];
  const newState = state.slice();
  latestItem.modifier = payload;
  newState.pop();
  return [...newState, latestItem];
});

export { addRolledDice, addModifierInHistory, $history };

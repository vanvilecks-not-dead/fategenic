import { createEvent, createStore } from 'effector';

interface RolledDice {
  value: number[];
  modifier: number;
  result: number;
}

const addRolledDice = createEvent<RolledDice>();

const history = createStore<RolledDice[]>([]);

history.on(addRolledDice, (state, payload) => [...state, payload]);

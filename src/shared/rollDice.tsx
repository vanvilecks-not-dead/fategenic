const rollFateDice = (numDice: number): number[] => {
  const values = [];

  for (let i = 0; i < numDice; i++) {
    const value = Math.floor(Math.random() * 3) - 1;
    values.push(value);
  }

  return values;
};

export { rollFateDice };

interface Description {
  [index: string]: string;
}

const DESCRIPTIONS: Description = {
  '8': 'Legendary',
  '7': 'Epic',
  '6': 'Fantastic',
  '5': 'Superb',
  '4': 'Great',
  '3': 'Good',
  '2': 'Fair',
  '1': 'Average',
  '0': 'Mediocre',
  '-1': 'Poor',
  '-2': 'Terrible',
  '-3': 'Awful',
  '-4': 'Abysmal',
};

const getDescription = (result: number[], mod?: number) => {
  const sum = result.reduce((a, b) => a + b, 0);
  if (mod) {
    if (sum + mod > 8) return DESCRIPTIONS['8'];
    if (sum + mod < -4) return DESCRIPTIONS['-4'];

    return DESCRIPTIONS[(sum + mod).toString()];
  }
  return DESCRIPTIONS[sum.toString()];
};

export { getDescription, DESCRIPTIONS };

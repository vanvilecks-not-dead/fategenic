import Empty from '@/images/empty.inline.svg';
import Minus from '@/images/minus.inline.svg';
import Plus from '@/images/plus.inline.svg';

const Dice = () => {
  return (
    <div className="diceWrapper">
      <Empty width={225} height={225} />
      <Minus width={225} height={225} />
      <Plus width={225} height={225} />
      <Plus width={225} height={225} />
    </div>
  );
};

export { Dice };

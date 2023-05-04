import { Dice } from '@/components/dice';
import { ModifyButton } from '@/components/modify-button';

export default function Home() {
  return (
    <div className="flex flex-row gap-x-30">
      <Dice />
      <ModifyButton/>
    </div>
  );
}

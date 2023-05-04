import { Dice } from '@/components/dice';

export default function Home() {
  return (
    <div className="flex flex-row gap-x-30">
      <Dice />
      <div className="w-full">Hello piidor</div>
    </div>
  );
}

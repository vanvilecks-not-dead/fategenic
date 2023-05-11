"use client";

import { Dice } from "@/components/dice";
import { ModifyButton } from "@/components/modify-button";
import { Result } from "@/components/result";
import { RollButton } from "@/components/roll-again-button";

export default function Home() {
  return (
    <div className="flex flex-row gap-x-30">
      <Dice />
      <div>
        <Result />
        <ModifyButton />
        <RollButton />
      </div>
    </div>
  );
}

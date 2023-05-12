"use client";

import { Dice } from "@/components/dice";
import { History } from "@/components/history";
import { ModifyButton } from "@/components/modify-button";
import { Result } from "@/components/result";
import { RollButton } from "@/components/roll-again-button";

export default function Home() {
  return (
    <div className="flex flex-row gap-x-6">
      <Dice />
      <div className="flex flex-col">
        <div className="flex h-min w-full flex-row gap-x-6 border-b-2 border-b-blue2 pb-10">
          <Result />
          <div>
            <ModifyButton />
            <RollButton />
          </div>
        </div>
        <History />
      </div>
    </div>
  );
}

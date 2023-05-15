"use client";

import { CopyCard } from "@/components/copy-card/copy-card";
import { Dice } from "@/components/dice";
import { Graph } from "@/components/distribution-graph";
import { History } from "@/components/history";
import { ModifyButton } from "@/components/modify-button";
import { Result } from "@/components/result";
import { RollButton } from "@/components/roll-again-button";
import { Analytics } from "@vercel/analytics/react";

export default function Home() {
  return (
    <>
      <div className="flex flex-col sm:flex-col lg:flex-row lg:justify-between">
        <div className="flex h-full justify-center sm:items-center sm:justify-center lg:justify-normal">
          <Dice />
        </div>
        <div className="flex flex-col">
          <div className="flex h-min w-full flex-col items-center gap-x-11 border-b-2 border-b-blue2 pb-10 lg:flex-row lg:justify-between">
            <Result />
            <div className="flex flex-col items-center justify-center">
              <ModifyButton />
              <RollButton />
            </div>
          </div>
          <div className="flex flex-col items-center justify-between gap-7 md:flex-row">
            <History />
            <Graph />
          </div>
        </div>
      </div>
      <Analytics />
    </>
  );
}

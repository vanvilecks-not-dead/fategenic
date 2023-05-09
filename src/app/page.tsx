"use client";

import { Dice } from "@/components/dice";
import { ModifyButton } from "@/components/modify-button";
import { Result } from "@/components/result";
import { useState } from "react";

export default function Home() {
  const [dice, setDice] = useState("");
  return (
    <div className="flex flex-row gap-x-30">
      <Dice />
      <div>
        <Result />
        <ModifyButton />
      </div>
    </div>
  );
}

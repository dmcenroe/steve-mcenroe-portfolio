import Fischer from "@/components/Fischer";
import MythicPlus from "@/components/MythicPlus";
import CoffeeCastle from "@/components/CoffeeCastle";
import { useEffect, useState } from "react";

export default function Portfolio() {
  return (
    <div className="flex flex-col">
      <h1 className="text-7xl lg:text-8xl font-bold font-mont tracking-tighter text-slate-800 m-auto my-8">
        Portfolio
      </h1>
      <div className="flex flex-col gap-12 items-center">
        <Fischer />
        <div className="w-4/5 border-b border-teal-600"></div>
        <MythicPlus />
        <div className="w-4/5 border-b border-teal-600"></div>
        <CoffeeCastle />
      </div>
    </div>
  );
}

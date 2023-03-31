"use client";

import Leftpart from "./components/Leftpart";
import Rightpart from "./components/Rightpart";
import React from "react";

export default function Home() {
  return (
    <div className="flex flex-row min-h-screen font-abc">
      <Leftpart />
      <Rightpart />
    </div>
  );
}

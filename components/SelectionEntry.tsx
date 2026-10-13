"use client";

import { useState } from "react";

export default function SelectionEntry() {
  const [selected, setSelected] = useState<string | null>(null);

  const options = ["Option 1", "Option 2", "Option 3"];

  return (
    <div className="grid grid-cols-3 gap-3">
      {options.map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => setSelected(option)}
          className={`px-4 py-3 text-sm font-medium text-white transition ${
            selected === option
              ? "bg-stone-600"
              : "bg-black hover:bg-stone-700"
          }`}
        >
          {option}
        </button>
      ))}
    </div>
  );
}
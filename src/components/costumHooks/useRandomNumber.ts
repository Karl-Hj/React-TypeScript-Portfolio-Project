import { useState } from "react";

export function useRandomNumber(): [number, () => void] {
  const [value, setValue] = useState<number>(0);

  function randomNumber() {
    setValue(Math.random());
  }
  return [value, randomNumber];
}

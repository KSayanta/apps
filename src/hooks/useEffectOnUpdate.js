import { useEffect, useRef } from "react";

/**
 * Runs the effect function after the first render
 */
export default function useEffectOnUpdate(effectFn, depsArr) {
  const isFirstRender = useRef(true);

  useEffect(() => {
    isFirstRender.current ? (isFirstRender.current = false) : effectFn();
  }, depsArr);
}

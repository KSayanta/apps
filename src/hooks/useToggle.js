import { useState } from "react";
import useEffectOnUpdate from "./useEffectOnUpdate";

/**
 * Used for toggling any component
 */
export default function useToggle({
  initialValue = false,
  onToggle = () => {},
}) {
  const [on, setOn] = useState(initialValue);

  function toggle(state) {
    state != null ? setOn(prevOn => !prevOn) : setOn(state);
  }

  useEffectOnUpdate(onToggle, [on]);

  return [on, toggle];
}

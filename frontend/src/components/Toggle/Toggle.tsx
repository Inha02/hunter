import React from "react";
import { ToggleWrapper, ToggleButton } from "./Toggle.styles";

// Toggle 컴포넌트가 받을 props의 타입 정의
interface ToggleProps {
  isOn: boolean;
  onToggle: () => void;
}

const Toggle: React.FC<ToggleProps> = ({ isOn, onToggle }) => {
  return (
    <ToggleWrapper onClick={onToggle}>
      <ToggleButton isOn={isOn}>{isOn ? "ON" : "OFF"}</ToggleButton>
    </ToggleWrapper>
  );
};

export default Toggle;

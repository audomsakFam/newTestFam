import { useState } from "react";
import * as S from "../styles/SideBar.style";

type OptionItem = {
  id: string;
  label: string;
};

type Props = {
  options: OptionItem[];
};
const SideBar = ({ options }: Props) => {
  const [isActive, setIsActive] = useState("home");
  return (
    <S.Containar>
      {options &&
        options.map((item) => (
          <S.Options
            key={item.id}
            $isActive={isActive === item.id}
            onClick={() => setIsActive(item.id)}
          >
            {item.label}
          </S.Options>
        ))}
    </S.Containar>
  );
};

export default SideBar;

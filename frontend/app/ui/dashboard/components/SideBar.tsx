import * as S from "../styles/SideBar.style";
import { ChartPie } from "phosphor-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

type OptionItem = {
  id: string;
  label: string;
};

type Props = {
  options: OptionItem[];
};
const SideBar = ({ options }: Props) => {
  const pathname = usePathname();
  return (
    <S.Containar>
      <Link href={options[0].id} style={{ textDecoration: "none" }}>
        <S.Header>
          <ChartPie size={40} />
          Dashboard
        </S.Header>
      </Link>
      {options &&
        options.map((item) => (
          <Link href={item.id} key={item.id} style={{ textDecoration: "none" }}>
            <S.Options $isActive={pathname === item.id}>{item.label}</S.Options>
          </Link>
        ))}
    </S.Containar>
  );
};

export default SideBar;

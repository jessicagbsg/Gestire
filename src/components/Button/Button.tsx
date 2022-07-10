import { Btn } from "./styles";

interface Props {
  children: React.ReactNode;
}

export function Button(props: Props) {
  return <Btn>{props.children}</Btn>;
}

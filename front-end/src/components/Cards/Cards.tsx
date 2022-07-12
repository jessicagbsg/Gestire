import { Card } from "./styles";

interface Props {
  title: string;
  children: React.ReactNode;
}

export function Cards(props: Props) {
  return (
    <Card>
      <h2>{props.title}</h2>
      {props.children}
    </Card>
  );
}

import { Card } from "./styles";

interface Props {
  title: string;
}

export function Cards(props: Props) {
  return (
    <Card>
      <h2>{props.title}</h2>
      <div>
        <p>You dont have projects</p>
        <button>New</button>
      </div>
    </Card>
  );
}

interface ErrorProps {
  error: string;
}

const Error = (props: ErrorProps) => {
  if (!props.error) return null;

  return <p style={{ color: "#f31", margin: "1rem 0" }}>{props.error}</p>;
};

export default Error;

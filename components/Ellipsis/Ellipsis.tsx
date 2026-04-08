interface Props {
  text: string;
  length: number;
}

export default function Ellipsis({ text, length }: Props) {
  if (text.length <= length) {
    return <>{text}</>;
  }
  return <>{text.slice(0, length)}…</>;
}

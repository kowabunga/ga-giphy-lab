export default function Button({ type, text, onClickFunction, disable }) {
  return (
    <button type={type} onClick={onClickFunction} disabled={disable}>
      {text}
    </button>
  );
}

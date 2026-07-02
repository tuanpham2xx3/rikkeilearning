type ButtonProps = {
  onClick: () => void;
};

export default function MyButton({ onClick }: ButtonProps) {
  return (
    <>
      <button onClick={onClick}>BẤM</button>
    </>
  );
}

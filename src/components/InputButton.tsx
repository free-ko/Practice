interface IInputButtonProps {
  value: string;
  onChange: (value: string) => void;
}

export const InputButton = ({ value, onChange }: IInputButtonProps) => {
  return (
    <input
      type='text'
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  );
};

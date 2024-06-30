import { useLongPress } from '~/hooks/useLongPress';
import type { ComponentsProps } from '~/types/components';

type ButtonProps = {
  onClick: () => void;
  label: string;
  disabled?: boolean;
};

const Button = ({ onClick, label, disabled }: ButtonProps) => (
  <button onClick={onClick} disabled={disabled}>
    {label}
  </button>
);

interface Props extends ComponentsProps<typeof Button> {
  onLongPress?: (event: ProgressEvent) => void;
}

// 동작 추상화
export const PressButton = (props: Props) => {
  const longPressProps = useLongPress();

  return <Button {...longPressProps} {...props} />;
};

import type { ComponentType } from 'react';
import { useLongPress } from '~/hooks/useLongPress';

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

/**
 * ComponentsProps 타입은 제네릭 타입 T를 받아,
 * T가 React 컴포넌트 타입인 경우 해당 컴포넌트의 Props 타입을 추출합니다.
 * T가 React.ComponentType인지 확인하기 위해 조건부 타입을 사용합니다.
 * T가 React.ComponentType인 경우 infer 키워드를 사용하여 Props 타입을 추출합니다.
 * 그렇지 않은 경우 never 타입을 반환합니다.
 *
 * @template T - React 컴포넌트 타입
 * @returns 컴포넌트의 Props 타입 또는 never
 */
type ComponentsProps<T> = T extends ComponentType<infer P> ? P : never;

interface Props extends ComponentsProps<typeof Button> {
  onLongPress?: (event: ProgressEvent) => void;
}

// 동작 추상화
export const PressButton = (props: Props) => {
  const longPressProps = useLongPress();

  return <Button {...longPressProps} {...props} />;
};

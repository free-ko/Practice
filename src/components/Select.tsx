import { ReactNode, useState } from 'react';

import { Dropdwon } from './Dropdwon';
import { InputButton } from './InputButton';
import { useFrameworks } from '~/hooks/useFrameworks';

interface ISelectProps {
  trigger: ReactNode;
  value: string;
  onChange: (value: string) => void;
  options: string[];
}

export const Select = ({ value, trigger, onChange, options }: ISelectProps) => {
  return (
    <Dropdwon>
      <Dropdwon.Trigger as={trigger} />
      <Dropdwon.Menu>
        {options.map((option) => (
          <Dropdwon.Item key={option} onClick={() => onChange(option)}>
            {option}
          </Dropdwon.Item>
        ))}
      </Dropdwon.Menu>
    </Dropdwon>
  );
};

// 한가지 역할만 하기
export const FrameworkSelect = () => {
  const {
    data: { frameworks },
  } = useFrameworks();
  const [selected, change] = useState<string>('');

  return (
    <Select
      trigger={<InputButton value={selected} onChange={change} />}
      value={selected}
      onChange={change}
      options={frameworks}
    />
  );
};

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

// 다중 선택
// - 기존 한가지 역할만 하는 컴포넌트를 다중 선택을 지원하는 컴포넌트로 변경가능
export const FrameworkSelectMultiSelect = ({
  selectedFrameworks,
  onFrameworkChange,
  frameworks,
}) => {
  return (
    <Dropdwon value={selectedFrameworks}>
      <Dropdwon.Trigger
        as={<Button>{String(selectedFrameworks ?? '선택하기')}</Button>}
      >
        <Dropdwon.Modal
          controls={
            <Flex>
              <Button type='reset'>초기화</Button>
              <Button type='sumbit'>적용하기</Button>
            </Flex>
          }
        >
          {frameworks.map((framework) => (
            <Dropdwon.Item>{framework}</Dropdwon.Item>
          ))}
        </Dropdwon.Modal>
      </Dropdwon.Trigger>
    </Dropdwon>
  );
};

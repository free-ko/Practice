import { ReactNode, useState } from 'react';

import { Dropdwon } from './Dropdwon';
import { InputButton } from './InputButton';
import { useFrameworks } from '~/hooks/useFrameworks';
import { Button } from './Button';

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

// 다중 선택
// - 기존 한가지 역할만 하는 컴포넌트를 다중 선택을 지원하는 컴포넌트로 변경가능
// - 일반적인 인터페이스로 분리하기
// - 표준(이해하기 쉬운 인터페이스)

interface IMultiSelectProps {
  options: Array<{ label: string }>;
  value?: string[];
  onChange: (selected: string[]) => void;
  valueAs?: (value: string[]) => string;
}

export const MultiSelect = ({
  value,
  onChange,
  options,
  valueAs = (value) => String(value ?? '선택하기'),
}: IMultiSelectProps) => {
  return (
    <Dropdwon value={value} onChange={onChange}>
      <Dropdwon.Trigger as={<Button>{valueAs(value)}</Button>}>
        <Dropdwon.Modal
          controls={
            <Flex>
              <Button type='reset'>초기화</Button>
              <Button type='submit'>적용하기</Button>
            </Flex>
          }
        >
          {options.map(({ label }, index) => (
            <Dropdwon.Item key={index}>{label}</Dropdwon.Item>
          ))}
        </Dropdwon.Modal>
      </Dropdwon.Trigger>
    </Dropdwon>
  );
};

// MultiSelect 사용 예시
export const FrameworkSelect = () => {
  const {
    data: { frameworks },
  } = useFrameworks();
  const [selected, change] = useState<string>('');

  return (
    <MultiSelect
      trigger={<Button value={selected.join()} />}
      value={selected}
      onChange={change}
      options={frameworks}
    />
  );
};

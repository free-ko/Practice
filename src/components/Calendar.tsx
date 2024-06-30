import { ReactElement } from 'react';
import { useCalendar } from '~/hooks/useCalendar';

import { ReactNode } from 'react';

const Table = ({ children }: { children: ReactNode }) => {
  return <table>{children}</table>;
};

const Thead = ({ children }: { children: ReactNode }) => {
  return <thead>{children}</thead>;
};

const Tr = ({ children }: { children: ReactNode }) => {
  return <tr>{children}</tr>;
};

const Th = ({ children }: { children: ReactNode }) => {
  return <th>{children}</th>;
};

const Tbody = ({ children }: { children: ReactNode }) => {
  return <tbody>{children}</tbody>;
};

// 데이터 추상화
export const Calendar = () => {
  const { headers, body } = useCalendar();

  return (
    <Table>
      <Thead>
        <Tr>
          {headers.weekDays.map(({ key, value }) => (
            <Th key={key}>{value}</Th>
          ))}
        </Tr>
      </Thead>
      <Tbody>
        {body.value.map(({ key, value }) => (
          <Tr key={key}>
            {value.map(({ key, value }) => (
              <Th key={key}>{value}</Th>
            ))}
          </Tr>
        ))}
      </Tbody>
    </Table>
  );
};

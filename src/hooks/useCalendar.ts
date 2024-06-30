export const useCalendar = () => {
  return {
    headers: {
      weekDays: [
        {
          key: 'SUN',
          value: 'SUN',
        },
        {
          key: 'MON',
          value: 'MON',
        },
        {
          key: 'TUE',
          value: 'TUE',
        },
        {
          key: 'WED',
          value: 'WED',
        },
        {
          key: 'THU',
          value: 'THU',
        },
        {
          key: 'FRI',
          value: 'FRI',
        },
        {
          key: 'SAT',
          value: 'SAT',
        },
      ],
    },
    body: {
      value: [
        {
          key: 'week1',
          value: [
            {
              key: 'SUN',
              value: '1',
            },
            {
              key: 'MON',
              value: '2',
            },
            {
              key: 'TUE',
              value: '3',
            },
            {
              key: 'WED',
              value: '4',
            },
            {
              key: 'THU',
              value: '5',
            },
            {
              key: 'FRI',
              value: '6',
            },
            {
              key: 'SAT',
              value: '7',
            },
          ],
        },
        {
          key: 'week2',
          value: [
            {
              key: 'SUN',
              value: '8',
            },
            {
              key: 'MON',
              value: '9',
            },
            {
              key: 'TUE',
              value: '10',
            },
            {
              key: 'WED',
              value: '11',
            },
            {
              key: 'THU',
              value: '12',
            },
            {
              key: 'FRI',
              value: '13',
            },
            {
              key: 'SAT',
              value: '14',
            },
          ],
        },
      ],
    },
  };
};

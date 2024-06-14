export const tableColumns = [
  '№',
  'Тип',
  'Дата установки',
  'Автоматический',
  'Текущие показания',
  'Адрес',
  'Примечание',
];

type rowType = {
  [key: string]: { label: string; icon: string };
};

export const rowTypeDictionary: rowType = {
  heat: {
    label: 'ТПЛ',
    icon: require('./icons/heat.svg').default,
  },
  coldWater: {
    label: 'ХВС',
    icon: require('./icons/cold-water.svg').default,
  },
  hotWater: {
    label: 'ГВС',
    icon: require('./icons/hot-water.svg').default,
  },
  electricity: {
    label: 'ЭЛДТ',
    icon: require('./icons/electricity.svg').default,
  },
};

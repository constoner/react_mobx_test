import React from 'react';

import { rowTypeDictionary } from './tableConfig';

type rowProps = {
  index: string;
  type: string;
  date: string;
  isAutomatic: string;
  currenData: string;
  address: string;
  note: string;
};

const deleteRow = () => {
  console.log('Row deleted!');
};

const Row = ({
  index,
  type,
  date,
  isAutomatic,
  currenData,
  address,
  note,
}: rowProps) => {
  return (
    <tr className="table__row">
      <th className="table__item">{index}</th>
      <th className="table__item">
        <img src={rowTypeDictionary[type].icon} width={10} height={14} alt="" />
        <span>{rowTypeDictionary[type].label}</span>
      </th>
      <th className="table__item">{date}</th>
      <th className="table__item">{isAutomatic}</th>
      <th className="table__item">{currenData}</th>
      <th className="table__item">{address}</th>
      <th className="table__item">
        <span>{note}</span>
        <button className="table__button" type="button" onClick={deleteRow}>
          <svg
            width="14"
            height="16"
            viewBox="0 0 14 16"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.33331 6.00002V12H4.99998V6.00002H6.33331Z"
              fill="currentColor"
            />
            <path
              d="M8.99998 6.00002V12H7.66665V6.00002H8.99998Z"
              fill="currentColor"
            />
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M3.85281 0.666687H10.1472L10.8138 2.66669H13.6666V4.00002H12.3333L11.6666 15.3334H2.33331L1.66665 4.00002H0.333313V2.66669H3.18614L3.85281 0.666687ZM4.5916 2.66669H9.40836L9.18614 2.00002H4.81382L4.5916 2.66669ZM2.99998 4.00002L3.66665 14H10.3333L11 4.00002H2.99998Z"
              fill="currentColor"
            />
          </svg>
        </button>
      </th>
    </tr>
  );
};

export default Row;

import React from 'react';
import './style.scss';

import Row from './row';

import { tableColumns } from './tableConfig';

const Table = () => {
  return (
    <div className="table">
      <div className="table__scrolable">
        <table className="table__element">
          <thead className="table__header">
            <tr className="table__row table__row--header">
              {tableColumns.map((row, index) => {
                return (
                  <th className="table__item table__item--header" key={index}>
                    {row}
                  </th>
                );
              })}
            </tr>
          </thead>

          <tbody className="table__body">
            <Row
              index="1"
              type="heat"
              date="12.01.2023"
              isAutomatic="да"
              currenData="333467.6636"
              address="г Санкт-Петербург, ул Тарасова, д. 0 корп. 0 лит. А, кв. 1"
              note="Подвал, парадная 1"
            />
            <Row
              index="2"
              type="coldWater"
              date="12.01.2023"
              isAutomatic="да"
              currenData="333467.6636"
              address="г Санкт-Петербург, ул Тарасова, д. 0 корп. 0 лит. А, кв. 1"
              note="Подвал, парадная 1"
            />
          </tbody>
        </table>
      </div>
      <div className="table__pagination">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, eos.
      </div>
    </div>
  );
};

export default Table;

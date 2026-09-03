import type React from 'react';
import Styles from './styles.module.css';

export interface Column<T> {
  key: typeof T | string;
  header: string;
  render?: (row: T) => React.ReactNode;
}

interface TableProps<T> {
  columns: Column<T>[];
  data: T[];
  className?: string;
}

export const Table: React.FC<TableProps<T>> = ({
  columns,
  data,
  className,
}) => {
  return (
    <table className={`${Styles.responsiveTable} ${className || ''}`}>
      <thead>
        <tr>
          {columns.map(column => (
            <th key={column.key}>{column.header}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.map((row, rowIndex) => (
          <tr key={rowIndex}>
            {columns.map(column => (
              <td key={column.key}>
                {column.render ? column.render(row) : (row as any)[column.key]}
              </td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
};

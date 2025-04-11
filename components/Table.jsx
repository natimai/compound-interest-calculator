import React from 'react';

const baseStyles = 'w-full border-collapse';

export function SimpleTable({ children }) {
  return (
    <table className={`${baseStyles} my-4`}>
      <tbody>{children}</tbody>
    </table>
  );
}

export function StripedTable({ children }) {
  return (
    <table className={`${baseStyles} my-4`}>
      <tbody className="divide-y divide-gray-200">{children}</tbody>
    </table>
  );
}

export function BorderedTable({ children }) {
  return (
    <table className={`${baseStyles} border border-gray-200 my-4`}>
      <tbody className="divide-y divide-gray-200">{children}</tbody>
    </table>
  );
}

export function TableRow({ children }) {
  return <tr className="hover:bg-gray-50">{children}</tr>;
}

export function TableCell({ children, isHeader = false }) {
  const baseCellStyles = 'px-4 py-2';
  const headerStyles = 'font-semibold text-left bg-gray-50';
  const cellStyles = isHeader ? `${baseCellStyles} ${headerStyles}` : baseCellStyles;
  
  return <td className={cellStyles}>{children}</td>;
}

export function Table({ children }) {
  // Get the raw content as a string
  const content = React.Children.toArray(children)
    .map(child => {
      if (typeof child === 'string') {
        return child;
      }
      if (React.isValidElement(child) && child.props) {
        return child.props.children;
      }
      return '';
    })
    .join('')
    .trim();

  // Split the content into rows and remove empty lines
  const rows = content
    .split('\n')
    .map(row => row.trim())
    .filter(row => row.length > 0 && row.includes('|'));
  
  if (rows.length < 3) {
    console.error('Invalid table format:', content);
    return <div className="my-4 p-4 bg-red-50 text-red-700 rounded">Invalid table format</div>;
  }

  // Extract headers from the first row
  const headers = rows[0]
    .split('|')
    .map(header => header.trim())
    .filter(Boolean);
  
  // Extract data rows (skip the separator row)
  const dataRows = rows
    .slice(2)
    .map(row => 
      row
        .split('|')
        .map(cell => cell.trim())
        .filter(Boolean)
    );

  return (
    <div className="overflow-x-auto my-6">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {headers.map((header, index) => (
              <th
                key={index}
                scope="col"
                className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {dataRows.map((row, rowIndex) => (
            <tr key={rowIndex} className={rowIndex % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {row.map((cell, cellIndex) => (
                <td
                  key={cellIndex}
                  className="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                >
                  {cell}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
} 
import React from 'react';

interface IQuickTableProps {
  /** Array of items to be rendered in table rows */
  rows: any[];
}

export class QuickTable extends React.Component<IQuickTableProps> {

  // HTML Table:
  // <table><tbody><tr><td>data</td><td>...

  render() {
    return (
      <table>
        <tbody>
          {this.props.rows.map(
            (row: any, i) => {return <tr key={i}><td>{row}</td></tr>}
            )}
        </tbody>
      </table>
    );
  }

}
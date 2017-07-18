import React from 'react';

class Table extends React.Component {
  constructor(props) {
    super(props);

    this.generateHeaders = this.generateHeaders.bind(this);
    this.generateRows = this.generateRows.bind(this);
  }

  generateHeaders() {
    let columns = this.props.columns;

    return columns.map((columnData) => {
      return (<th key={columnData.key}>{columnData.label}</th>);
    });
  }

  generateRows() {
    let columns = this.props.columns;
    let data = this.props.data;

    return data.map((item) => {
      var cells = columns.map((columnData) => {
        return <td key={item[columnData.key]}>{item[columnData.key]}</td>
      });
      return <tr key={item.id}>{cells}</tr>
    });
  }

  render() {
    let headerComponents = this.generateHeaders();
    let rowComponents = this.generateRows();

    return (
      <table>
          <thead>
            <tr>
              {headerComponents}
            </tr>
          </thead>
        <tbody>{rowComponents}</tbody>
      </table>
    );
  }
}

export default Table;

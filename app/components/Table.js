import React from 'react';

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.data
    };
  }

  render() {
    return (
      <div className='table'>
        {this.state.data.map((item) => {
          item.title
        })}
      </div>
    )
  }
}

export default Table;

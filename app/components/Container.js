import React from 'react';
import Table from './Table';

const data = [
  {
    "title": "the wizard of oz",
    "year": 1939,
    "genre": "fantasy"
  },
  {
    "title": "citizen kane",
    "year": 1941,
    "genre": "drama"
  },
  {
    "title": "the godfather",
    "year": 1972,
    "genre": "drama"
  },
  {
    "title": "Metropolis",
    "year": 1927,
    "genre": "science"
  }
];

class Container extends React.Component {
  render() {
    return (
      <Table data={data} />
    )
  }
}

export default Container;

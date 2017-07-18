import React from 'react';
import Table from './Table';

const columns = [
  {
    "key": "title",
    "label": "Title"
  },
  {
    "key": "year",
    "label": "Year"
  },
  {
    "key": "genre",
    "label": "Genre"
  }
];

const data = [
  {
    "id": 1,
    "title": "the wizard of oz",
    "year": 1939,
    "genre": "fantasy"
  },
  {
    "id": 2,
    "title": "citizen kane",
    "year": 1941,
    "genre": "drama"
  },
  {
    "id": 3,
    "title": "the godfather",
    "year": 1972,
    "genre": "drama"
  },
  {
    "id": 4,
    "title": "Metropolis",
    "year": 1927,
    "genre": "science"
  }
];

class Container extends React.Component {
  render() {
    return (
      <Table data={data} columns={columns}/>
    )
  }
}

export default Container;

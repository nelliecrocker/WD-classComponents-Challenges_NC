import React, { Component } from 'react';
import { Input } from 'reactstrap';
import Search from './Search';

class SearchIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards']

    }
  }

  searchFunction(things) {

    return (
      <div>
        {/* needs to be .filter over the input value */}
        {this.state.things.map((thing) => { return <p>{thing} </p> })}
      </div>
    )
  }

  //needs to bind
  // handleChange(e) {
  //   console.log(e.target.value);

  // }

  render() {
    return (
      <div>
        <Input placeholder='Search Here'
          onChange={(handleChange)}
        />
        {/* need onchange and onsubmit functions */}


        <h3>Results:</h3>
        { this.searchFunction()}
      </div>
    )
  }
}

export default SearchIndex


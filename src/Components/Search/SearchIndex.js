import React, { Component } from 'react';
import { Input } from 'reactstrap';
import Search from './Search';

class SearchIndex extends Component {
  constructor(props) {
    super(props)
    this.state = {
      things: ['pen', 'marker', 'eraser', 'notebook', 'pencil', 'scissors', 'highlighter', 'stapler', 'paper clip', 'binder', 'hole punch', 'laminator', 'laminating sheets', 'protective sheets', 'index cards'],
      searchTerm: ""
    }
    this.handleChange.bind(this)
    this.handleSubmit.bind(this)
  }

  searchFunction() {

    return (
      <div>
        {/* needs to be .filter over the input value
        {this.state.things.map((thing) => { return <p>{thing} </p> })} */}
      </div>
    )
  }

  handleChange(e) {
    console.log(e.target.value);

  }

  handleSubmit(e) {
    //take search term and add it to state


    //filter through the things array for the searchTerm


    //display matches


  }

  render() {
    return (
      <div>
        <Input placeholder='Search for Office Supplies'
          onChange={(this.handleChange)}
          onSubmit={(this.handleSubmit)}
        />
        <br />
        <h3>Results:</h3>
        {this.searchFunction()}
      </div>
    )
  }
}

export default SearchIndex


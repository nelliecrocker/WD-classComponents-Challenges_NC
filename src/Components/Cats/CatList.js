import React, { Component } from 'react';

class CatList extends Component {
  constructor(props) {
    super(props)
  }  
  render() {
    return (
      <div>
        {console.log(this.props.cats)}
        {this.props.cats.map((cat) => { return <li>{cat}</li> })}
      </div>
    )
  }
}


export default CatList;

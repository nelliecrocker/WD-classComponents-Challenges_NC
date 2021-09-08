import React, { Component } from 'react'

class DogIndex extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: ""
        }
    }

    componentDidMount() {
        this.showDog()
    }

    showDog() {
        fetch(`https://dog.ceo/api/breeds/image/random`)
            .then(
                res => res.json()
            )

            .then(
                json => {
                    this.setState({
                        image: json.message
                    })
                }
            )
            .catch(
                Error => console.log(Error)
            )
    }

    render() {
        return (
            <div>
                <p>Check out this fuzzy guy!</p>
                <button onClick={this.showDog}>Find a new fuzzy guy</button>
                <br />
                <br />
                <img src={this.state.image} />
            </div>
        )
    }
}

export default DogIndex
import React, {Component} from 'react'

class Filters extends Component {

  constructor(){
    super()
    this.state={
      value: "all"
    }
  }

  onChangeType=e=>{
    let newValue = e.target.value
    this.setState({
      value: newValue
    })
  }

  onFindPetsClick=e=>{
    this.props.filterPets(this.state.value)
    this.props.fetchPets()
  }


  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select name="type" id="type" onChange={this.onChangeType} value ={this.state.value}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button className="ui secondary button" onClick={this.onFindPetsClick}>Find pets</button>
        </div>
      </div>
    )
  }
}

export default Filters

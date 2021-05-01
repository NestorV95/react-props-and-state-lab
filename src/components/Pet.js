import React,{Component} from 'react'

class Pet extends Component {
  constructor(props){
    super(props)
    this.state={
      adopted: this.props.pet.isAdopted
    }
  }

  onAdoptPet=e=>{
    this.setState({
      adopted: true
    })
    this.props.adoptingPet(this.props.pet)
  }

  render() {
    let {name,gender,type,age,weight} = this.props.pet
    return (
      <div className="card">
        <div className="content">
          <a className="header" href="">
            {name}{gender === 'male'? '♂' : '♀'}
          </a>
          <div className="meta">
            <span className="date">{type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          { this.state.adopted !== true ?
          <button className="ui primary button"onClick={this.onAdoptPet}>Adopt pet</button> :
          <button className="ui disabled button">Already adopted</button>
          }
          
          
        </div>
      </div>
    )
  }
}

export default Pet

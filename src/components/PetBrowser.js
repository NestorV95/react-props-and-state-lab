import React,{Component} from 'react'

import Pet from './Pet'

class PetBrowser extends Component {
  render() {
    return(
      <div className="ui cards">
        {this.props.pets.map(petData=>{
          return <Pet pet={petData} key={petData.id} adoptingPet={this.props.adoptingPet}/>
        })}
      </div>
    )
  }
}

export default PetBrowser

import React,{Component} from 'react'
// import fetchMock from '../fetch-setup'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends Component {
  constructor() {
    super()
    this.state = {
      pets: [],
      adoptedPets:[],
      filters: {
        type: 'all'
      }
    }
  }

  filterPets=(value)=>{
    this.setState({
      filters:{
        type: value
      }
    })
  }

  fetchingPets=()=>{
    let {type} = this.state.filters
    let url = type === 'all'? '/api/pets' : `/api/pets?type=${type}`
    fetch(url)
    .then(res=>res.json())
    .then(petsData=>{
      this.setState({
        pets: petsData
      })
    })
  }

  adoptingPet=(adoptedPet)=>{
    let oneLessPet = this.state.pets.filter(pet=> pet.id !== adoptedPet.id)
    this.setState({
      pets: oneLessPet,
      adoptedPet: [...this.state.adoptedPets,adoptedPet]
    })
  }

  render() {
    return (
      
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters filter={this.state.filters} filterPets={this.filterPets} 
              fetchPets={this.fetchingPets}/>
            </div>
            <div className="twelve wide column">

              <PetBrowser pets={this.state.pets} adoptingPet={this.adoptingPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App

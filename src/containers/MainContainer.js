import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'

class MainContainer extends Component {

  state = {
    stonks: [],
    addStonk: [],
    checked: "",
    filtered: ""
  }

  componentWillMount() {
    fetch("http://localhost:3000/stocks")
    .then(resp => resp.json())
    .then(data => {
      this.setState(({stonks: data}))
    })
  }

  clickHandler = (clickedStonk) => {
    if (this.state.addStonk.length === 0) {
      this.setState(({addStonk: [clickedStonk]}))
    } else {
      // this.setState(({addStonk: [...this.state.addStonk, clickedStonk]}))
      this.setState((previousState) => ({addStonk: [...previousState.addStonk, clickedStonk]}))
    }
    
    if (this.state.addStonk.includes(clickedStonk)) {
      let currentArray = [...this.state.addStonk]
      let newArray = currentArray.filter(stonk => stonk.id !== clickedStonk.id)
      this.setState(({addStonk: newArray}))
    }
  }
  
  searchHandler = (e) => {
    e.persist(e)
    this.setState( {[e.target.name]: e.target.value})
  }

  buttonSearch = () => {
    if (this.state.checked === "Price") {
      return this.state.stonks.sort((a, b) => a.price < b.price ? -1 : (a.price > b.price) ? 1 : 0 )
    } else if (this.state.checked === "Alphabetically") {
      return this.state.stonks.sort((a, b) => a.name < b.name ? -1 : (a.name > b.name) ? 1 : 0 )
    } else {
      return this.state.stonks
    }
  }

  filteredSearch = (category) => {
    // let newArray = [...this.state.stonks]
    // this.setState({stonks: newArray})

    if (category === "Tech") {
      return this.state.stonks.filter(el => el.type === category)
      // this.setState({stonks: tech})
    } else if (category === "Finance") {
      // let newArray = [...this.state.stonks]
      // this.setState({stonks: newArray})
      return this.state.stonks.filter(el => el.type === category)
      // this.setState({stonks: fin})    
    } else if (category === "Sportswear") {
      // let newArray = [...this.state.stonks]
      // this.setState({stonks: newArray})
      // let sports = newArray.filter(el => el.type === category)
      // this.setState({stonks: sports})
    } else {
      return this.state.stonks
    }
  }


  render() {
    console.log('stonks:', this.state.stonks)
    console.log('my stonks:', this.state.addStonk)
    console.log('status:', this.state.clicked)
    return (
      <div>
        <SearchBar checked={this.state.checked} searchHandler={this.searchHandler} filtered={this.state.filtered} filteredSearch={this.filteredSearch}/>

          <div className="row">
            <div className="col-8">

              <StockContainer bought={this.state.bought} clickHandler={this.clickHandler} searchedStonks={this.buttonSearch}/>

            </div>
            <div className="col-4">

              <PortfolioContainer myStonks={this.state.addStonk} bought={!this.state.bought} clickHandler={this.clickHandler}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;

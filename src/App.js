import './App.css';
import React,{Component} from 'react';
import { CardList} from './components/card-list/card-list.component';


class App extends Component {
  constructor(){
    super();
    this.state={
      fooditem:[]
    };
  }
  API=(query)=>{
    fetch('https://api.spoonacular.com//recipes/complexSearch?query='+query+'&addRecipeInformation=true&apiKey=3a2cc1708b104fa4b731ab9ecde418d6')
    .then(data=>data.json())
    .then(data=>this.setState({fooditem:data.results}));
  }

  render(){
  const foodfilter=this.state.fooditem;
  return (
    <div className="App">
      <h1>Food Finder</h1>
      <input placeholder='Search Food' onChange={(e)=>this.API(e.target.value)} />
      <CardList food={foodfilter}/>
    </div>
  );
}
}
export default App;

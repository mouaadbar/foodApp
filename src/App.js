
import './App.css';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import Recipe from "./Recipe"
import {useState, useEffect} from 'react'


const App = () => {

const APP_ID = '67dc680f';
const APP_KEY ='b19eac080de42c2dacab58a360bc7fbf';


const [recipes, setRecipes] = useState([])
const [search, setSearch] = useState("")
const [query, setQuery] = useState('chicken')



useEffect(()=>{
  getRecipe();
  console.log("Effect has been run")
  
      


},[query])


const getRecipe = async () => {
  const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
  const data = await response.json();
  setRecipes(data.hits)
  console.log(data.hits)

}


const updateSearch = e =>{
  setSearch(e.target.value)
 
}

const getSearch = e =>{
  e.preventDefault();
  setQuery(search);
  setSearch('');
}

  return (
    <div className ="App">

   <form onSubmit={getSearch} className="search-form">
     <input className="search-bar" type ="text" value ={search} onChange={updateSearch}></input>
     <button  className="search-button" type="submit">Search</button>
     

   </form>
   <div className="recepies">
    {
      recipes.map(
           recipe =>(
       <Recipe
         key = {recipe.recipe.label}
         title = {recipe.recipe.label}
         calories = {recipe.recipe.calories}
         image = {recipe.recipe.image}
         ingredients = {recipe.recipe.ingredients}
     
       />
      ))
    }
    </div>
    </div>
  )
}

export default App;

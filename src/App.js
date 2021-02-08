import React, { useState , useEffect } from "react";
import './App.css'
import Axios from 'axios';
import Header from './component/Header'
import Recipes from './component/Recipes'
import axios from "axios";
const  App = () => {
  const [search,setSearch] = useState("chicken");
  const [recipes,setRecipes] = useState([]);

  const apps_id = "d8086770";
  const apps_key = "dbdcb0660dee12fdfb0581669ba22172";

  const inputHendle = (e) =>{
    setSearch(e.target.value);
  }

  useEffect( async () =>{
    getRec();
  },[]);

  const getRec = async () => {
    const res = await Axios.get(`https://api.edamam.com/search?q=${search}&app_id=${apps_id}&app_key=${apps_key}&from=0&to=3&calories=591-722&health=alcohol-free`);
    console.log(res);
    if(res.status === 200){
      setRecipes(res.data.hits);
    }
    else{
      setRecipes("");
    }
  }
  const searchRecipes = () =>{
    getRec();
  }
  return (
      <>
         <Header Search = {search} 
          inputHendle={inputHendle}
          searchRecipes ={searchRecipes}
        />
         <div className="container p-2">
              <Recipes recipes = {recipes}/>
         </div>
      </>
  );
}
export default App;


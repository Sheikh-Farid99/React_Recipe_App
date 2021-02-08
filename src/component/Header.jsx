import React from 'react'

const Header = (props) => {
    const {search,inputHendle,searchRecipes} = props;
    return (
        <div className="py-4 px-2 text-center text-white header">
            <h1><i class="fas fa-user mr-3"></i>Food Recipes</h1>
            <div className="input-group w-50 mx-auto p-2">
                <input type="text" onChange={inputHendle} placeholder="search your recipes...." value={search} className="form-control"/>
                <div className="input-group-append">
                    <span className="input-group-text p-0">
                        <button onClick={searchRecipes} className="btn btn-dark">Search Recipes</button>
                    </span>
                 </div>
            </div>
        </div>
    )
}
export default Header;
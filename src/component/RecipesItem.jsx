import React from 'react'

const RecipesItem = (props) => {

    const {name,img,ingre} = props;
    return (
        <div className="col-md-4">
            <div className="card shadow">
                <img src={img} className="img-fluid p-2" alt=""/>
                <div className="card-body">
                    <h5 className="text-center">{name}</h5>
                </div>
                <ul className="list-group list-group-flush">
                {
                   ingre.map(ingre =>(
                        <li className="list-group-item">
                            {ingre}
                        </li>
                    ))
                }
                </ul>
            </div>
        </div>
    )
}

export default RecipesItem

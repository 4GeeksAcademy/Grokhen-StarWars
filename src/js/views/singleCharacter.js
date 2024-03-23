import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"; 



const SingleCharacter = () => {
    const [singleObject, setSingleObject] = useState({});
    const params = useParams();

    const getSingleObject = async () => {
        try {
          const response = await fetch(`https://www.swapi.tech/api/people/${params.id}`);
          const data = await response.json();
          setSingleObject(data.result.properties);
        } catch (error) {
          console.error(error);
        }
      };

      useEffect(() => {
        getSingleObject();
      }, []);
      
    return (
        <>
            <div className="card mb-3 border-danger bg-dark text-light text-center">
                <div className="row g-0">
                    <div className="col-md-4">
                        <img src={`https://starwars-visualguide.com/assets/img/characters/${params.id}.jpg`} className="img-fluid rounded-start" alt="..."></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title mb-4">{singleObject.name}</h5>
                            <p className="card-text">Birth year: {singleObject.birth_year}</p>
                            <p className="card-text">Height: {singleObject.height}cm</p>
                            <p className="card-text">Hair color: {singleObject.hair_color}</p>
                            <p className="card-text">Eye color: {singleObject.eye_color}</p>
                            <p className="card-text">Gender: {singleObject.gender}</p>
                            <p className="card-text">Skin color: {singleObject.skin_color}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleCharacter;
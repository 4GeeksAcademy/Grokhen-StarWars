import React, { useState, useEffect, useContext } from "react";
import { useParams, Link, useNavigate } from "react-router-dom"; 
import { URL_API } from "../const/url.const";



const SingleVehicle = () => {
    const [singleObject, setSingleObject] = useState({});
    const params = useParams();

    const getSingleObject = async () => {
        try {
          const response = await fetch(`${URL_API}/vehicles/${params.id}`);
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
                        <img src={`https://starwars-visualguide.com/assets/img/vehicles/${params.id}.jpg`} className="img-fluid rounded-start" alt={`image of ${singleObject.name}`}></img>
                    </div>
                    <div className="col-md-8">
                        <div className="card-body">
                            <h5 className="card-title mb-4">{singleObject.name}</h5>
                            <p className="card-text">Model: {singleObject.model}</p>
                            <p className="card-text">Crew: {singleObject.crew}</p>
                            <p className="card-text">Passengers: {singleObject.passengers}</p>
                            <p className="card-text">Cargo Capacity: {singleObject.cargo_capacity}kgs</p>
                            <p className="card-text">Length: {singleObject.length}m</p>
                            <p className="card-text">Vehicle class: {singleObject.vehicle_class}</p>
                            <p className="card-text">Cost: {singleObject.cost_in_credits} credits</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SingleVehicle;
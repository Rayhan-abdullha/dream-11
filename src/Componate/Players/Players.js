import React, { useState } from 'react';
// import React from 'react';
import './Players.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus, faCheckCircle, faPlusCircle } from '@fortawesome/free-solid-svg-icons'

const Players = (props) => {
    const {name, flag, region, height, salary, position, gender, email} = props.playersInfo;
    const handleAddPlayers = props.handleAddPlayer;
    const [isClicked, setIsClicked] = useState(false);

    return (
        <div className="col-xl-4 col-lg-3 col-md-4 col-sm-6 mb-3">
            <div className="singlePlayer">
                <div className="img">
                    <img src={flag} alt="img"/>
                </div>
                <div className="player-info text-center mt-3 mb-3">
                    <h4>{name}</h4>
                    <p className="salary">Salary: {salary} M / Month</p>
                    <p>Country: {region}</p>                  
                    <p>Position: {position}</p>
                    <p>Height: {height}</p>
                    <p>Email: {email}</p>
                
                 <button
                    disabled={isClicked}
                    onClick={() => {
                        handleAddPlayers(props.playersInfo);
                    setIsClicked(true);
                    }}
                    className="btn btn-success">
                    {isClicked ? (
                    <div>
                        <FontAwesomeIcon icon={faCheckCircle} /> Already Sold
                    </div>
                    ) : (
                    <div>
                        <FontAwesomeIcon icon={faCartPlus} /> Buy
                    </div>
                    )}
                </button>












                </div>
            </div>
        </div>
    );
};

export default Players;
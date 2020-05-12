import React from 'react'
import App from './App'
import { getAllSavedPlants } from '../apis/savedPlants'
import { Link } from 'react-router-dom'


class SavedPlants extends React.Component {
    state = {
        plant: []
    }

    componentDidMount(){
        getAllSavedPlants()
        .then(plant => {
            this.setState({
                plant: plant
            })
        })
    }
    

    render() {
    
         return (
            <div className='savedPlantRoom'>
                <div className='border'>
                    <div className='headingDiv'>
                        <div div className='headingDiv-image'>
                                <h1>The Conservatory</h1>
                                <h2>Save your favourite plants here!</h2>
                        </div>
                    </div> 
                     <div className='plant-container'>
                            {this.state.plant.map((plant) => (
                                <>
                                
                            <div className="flip-card">
                                <div className='plantcarelink'>
                                    <Link to={`/plant/${plant.plants_id}`}>More Details & Care</Link>
                                </div>
                            <div className="flip-card-inner">
                            <div className="flip-card-front">
                                <img className="flip-card-front-image"  src={plant.photoURL} />
                            </div>
                            <div className="flip-card-back">
                            <h5>{plant.common_name}</h5> 
                            <h5>{plant.scientific_name}</h5> 
                            </div>
                            </div>
                            </div>
                            </>
                            ))} 
                    </div>  
                </div>
            </div> 
         )
   }
}

         


export default SavedPlants 

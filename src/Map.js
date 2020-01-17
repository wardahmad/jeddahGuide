import { ReactBingmaps } from 'react-bingmaps';
import React, { Component } from 'react'

class Map extends Component {
    render() {
        console.log(this.props.location)
        return (

            <div className="mapDiv" >
                <ReactBingmaps //Render a Bing Map
                    bingmapKey='AliiTsAbE3AMLr6dHgirwvlJCVXRD4-4Cvaz-SPST4JW_NW69UhDyrqOPz01mIGM'
                    //set the logtitude and latitude values to the ones related to that place's values, already passed as props by the Display component.             
                    center={[this.props.location[0], this.props.location[1]]}
                    zoom={15} //zoom setting for the map.
                    pushPins={[{
                        //set the pin/marker to the currently displayed place's location using its latitude and longitude values.
                        'location': [this.props.location[0], this.props.location[1]], 
                        'option': { color: 'black' }
                    }]}
                >
                </ReactBingmaps>
            </div>
        )
    }

} export default Map
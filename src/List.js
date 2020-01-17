import React, { Component } from 'react';
import Display from './Display'
import { Card } from 'react-bootstrap/';

class List extends Component {

    constructor(props) {
        super(props)
        this.state = {
            onDisplay: " " //This state will be used to render the Display component only after an event (onClick).
        }
        this.setDisplayItem = this.setDisplayItem.bind(this) //Bind the click handling method setDisplayItem to 'this'
    }

    //handles the change of the state onDisplay to render the Display component with the user's chosen item from the currently displayed list.
    setDisplayItem(item) {
        this.setState({
            onDisplay: <Display displayItem={item}></Display>
        })
    }

    render() {
        //map the list recieved as props so that every item/place in that list is displayed as a card containing the name and an image of that item/place.

        const currentList = (this.props.list).map((item, index) => {

            return <div key={index} className='Card'>
                <Card style={{ width: '15rem', margin: '2px', marginBottom: '30px' }} className="cardHov">
                    {/* Add onClick event handler to the name and an image of the place */}

                    <Card.Img onClick={() => this.setDisplayItem(item)} variant="top" src={item.imgSrc[0]} width="250" height="250" />
                    <Card.Body>
                        <button id="linkButton" onClick={() => this.setDisplayItem(item)}> {item.name} </button>
                    </Card.Body>
                </Card>
            </div>
        })

        return (
            <div>
                {/* Wrap the cards containing the places/items in a div as their container */}
                <div className='CardCont'>
                    {/* Render the map-generated cards representing each place/item  */}
                    {currentList}
                </div>
                {/* The following would change depending on the state that changes if the user clicked on an item  */}

                {this.state.onDisplay}

            </div>
        )
    }
}
export default List;
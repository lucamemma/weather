import React from 'react';
import './styles.css';
import { Card, Row, Col, Jumbotron, CardDeck } from 'react-bootstrap';
import Moment from 'react-moment';
import 'moment/locale/it';
import { IconContext } from "react-icons";
import {FaMapMarkerAlt} from 'react-icons/fa'

const matchCode2Weather = (code) => {
  if(code < 300){
    return 'fulmini';
  }
  else if (code < 500) {
    return 'pioggerella';
  }
  else if (code < 600){
    return 'pioggia';
  }
  else if (code < 700){
    return 'neve';
  }
  else if (code < 800){
    return 'nebbia';
  }
  else if (code === 800){
    return 'sole';
  }
  else if (code < 804){
    return 'coperto';
  }
  else if (code === 804){
    return 'nuvoloso';
  }
  else{
    return 'precipitazioni';
  }
};
function toggleHoverState(e){
  
  console.log(e,e.target.className.indexOf('hover-reaction'), e.target.className);
  if(e.type === "mouseleave"){
    e.target.classList.remove('hover-reaction');
  }
  else{
    if(e.target.classList.contains('card-wrapper')){
      e.target.classList.add('hover-reaction');
    }
  }
}

const Day = ({dayData, header, city}) => (
  (header ?
    (
    <Card>
      <Card.Body>
        <Card.Title>
            <IconContext.Provider value={{ color: "white", size: "2em" }}>
              <div>
                <span style={{fontSize:"3em", fontWeight: '300'}}><FaMapMarkerAlt size={'1em'}/> {city}</span>
              </div>
            </IconContext.Provider>
        </Card.Title>
        <div>
          <div> <div className={matchCode2Weather(dayData.weather.code)+ " icon-tempo big-icon"}></div> </div>
          <h1> {Math.floor(dayData.temp)}°</h1>
          <div>Percepita: {Math.floor(dayData.app_max_temp)}°</div>
          <div>Umidità: {dayData.rh} %</div>
        </div>
      </Card.Body>
    </Card>
    ):
    (  
      <div className={"card-wrapper"} onMouseEnter={toggleHoverState} onMouseLeave={toggleHoverState}>
        <Card >
            <Card.Body >
              <Card.Title>
                <div style={{textTransform: 'uppercase'}}>
                  <Moment format="ddd D" locale="it">
                    {dayData.datetime}
                  </Moment>
                </div>
              
              </Card.Title>
              <Card.Text>
              <div>
                <div> <div className={matchCode2Weather(dayData.weather.code)+ " icon-tempo"}></div> </div>
              </div>
              </Card.Text>
            </Card.Body>
            <Card.Footer>              
              <div>{Math.floor(dayData.app_max_temp) + "° - " + Math.floor(dayData.app_min_temp) + "°"}</div>
            </Card.Footer>
        </Card>
      </div>
          
      )
    )
  )
  
export default Day;
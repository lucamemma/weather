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

const Day = ({dayData, header, city}) => (
  (header ?
    (
    <Card>
      <Card.Body>
        <Card.Title>
            <IconContext.Provider value={{ color: "white", size: "2em" }}>
              <div>
                <FaMapMarkerAlt />
                <span style={{fontSize:"3em", fontWeight: '300'}}>{city}</span>
              </div>
            </IconContext.Provider>
        </Card.Title>
        <div>
          <div> <div className={matchCode2Weather(dayData.weather.code)+ " icon-tempo big-icon"}></div> </div>
          <h1> {Math.floor(dayData.temp)}°</h1>
          <div>Percepita: {dayData.app_max_temp}°</div>
          <div>Umidità: {dayData.rh} %</div>
        </div>
      </Card.Body>
    </Card>
    ):
    (  
          <Card>
          <Card.Body>
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
      )
    )
  )
  
export default Day;
import React from 'react';
import './styles.css';
import { Card, Row, Col, Jumbotron, CardDeck, Container } from 'react-bootstrap';
import Day from './day';


const Weather = ({weatherData}) => (

    <Container className="bgblur">
        <Row>
          <Day dayData={weatherData.data[0]} header={true}  city={weatherData.city_name}/>
        </Row>
        <hr />
        <Row>
          <CardDeck>
        {weatherData.data.slice(1, weatherData.data.length).map((day, i) => {     
           console.log(i,day);                 
           // Return the element. Also pass key     
           return (<Day dayData={day} key={i}/>) 
        })}
          </CardDeck>
        </Row>
    </Container>
  )
  
  export default Weather;
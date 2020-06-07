import React from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';
import  DishDetailComponent  from './DishDetailComponent';

  function RenderMenuItem({dish, onClick}) {
    return(
      <Card onClick={() => onClick(dish.id)}>
        <CardImg width='100%' src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Card>
    );
  } 

  const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
      return (
        <div key={dish.id} className="col-12 col-md-4 m-1">
          <RenderMenuItem dish = {dish} onClick={props.onClick}></RenderMenuItem>
        </div>
      );
      
    });
    return (
      <div className="row">
          {menu}
      </div>
    );
  }

    


export default Menu;
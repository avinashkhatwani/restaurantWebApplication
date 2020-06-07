import React, { Component } from 'react';
import {Navbar, NavbarBrand} from 'reactstrap';
import Menu from './MenuComponent';
import { DISHES } from '../shared/dishes';
import  DishDetailComponent  from './DishDetailComponent';

class Main extends Component {
  constructor(props){
    super(props);
    this.state = {
      dishes : DISHES,
      selectedDish: null
    };
    }

    // renderDish(dish){
    //     if(dish!=null){
    //       return(
    //         <DishDetailComponent dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
    //       );
    //     }
    //     else{
    //       return(
    //         <div></div>
    //       );
    //     }
    // }


    onDishSelect(dishId){
        this.setState({
        selectedDish: dishId
        });
    }

  render() {
    return (
      <div>
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">Ristorante Con Fusion</NavbarBrand>
          </div>
        </Navbar>
        <div className="container">
            <Menu dishes={this.state.dishes}
                onClick={(dishId) => this.onDishSelect(dishId)} />
            <div>
                <DishDetailComponent dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
            </div>
        </div>
      </div>
    );
  }

  
}

export default Main;

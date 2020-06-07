import React, { Component } from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';

  class DishDetailComponent extends Component{

    constructor(props){
        super(props);

        this.state = {

        }
    }

    render(){
        const dish = this.props.dish;

        const commentList = this.props.dish.comments.map(item => (
            <li key={item.id}>
              {item.comment}
              <br/><br/>
              -- {item.author},  {item.date}
              <br/><br/>
            </li>
          )
        );


        return(
            <div className="row">
                <div className="col-12 col-md-5 m-1">
                    <Card>
                        <CardImg top src={this.props.dish.image} alt={this.props.dish.name} />
                        <CardBody>
                            <CardTitle>{this.props.dish.name}</CardTitle>
                            <CardText>{this.props.dish.description}</CardText>
                        </CardBody>
                    </Card>
                </div>
                <div className="col-12 col-md-5 m-1">
                    <ul>{commentList}</ul>
                </div>
            </div>
        );
        
    }
  }
  export default DishDetailComponent;

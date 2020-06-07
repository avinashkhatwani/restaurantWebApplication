import React from 'react';
import { Media } from 'reactstrap';
import { Card, CardImg, CardImgOverlay, CardText, CardBody,
  CardTitle } from 'reactstrap';

    function RenderCommentList({comments}){
        // console.log(comments)
        const commentList = comments.map(item => (
            // console.log(item),
            <li key={item.id}>
                {item.comment}
            <br/><br/>
            -- {item.author} ,
                {new Intl.DateTimeFormat("en-US", {
                    year: "numeric",
                    month: "short",
                    day: "2-digit"
                }).format(new Date(Date.parse(item.date)))}
                <br />
                <br />
            </li>
        ));
        return(
            <div className="col-12 col-md-4 m-1">
                <ul>{commentList}</ul>
            </div>
        );
    }

    function RenderDish({dish}){
        return(
            <div className="col-12 col-md-4 m-1">
                <Card>
                    <CardImg top src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
        );
    }

  const DishDetailComponent = (props) => {
      console.log("HEREEEE");
      console.log(props.dish);


    if(props.dish != null){
        return(
        <div className="row">
            <RenderDish dish={props.dish} />
            <RenderCommentList comments={props.dish.comments}></RenderCommentList>
        </div>
        );

    }
    else{
        return (
            <div></div>
        );
    }
}
  
  export default DishDetailComponent;

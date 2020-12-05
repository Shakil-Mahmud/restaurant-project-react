import React from 'react'
import {Card, CardImg, CardText, CardBody, CardTitle} from 'reactstrap'
import Comments from './Comments'

const DishDetail = props =>{

    return(
        <div>
            <Card>
                <CardImg top src={props.dish.image} alt={props.dish.name}></CardImg>
                <CardBody  style={{ textAlign: "left" }}>
                    <CardTitle> {props.dish.name} </CardTitle>
                    <CardText>
                        {props.dish.description}
                        Price: {props.dish.price}/-
                    </CardText>
                    <hr />
                    <Comments comments={props.dish.comments} />
                </CardBody>
            </Card>
        </div>
    )
}

export default DishDetail;
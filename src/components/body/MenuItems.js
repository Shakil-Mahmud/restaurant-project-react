import React from 'react'
import {Card, CardImg, CardImgOverlay, CardBody, CardTitle} from 'reactstrap'

const MenuItems = props =>{
    //console.log(props)
    return(
        <div>
            <Card>
                <CardBody>
                    <CardImg
                    width = "100%" 
                    src={props.dish.image} 
                    alt={'props.dish.name'}
                    style={{opacity: '0.5'}} 
                    />
                    <CardImgOverlay >
                        <CardTitle onClick={()=> props.setectedDish(props.dish) } > {props.dish.name} </CardTitle>
                    </CardImgOverlay>
                </CardBody>
            </Card>
        </div>        
    );
}

export default MenuItems;
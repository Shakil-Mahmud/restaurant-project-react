import React from 'react'
import MenuItems from './MenuItems'
import COMMENTS from '../../data/comments'
import DISHES from '../../data/dishes'
import DishDetail from './DishDetail'
import {CardColumns, Modal, ModalBody, ModalFooter, Button} from 'reactstrap'

class Menu extends React.Component{
    state = {
        dishes: DISHES,
        comments: COMMENTS,
        selected_dish: null,
        isModalOpen: false
    }

    onDishSelect = dish=>{
        this.setState({selected_dish: dish, isModalOpen: !this.state.isModalOpen});
    }

    onModalToogle = () => this.setState({isModalOpen: !this.state.isModalOpen})

    render(){
        document.title= 'Menu';
        const menu = this.state.dishes.map(
            item =>{
                return(
                    <MenuItems 
                    dish={item} 
                    key={item.id} 
                    setectedDish = {this.onDishSelect}
                    />
                )
            }
        )

        let selected_dish = null;
        if(this.state.selected_dish!=null){
            const comments = this.state.comments.filter(comment=> this.state.selected_dish.id===comment.dishId)
            selected_dish= <DishDetail dish={this.state.selected_dish}
            comments = {comments} />
        }

        return(
            <div className='container'>
                <div className='row' style={{ margin: "10px" }}>
                    <CardColumns>
                    {menu}
                    </CardColumns>
                    <Modal isOpen={this.state.isModalOpen}>
                        <ModalBody onClick={this.onModalToogle}>
                            {selected_dish}
                        </ModalBody>
                        <ModalFooter>
                            <Button onClick={this.onModalToogle}>Close</Button>
                        </ModalFooter>
                    </Modal>
                </div>
            </div>
        )
    }
}

export default Menu;
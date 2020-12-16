import React from 'react'
import MenuItems from './MenuItems'
import DishDetail from './DishDetail'
import {CardColumns, Modal, ModalBody, ModalFooter, Button} from 'reactstrap'
import {connect} from 'react-redux'
import * as actionTypes from '../../redux/actionTypes'

const mapStateToProps = state =>{
    return{
        dishes: state.dishes,
        comments: state.comments
    }
}

const mapDispatchToProps = dispatch =>{
    return{
        addComment: (dishId, rating, author, comment)=> dispatch({
            type: actionTypes.ADD_COMMENT,
            payload: {
                dishId: dishId,
                author: author,
                rating: rating,
                comment: comment
            }
        })
    }
}

class Menu extends React.Component{
    state = {
        selected_dish: null,
        isModalOpen: false
    }

    onDishSelect = dish=>{
        this.setState({selected_dish: dish, isModalOpen: !this.state.isModalOpen});
    }

    onModalToogle = () => this.setState({isModalOpen: !this.state.isModalOpen})

    render(){
        document.title= 'Menu';
        const menu = this.props.dishes.map(
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
            const comments = this.props.comments.filter(comment=> this.state.selected_dish.id===comment.dishId)
            selected_dish= <DishDetail dish={this.state.selected_dish}
            comments = {comments} 
            addComment = {this.props.addComment} />
        }

        return(
            <div className='container'>
                <div className='row' style={{ margin: "10px" }}>
                    <CardColumns>
                    {menu}
                    </CardColumns>
                    <Modal isOpen={this.state.isModalOpen}>
                        <ModalBody>
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

export default connect(mapStateToProps,mapDispatchToProps)(Menu);
import React from 'react'
import MenuItems from './MenuItems'
import DISHES from '../../data/dishes'
import DishDetail from './DishDetail'


class Menu extends React.Component{
    state = {
        dishes: DISHES,
        selected_dish: null
    }

    onDishSelect = dish=>{
        this.setState({selected_dish: dish});
    }

    render(){
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
            selected_dish= <DishDetail dish={this.state.selected_dish} />
        }

        return(
            <div className='container'>
                <div className='row' style={{ margin: "10px" }}>
                    <div className='col-6'>
                        {menu}
                    </div>
                    <div className='col-6'>
                        {selected_dish}
                    </div> 
                </div>
            </div>
        )
    }
}

export default Menu;
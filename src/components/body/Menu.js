import React from 'react'
import MenuItems from './MenuItems'
import DISHES from '../../data/dishes'

class Menu extends React.Component{
    state = {
        dishes: DISHES
    }

    render(){
        const menu = this.state.dishes.map(
            item =>{
                return(
                    <MenuItems dish={item} key={item.id}/>
                )
            }
        )
        return(
            <div className='container'>
                <div className='row'>
                    <div className='col-6'>
                        {menu}
                    </div>
                </div>
            </div>
        )
    }
}

export default Menu;
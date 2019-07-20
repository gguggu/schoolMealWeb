import React, { Component } from 'react';
import { inject } from 'mobx-react';

@inject('store')
class Main extends Component {
    constructor(props){
        super(props);
        this.state={
            mealList:[],
        };
    }

    async componentWillMount(){
        const meal = this.props.store.meal;
        const data = await meal.getSchoolMeal();
        console.log(data);
        this.setState({
            mealList:[
                data
            ]
        })
    }

    render() {
        return (
            <div>
                {
                    this.state.mealList.map(i => {
                        console.log(this.state.mealList[i])
                        return this.state.mealList[i];
                    })
                }
            </div>
        );
    }
}

export default Main;
import React, { Component } from 'react';
import { inject } from 'mobx-react';
import './Main.scss';
import MainList from '../../components/MainList/MainList';
import MainCard from '../../components/MainCard/MainCard';

@inject('store')
class Main extends Component {
    constructor(props){
        super(props);
        this.state={};
    }

    async componentWillMount(){
        const meal = this.props.store.meal;
        await meal.getSchoolMeal();
        console.log(meal.meals);
    }

    render() {
        const { store } = this.props;
        const mealList = store.meal.meals.map((data, i) =>{
            console.log(data);
            return <MainCard mealDate={data.date} mealBreakfast={data.breakfast} mealLunch={data.lunch} mealDinner={data.dinner} key={i}/>
        });
        console.log(mealList);
        return (
            <div className="mealList">
                <MainList
                    mealList={mealList}
                />
            </div>
        );
    }
}

export default Main;
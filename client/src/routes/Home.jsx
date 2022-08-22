import React from 'react'
import AddRestaurant from './components/AddRestaurant.jsx'
import Header from './components/Header.jsx'
import RestaurantsList from './components/RestaurantsList.jsx'

const Home = () => {
	return (
		<div>
			<Header content={'RESTAURANT FINDER'}/>
			<AddRestaurant />
			<RestaurantsList />
		</div>
	)
}

export default Home
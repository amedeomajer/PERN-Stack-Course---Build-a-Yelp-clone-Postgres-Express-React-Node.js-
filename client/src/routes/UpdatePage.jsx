import React from 'react';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RestaurantFinder from '../api/RestaurantFinder';
import UpdateRestaurant from './components/UpdateRestaurant';


const UpdatePage = () => {
	const {id} = useParams();
	const [restaurant, setRestaurant] = useState([]);

	useEffect(() => {
		try {
			const fetchData = async () => {
				const result = await RestaurantFinder.get(`/${id}`);
				setRestaurant(result.data.data.restaurant[0])
			}
			fetchData();
		} catch (error) {
			console.log(error);
		}
	}, []);

	return (
		<div>
			<h1>Update {restaurant.name} informations</h1>
			<UpdateRestaurant restaurant={restaurant}/>
		</div>
	)
}

export default UpdatePage;
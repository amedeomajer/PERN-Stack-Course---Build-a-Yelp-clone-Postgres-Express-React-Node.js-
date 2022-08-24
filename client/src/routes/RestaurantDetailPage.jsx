import React from 'react'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RestaurantFinder from '../api/RestaurantFinder';
import UpdateRestaurant from './components/UpdateRestaurant';
import ReviewForm from './components/ReviewForm';
import StarRating from './components/StarRating';
import Reviews from './components/Reviews';

const RestaurantDetailPage = () => {

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
			<h1>{restaurant.name}</h1>
			<table className="table table-dark">
				<tbody>
					<tr key={restaurant.id}>
						<td>{restaurant.location}</td>
						<td>{"$".repeat(restaurant.price_range)}</td>
						<td><StarRating rating={3.5}/></td>
					</tr>
				</tbody>
			</table>
			<Reviews id={id}/>
			<ReviewForm id={id}/>
		</div>
	)
}

export default RestaurantDetailPage
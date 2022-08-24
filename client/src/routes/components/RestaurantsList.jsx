import React from 'react'
import { useContext } from 'react'
import {useEffect} from 'react'
import RestaurantFinder from '../../api/RestaurantFinder'
import { RestaurantsContext } from '../../context/RestaurantsContext'
import { useNavigate } from "react-router-dom";
const RestaurantsList = () => {
	let navigate = useNavigate();
	const {restaurants, setRestaurants} = useContext(RestaurantsContext);

	useEffect(() => {
		try {
			const fetchData = async () => {
				const result = await RestaurantFinder.get('/');
				setRestaurants(result.data.data.restaurants);
			}
			fetchData();
		} catch (error) {
			console.log(error);
		}
	}, [setRestaurants]);


	const handleDelete = async (id) => {
		try {
			await RestaurantFinder.delete(`/${id}`);
			setRestaurants(restaurants.filter(restaurant => restaurant.id !== id));
		} catch (error) {
			console.log(error);
		}
	}

	const handleUpdate = (id) => {
		navigate(`restaurants/${id}/update`);
	}

	const handleRestaurantAnchor = (id) => {
		navigate(`restaurants/${id}`);
	}
	return (
		<div className='list-group'>
			<table className="table table-dark table-hover">
				<thead>
				<tr>
					<th scope='col' className="bg-primary">Restaurant</th>
					<th scope='col' className="bg-primary">Location</th>
					<th scope='col' className="bg-primary">Price Range</th>
					<th scope='col' className="bg-primary">Rating</th>
					<th scope='col' className="bg-primary">Edit</th>
					<th scope='col' className="bg-primary">Delete</th>
				</tr>
				</thead>
				<tbody>
					{
						restaurants && restaurants.map(restaurant => {
							return (
								<tr key={restaurant.id}>
								<td><a onClick={() => handleRestaurantAnchor(restaurant.id)}>{restaurant.name}</a></td>
								<td>{restaurant.location}</td>
								<td>{"$".repeat(restaurant.price_range)}</td>
								<td>{restaurant.rating}</td>
								<td><button onClick={() => handleUpdate(restaurant.id)} className="btn btn-warning">Update</button></td>
								<td><button onClick={() => handleDelete(restaurant.id)} className="btn btn-danger">Delete</button></td>
							</tr>
							)
						})}
				</tbody>
			</table>
		</div>
	)
}

export default RestaurantsList;
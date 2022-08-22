import React from 'react'
import { useParams } from 'react-router-dom'
import { useState } from 'react'
import RestaurantFinder from '../../api/RestaurantFinder';
import { useNavigate } from "react-router-dom";

export const UpdateRestaurant = ({restaurant}) => {

	const {id} = useParams();
	const [name, setName] = useState(restaurant.name);
	const [location, setLocation] = useState(restaurant.location);
	const [priceRange, setPriceRange] = useState(restaurant.priceRange);
	let navigate = useNavigate();

	console.log(name, location, priceRange)
	const handleNameChange = (event) => {
		setName(event.target.value);
	}
	const handleLocationChange = (event) => {
		setLocation(event.target.value);
	}
	const handlePriceRangeChange = (event) => {
		setPriceRange(event.target.value);
	}
	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			await RestaurantFinder.put(`/${id}`, {
				name: name,
				location: location,
				price_range: priceRange
			})
			navigate('/');
		} catch (error) {
			console.log(error);
		}
	}


	return (
		<div>
			<form>
				<div className="form-group">
					<label htmlFor="name">Name</label>
					<input value={name} onChange={handleNameChange} type="text" className="form-control" id="name" placeholder="Name" />
				</div>
				<div className="form-group">
					<label htmlFor="location">Location</label>
					<input value={location} onChange={handleLocationChange} type="text" className="form-control" id="location" placeholder="City" />
				</div>
				<div className="form-group">
					<label htmlFor="price_eange">Price Range</label>
					<br></br>
					<select value={priceRange} onChange={handlePriceRangeChange} className='custom-select my-1 mr-sm-2'>
							<option disabled>Price Range</option>
							<option value="1">$</option>
							<option value="2">$$</option>
							<option value="3">$$$</option>
							<option value="4">$$$$</option>
							<option value="5">$$$$$</option>
					</select>
				</div>
				<div className="form-group">
					<button type='submit' onClick={handleSubmit} className="btn btn-warning">Update</button>
				</div>
			</form>
		</div>
	)
}

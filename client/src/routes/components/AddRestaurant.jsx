import React from 'react'
import { useState, useContext } from 'react'
import RestaurantFinder from '../../api/RestaurantFinder';
import { RestaurantsContext } from '../../context/RestaurantsContext';
const AddRestaurant = () => {

	const [name, setName] = useState('');
	const [location, setLocation] = useState('');
	const [priceRange, setPriceRange] = useState('Price Range');
	const {addRestaurants} = useContext(RestaurantsContext);

	const handleName = (event) => {
		setName(event.target.value);
	}
	const handleLocation = (event) => {
		setLocation(event.target.value);
	}
	const handlePriceRange = (event) => {
		setPriceRange(event.target.value);
		console.log(priceRange);
	}
	const handleSubmit = async (event) => {
		event.preventDefault();
		try {
			const response =  await RestaurantFinder.post('/', {
				name: name,
				location: location,
				price_range: priceRange
			})
			addRestaurants(response.data.data.restaurant);
			console.log(response);
		} catch (error) {
			console.log(error);
		}
	}
	return (
		<div className='mb-4'>
			<form action="">
				<div className="row">
					<div className="col">
						<input value={name} onChange={handleName} className='form-control' type="text" placeholder='Name'/>
					</div>
					<div className="col">
						<input value={location} onChange={handleLocation} className="form-control" type="text" placeholder='Location'/>
					</div>
					<div className="col">
						<select value={priceRange} onChange={handlePriceRange} className='custom-select my-1 mr-sm-2'>
							<option disabled>Price Range</option>
							<option value="1">$</option>
							<option value="2">$$</option>
							<option value="3">$$$</option>
							<option value="4">$$$$</option>
							<option value="5">$$$$$</option>
						</select>
						<button type='submit' onClick={handleSubmit} className='btn btn-primary'>Add</button>
					</div>
				</div>
			</form>
		</div>
	)
}

export default AddRestaurant
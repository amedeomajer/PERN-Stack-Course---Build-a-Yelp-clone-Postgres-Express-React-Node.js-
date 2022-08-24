import React from 'react'
import { useState } from 'react'

const ReviewForm = () => {

	const [rating, setRating] = useState('Rating');
	const [review, setReview] = useState('');
	const [user, setUser] = useState('');

	const handleRatingChange = (event) => {
		setRating(event.target.value);
	}
	const handleReviewChange = (event) => {
		setReview(event.target.value);
	}
	const handleUserChange = (event) => {
		setUser(event.target.value);
	}
	const handleSubmit = (event) => {
		event.preventDefault();
		console.log(rating, review, user);
	}
	return (
		<div>
			<h1>Leave a review</h1>
			<form action="">
				<div className="row">
					<input value={user} onChange={handleUserChange} className='form-control col mr-sm-2' type="text" placeholder='Yor name...'/>
					<select value={rating} onChange={handleRatingChange} className='custom-select mr-sm-2 col'>
						<option disabled>Rating</option>
						<option value="1">*</option>
						<option value="2">**</option>
						<option value="3">***</option>
						<option value="4">****</option>
						<option value="5">*****</option>
					</select>
				</div>
				<div className="row">
					<input value={review} onChange={handleReviewChange} className='form-control' type="text" placeholder='Leave a review...'/>
				</div>
				<div className='row'><button onClick={handleSubmit} type='submit' className='btn btn-primary'>Add</button></div>
			</form>
		</div>
	)
}

export default ReviewForm;
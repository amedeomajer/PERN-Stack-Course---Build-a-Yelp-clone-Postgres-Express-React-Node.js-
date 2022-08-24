import React from 'react'
import StarRating from './StarRating';

const Reviews = ({id}) => {
	return (
		<div className='row row-cols-3 mb-2'>
			<div className="card text-white bg-primary mb-3 mr-4">
				<div className="card-header d-flex justify-content-between">
					<span>Mikko Mäkäräinen</span>
					<span><StarRating rating={1}/></span>
				</div>
				<div className="card-body">
					<p className="card-text">Hyvä suomalainen makkara on paras kuin sinä</p>
				</div>
			</div>
			<div className="card text-white bg-primary mb-3 mr-4">
				<div className="card-header d-flex justify-content-between">
					<span>Mikko Mäkäräinen</span>
					<span><StarRating rating={1}/></span>
				</div>
				<div className="card-body">
					<p className="card-text">Hyvä suomalainen makkara on paras kuin sinä</p>
				</div>
			</div>
			<div className="card text-white bg-primary mb-3 mr-4">
				<div className="card-header d-flex justify-content-between">
					<span>Mikko Mäkäräinen</span>
					<span><StarRating rating={1}/></span>
				</div>
				<div className="card-body">
					<p className="card-text">Hyvä suomalainen makkara on paras kuin sinä</p>
				</div>
			</div>
		</div>
	)
}

export default Reviews;
require('dotenv').config();
const cors = require('cors');
const express = require('express');
const db = require('./db')


const app = express();

// const morgan = require('morgan');
// the middleware needs to be explicitly told to send the packet to the next middleware or to the route handler, we do this by passing an extra argument, the function next()
// middlwares needs to be in the place and order appropiate for the routing in the file
// app.use(morgan('dev'));

// app.use((request, response, next) => {
// 	next(); 
// })
app.use(cors());
app.use(express.json()); 
// middle ware (for POST?) that takes a JSON response and transforms it 
// into a js object under the property body

// GET ALL RESTAURANTS
app.get('/api/v1/restaurants', async (reqest, response) => {

	try {
		const result = await db.query("select * from restaurants");
		console.log(result.rows)
		response.status(200).json(
			{
				status: 'success',
				results: result.rows.length,
				data: {
					restaurants: result.rows
				},
			})
	} catch(err) {
		console.log(err);
	}

});

// GET ONE RESTAURANT
app.get('/api/v1/restaurants/:id', async (request, response) => {

	try {
		const restaurant = await db.query("select * from restaurants where id = $1", [request.params.id])
		const reviews = await db.query("select * from reviews where restaurant_id = $1", [request.params.id])
		response.status(200).json(
			{
				status: 'success',
				results: result.rows.length,
				data: {
					restaurant: restaurant.rows,
					reviews: reviews.rows
				},
			}
		)
	} catch(err) {
		console.log(err);
	}
	
})

// CREATE A RESTAURANT		// REMEBER TO HAVE / BEFORE api!!!
app.post('/api/v1/restaurants', async (request, response) => {

	try {
		const result = await db.query("INSERT INTO restaurants (name, location, price_range) VALUES ($1, $2, $3) RETURNING *", [request.body.name, request.body.location, request.body.price_range])
		console.log(result);												// [ { name: 'kotkot', location: 'Helsinki', price_range: 1 } ]
		response.status(200).json(
			{
				status: 'success',
				results: result.rows.length,
				data: {
					restaurant: result.rows[0]
				}
			}
		)
	} catch(err) {
		console.log(err);
	}

})

// UPDATE A RESTAURANT
app.put('/api/v1/restaurants/:id', async (request, response) => {

	try {
		const id = request.params.id;
		const result = await db.query("UPDATE restaurants SET name = $1, location = $2, price_range = $3 WHERE id = $4 RETURNING *", [request.body.name, request.body.location, request.body.price_range, id])
		response.status(200).json(
			{
				status: 'success',
				data: {
					restaurant: result.rows[0] 
				}
			}
		)
		
	} catch(err) {
		console.log(err);
	}

})

// DELETE A RESTAURANT
app.delete('/api/v1/restaurants/:id', async (request, response) => {

	try {
		const id = request.params.id;
		const result = await db.query("DELETE FROM restaurants WHERE id = $1 RETURNING *", [id]);
		
		response.status(204).json({
			status: "success",
			data: {
				restaurant: result.rows[0]
			}
		})
	} catch(err) {
		console.log(err)
	}
	
})
const port = process.env.PORT || 3001;
app.listen(port, () => {
	console.log(`server is up and listening on port ${port}`);
});



// OPERATION				| METHOD	| URL
// Retrieve All Restaurants	| GET		| /api/v1/restaurants
// Retrieve One Restaurant	| GET		| /api/v1/restaurants/:id
// Create Restaurant		| POST		| /api/v1/restaurants
// Update Restaurant		| PUT		| /api/v1/restaurants/:id
// Delete Restaurant		| DELETE	| /api/v1/restaurants/:id
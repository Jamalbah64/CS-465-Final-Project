const Restaurant = require("../models/Restaurant");

// GET /api/restaurants
const getRestaurants = async (req, res) => {
  try {
    const restaurants = await Restaurant.find({});
    res.json(restaurants);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// GET /api/restaurants/:id
const getRestaurantById = async (req, res) => {
  try {
    const restaurant = await Restaurant.findById(req.params.id);
    if (!restaurant) {
      return res.status(404).json({ message: "Restaurant not found" });
    }
    res.json(restaurant);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};

// POST /api/restaurants
const createRestaurant = async (req, res) => {
  try {
    const restaurant = new Restaurant(req.body);
    const saved = await restaurant.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error(err);
    res.status(400).json({ message: "Invalid restaurant data" });
  }
};

module.exports = {
  getRestaurants,
  getRestaurantById,
  createRestaurant
};

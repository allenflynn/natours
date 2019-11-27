const Review = require('./../models/reviewModel');
const factory = require('./handlerFactory');

exports.getAllReviews = async (req, res) => {
  let filter = {};
  if (req.params.tourId) filter = { tour: req.params.tourId };
  const reviews = await Review.find(filter);
  try {
    res.status(200).json({
      status: 'success',
      results: reviews.length,
      data: reviews
    });
  } catch (err) {
    console.log(err);
  }
};

exports.createReview = async (req, res) => {
  // Allow nested routes
  if (!req.body.tour) req.body.tour = req.params.tourId;
  if (!req.body.user) req.body.user = req.user.id;

  const newReview = await Review.create(req.body);
  try {
    res.status(200).json({
      status: 'success',
      newReview
    });
  } catch (err) {
    console.log(err);
  }
};

exports.getReview = (req, res) => {
  try {
    res.status(200).json({
      status: 'success',
      message: `reviewController -> getReview`
    });
  } catch (err) {
    console.log(err);
  }
};

exports.deleteReview = factory.deleteOne(Review);

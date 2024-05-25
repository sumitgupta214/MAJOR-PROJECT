const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema } = require("../schema.js");
const { isLoggedIn } = require("../middleware.js");
const { isOwner } = require("../middleware.js");
const { validateListing } = require("../middleware.js");

const listingcontroller = require("../controllers/listing.js");

router
  .route("/")
  .get(wrapAsync(listingcontroller.index))
  .post(
    validateListing,
    isLoggedIn,
    wrapAsync(listingcontroller.createListings)
  );

//New Route
router.get("/new", isLoggedIn, listingcontroller.renderNewForm);

router
  .route("/:id")
  .get(wrapAsync(listingcontroller.showListings))
  .put(
    validateListing,
    isLoggedIn,
    isOwner,
    wrapAsync(listingcontroller.updateListing)
  )
  .delete(isLoggedIn, wrapAsync(listingcontroller.deleteListing));

//Edit route
router.get(
  "/:id/edit",
  isLoggedIn,
  wrapAsync(listingcontroller.editListingPage)
);

module.exports = router;

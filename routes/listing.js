const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema } = require("../schema.js");
const { isLoggedIn } = require("../middleware.js");
const { isOwner } = require("../middleware.js");
const { validateListing } = require("../middleware.js");
const multer = require("multer");
const { storage } = require("../cloudConfig.js");
const upload = multer({ storage });

const listingcontroller = require("../controllers/listing.js");

router
  .route("/")
  .get(wrapAsync(listingcontroller.index))
  .post(
    isLoggedIn,
    upload.single("listing[image]"),
    wrapAsync(listingcontroller.createListings)
  );

//New Route
router.get("/new", isLoggedIn, listingcontroller.renderNewForm);

router
  .route("/:id")
  .get(wrapAsync(listingcontroller.showListings))
  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
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

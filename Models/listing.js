const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  image: {
    type: String,
    filename: String,
    url: String,
    default:
      "https://img.freepik.com/free-psd/modern-farmhouse-meadow-hill-generative-ai_587448-2096.jpg?w=900&t=st=1711735394~exp=1711735994~hmac=006a8b9f16a0b93efc564d8bca6f51fc74e56ec5f4829e396c6d1bf9954de272",
    set: (v) =>
      v === ""
        ? "https://img.freepik.com/free-psd/modern-farmhouse-meadow-hill-generative-ai_587448-2096.jpg?w=900&t=st=1711735394~exp=1711735994~hmac=006a8b9f16a0b93efc564d8bca6f51fc74e56ec5f4829e396c6d1bf9954de272"
        : v,
  },
  price: Number,
  location: String,
  country: String,
  reviews: [
    {
      type: Schema.Types.ObjectId,
      ref: "Review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await Review.deleteMany({ _id: { $in: listing.reviews } });
  }
});

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;

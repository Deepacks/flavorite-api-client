const mongoose = require("mongoose");

const BookmarkSchema = {
  id: String,
  userId: String,
  title: String,
  image: String,
  url: String,
  description: String,
  like: Boolean,
  perview: String,
};

const Bookmark = mongoose.model("Bookmark", BookmarkSchema);

module.exports = Bookmark;

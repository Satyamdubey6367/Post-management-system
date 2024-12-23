const jwt = require("jsonwebtoken");
const Post = require("../modal/postModal/post");

const authenticate = (req, res, next) => {
  const token = req.headers["authorization"];
  if (!token)
    return res
      .status(401)
      .json({ message: "Access denied. No token provided." });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ message: "Invalid token." });
  }
};

const createPost = async (req, res) => {
  try {
    const { name, description, tags, imageUrl } = req.body;


    function postUserId() {
      const now = new Date();

      const year = now.getFullYear();
      const month = String(now.getMonth() + 1).padStart(2, "0");
      const day = String(now.getDate()).padStart(2, "0");
      const hours = String(now.getHours()).padStart(2, "0");
      const minutes = String(now.getMinutes()).padStart(2, "0");
      const seconds = String(now.getSeconds()).padStart(2, "0");
      const milliseconds = String(now.getMilliseconds()).padStart(3, "0");

      const postUserIds = `post-${year}${month}${day}-${hours}${minutes}${seconds}-${milliseconds}`;
      return postUserIds;
    }
    const postData = await Post.create({
      userId: postUserId(),
      name,
      description,
      uploadTime: new Date(),
      tags,
      imageUrl,
    });

    res.status(201).json({ message: "Post created successfully.", postData });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error creating post.", error: err.message });
  }
};

const fetchPosts = async (req, res) => {
  const { searchText, startDate, endDate, tags } = req.query;

  const filter = {};

  if (searchText) {
    filter.$or = [
      { name: { $regex: searchText, $options: "i" } },
      { description: { $regex: searchText, $options: "i" } },
      { tags: { $regex: searchText, $options: "i" } },
    ];
  }

  if (startDate || endDate) {
    filter.uploadTime = {};
    if (startDate) filter.uploadTime.$gte = new Date(startDate);
    if (endDate) filter.uploadTime.$lte = new Date(endDate);
  }

  if (tags) {
    const tagsArray = tags.split(",");
    filter.tags = { $all: tagsArray };
  }

  try {
    const posts = await Post.find(filter);

    if (posts.length === 0) {
      return res
        .status(404)
        .json({ message: "No posts found matching the criteria." });
    }

    res.status(200).json({ message: "Posts fetched successfully.", posts });
  } catch (err) {
    res
      .status(500)
      .json({ message: "Error fetching posts.", error: err.message });
  }
};

module.exports = {
  authenticate,
  createPost,
  fetchPosts,
};

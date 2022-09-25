const router = require("express").Router();
const Movie = require("../models/Movie");
const movies = require("../config/movies.json");

router.get("/movies", async (req, res) => {
	try {
		const page = parseInt(req.query.page) - 1 || 0;
		const limit = parseInt(req.query.limit) || 5;
		const search = req.query.search || "";
		let sort = req.query.sort || "rating";
		 let category = req.query.category || "All";

		const categoryOptions = [
			"Fruit",
			"Mens",
			"Women",
			"Home",
		];

		category === "All"
			? (category = [...categoryOptions])
			: (category = req.query.category.split(","));
		req.query.sort ? (sort = req.query.sort.split(",")) : (sort = [sort]);

		let sortBy = {};
		if (sort[1]) {
			sortBy[sort[0]] = sort[1];
		} else {
			sortBy[sort[0]] = "asc";
		}

		const movies = await Movie.find({ name: { $regex: search, $options: "i" } })
			.where("category")
			.in([...category])
			.sort(sortBy)
			.skip(page * limit)
			.limit(limit);

		const total = await Movie.countDocuments({
			category: { $in: [...category] },
			name: { $regex: search, $options: "i" },
		});

		const response = {
			error: false,
			total,
			page: page + 1,
			limit,
			categorys: categoryOptions,
			movies,
		};

		res.status(200).json(response);
	} catch (err) {
		console.log(err);
		res.status(500).json({ error: true, message: "Internal Server Error" });
	}
});

// const insertMovies = async () => {
//     try {
//         const docs = await Movie.insertMany(products);
//         return Promise.resolve(docs);
//     } catch (err) {
//         return Promise.reject(err)
//     }
// };

// insertMovies()
//     .then((docs) => console.log(docs))
//     .catch((err) => console.log(err))

module.exports = router;

var express=require("express"),
	// MongoClient=require("mongodb").MongoClient,
	app=express(),
	mongoose=require("mongoose"),
	movies=require("./models/movies"),
	audi=require("./models/audi")
	screening=require("./models/screening"),
	methodOverride=require("method-override"),
	bodyParser=require("body-parser");

	app.use(express.static("public"));
	app.set("view engine","ejs");
	app.use(bodyParser.urlencoded({extended:true}));
	mongoose.connect("mongodb://localhost/bookmyshow");
	app.use(methodOverride("_method"));


	// var movieSchema=new mongoose.Schema(
	// 	{
	// 		name: String,
	// 		img: String,
	// 		summary: String,
	// 		ratings: String,
	// 		director: String,
	// 		release: String,
	// 		duration_min: Number
			
	// 	});

		

			var data=[
				{
					name: "St-Agatha",
					img: "https://www.joblo.com/assets/images/joblo/posters/2018/12/St-Agatha-poster-1_thumb.jpg",
					summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet quam augue. Integer dignissim orci risus, in sodales mi vehicula id. Fusce sodales nisi dui, at egestas sem euismod in. Etiam dignissim eros quis tellus lobortis lobortis. Cras pellentesque orci sit amet metus vehicula faucibus. Praesent a tempor ligula. Vivamus eu pellentesque lorem. Duis varius non felis ac iaculis. Morbi placerat, libero a iaculis sagittis, felis eros malesuada quam, ut hendrerit mi eros quis ante. Mauris ultricies augue magna, vitae dignissim dui fermentum nec. Cras vel sem vehicula, sodales odio in, placerat nisl. In efficitur purus sapien, sit amet elementum eros molestie nec. Nulla id congue quam. Integer mollis lacus a dolor semper rhoncus. Aenean mauris arcu, pharetra in risus in, accumsan vestibulum purus. Mauris eu mauris faucibus, mattis augue aliquam, euismod quam.",
					ratings: "3.0",
					director: "Darren",
					release: "2017",
					duration: 90

				},
				{
					name: "Miss Bala",
					img: "https://www.joblo.com/assets/images/joblo/posters/2018/12/miss_bala_poster_thumb.jpg",
					summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet quam augue. Integer dignissim orci risus, in sodales mi vehicula id. Fusce sodales nisi dui, at egestas sem euismod in. Etiam dignissim eros quis tellus lobortis lobortis. Cras pellentesque orci sit amet metus vehicula faucibus. Praesent a tempor ligula. Vivamus eu pellentesque lorem. Duis varius non felis ac iaculis. Morbi placerat, libero a iaculis sagittis, felis eros malesuada quam, ut hendrerit mi eros quis ante. Mauris ultricies augue magna, vitae dignissim dui fermentum nec. Cras vel sem vehicula, sodales odio in, placerat nisl. In efficitur purus sapien, sit amet elementum eros molestie nec. Nulla id congue quam. Integer mollis lacus a dolor semper rhoncus. Aenean mauris arcu, pharetra in risus in, accumsan vestibulum purus. Mauris eu mauris faucibus, mattis augue aliquam, euismod quam.",
					ratings: "4.5",
					director: "Micheal",
					release: "2018",
					duration: 90
				},
				{
					name: "Godzilla",
					summary: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi sit amet quam augue. Integer dignissim orci risus, in sodales mi vehicula id. Fusce sodales nisi dui, at egestas sem euismod in. Etiam dignissim eros quis tellus lobortis lobortis. Cras pellentesque orci sit amet metus vehicula faucibus. Praesent a tempor ligula. Vivamus eu pellentesque lorem. Duis varius non felis ac iaculis. Morbi placerat, libero a iaculis sagittis, felis eros malesuada quam, ut hendrerit mi eros quis ante. Mauris ultricies augue magna, vitae dignissim dui fermentum nec. Cras vel sem vehicula, sodales odio in, placerat nisl. In efficitur purus sapien, sit amet elementum eros molestie nec. Nulla id congue quam. Integer mollis lacus a dolor semper rhoncus. Aenean mauris arcu, pharetra in risus in, accumsan vestibulum purus. Mauris eu mauris faucibus, mattis augue aliquam, euismod quam.",
					img: "https://www.joblo.com/assets/images/joblo/posters/2018/12/godzilla-poster-xl_thumb.jpg",
					ratings: "3.8",
					director: "Kim yong",
					release: "2018",
					duration: 90
				}

					];
				var th=[
				{
					name: "audi1",
					
					showTimes: [
							{start: 9,
							end: 12,
							available: true},
							{start: 12,
							end: 15,
							available: true},
							{start:15 ,
							end: 18,
							available: true},
							{start: 18,
							end: 21,
							available: true}
					]
				},
				{
					name: "audi2",
					
					showTimes: [
							{start: 9,
							end: 12,
							available: true},
							{start: 12,
							end: 15,
							available: true},
							{start:15 ,
							end: 18,
							available: true},
							{start: 18,
							end: 21,
							available: true}
					]
				},
				{
					name: "audi3",
					
					showTimes: [
							{start: 9,
							end: 12,
							available: true},
							{start: 12,
							end: 15,
							available: true},
							{start:15 ,
							end: 18,
							available: true},
							{start: 18,
							end: 21,
							available: true}
					]
				}


				]
				audi.remove({},function(err,res)
					{
						if(err)
							console.log(err)
						else
							console.log("deleted");
							th.forEach(function(th)
							{

									audi.create(th,function(err,newaudi)
								{
									if(err)
										console.log(err);
									else
										console.log("new audi created");
								});
								});
					
				});

				screening.remove({},function(err,res)
				{
				if(err)
				console.log(err);
				else
					console.log("All screens deleted");
					});// data.forEach(function(movie)
				// {
				// 	movies.create(movie,function(err,movie)
				// 	{
				// 		if(err)
				// 			console.log(err);
				// 		else
				// 			console.log(movie);
				// 	});
				// });
				
			// dbp.collection("customers").insertMany(data,function)

//=====================================LANDING PAGE==================================================
	
	app.get("/",function(req,res)
	{
		movies.find({},function(err,allmovies)
		{
			if(err)
				console.log(err);
			else
				res.render("home",{movies:allmovies});
		})
		
	});
//=========================  more info about a movie =================================
	app.get("/home/:id",function(req,res)
	{
		movies.findById(req.params.id,function(err,movie)
		{
			if(err)
				console.log(err);
			else
				res.render("movie",{movie:movie});
		});

		
	});

//========================MOVIES Management====================================


//create movies 
app.get("/movie",function(req,res)
{
	movies.find({},function(err,allmovies)
		{
			if(err)
				console.log(err);
			else
				res.render("movies/movie-manage",{movies:allmovies});
		});
	
})
app.get("/movie/create",function(req,res)
{
	res.render("movies/create.ejs");
});
//post route for Adding new movies to the movies[] in database
app.post("/movie/create",function(req,res)
{
	var name=req.body.name;
	var img=req.body.img;
	var ratings=req.body.ratings;
	var director=req.body.director;
	var summary=req.body.summary;
	var release=req.body.release;
	var duration=req.body.duration;

	var newmovie={name:name,img:img,ratings:ratings,director:director,summary:summary,release:release,duration:duration};
	movies.create(newmovie,function(err,movie)
	{
		if(err)
			consol.log(err);
		else
		{
			console.log("new movie created");
			res.redirect("/");
		}
	})

	});
//DElete movies from database
app.delete("/movie/:id",function(req,res)
{
	movies.findByIdAndRemove(req.params.id,function(err)
	{
		if(err)
			console.log(err);
		else
		{
			console.log("movie deleted");
			res.redirect("/movie");
		}
	})
});

//==================================Screen Management=======================================
//show screening movies
app.get("/screening",function(req,res)
{

	screening.find({"movie.name":"Godzilla"},function(err,screen)
	{
		if(err)
			console.log(err);
		else
			res.render("screens/showScreen",{screen:screen});
	});
})
 // add movies to screening
 app.get("/screening/new",function(req,res)
 {
 	movies.find({},function(err,allmovies)
		{
			audi.find({},function(err,allaudi)
			{
				if(err)
				console.log(err);
			else
				res.render("screens/create",{movies:allmovies,audi:allaudi});
			})
			
		});
 	
 });
 app.post("/screening/new",function(req,res)
 {
 	var movie=req.body.movie_name;
 	var aud=req.body.show_time.split("_");
 	var index=aud[1]/3-3;
 	var path="showTimes."+index+".available";
 	
 	audi.updateOne({"_id":aud[0],"showTimes.start":aud[1]},{$set:{"showTimes.$.available":"false"}},function(err,updated)
 	{
 		if(err)
 			console.log(err)
 		else
 			console.log(updated);
 			
 	});
 	

 	movies.findOne({"name":movie},function(err,foundmovie)
 	{
 		if(err)
 			console.log(err);
 		else
 		{
 			var newscreen={
 					movie: foundmovie,
 					audi_id: aud[0],
 					screening_start: aud[1],
 					seats: [{row: "A",number: 1,available: true},
 							{row: "A",number: 2,available: true},
 							{row: "A",number: 3,available: true},
 							{row: "A",number: 4,available: true},
 							{row: "A",number: 5,available: true},
 							{row: "B",number: 1,available: true},
 							{row: "B",number: 2,available: true},
 							{row: "B",number: 3,available: true},
 							{row: "B",number: 4,available: true},
 							{row: "B",number: 5,available: true}

 					]
 	};
 	screening.create(newscreen,function(err,screen)
 	{
 		if(err)
 			console.log(err);
 		else
 			console.log(screen);
 			res.redirect("/screening");
 	});
}
 
 		
 		
 		
 	});
 });
 	

 	

	app.listen(2000,'127.0.0.1',function()
	{
		console.log("Server started at port 2000");
	});
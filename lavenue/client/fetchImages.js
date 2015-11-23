Template.fetchImages.onRendered(function(){
	var imagesCollection = Images.find().fetch();
	if (imagesCollection.length == 0) { 
		var shortCodes = ["-VIYqHBDm1", "-TXJxmhDqe", "-QtblvBDic", "-LjRjThDga", "-DscBvhDpx", "-DKhZfhDrk", "93AzlxhDpk", "-DZwWkhDhs", "-TgjguhDmO", "-W67u-x3jv", "-UI_U7R3hh", "-Ix2dIx3gy", "9_ioc2R3jU", "9yeINCR3qP", "-K9tfvw8AB", "-EN8GDQ8LS", "-BRhstQ8Gi", "96DXB3w8JI", "9vlirVQ8Cc", "-VkQHBivF5", "-S6fHCivLb", "-QV5H9ivOh", "-LHU54ivPN", "-A4NRaivF0", "97uBmDCvAR", "95VYW-CvC-", "-SZN2Dmcqy", "-PorLkGcs9", "-FMkzqGcjR", "966goTmcg9", "9UdzE-Gcsw", "9PB2h5Gcs7"]
		shortCodes = shuffle(shortCodes);
		for (i = 0; i < shortCodes.length; i++) {
			var url = "https://api.instagram.com/v1/media/shortcode/" + shortCodes[i] + "?client_id=36a3a03c63914bb48edb68724a33e548"
			Meteor.call("getImageInfo", url, function(error, result){
				var nLikes = Math.floor(Math.random() * 100) + 50;
				if (typeof error !== "undefined") {
					console.log(error);
					return;
				}

				var data = result.data.data;
				if (typeof data === "undefined") {
					console.log("cannot get data");
					return;
				}
				var images = data.images;
				var imageUrl = images.standard_resolution.url;
				if (typeof imageUrl === "undefined") {
					console.log("imageUrl undefined");
					return;
				}
				Images.insert({imageUrl: imageUrl, description: "Am I pretty?", price: "$9.99", likes: nLikes, style: "Classy urban"});
			});
		}
	}
});
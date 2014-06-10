


module.exports.home = function(req,res){
	console.log("requested main page");
  res.sendfile('./views/index.html');
};

module.exports.partials = function(req,res){
	console.log("requested partial page: "+req.params.page);
  res.sendfile('./views/partials/'+req.params.page);
};









console.log("router loaded");
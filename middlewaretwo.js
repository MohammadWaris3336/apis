module.exports= function (req, res, next){
    
    console.warn("Current Route is", req.originalUrl);
    
    next();
}

const jwt = require("jsonwebtoken");

const auth = (req, res, next)=>{
    const token = req.headers["authorization"];
    if(!token) return res.status(401).send("not found");

    jwt.verify(token, "my-value", (err, user)=>{
        if(err) return res.status(401).send("invlide user");
        res.user = user;
        next();
    })
}
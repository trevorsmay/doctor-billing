const router = require("express").Router();
const passport = require("../../config/passport");
const db = require("../../models");
const authMiddleware = require("../../config/middleware/authMiddleware");

//Doctor login 
router.post("/doclogin", passport.authenticate("local", {
    failureRedirect: "/api/users/unathorized",
    failureFlash : true
}), function(req, res, next) {
    res.json({
        user:req.user,
        docLoggedIn: true
    });
});

//accountant login
router.post("/login", passport.authenticate("local", {
    failureRedirect: "api/users/unathoraized",
    failureFlash: true
}), function(req, res, next) {
    res.json({
        user:req.user,
        accountLoggedIn: true
    });
});

router.get("/dpage", authMiddleware.isDocLoggedIn, function(req, res, next) {
    res.json({
        user: req.user,
        docLoggedIn: true
    });
});

router.get("/apage", authMiddleware.isAccountantLoggedIn, function(req, res, next) {
    res.json({
        user: req.user,
        accountLoggedIn: true
    });
});

//sign up for this service doctor
router.post("/docsignup", function(req, res, next) {
    db.User.findOne({username: req.body.username}, function(err, user) {
if (err) throw err;
if (user) {
    return res.json("User already exists. Please sign in.");
}
if (!user) {
    let newUser = new db.User({
        username: req.body.username,
        password: req.body.password,
        userType: req.body.userType
    })
    newUser.password = newUser.generateHash(req.body.password);
    newUser.save(function(err) {
        if (err) throw err;
        console.log("new user saved!"); 

        res.redirect(307, "/api/users/dpage")
    });
}
    })
});

//sign up for this service accountant
router.post("/actsignup", function(req, res, next) {
    db.User.findOne({username: req.body.username}, function(err, user) {
if (err) throw err;
if (user) {
    return res.json("User already exists. Please sign in.");
}
if (!user) {
    let newUser = new db.User({
        username: req.body.username,
        password: req.body.password,
        userType: req.body.userType
    })
    newUser.password = newUser.generateHash(req.body.password);
    newUser.save(function(err) {
        if (err) throw err;
        console.log("new user saved!"); 

        res.redirect(307, "/api/users/apage")
    });
}
    })
});

//unathorized login
router.get("/unathorized", function(req, res, next) {
    let message = req.flash("error")[0]

    setTimeout(function() {
        res.json({
            message:message,
            docLoggedIn: false
        });
    }, 100);
});

//pulls up profile if logged in
router.get("/profile", authMiddleware.isLoggedIn, function(req, res, next) {
    res.json({
      user: req.user,
      loggedIn: true
    });
  });

//allows user to log out 
router.get("/logout", authMiddleware.logoutUser, function(req, res, next) {
    res.json("User logged out successfully");
  });

//gets doctor page?
router.get("/dpage", authMiddleware.isDoctor, function(req, res, next) {
      res.json({
          user: req.user,
          docLoggedIn: true,
          userType: "doctor"
      });
  });

//gets accountant page?
router.get("/apage", authMiddleware.isAccountant, function(req, res, next) {
      res.json({
          user: req.user,
          accountLoggedIn: true,
          userType: "accountant"
      });
  });

  
  router.put("/updateProfile", function(req, res, next){
    // console.log(req.body);
    // console.log("I was hit")
    db.User.findOneAndUpdate({_id: req.body.user},
       {
      number: req.body.number, 
      name: req.body.name,
      code: req.body.code,
      cost: req.body.cost,
      status: req.body.status
    },
    res.json("data changed!")
    
    ).catch((err)=>{
      res.json(err);
    })
  })

module.exports = router;
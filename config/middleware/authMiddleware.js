const auth = {
    
    // checks if the user is logged in, if not, redirect to the 
    // unauthorized route
    isLoggedIn: (req, res, next)=> {
        if(req.isAuthenticated()){
            console.log('user authenticated');
            next();
        } else{
            console.log("user not authenticated");
            res.redirect('/api/users/unauthorized')
        }
    },

    // middleware function to log out the user
    logoutUser: (req, res, next)=> {
        if(req.isAuthenticated()){
            console.log('logged out successfully')
            req.logout();
            next();
        } else {
            next();
        }
    },


    isDoctor: (req,res,next)=> {
        if(req.isAuthenticated()) {
            console.log("doctor confirmed");
            if(req.user.userType === true) {
                next();
            } else {
                res.redirect("/api/users/unathorized");
            }
        }
    },
    // checks to see if the user is authenticated, then checks if they are an admin
    // if yes, move on, otherwise send to unauthorized route

    
    isAccount: (req,res,next)=> {
        if(req.isAuthenticated()) {
            console.log("account confirmed");
            if(req.user.userType === false) {
                next();
            } else {
                res.redirect("/api/users/unathorized");
            }
        }
    }
}

module.exports = auth;
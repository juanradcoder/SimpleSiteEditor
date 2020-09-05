$(window).on("load", function() {

    var vLogin = new Vue({
        el: '#v-login',
        data: {
      		email: '',
        	password: '',   
        },
        methods:{
            login: function(){
				this.authenticateUser(this.email, this.password);
            },			
            authenticateUser: function(email,password){
				// if there's a successful login, save the user into a cookie and from the admin page, check
				// if there exists a user in the cookie
                firebase
					.auth()
					.signInWithEmailAndPassword(email, password)
					.then(function(user) {
						// this is where I authorize
						// window.location.href = 'admin.html';
						$cookies.set("SOMTHING", "TESTING NUMBER OISOFUHE", 1)

						// **********************************************
						// Theoretically, this should get a session from the backend and redirect
						// based on a valid session, but no user is ever found nor is a session
						// cookie returned without a server
						// **********************************************
						// admin.auth().createSessionCookie(idToken, {expiresIn})
						// .then((sessionCookie) => {
						// 	// Set cookie policy for session cookie.
						// 	const options = {maxAge: expiresIn, httpOnly: true, secure: true};
						// 	res.cookie('session', sessionCookie, options);
						// 	res.end(JSON.stringify({status: 'success'}));
						// }, error => {
						// 	res.status(401).send('UNAUTHORIZED REQUEST!');
						// });

					})
					.catch(function(error) {
						var errorCode = error.code;
						var errorMessage = error.message;
						console.log("error code: "+errorCode+" message: "+errorMessage);
					});
			}
		}
    })

});


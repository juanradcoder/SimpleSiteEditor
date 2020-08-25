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
				//firebase.auth().createUserWithEmailAndPassword(email, password)
                firebase
					.auth()
					.signInWithEmailAndPassword(email, password)
					.then(function(user) {
						// this is where I authorize
						window.location.href = 'admin.html';
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


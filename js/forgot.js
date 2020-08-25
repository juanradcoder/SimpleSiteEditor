
$(window).on("load", function() {

    var vForgot = new Vue({
        el: '#v-login',
        data: {
            email: '',
        },
        methods:{
            forgotPassword: function() {
                // don't rely on any alerts/ add other ways to go back and notify instead
                firebase.auth().sendPasswordResetEmail(this.email)
                    .then(function() {
                        alert("A reset password link has been sent to " + this.email);
                    })
                    .catch(function() {
                        alert("There is no account attached to that email");
                    })
                }
		}
    })

});


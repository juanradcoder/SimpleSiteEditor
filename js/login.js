$(window).on("load", function() {

    var vLogin = new Vue({
        el: '#v-login',
        data: {
        email: '',
        password: '',   
        },
        methods:{
            login: function(){
                alert(this.email+" "+this.password);
                //this.authenticateUser(this.email,this.password)
            },			
/*			
            authenticateUser: function(email,password){
                firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
                    var errorCode = error.code;
                    var errorMessage = error.message;
					window.location.href = 'login.html';
                    console.log("error code: "+errorCode+" message: "+errorMessage);
                  });
            }   
*/			
        }
    })

});


"use strict"

$(window).on("load", function() {
	
	// Your web app's Firebase configuration
	var firebaseConfig = {
		apiKey: "REPLACE_ME",
		authDomain: "REPLACE_ME",
		databaseURL: "REPLACE_ME",
		projectId: "REPLACE_ME",
		storageBucket: "REPLACE_ME",
		messagingSenderId: "REPLACE_ME",
		appId: "REPLACE_ME"
	};
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);	
});
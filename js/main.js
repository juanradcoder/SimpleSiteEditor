"use strict"

$(window).on("load", function() {
	
	// Your web app's Firebase configuration
	var firebaseConfig = {
		apiKey: "AIzaSyAqs-0W9j6q4vjbXAMh_uKObfTGmHM3SSo",
		authDomain: "test-b9dc7.firebaseapp.com",
		databaseURL: "https://test-b9dc7.firebaseio.com",
		projectId: "test-b9dc7",
		storageBucket: "test-b9dc7.appspot.com",
		messagingSenderId: "322217195913",
		appId: "1:322217195913:web:575914c293a3a71639c958",
		measurementId: "G-NJDBXM4XB7"
	};

	// var firebaseConfig = {
	// 	apiKey: "AIzaSyAVecyxSiOL7L99QhX2pVoSMST2k7O1IBI",
	// 	authDomain: "website-on-dashnex.firebaseapp.com",
	// 	databaseURL: "https://website-on-dashnex.firebaseio.com",
	// 	projectId: "website-on-dashnex",
	// 	storageBucket: "website-on-dashnex.appspot.com",
	// 	messagingSenderId: "4818761514",
	// 	appId: "1:4818761514:web:d7c36c56d983b4676c5053",
	// 	measurementId: "G-66NVZDRVXM"
	//   };
	// Initialize Firebase
	firebase.initializeApp(firebaseConfig);



	/// ****************************************
	// All this below allow to access cookies but a user object is nonexistent
	/// ****************************************
	// As httpOnly cookies are to be used, do not persist any state client side.
	// firebase.auth().setPersistence(firebase.auth.Auth.Persistence.NONE);


	// firebase.auth().signInWithEmailAndPassword('batmanandrobin255@gmail.com', 'somethingelse').then(({ user }) => {
	// 	// Get the user's ID token as it is needed to exchange for a session cookie.
	// 	return user.getIdToken().then(idToken => {
	// 	  // Session login endpoint is queried and the session cookie is set.
	// 	  // CSRF protection should be taken into account.
	// 	  // ...
	// 	  const csrfToken = getCookie('csrfToken')
	// 	  return postIdTokenToSessionLogin('/sessionLogin', idToken, csrfToken);
	// 	})
	// }).then(() => {
	// 	// A page redirect would suffice as the persistence is set to NONE.
	// 	return firebase.auth().signOut();
	// }).then(() => {
	// 	window.location.assign('/profile');
	// });

});

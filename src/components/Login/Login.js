import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from './firebase.config';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';
import './Login.css';
import Google from '../../img/google.png';
import { Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)

}

const Login = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();

    var provider = new firebase.auth.GoogleAuthProvider();
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };
    const handleClick = () => {

        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
                console.log(result.user);
                const { displayName, email,photoURL } = result.user;
                const signedInUser = { userName: displayName, email,photoURL }
                console.log(signedInUser)
                setLoggedInUser(signedInUser);
                // setUserToken();
                history.replace(from)
            }).catch((error) => {
                var errorMessage = error.message;
                console.log((errorMessage));
            });

    }
    
// const setUserToken = () => {
//     firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function(idToken) {
//         sessionStorage.setItem('token', idToken)
//       }).catch(function(error) {
//         // Handle error
//       });
      
// }

const onSubmit = (user) => {
    firebase.auth().signInWithEmailAndPassword(user.email, user.password)
    .then((userCredential) => {
        const { displayName, email } = userCredential.user;
        const signedInUser = { userName: displayName, email }
                console.log(signedInUser)
                setLoggedInUser(signedInUser);
                history.replace(from)

    })
    .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert(errorMessage);
    });

}

    return (
        <div className = "login-area">
              <Form className="form-section" onSubmit={handleSubmit(onSubmit)} >
            <input className="form-control" id="email" placeholder="Email" {...register("email")} />
            <br />
            <input className="form-control" id="password" placeholder="Password" type="password" {...register("password")} />
            <br />
            <br />

            <input className="btn btn-primary" value="Log in" type="submit" />
            <br/><br/>
            
        </Form>
        <button className="btn google-btn" onClick={handleClick}><b>Continue with Google</b></button>
        </div>
    );
};

export default Login;
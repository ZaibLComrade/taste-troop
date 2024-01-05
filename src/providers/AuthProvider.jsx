import { createContext, useEffect, useState } from "react";
import auth from "../config/firebase.config";
import PropTypes from "prop-types";
import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	GoogleAuthProvider,
	signInWithPopup,
	signOut,
	FacebookAuthProvider,
} from "firebase/auth";

export const AuthContext = createContext({});

export default function AuthProvider({ children }) {
	const [ user, setUser ] = useState({});
	const [ loading, setLoading ] = useState(true)
	
	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, loggedInUser => {
			if(loggedInUser) {
				setUser(loggedInUser);
			} 
			
			console.log(loggedInUser);
			setLoading(false);
		})
		
		return () => unsubscribe();
	}, [])
	
	// Email and password providers
	const loginUser = (email, password) => {
		setLoading(false);
		return signInWithEmailAndPassword(auth, email, password)
	}
	const registerUser = (email, password) => {
		setLoading(false);
		return createUserWithEmailAndPassword(auth, email, password)
	}
	const logoutUser = () => {
		setLoading(false);
		return signOut(auth)
	}
	
	// 3rd party providers
	const googleLogin = () => {
		const provider = new GoogleAuthProvider(); 
		return signInWithPopup(auth, provider);
	}
	const facebookLogin = () => {
		const provider = new FacebookAuthProvider()
		return signInWithPopup(auth, provider);
	}
	
	const authInfo = {
		user,
		loading,
		setLoading,
		loginUser,
		registerUser,
		logoutUser,
		googleLogin,
		facebookLogin,
	}
	
	return <AuthContext.Provider value={ authInfo }>
		{ children }
	</AuthContext.Provider>
}

AuthProvider.propTypes = {
	children: PropTypes.node,
}

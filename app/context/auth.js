import React, { useReducer, createContext } from "react";
import firebase from "../config/firebase";
import { Alert } from "react-native";

import { getUserInfo } from "../utils/user";

const initialState = {
	user: null,
};

const AuthContext = createContext({
	user: null,
	login: (userData) => {},
	register: () => {},
	logout: () => {},
	updateUser: () => {},
});

const authReducer = (state, action) => {
	switch (action.type) {
		case "LOGIN":
			return {
				...state,
				user: action.payload,
			};
		case "UPDATE_USER":
			return {
				...state,
				user: action.payload,
			};
		case "LOGOUT":
			return {
				...state,
				user: null,
			};
		default:
			return state;
	}
};

function AuthProvider(props) {
	const [state, dispatch] = useReducer(authReducer, initialState);

	const register = async ({ email, password, firstName, lastName }) => {
		try {
			await firebase
				.auth()
				.createUserWithEmailAndPassword(email, password);
			const currentUser = firebase.auth().currentUser;

			const db = firebase.firestore();
			db.collection("users").doc(currentUser.uid).set({
				email: currentUser.email,
				lastName,
				firstName,
			});
			const user = {
				firstName,
				lastName,
				email,
				uid: currentUser.uid,
				avatar: require("../assets/profile.jpg"),
			};
			dispatch({
				type: "LOGIN",
				payload: user,
			});
		} catch (err) {
			throw new Error(err);
		}
	};

	const login = async ({ email, password }) => {
		try {
			await firebase.auth().signInWithEmailAndPassword(email, password);
			const userId = firebase.auth().currentUser.uid;
			const user = await getUserInfo(userId);
			dispatch({
				type: "LOGIN",
				payload: { ...user, avatar: require("../assets/profile.jpg") },
			});
		} catch (err) {
			throw new Error(err);
		}
	};

	function updateUser(user) {
		dispatch({
			type: "UPDATE_USER",
			payload: { ...user, avatar: require("../assets/profile.jpg") },
		});
	}

	const logout = async () => {
		try {
			await firebase.auth().signOut();
			dispatch({ type: "LOGOUT" });
		} catch (err) {
			throw new Error(err);
		}
	};

	return (
		<AuthContext.Provider
			value={{
				user: state.user,
				register,
				login,
				logout,
				updateUser,
			}}
			{...props}
		/>
	);
}

export { AuthContext, AuthProvider };

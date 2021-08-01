import * as firebase from "firebase";
import { firebaseConfig } from "./env_const";
import "firebase/firestore";

if (firebase.apps.length === 0) {
	firebase.initializeApp(firebaseConfig);
}

export const firestore = firebase.firestore();
export const storageRef = firebase.storage();

export default firebase;

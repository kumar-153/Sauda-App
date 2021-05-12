import * as firebase from "firebase";
import "firebase/firestore";

export const getUserInfo = async (uid) => {
  let doc = await firebase.firestore().collection("users").doc(uid).get();

  if (!doc.exists) {
    Alert.alert("No user data found!");
  } else {
    let dataObj = doc.data();
    return dataObj;
  }
};

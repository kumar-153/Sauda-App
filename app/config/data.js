import firebase from "./firebase";
import * as FileSystem from "expo-file-system";
import uuid from "uuid";

let products = [
	{
		id: 1,
		type: "rent",
		title: "iPhone X",
		image: [require("../assets/prod-1.jpg")],
		price: "2300",
		owner: "Rajdeep Singh",
		ownerImage: require("../assets/profile.jpg"),
		description:
			"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
		features: [
			"This is good",
			"You can have it",
			"You can definitely have it",
			"This is good",
		],
	},
	{
		id: 2,
		type: "sale",
		title: "iPhone X",
		image: [require("../assets/prod-1.jpg")],
		price: "2300",
		owner: "Rajdeep Singh",
		ownerImage: require("../assets/profile.jpg"),
		description:
			"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
		features: [
			"This is good",
			"You can have it",
			"You can definitely have it",
			"This is good",
		],
	},
	{
		id: 3,
		type: "rent",
		title: "iPhone X",
		image: [require("../assets/prod-1.jpg")],
		price: "2300",
		owner: "Rajdeep Singh",
		ownerImage: require("../assets/profile.jpg"),
		description:
			"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
		features: [
			"This is good",
			"You can have it",
			"You can definitely have it",
			"This is good",
		],
	},
	{
		id: 4,
		type: "rent",
		title: "iPhone X",
		image: [require("../assets/prod-1.jpg")],
		price: "2300",
		owner: "Rajdeep Singh",
		ownerImage: require("../assets/profile.jpg"),
		description:
			"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
		features: [
			"This is good",
			"You can have it",
			"You can definitely have it",
			"This is good",
		],
	},
	{
		id: 5,
		type: "sale",
		title: "iPhone X",
		image: [require("../assets/prod-1.jpg")],
		price: "2300",
		owner: "Rajdeep Singh",
		ownerImage: require("../assets/profile.jpg"),
		description:
			"The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from 'de Finibus Bonorum et Malorum' by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.",
		features: [
			"This is good",
			"You can have it",
			"You can definitely have it",
			"This is good",
		],
	},
];

export const getProducts = () => products;

async function uploadImageAsync(uri, imageName) {
	const blob = await new Promise((resolve, reject) => {
		const xhr = new XMLHttpRequest();
		xhr.onload = function () {
			resolve(xhr.response);
		};
		xhr.onerror = function (e) {
			console.log(e);
			reject(new TypeError("Network request failed"));
		};
		xhr.responseType = "blob";
		xhr.open("GET", uri, true);
		xhr.send(null);
	});

	const ref = firebase.storage().ref().child(imageName);
	const snapshot = await ref.put(blob);

	// We're done with the blob, close and release it
	blob.close();

	return await snapshot.ref.getDownloadURL();
}

// export const addProduct = (newProduct) => products.push(newProduct);
export const addProduct = async (prod) => {
	if (!prod) return;
	// const storage = firebase.storage();
	const imageURI = prod.image[0];
	const imageName = imageURI.split("/").pop();
	// const file = await FileSystem.readAsStringAsync(imageURI, {
	// 	encoding: FileSystem.EncodingType.Base64,
	// });
	// const uploadTask = storage.ref(`images/${imageName}`).put(file, {
	// 	contentType: "image/jpeg",
	// });

	const db = firebase.firestore();
	// uploadTask.on(
	// 	"state changed",
	// 	(snapshot) => {
	// 		const progress = Math.round(
	// 			(snapshot.bytesTransferred / snapshot.totalBytes) * 100
	// 		);
	// 		console.log(progress);
	// 	},
	// 	(error) => console.log(error),
	// 	() => {
	// 		// storage
	// 		// 	.ref("images")
	// 		// 	.child(imageName)
	// 		// 	.getDownloadURL()
	// 		uploadImageAsync(imageURI).then((url) => {
	// 			prod.image = url;
	// 			console.log(prod);
	// 			try {
	// 				db.collection("products")
	// 					.add(prod)
	// 					.then(() => console.log("product added"));
	// 			} catch (err) {
	// 				console.log(err);
	// 			}
	// 			console.log("Image uploaded successfully");
	// 		});
	// 	}
	// );
	const downloadURL = uploadImageAsync(imageURI, imageName);
	try {
		prod.image = downloadURL;
		db.collection("products")
			.add(prod)
			.then(() => console.log("product added"));
	} catch (err) {
		console.log(err);
	}
};

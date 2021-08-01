import React, { useEffect } from "react";
import * as ImagePicker from "expo-image-picker";
import { IconButton } from "react-native-paper";
import {
	Alert,
	StyleSheet,
	Text,
	TouchableWithoutFeedback,
	View,
	Image,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import colors from "../config/colors";
import { onChange } from "react-native-reanimated";

function ImageInput({ imageURI, onChangeImage, index }) {
	const requestPermission = async () => {
		const { granted } = await ImagePicker.requestCameraPermissionsAsync();
		if (!granted)
			alert("You need to enable permissions to access the library");
	};

	const handlePress = () => {
		if (!imageURI) selectImage();
		// else
		//   Alert.alert("Delete", "Are you sure you want to delete this image", [
		//     { text: "Yes", onPress: () => onChangeImage(null) },
		//     { text: "No" },
		//   ]);
	};

	const handleDelete = () => {
		Alert.alert("Delete", "Are you sure you want to delete this image", [
			{ text: "Yes", onPress: () => onChangeImage(null) },
			{ text: "No" },
		]);
	};

	const selectImage = async () => {
		try {
			const result = await ImagePicker.launchImageLibraryAsync({
				mediaTypes: ImagePicker.MediaTypeOptions.Images,
				quality: 0.5,
			});
			console.log(result);
			if (!result.cancelled) onChangeImage(result.uri);
		} catch (err) {
			console.log("Error reading an image", err);
		}
	};

	useEffect(() => {
		requestPermission();
	}, []);
	return (
		<TouchableWithoutFeedback onPress={handlePress}>
			<View style={styles.container}>
				{!imageURI && (
					<MaterialCommunityIcons
						color={colors.primary}
						name="camera"
						size={40}
					/>
				)}
				{imageURI && (
					<View style={styles.imageContainer}>
						<View style={styles.numContainer}>
							<Text style={styles.number}>{index + 1}</Text>
						</View>
						<Image
							source={{ uri: imageURI }}
							style={styles.image}
						/>
						<IconButton
							icon="delete"
							color={colors.white}
							size={20}
							style={styles.deleteButton}
							onPress={handleDelete}
						/>
					</View>
				)}
			</View>
		</TouchableWithoutFeedback>
	);
}

const styles = StyleSheet.create({
	container: {
		width: 150,
		height: 150,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: colors.white,
		borderRadius: 15,
		overflow: "hidden",
	},
	imageContainer: {
		// left: 10,
		width: "100%",
		height: "100%",
	},
	image: {
		width: "100%",
		height: "100%",
	},
	deleteButton: {
		position: "absolute",
		backgroundColor: colors.primary,
		bottom: 0,
		right: 0,
	},
	numContainer: {
		position: "absolute",
		justifyContent: "center",
		alignItems: "center",
		top: 6,
		right: 6,
		backgroundColor: colors.primary,
		width: 20,
		height: 20,
		borderRadius: 15,
		zIndex: 10,
	},
	number: {
		fontWeight: "bold",
		color: colors.white,
	},
});

export default ImageInput;

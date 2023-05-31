/**
 * @author: CHIKIRIAY
 * @created: 5/18/23
 * @Time: 3:19 AM
 */
import { StyleSheet, Text, View } from "react-native";
import { CustomBigImageButton } from "@Components/ui/CustomBigImageButton";
import { Screens } from "@Constants/Screens";

export const ProcrastinateScreen = ({ navigation }) => {
	const data = [
		{
			id: 1,
			titleText: "Yes and i’m ready to change that",
			image: require("../../assets/images/procrastinate/ProcrastinateButton1.svg"),
		},
		{
			id: 2,
			titleText: "No, I easily finish the tasks at hand",
			image: require("../../assets/images/procrastinate/ProcrastinateButton2.svg"),
		},
		{
			id: 3,
			titleText: "Not ready to answer",
			image: require("../../assets/images/procrastinate/ProcrastinateButton3.svg"),
		},
	];
	const handlePress = (id: number) => () => {
		// todo fetch
		navigation.navigate(Screens.PRODUCTIVE, { id });
	};

	return (
		<View style={styles.container}>
			<View style={styles.titleTextContainer}>
				<Text style={styles.titleText}>Do you Procrastinate?</Text>
			</View>
			<View style={styles.rowsContainer}>
				{data.map(({ titleText, id, image }) => (
					<CustomBigImageButton
						key={id}
						onPress={handlePress(id)}
						text={titleText}
						buttonStyle={styles.button}
						textStyle={styles.buttonText}
						svgProps={{
							asset: image,
							style: { position: "absolute", zIndex: 0 },
						}}
					/>
				))}
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#4D57C8",
		flexDirection: "column",
		flex: 1,
		alignItems: "center",
	},
	titleTextContainer: {
		top: 80,
		marginTop: 60,
		zIndex: 2,
		width: 350,
		height: 82,
	},
	titleText: {
		color: "#FFECCC",
		textAlign: "center",
		fontFamily: "Rubik-Bold",
		fontStyle: "normal",
		fontWeight: "600",
		fontSize: 30,
		lineHeight: 41,
		alignSelf: "center",
		letterSpacing: 0.03,
	},
	rowsContainer: {
		flexDirection: "column",
		flex: 1,
		bottom: 0,
		position: "absolute",
	},
	buttonText: {
		fontFamily: "Rubik-Bold",
		fontSize: 14,
		color: "#FFFFFF",
		fontWeight: "600",
		textAlign: "left",
		alignSelf: "flex-start",
		left: 15,
	},
	button: { height: 73, width: 382, bottom: 30, marginBottom: 30 },
});

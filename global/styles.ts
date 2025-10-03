import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	flexRow: {
		flex: 1,
		flexDirection: "row",
		columnGap: 15,
		flexGrow: 1,
		minHeight: 100,
	},
	homeScreenTile: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
		height: 100,
		minHeight: 100,
		borderRadius: 12,
		backgroundColor: "#FFFFFF",
		flexGrow: 1
	},
	flexColumn: {
		flex: 1,
		flexDirection: "column",
		rowGap: 15,
		flexShrink: 0,
		flexGrow: 1
	},
	list: {
		gap: 8,
		marginBottom: 8,
	},
	content: {
		margin: 15,
	},
	listContainer: {
		borderRadius: 12,
		backgroundColor: "#FFFFFF",
		flexDirection: "row",
		alignItems: "center",
		padding: 15,
		margin: 15
	},

	title: {
		fontSize: 40,
		fontWeight: 'bold',
	},
	heading1: {
		fontSize: 30,
		fontWeight: 'bold',
	},
	heading2: {
		fontSize: 20,
		fontWeight: 'bold',
	},
	centerText: {
		textAlign: "center",
	},
	strong: {
		fontWeight: 'bold',
	},
});

export default styles;

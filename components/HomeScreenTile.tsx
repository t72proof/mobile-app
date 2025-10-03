import styles from "@/global/styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Text, TouchableHighlight, View } from "react-native";

export default function HomeScreenTile({text, icon, onPress}) {
	return (
		<TouchableHighlight onPress={onPress} style={styles.homeScreenTile} activeOpacity={0.6} underlayColor="#DDDDDD">
			<View style={styles.flexColumn}>
				<FontAwesome size={40} name={icon} /> 
				<Text>{text}</Text>
			</View>
		</TouchableHighlight>
	);
}
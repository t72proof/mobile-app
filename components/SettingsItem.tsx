import styles from "@/global/styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Text, View } from "react-native";

export default function SettingsItem({ data }) {
	return (
		<View style={styles.listContainer}>
			<FontAwesome size={30} name={data.icon}></FontAwesome>
			<View style={styles.content}>
				<Text>{data.name}</Text>
				{data.contents}
			</View>
		</View>
	);
}
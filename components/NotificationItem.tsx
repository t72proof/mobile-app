import styles from "@/global/styles";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Text, TouchableHighlight, View } from "react-native";

export default function NotificationItem({ data, fields, onPress }) {
	return (
	<TouchableHighlight
		activeOpacity={0.6}
		underlayColor="#DDDDDD"
		onPress={() => {onPress(data)}}
	>
		<View style={styles.listContainer}>
		<FontAwesome size={30} name="exclamation-triangle"></FontAwesome>
			<View style={styles.content}>
				{fields.map((field: string) => {
					console.log(data[field]);
					return <Text>{data[field]}</Text>;
				})}
			</View>
		</View>
	</TouchableHighlight>
	);
}
import SettingsItem from "@/components/SettingsItem";
import styles from "@/global/styles";
import { Picker } from '@react-native-picker/picker';
import { FlatList, View } from "react-native";

export default function SettingsScreen() {
	const settings = [
		{
			name: "Autosave videos locally", 
			contents: (
				<Picker>
					<Picker.Item label="None" />
					<Picker.Item label="Highlights only" />
					<Picker.Item label="Full recordings only" />
					<Picker.Item label="Both" />
				</Picker> 
			)
		},
		{
			name: "Recording expiry", 
			contents: (
				<Picker>
					<Picker.Item label="None" />
					<Picker.Item label="Storage-based" />
					<Picker.Item label="Time-based" />
					<Picker.Item label="Amount-based" />
				</Picker> 
			)
		},
		{
			name: "Recording notifications", 
			contents: (
				<Picker>
					<Picker.Item label="None" />
					<Picker.Item label="Highlights only" />
					<Picker.Item label="Full recordings only" />
					<Picker.Item label="Both" />
				</Picker> 
			)
		},
	]

	return (
		<View style={styles.content}>
			<FlatList
				data={settings}
				renderItem={({ item }) => <SettingsItem data={item}/>} 
			/>
		</View>
	);
}
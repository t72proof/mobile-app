import NotificationItem from "@/components/NotificationItem";
import { FlatList } from "react-native";


export default function NotificationList({ items, fields, onPress }) {
	return (
		<FlatList
			data={items}
			renderItem={({ item }) => <NotificationItem key={item.id} data={item} fields={fields} onPress={onPress} />} 
		/>
	);
}
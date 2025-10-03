import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Tabs } from "expo-router/tabs";

export default function TabLayout() {
	return (
		<Tabs>
			<Tabs.Screen 
				name="index"
				options={{ 
				title: "Home", 
				tabBarIcon: ({ color }) => <FontAwesome size={28} name="home" color={color} /> 
			}}/>
			<Tabs.Screen 
				name="alerts"
				options={{ 
				title: "Alerts",
				tabBarIcon: ({ color }) => <FontAwesome size={28} name="bell" color={color} /> 
			}} />
			<Tabs.Screen 
				name="recordings"
				options={{ 
				title: "Recordings",
				tabBarIcon: ({ color }) => <FontAwesome size={28} name="video-camera" color={color} /> 
			}} />
			<Tabs.Screen 
				name="settings"
				options={{ 
				title: "Settings",
				tabBarIcon: ({ color }) => <FontAwesome size={28} name="cog" color={color} /> 
			}} />
		</Tabs>
	);
} 
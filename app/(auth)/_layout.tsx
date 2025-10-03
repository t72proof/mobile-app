
import { Stack } from "expo-router/stack";
export default function TabLayout() {
	return (
		<Stack >
			<Stack.Screen 
				name="sign-in"  options={{ headerShown: false }}/>
			<Stack.Screen 
				name="sign-up" options={{ headerShown: false }}/>
		</Stack>
	); 
} 
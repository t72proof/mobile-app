import { APIConnection } from "@/global/APIConnection";
import eventBus from "@/global/EventBus";
import {
	DarkTheme,
	DefaultTheme,
	ThemeProvider
} from "@react-navigation/native";
import { QueryClientProvider } from "@tanstack/react-query";
import { Stack } from "expo-router/stack";
import { useEffect, useState } from "react";
import { useColorScheme } from 'react-native';

import { queryClient } from "@/utils/api";

export default function RootLayout() {
	const colorScheme = useColorScheme();
	const [api, setApi] = useState(new APIConnection("10.0.2.2:8000"));

	const [loggedIn, setLoggedIn] = useState(false);

	useEffect(() => {
		eventBus.subscribe("start_detection", (video: any) => {
			api.detect(video);
		});
	}, [])
	
	return (
    	<QueryClientProvider client={queryClient}>
			<ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
			
				<Stack>
					<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				</Stack>
				
			</ThemeProvider>
		</QueryClientProvider>
	);
}
// useEffect(startWebSocket);

/*

    	<QueryClientProvider client={queryClient}>
			<ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
				<Stack>
					<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
				</Stack>
			</ThemeProvider>
		</QueryClientProvider>
*/
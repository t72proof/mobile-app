import NotificationList from "@/components/NotificationList";
import eventBus from "@/global/EventBus";
import EventType from "@/global/EventType";
import { useState } from "react";
import { View } from "react-native";

//import * as FileSystem from 'expo-file-system';

export default function RecordingsScreen() {
	const [alerts, setAlerts] = useState(new Array<any>()); //[{type: "test1", timestamp: "0"}];

	function onAlert(alert: any) {
		alerts.unshift(alert);
		setAlerts(alerts);

		//FileSystem.createDownloadResumable(alert.recordingLink, alert.message + " " + alert.type + ".mp4")
	}

	eventBus.subscribe(EventType.RECORDING, onAlert);
	function onPress(recording: any) {
		
	}

	return (
		<View>
			<NotificationList items={alerts} fields={["type", "timestamp"]} onPress={onPress} />
		</View> 
	);
}
import NotificationList from "@/components/NotificationList";
import eventBus from '@/global/EventBus';
import { useEffect, useState } from "react";
import { View } from "react-native";

export default function AlertsScreen() {
	const [alerts, setAlerts] = useState<Array<any>>([]); //{type: "test1", timestamp: "00:00:00"}, {type: "test2", timestamp: "00:00:00"}
	function onPress(data: any) {
    	alert(data.message);
	}

	function onAlert(alert: any) {
		alerts.unshift(alert);
		setAlerts(alerts);
	}

	eventBus.subscribe("alert", onAlert);

	useEffect(() => {
		onAlert({type: "test1", timestamp: "00:00:00", message: "test message"});
	});

	return (
		<View>
			<NotificationList items={alerts} fields={["type", "timestamp"]} onPress={onPress} />
		</View>
	);
}
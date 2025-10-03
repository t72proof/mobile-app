import HomeScreenTile from "@/components/HomeScreenTile";
import eventBus from "@/global/EventBus";
import styles from "@/global/styles";
import * as DocumentPicker from 'expo-document-picker';
import { File } from 'expo-file-system/next';
import { Redirect, router } from "expo-router";
import { View } from "react-native";

import { authClient } from "@/utils/auth";

function uploadVideo(){
	DocumentPicker.getDocumentAsync({type: "video/*"}).then((result) => {
		console.log(result);
		if (!result.canceled){
			const file = new File(result.assets[0].uri);
			return file.blob()
		}
		return null;
	}).then((result: any) => {
		if (result instanceof Blob){
			eventBus.emit("start_detection", result);
		}
	});
}

export default function HomeScreen() {
	const { data: session } = authClient.useSession();
	console.log("Session:");
	console.log(session);
	return (
		<>
		{session ? 
			<View style={styles.content}>
				<HomeScreenTile text={`Welcome, ${session.user.name}!`} icon="video-camera" onPress={uploadVideo}/>
				<View style={styles.flexColumn}>
					<View style={styles.flexRow}>
						<HomeScreenTile text="Alerts" icon="bell" onPress={() => router.push("/alerts")}/>
						<HomeScreenTile text="Recordings" icon="video-camera" onPress={() => router.push("/recordings")}/>
					</View>
					<View style={styles.flexRow}>
						<HomeScreenTile text="Upload Video" icon="video-camera" onPress={uploadVideo}/>
					</View>
				</View>
			</View>
			:
			<Redirect href="/(auth)/sign-in" />
		}
		</>
	);
}
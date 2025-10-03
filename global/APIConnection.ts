import eventBus from '@/global/EventBus';
import { fetch } from 'expo/fetch';
//export const API_URL = "10.0.2.2:8000";
export class APIConnection {
	url: string;
	constructor(url: string) {
		this.url = url;
	}
	detect(videoFile: Blob){
		const formData = new FormData();
		formData.append("video", videoFile);
		fetch("http://" + this.url + "/detect/", {
			method: "POST",
			body: formData,
		}).then((result) => {
			console.log("Accepted");
			console.log(result);
			this.startWebSocket();
		},
		(result) => {
			console.log("Rejected");
			console.log(result);
		});    
	}

	getVideo(){
		
	}

	getClip(filename: string){
		console.log(filename);
	}

	startWebSocket() {
		const socket = new WebSocket('ws://' + this.url + '/ws/threats'); 
		socket.addEventListener('message', (e) => {
			const now = Date.now();
			const message = e.data;
			
			console.log(message);

			/*let threatType = 'Threat Detection';
			if (message.includes('Weapon')) threatType = 'Weapon Detection';
			else if (message.includes('Fall')) threatType = 'Fall Detection';
			else if (message.includes('Punch')) threatType = 'Violence Detection';
			else if (message.includes('Running') || message.includes('Suspicious')) threatType = 'Suspicious Activity';
*/
			let threatTypes: Map<string, string> = new Map([
				["Weapon", "Weapon Detected"],
				["Fall", "Fall Detected"],
				["Punch", "Violence Detected"],
				["Running", "Suspicious Activity"],
				["Suspicious", "Suspicious Activity"]
			]);

			let threatType = "Threat Detection";

			for (let [k, v] of threatTypes.entries()) {
				if (message.contains(k)) {
					threatType = v;
				}
			}

			console.log()
			eventBus.emit("alert", {
				id: now,
				timestamp: new Date().toISOString(),
				type: message,
				recordingLink: '',
				message: message
			});
		});

		socket.addEventListener('close', () => socket.close());
	}
}
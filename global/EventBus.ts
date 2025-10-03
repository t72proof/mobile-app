class EventBus {
	events: Map<string, Array<(data: any) => void>>;
    constructor() 
    {
        this.events = new Map<string, Array<(data: any) => void>>();
    }

    subscribe(event: string, callback: (data: any) => void): void
    {
		if (!this.events.has(event)) {
			this.events.set(event, [callback]);
		}
		else {
			this.events.get(event)?.push(callback);
		}
    }
    
    unsubscribe(event: string, callback: (data: any) => void): void
    {
		const observers = this.events.get(event);
        const index = observers?.indexOf(callback);
        if (observers && index && index > -1) {
            observers.splice(index, 1);
        }
    }

    emit(event: string, data: any): void
    {
		const observers = this.events.get(event)
		if (!observers){
			return;
		}
        for (let observer of observers) {
            observer(data);
        }
    }
}

const eventBus = new EventBus();

export default eventBus;

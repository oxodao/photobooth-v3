export type Event = {
    id: number;
    name: string;
    author: string;
    date: number;
    location?: string|null;

    amt_images_handtaken: number;
    amt_images_unattended: number;
};

export type EditedEvent = {
    id?: number;
    name?: string|null;
    author?: string|null;
    date?: number;
    location?: string|null;
}

type appstate = {
    hwid: string;
    token: string;
    current_event: Event|null;
};

export type AppState = {
    app_state: appstate;
    debug: boolean;
    use_hardware_flash: boolean;
    current_mode: string|null;

    ip_addresses: {
        [key: string]: string[];
    };

    known_events: Event[];
    known_modes: string[];
};
import { writable } from 'svelte/store';

export const account = writable<null | string>(null);

export const color = writable<null | string>(null);

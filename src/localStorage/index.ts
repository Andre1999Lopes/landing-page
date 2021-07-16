export function setLocalStorage(key: string, token: string):void {
	const storage = localStorage;
	storage.setItem(key, token);
}

export function getLocalStorage(email: string):string | undefined {
	const user = localStorage.getItem(email);
	if (user) return user;
	return undefined;
}
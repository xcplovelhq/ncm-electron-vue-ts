import Store from 'electron-store';

const store = new Store({
    watch: true
});
export function storage(name: string, data: any) {
    store.set(name, data);
}
export function getStorage(name: string) {
    return store.get(name);
}
export function deleteStorage(name: string) {
    store.delete(name);
}
// export function onDidChange(name: string, fun: void) {
//     console.log(store);

//     store.onDidChange(name, fun);
// }
// export function onDidAnyChange(fun) {
//     console.log(store);
//     store.onDidAnyChange(fun);
// }

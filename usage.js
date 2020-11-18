// import {LocalStorage} from 'node-localstorage'
// import localStorage from 'localStorage'
import store from 'store2'
//var localStorage = new LocalStorage('./scratch');


// console.log(localStorage.getItem('Name'))
// console.log(localStorage.getItem('UserName'))


console.log(store('Profile'))

console.log(store('userName'))

console.log(store.getAll())

console.log(store.keys())


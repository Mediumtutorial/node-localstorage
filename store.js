
// import {LocalStorage} from 'node-localstorage' 
// import localStorage from 'localStorage'
import store from 'store2'



//var localStorage = new LocalStorage('./scratch'); 

// localStorage.setItem('Name', 'Manish Mandal') 
// localStorage.setItem('UserName', 'Manntrix') 

//Setting store key and data
store('Profile', {name: 'Manish', age: 27, job: 'Developer'}); 

//Setting multiple store key and data
store.setAll({name: 'Manish', userName: 'Manntrix'})
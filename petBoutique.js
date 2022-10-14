import { initializeApp, cert } from "firebase-admin/app";
import { getFirestore } from 'firebase-admin/firestore';


import serviceAccount from './serviceAccounts.js';

initializeApp({
    credential: cert(serviceAccount)})

    const db = getFirestore();
    
    
    // db.collection("pets").add({
    //     Type:"Dog",
    //     Breed:"Bulldog",
    //     Color:"Black",
    //     Age:"1",
    // })

    // .then(doc => console.log("New pets:",doc.id))
    // .catch(console.error)


      
    // db.collection("pets").add({
    //     Type:"cat",
    //     Breed:"hasky",
    //     Color:"white",
    //     Age:"2",
    // })

    // .then(doc => console.log("New pets:",doc.id))
    // .catch(console.error)
    
      
//   db.collection('Products').add({
//     Type:"Food",
//     Brand:"Purina",
//     Name:"Cat chuw",
//     ProductsNum:2
//   })
// .then(doc => console.log("New products", doc.id))
// .catch(console.error)

// db.collection('Products').add({
//     Type:"Toys",
//     Brand:"Meow Meow",
//     Name:"mouse",
//     ProductsNum:5
//   })
// .then(doc => console.log("New products", doc.id))
// .catch(console.error)

// db.collection("Customers").add({
//     firstName:"Emily",
//     lastName:"Smart",
//     email:"emilysmart@gmail.com",
//     phone:774574575437
// })
// .then(doc => console.log("New customer", doc.id))
// .catch(console.error)

// db.collection("Customers").add({
//     firstName:"Jack",
//     lastName:"Smart",
//     email:"Jacksmart@gmail.com",
//     phone:883846834
// })
// .then(doc => console.log("New customer", doc.id))
// .catch(console.error)

// db.collection("pets").get()

// .then(collection => collection.docs.forEach(doc => {
//     console.log(doc.id,doc.data())
// }))
// .catch(console.error)

// db.collection("Products").get()
// .then(collection => collection.docs.forEach(doc => {
//     console.log(doc.id,doc.data())
// }))
// .catch(console.error)

// db.collection("Customers").get()
// .then(collection => collection.docs.forEach(doc => {
//     console.log(doc.id,doc.data())
// }))
// .catch(console.error)



// Db.collection(‘instructors’)
// .doc(‘834f8frf7831gr9f8’)
// .update({ campus: ‘Boca Raton’ })
// .then( () => console.log(getCassie()))
// .catch(console.error)

// function getPets(){
//     db.collection('pets').doc('q7h3lzr5vb1n1Kh4GiuC').get()
//     .then(doc => console.log(doc.data()))
//     .catch(console.error)
//     }



// db.collection('pets')
// .doc('q7h3lzr5vb1n1Kh4GiuC')
// .update({ Age:'6'})
// .then(() => console.log(getPets()))
// .catch(console.error)

function getPets(){
    db.collection('Products').doc('RSZNOjfdb6O6VRZsPYjp').get()
    .then(doc => console.log(doc.data()))
    .catch(console.error)
    }



db.collection('Products')
.doc('RSZNOjfdb6O6VRZsPYjp')
.update({ Name:'Smart'})
.then(() => console.log(getPets()))
.catch(console.error)



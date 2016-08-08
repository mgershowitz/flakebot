const ajaxAdapter = {

 constructor(fetch){
    if(!fetch) throw "We need the Fetch brah";
  },

  eventsCall(location) {
    console.log(location)
    return fetch('/events?location='+location)
    .then(res => res.json() )
  }

  // createUser(newUser){
  //   return fetch('/api/users',{
  //     method:'POST',
  //     headers:{
  //       "Content-type": "application/json; charset=UTF-8"
  //     },
  //     body: JSON.stringify(newUser)
  //   })
  //   .then( r=> r.json() )
  // },

// addPantry(item){
//     console.log(item)
//     return fetch('/pantry',{
//       method:'POST',
//       headers:{
//         "Content-type": "application/json; charset=UTF-8"
//       },
//       body: JSON.stringify(item)
//     })
//     .then( r=> r.json() )
//   },

// deletePantry(item){
//     return fetch('/pantry',{
//       method:'DELETE',
//       headers:{
//         "Content-type": "application/json; charset=UTF-8"
//       },
//       body: JSON.stringify(item)
//     })
//     .then( r=> console.log(r) )
//   },

//   pantryCall() {
//     return fetch('/pantry')
//     .then(res=>res.json())
//     }

}


export default ajaxAdapter;



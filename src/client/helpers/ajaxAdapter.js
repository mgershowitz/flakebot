const ajaxAdapter = {

 constructor(fetch){
    if(!fetch) throw "We need the Fetch brah";
  },

  eventsCall(location,time) {
    console.log(location)
    return fetch('/events?location='+location+'&time='+time)
    .then(res => res.json() )
  },

  eventDetailCall(id) {
    console.log(id)
    return fetch('/events/event?id='+id)
    .then(res => res.json())
  },

  createNewUser(newUser){
    return fetch('/api/users',{
      method:'POST',
      headers:{
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(newUser)
    })
    .then( r=> r.json() )
  }

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



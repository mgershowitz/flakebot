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

  getMyEvents(id){
    return fetch ('/api/users/'+id)
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
  },

  loginUser(user){
    return fetch('/api/authenticate',{
      method:'POST',
      headers:{
        "Content-type": "application/json; charset=UTF-8"
      },
      body: JSON.stringify(user)
    })
    .then( r => r.json())
  }
}


export default ajaxAdapter;



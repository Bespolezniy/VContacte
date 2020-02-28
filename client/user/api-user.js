const create = user => {
  return fetch("/api/users/", {
    method: "POST",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
  .then( response => {
    return response.json()
  })
  .catch( err => console.log(err))
}

const list = () => {
  return fetch("/api/users/", {
  method: "GET",
  })
  .then( response => {
    return response.json()
  })
  .catch( err => console.log(err))
}

const read = (params, credentials) => {
  return fetch("/api/users/" + params.userId, {
    method: "GET",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + credentials.t
    }
  })
  .then( response => {
    return response.json()
  })
  .catch( err => console.log(err))
}

const update = (params, credentials, user) => {
  return fetch("/api/users/" + params.userId, {
    method: "PUT",
    headers: {
      "Accept": "application/json",
      "Authorization": "Bearer " + credentials.t
    },
    body: user
  }).then( response => {
    return response.json()
  }).catch( err => {
    console.log(err)
  })
}

const remove = (params, credentials) => {
  return fetch("/api/users/" + params.userId, {
    method: "DELETE",
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": "Bearer " + credentials.t
    }
  })
  .then( response => {
    return response.json()
  })
  .catch( err => {
    console.log(err)
  })
}

const follow = async (params, credentials, followId) => {
  try {
    let response = await fetch('/api/users/follow/', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      },
      body: JSON.stringify({userId:params.userId, followId: followId})
    })
    return await response.json()
  } catch(err) {
    console.log(err)
  }
}

const unfollow = async (params, credentials, unfollowId) => {
  try {
    let response = await fetch('/api/users/unfollow/', {
      method: 'PUT',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'Authorization': 'Bearer ' + credentials.t
      },
      body: JSON.stringify({userId:params.userId, unfollowId: unfollowId})
    })
    return await response.json()
  } catch(err) {
    console.log(err)
  }
}
  
export { 
  create, 
  list, 
  read, 
  update, 
  remove,
  follow,
  unfollow
}
  
  


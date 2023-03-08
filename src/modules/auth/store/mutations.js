
export const loginUser = ( state, user ) => {

  const { uid, photoURL, email, displayName, idToken, refreshToken} = user

  if( idToken ) {
    localStorage.setItem( 'idToken', idToken )
    state.idToken = idToken
  }

  if( refreshToken ) {
    localStorage.setItem( 'refreshToken', refreshToken )
    state.refreshToken = refreshToken
  }

  state.uid = uid
  state.photoURL = photoURL
  state.email = email
  state.displayName = displayName
  state.status = 'autenticado'
}

export const logOut = ( state ) => {

  localStorage.removeItem('idToken')
  localStorage.removeItem('refreshTocken')

  state.uid = null
  state.photoURL = null
  state.email = null
  state.displayName = null
  state.status = 'no-autenticado'
}

export const checkUser = (state, { uid, photoURL, email, displayName }) => {
  state.refreshToken = localStorage.getItem('refreshToken')
  state.idToken = localStorage.getItem('idToken')
  state.uid = uid
  state.photoURL = photoURL
  state.email = email
  state.displayName = displayName
  state.status = 'autenticado'
}
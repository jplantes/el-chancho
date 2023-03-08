//export const myActions = async ({ commit }) => {
//
//}

import { onAuthStateChanged } from 'firebase/auth'
import { LoginWithEmailAndPassword, logoutFirebase } from '../../../firebase/providers'
import { FirebaseAuth } from '../../../firebase/config'

export const singInUser = async ({ commit }, user ) => {
  const { email, password } = user

  try {
    const { ok, user } = await LoginWithEmailAndPassword( { email, password } )
    commit( 'loginUser', user )
    return { ok: true }
  } catch (error) {
    return {
      ok: false,
      message: error
    }
  }
}

export const logOut = async ({ commit }) => {

  try {
    await logoutFirebase()

    commit('logOut')
    return {
      ok: true
    }
  } catch (error) {
    return {
      ok: false
    }
  }
}

export const chechUser = ({ commit }) => {

  onAuthStateChanged( FirebaseAuth, async ( user ) => {
    if ( user ) {
      const { uid, photoURL, email, displayName } = user 
      commit( 'checkUser', { uid, photoURL, email, displayName })
    }
  })
}

import { createUserWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, updateProfile, signInWithEmailAndPassword } from 'firebase/auth'
import { FirebaseAuth } from './config'

const googleProvider = new GoogleAuthProvider()

export const singInWithGoogle = async () => {

  try {
    const result = await signInWithPopup( FirebaseAuth, googleProvider )
    //const credentials = GoogleAuthProvider.credentialFromResult( result )

    const { displayName, email, photoURL, uid } = result.user

    return {
      ok: true,
      // User information
      displayName, email, photoURL, uid
    }
  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message

    return {
      ok: false,
      errorCode,
      errorMessage
    }
  }
}


export const registerUserWithEmailAndPassword = async ({ email, password, displayName }) => {

  try {

    const resp = await createUserWithEmailAndPassword( FirebaseAuth, email, password )
    const { uid, photoURL } = resp.user

    //! actualizar el dysplayName en Firebase
    await updateProfile( FirebaseAuth.currentUser, { displayName } )

    return {
      ok: true,
      uid, photoURL, email, displayName
    }

  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message

    return {
      ok: false,
      errorCode,
      errorMessage
    }
  }
}

export const LoginWithEmailAndPassword = async ({ email, password }) => {

  try {
     const resp = await signInWithEmailAndPassword( FirebaseAuth, email, password )
     const { uid, photoURL, displayName } = resp.user
     const { idToken, refreshToken } = resp._tokenResponse

     const user = {
      uid,
      photoURL,
      email,
      displayName,
      idToken,
      refreshToken
     }

     return {
      ok: true,
      user
    }

  } catch (error) {
    const errorCode = error.code
    const errorMessage = error.message
    return {
      ok: false,
      errorCode,
      errorMessage
    }
  }
}

export const logoutFirebase = async () => {
  return await FirebaseAuth.signOut()
}
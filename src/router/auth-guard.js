import { onAuthStateChanged } from 'firebase/auth'
import { FirebaseAuth } from '../firebase/config'

export const isAutenticatedGuard = ( to, from, next ) => {

  onAuthStateChanged( FirebaseAuth, async ( user ) => {
    if( user ) {
      next()
    } else {
      next({ name: 'singin' })
    }
  })

}
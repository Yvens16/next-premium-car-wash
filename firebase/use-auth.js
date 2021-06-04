// https://usehooks.com/useAuth/
import React, { useState, useEffect, useContext, createContext } from 'react'
// import firebase from 'firebase/app'
import { firebase } from './firebase'
import 'firebase/auth'
import 'firebase/storage'
import 'firebase/firestore'

// if (!firebase.apps.length) {
//   firebase.initializeApp({
//     apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//     measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID
//   })
// } else {
//   firebase.app() // if already initialized, use that one
// }
const FirebaseStorage = firebase.storage()
const database = firebase.firestore() // Normally I should create an other context for firestore but la j'ai la flemme very (very bad design)
const authContext = createContext()
authContext.displayName = 'AuthContext'

export function ProvideAuth ({ children }) {
  const auth = useProvideAuth()
  return <authContext.Provider value={auth}>{children}</authContext.Provider>
}

export const useAuth = () => {
  return useContext(authContext)
}

function useProvideAuth () {
  const [user, setUser] = useState(null)

  const myactionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url:
      process.env.NODE_ENV === 'development'
        ? 'http://localhost:3000/inscription-affiliation'
        : 'https://premiumcarwash.fr/inscription-affiliation',
    // This must be true.
    handleCodeInApp: true
    // iOS: {
    //   bundleId: 'com.example.ios'
    // },
    // android: {
    //   packageName: 'com.example.android',
    //   installApp: true,
    //   minimumVersion: '12'
    // },
    // dynamicLinkDomain: 'example.page.link'
  }

  const registerUserData = (user, name, phoneNumber, affiliateId, email) => {
    return database
    .collection('users')
    .doc(user.uid)
    .set({
      name,
      phoneNumber,
      affiliateId,
      email
    })
    .then(() => {
      return database
      .collection('affiliates')
      .doc(affiliateId)
      .set({
        name,
        phoneNumber,
        userUid: user.uid,
        email
      })
    })
    .catch(error => {
      console.log('code', error.code)
      console.log('error', error)
      throw new Error(error)
    })
  }

  const addPhotoRef = (user, photoUrl, affiliateId) => {
    database
      .collection('users')
      .doc(user.uid)
      .set({ photoUrl }, { merge: true })
      .then(() => {
        return database
          .collection('affiliates')
          .doc(affiliateId)
          .set({ photoUrl }, { merge: true })
      })
      .then(() => {
        console.log('PhotoUrl added to affilaite')
        return signOut()
      })
  }

  const uploadProfilePictureToStorage = (file, user, affiliateId, username, phone, email) => {
    const storageRef = FirebaseStorage.ref()
    const name = file.name.replace(/.*\./, `${affiliateId}.`)
    const profilePictureRef = storageRef.child(name)
    const profileImagesRef = storageRef.child(`images/${name}`)
    const metadata = {
      contentType: file.type
    }
    let urlToUplaod
    return new Promise((resolve, reject) => {
      const uploadTask = profileImagesRef.put(file, metadata)
      uploadTask.on(
        'state_changed',
        snapshot => {
          let progress = (snapshot.bytesTransferred / snapshot.totalNytes) * 100
          console.log('Upload is ' + progress + '% done')
          switch (snapshot.state) {
            case firebase.storage.TaskState.PAUSED: // or 'paused'
              console.log('Upload is paused')
              break
            case firebase.storage.TaskState.RUNNING: // or 'running'
              console.log('Upload is running')
              break
          }
        },
        error => {
          switch (error.code) {
            case 'storage/unauthorized':
              console.log('storage/unauthorized', error)
              // User doesn't have permission to access the object
              break
            case 'storage/canceled':
              console.log('storage/canceled', error)
              // User canceled the upload
              break

            // ...

            case 'storage/unknown':
              console.log('storage/unknown', code)
              // Unknown error occurred, inspect error.serverResponse
              break
          }
        },
        () => {
          uploadTask.snapshot.ref
            .getDownloadURL()
            .then((downloadURL) => {
              urlToUplaod = downloadURL;
              return registerUserData(user, username, phone, affiliateId, email)
            })
            .then(() => {
              addPhotoRef(user, urlToUplaod, affiliateId)
            })
            .then(url => {
              user
                .updateProfile({
                  photoURL: url
                })
                .then(() => {
                  resolve(urlToUplaod)
                })
                .catch(err => console.log('update failed', err))
            })
        }
      )
    })
  }

  const getAffiliate = affiliateId => {
    let response = {}
    return database
      .collection('affiliates')
      .doc(affiliateId)
      .get()
      .then(doc => {
        if (doc.exists) {
          response = {
            exists: true,
            doc: doc.data()
          }
        } else {
          response = {
            exists: false
          }
        }
        return response
      })
      .catch(err => {
        console.log('getAffiliate error:', err)
        throw new Error(err)
      })
  }


  const signOut = () => {
    return firebase.auth().signOut();
  }

  const signInAnonimously = () => {
    return new Promise(() => {
      firebase
        .auth()
        .signInAnonymously()
        .then(() => {
          return { isUserSignedup: true }
        })
        .catch(error => {
          const errorCode = error.code
          const errorMessage = error.message
          return { isUserSignedup: false, msg: errorMessage, code: errorCode }
        })
    })
  }

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (user) {
        setUser(user)
      } else {
        setUser(false)
      }
    })
    return () => unsubscribe()
  }, [])

  return {
    user,
    uploadProfilePictureToStorage,
    addPhotoRef,
    getAffiliate,
    signInAnonimously,
    registerUserData,
    signOut
  }
}

// allow read;
// allow write: if request.auth != null;

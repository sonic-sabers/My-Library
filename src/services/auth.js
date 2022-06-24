import auth from '@react-native-firebase/auth';
import {Alert} from 'react-native';
import firestore from '@react-native-firebase/firestore';
// import { LoginManager, AccessToken } from 'react-native-fbsdk';
import {GoogleSignin} from '@react-native-community/google-signin';
import firebase from '@react-native-firebase/app';
import firebaseConfig from './FirebaseConfig';

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
} else {
  firebase.app(); // if already initialized, use that one
}

const googleLogin = async () => {
  // Get the users ID token
  const {idToken} = await GoogleSignin.signIn();

  // Create a Google credential with the token
  const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  // Sign-in the user with the credential
  return auth().signInWithCredential(googleCredential);
};

const Registration = async (fullName, email, password) => {
  try {
    await firebase.auth().createUserWithEmailAndPassword(email, password);
    const currentUser = firebase.auth().currentUser;
    const db = firebase.firestore();
    db.collection('users').doc(currentUser.uid).set({
      email: currentUser.email,
      fullName: fullName,
    });
  } catch (err) {
    Alert.alert('There is something wrong!!!!', err.message);
  }
};

const signUp = (fullName, email, password) => {
  if (!fullName || !email || !password) {
    Alert.alert('Error', 'Please enter all fields');
  }

  return auth()
    .createUserWithEmailAndPassword(email, password)
    .then(cred => {
      const {uid} = cred.user;
      auth().currentUser.updateProfile({
        displayName: fullName,
      });
      // firestore().collection('users').doc(uid).set({
      //   email: email,
      //   displayName: fullName,
      // });
      return uid;
    })
    .then(uid => createUserInDb(uid, fullName, email))
    .catch(err => Alert.alert(err.code, err.message));
};

const createUserInDb = (uid, fullName, email) => {
  return firestore().collection('users').doc(uid).set({
    uid,
    fullName,
    email,
  });
};
const UpdateUserInDb = (uid, age) => {
  return firestore().collection('users').doc(uid).update({
    // uid,
    age,
  });
};

const signIn = (email, password) => {
  if (!email || !password) {
    Alert.alert('Error', 'Please enter all fields');
  }

  return auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {})
    .catch(err => Alert.alert(err.code, err.message));
};

const forgetPassword = email => {
  if (!email) {
    Alert.alert('Error', 'Please enter email');
  }

  return auth().sendPasswordResetEmail(email);
};

const signOut = () => {
  return auth().signOut();
};

const inviteUser = email => {
  if (!email) {
    Alert.alert('Error', 'Please enter email');
  }

  var actionCodeSettings = {
    // URL you want to redirect back to. The domain (www.example.com) for this
    // URL must be in the authorized domains list in the Firebase Console.
    url: 'https://rnfirebaseexp.page.link/eNh4',
    // This must be true.s
    handleCodeInApp: true,
    // iOS: {
    //   bundleId: 'com.example.ios'
    // },
    android: {
      packageName: 'com.example.android',
      installApp: true,
    },
  };

  return auth()
    .sendSignInLinkToEmail(email, actionCodeSettings)
    .then(Alert.alert('Email sent', 'Inform the user'))
    .catch(err => Alert.alert(err.code, err.message));
};

const sendOtp = number => {
  if (!number) {
    Alert.alert('Error', 'Please Enter number');
  }

  return auth().signInWithPhoneNumber(number);
};

const confirmCode = (state, code) => {
  return state
    .confirm(code)
    .then(() => {})
    .catch(err => Alert.alert(err.code, err.message));
};

const Auth = {
  signUp,
  signIn,
  forgetPassword,
  signOut,
  inviteUser,
  UpdateUserInDb,
  googleLogin,
  Registration,
  sendOtp,
  confirmCode,
};

export default Auth;

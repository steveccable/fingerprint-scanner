# fingerprint-scanner

Scans Fingerprints in React Native to authenticate a user.
User credentials and data are stored in firebase, redux is used for local state management, and async storage is used to hold onto credentials between app restarts.

## Fingerprint Scanning

For finger print scanning we used the library [react-native-fingerprint-scanner](https://www.npmjs.com/package/react-native-fingerprint-scanner). This library follows [the api pattern that native ios and android offer](https://stackoverflow.com/a/41705766/6526330): when a user scans their fingerprint, we get a callback indicating success or failure and retrieve credentials to authenticate with Firebase.

## Firebase

We use [firebase as a datasource and authentication manager](https://firebase.google.com/docs/reference/js/). When a user tries to log in we send the credentials to firebase. If the user is registered firebase will allow us to make requests for data they have access to.

These are the two demos we followed for [authetication](http://bitvbit.blogspot.com/2016/07/firebase-auth-v3-with-react-native.html) and [fetching data](http://bitvbit.blogspot.com/2016/08/react-native-firebase-tutorial-list.html).

## Async Storage

[AsyncStorage](https://facebook.github.io/react-native/docs/asyncstorage.html) is offered by React Native. It allows us persist information between different runs of our application. We use it to store the user's credentials so they can be retrieved when logging in with fingerprint scanning.

## Redux

We use [Redux](http://redux.js.org/) to manage our internal state, in particular our authentication state and our firebase app.

Each component is structured as a container-component pair, with the container interacting with Redux to map the Redux state to props appropriately and update the state when interacted with.

For an example of both mappings, see [LoginContainer.js](https://github.com/steveccable/fingerprint-scanner/blob/master/src/containers/LoginContainer.js).  In this file, we do both types of connections.  Since the [Login.js](https://github.com/steveccable/fingerprint-scanner/blob/master/src/containers/Login.js) component requires information about whether or not a user has logged in manually before, we must map that information from the Redux state down to through the container.  In addition, when a user attempts to login and is successful, we must dispatch a login action of the appropriate type to the Redux state to update the stored credentials.

Our various actions and reducers for Redux can be found in [actions.js](https://github.com/steveccable/fingerprint-scanner/blob/master/src/actions/actions.js) and [reducers.js](https://github.com/steveccable/fingerprint-scanner/blob/master/src/actions/reducers.js) respectively, but are largely just passing data into our Redux store to update the state.  For our project, we did not find any cases where more involved reducers or middleware were necessary.

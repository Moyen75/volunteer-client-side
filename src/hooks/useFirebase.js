import initializationAuthentication from "../components/firebase.init"
import { signInWithPopup, getAuth, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";

const googleProvider = new GoogleAuthProvider()
initializationAuthentication()
const useFirebase = () => {
    const [user, setUser] = useState('')
    const auth = getAuth()
    const signInUsingPopup = () => {
        signInWithPopup(auth, googleProvider)
            .then(result => {
                setUser(result.user)
            })
    }
    return {
        signInUsingPopup,
        user
    }
}
export default useFirebase;
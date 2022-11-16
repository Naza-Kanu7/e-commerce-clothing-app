import { useState } from "react"
import { useDispatch } from "react-redux"

import FormInput from "../form-input/form-input.component"

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component'

import { SignInContainer, ButtonsContainer } from './sign-in-form.styles'

import { googleSignInStart, emailSignInStart } from "../../store/user/user.action" 

// import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword } from '../../utils/firebase/firebase.utils'




// import { UserContext } from '../../contexts/user.context'


const defaultFormFields = {
    email: '',
    password: ''
}



const SignInForm = () => {
    const dispatch = useDispatch()

    const [formFields, setFormFields] = useState(defaultFormFields)
    const { email, password } = formFields
    
    // console.log(formFields)

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async () => {
        dispatch(googleSignInStart())
        // await signInWithGooglePopup();
        // setCurrentUser(user)
    }

    const handleSubmit = async (event) => {
        event.preventDefault()

        try{
            dispatch(emailSignInStart(email, password))
            // setCurrentUser(user)
            resetFormFields()
        } catch (error) {
            switch(error.code) {
                case 'auth/wrong-password':
                    alert('Incorrect Password')
                    break
                case 'auth/user-not-found':
                    alert('Incorrect email')
                    break
                default:
                    console.log(error)
            }
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;

        setFormFields({ ...formFields, [name]: value})
    }

    return(
        <SignInContainer>
            <h2>Already have an account? </h2>
            <span>Sign In With Your Email and Password</span>
            <form onSubmit={handleSubmit}>

                <FormInput label='Email' type = 'email' required onChange={handleChange} name='email' value={email} />

                <FormInput label='Password' type = 'password' required onChange={handleChange} name='password' value={password} />

                <ButtonsContainer>
                    <Button type='submit'>Sign In</Button>

                    <Button type='button' buttonType={BUTTON_TYPE_CLASSES.google} onClick = {signInWithGoogle}>Google Sign In</Button>
                </ButtonsContainer>
            </form>
        </SignInContainer>
    )
}

export default SignInForm
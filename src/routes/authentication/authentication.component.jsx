import { AuthenticationContainer } from './authentication.styles'
import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
import SignUpForm from '../../components/sign-up/sign-up-form.component';
import SignInForm from '../../components/sign-in-form/sign-in-form.component';


const  Authentication = () => {

    return (
        <AuthenticationContainer>
            <SignInForm />
            <SignUpForm />
        </AuthenticationContainer>
    )
}

export default Authentication
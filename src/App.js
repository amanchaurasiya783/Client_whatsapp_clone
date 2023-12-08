import './App.css';
import Messenger from "./Pages/Messenger";
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from "./Context/AccountProvider";
import { clientID } from './Components/Constants';

function App() {

  // const cliendID = '38947516489-u64q630t6j6g2m5ou1slto2pndt53mn2.apps.googleusercontent.com';

  return (
    <GoogleOAuthProvider clientId={clientID}>
      <AccountProvider>
        <Messenger />
      </AccountProvider >
    </GoogleOAuthProvider>
  );
}

export default App;

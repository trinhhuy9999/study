import logo from './logo.svg';
import './App.css';

function App() {

    return (
        <div className="App">

            <div className="box">
                <input placeholder="Email address or phone number" className="input" />

                <br />

                <input placeholder="Password" className="input" />

                <br />

                <button className="button-login">
                    Log in
                </button>


                <div className="box-link">

                    <a className="link-forgot">
                        Forgotten password?
                    </a>

                </div>

                <div className="divider" />

                <div className="box-new">

                    <button className="button-new">
                        Create New Account
                    </button>
                </div>
            </div>


        </div>

    );
}


export default App;

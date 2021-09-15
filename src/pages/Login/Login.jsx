import './login.scss';

export default function Login() {
    return (
        <div className="login">
            <div className="login-wrapper">
                <h2 className="login-title">Login</h2>
                <form className="login-form">
                    <div className="login-form-group">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Enter your email..."/>
                    </div>
                    <div className="login-form-group">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Enter your password..."/>
                    </div>
                    <div className="login-form-group">
                        <button className="login-btn">Login</button>
                        <button className="login-btn register-btn">Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

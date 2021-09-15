import '../Login/login.scss';

export default function Register() {
    return (
        <div className="login">
            <div className="login-wrapper">
                <h2 className="login-title">Register</h2>
                <form className="login-form">
                    <div className="login-form-group">
                        <label>Username</label>
                        <input type="text" name="username" placeholder="Enter your username..."/>
                    </div>
                    <div className="login-form-group">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="Enter your email..."/>
                    </div>
                    <div className="login-form-group">
                        <label>Password</label>
                        <input type="password" name="password" placeholder="Enter your password..."/>
                    </div>
                    <div className="login-form-group">
                        <button className="login-btn">Register</button>
                        <button className="login-btn register-btn">Login</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

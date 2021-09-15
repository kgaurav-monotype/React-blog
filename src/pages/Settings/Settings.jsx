import './settings.scss';
import Sidebar from '../../components/Sidebar/Sidebar';

export default function Settings() {
    return (
        <div className="settings">
            <div className="settings-wrapper">
                <div className="settings-titles">
                    <h2 className="settings-update-title">Update your account</h2>
                    <h3 className="settings-delete-title">Delete account</h3>
                </div>
                <form className="settings-form">
                    <div className="settings-profile">
                        <img className="settings-profile-img" src="https://lh3.googleusercontent.com/a-/AOh14GiyS05v_qBJRFClq2PRHhMrMIJtRsZsk2fGGxqBdg" alt="Kumar Gaurav"/>
                        <label htmlFor="profile-img">
                            <i className="settings-profile-icon far fa-user-circle"></i>
                        </label>
                        <input type="file" name="" id="profile-img" style={{display:"none"}}/>
                    </div>
                    <div className="settings-form-group">
                        <label>Username</label>
                        <input type="text" name="username" value="Kumar247001"/>
                    </div>
                    <div className="settings-form-group">
                        <label>Email</label>
                        <input type="email" name="email" value="kumar247001@gmail.com"/>
                    </div>
                    <div className="settings-form-group">
                        <label>Password</label>
                        <input type="password" name="password" value="123456"/>
                    </div>
                    <div className="settings-form-group">
                        <button className="settings-form-btn">Update</button>
                    </div>
                </form>
            </div>
            <Sidebar />
        </div>
    )
}

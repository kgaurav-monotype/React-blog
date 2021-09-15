import './write.scss'

export default function Write() {
    return (
        <div className="write">
            <form className="write-form">
            <img className="write-form-img" src="https://images.unsplash.com/photo-1588243012335-877fc66de24c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80" alt=""/>
            <div className="write-form-group">
                <label htmlFor="addImage">
                    <i class="write-form-icon fas fa-plus-square"></i>
                </label>
                <input type="file" name="Add a Image" id="addImage" style={{"display":"none"}}/>
                <button className="write-form-btn" type="submit">Publish</button>
            </div>
            <div className="write-form-group">
                <input className="write-form-input" type="text" name="title" placeholder="Enter a title" autoFocus={true}/>
            </div>
            <div className="write-form-group">
                <textarea className="write-form-textarea" rows="10" placeholder="Tell me your story"></textarea>
            </div>
            </form>
        </div>
    )
}

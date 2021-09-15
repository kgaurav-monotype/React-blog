import './sidebar.scss';

export default function Sidebar() {
    return (
        <div className="sidebar">
           <div className="sidebar-item">
               <h2 className="sidebar-item-title">About Me</h2>
               <img className="sidebar-item-img" src="https://images.unsplash.com/photo-1588243012335-877fc66de24c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80" alt=""/>
               <p className="sidebar-item-description">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Deserunt totam pariatur harum repellat sapiente corrupti odit placeat, praesentium quod tempora doloremque veritatis nisi ipsum molestiae nihil quae vitae laboriosam! Quos aut tempora nobis dolores, saepe aliquam eaque fuga debitis rem ex maiores repellat aspernatur. Earum laborum voluptas et facere explicabo.</p>
           </div>
           <div className="sidebar-item">
               <h2 className="sidebar-item-title">Categories</h2>
               <ul className="sidebar-item-list">
                   <li className="sidebar-item-list-item">Travel</li>
                   <li className="sidebar-item-list-item">Food</li>
                   <li className="sidebar-item-list-item">Science</li>
                   <li className="sidebar-item-list-item">Life</li>
                   <li className="sidebar-item-list-item">Style</li>
                   <li className="sidebar-item-list-item">Tech</li>
                   <li className="sidebar-item-list-item">Music</li>
               </ul>
           </div>
           <div className="sidebar-item">
                <h2 className="sidebar-item-title">Follow Us</h2>
                <i className="sidebar-item-icon fab fa-facebook-square"></i>
                <i className="sidebar-item-icon fab fa-twitter-square"></i>
                <i className="sidebar-item-icon fab fa-pinterest-square"></i>
                <i className="sidebar-item-icon fab fa-instagram-square"></i>
           </div>
        </div>
    )
}

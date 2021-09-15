import "./post.scss";

export default function Post() {
    return (
        <div className="post">
            <img className="post-img" src="https://images.unsplash.com/photo-1588243012335-877fc66de24c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2100&q=80" alt=""/>
            <div className="post-categories">
                <span className="post-categories-item">Travel</span>
                <span className="post-categories-item">Life</span>
            </div>
            <h3 className="post-title">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis, id.</h3>
            <p className="post-info">Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod labore possimus provident animi. Pariatur velit officia maiores esse eius, autem fugit nostrum impedit. Dolores veniam nulla officia illo odit at.</p>
            <span className="post-date">1 Hour ago</span>
        </div>
    )
}

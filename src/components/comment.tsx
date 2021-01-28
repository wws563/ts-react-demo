function Comment(props: any) {
    return (
        <div className="Comment">
            <Author user={props.author} />
            <div className="Comment-text">{props.text}</div>
            <div className="Comment-date">{props.date.toString()}</div>
        </div>
    );
}

function Author(props: any) {
    return (
        <div className="UserInfo">
            <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
            <div className="UserInfo-name">{props.user.name}</div>
        </div>
    );
}

export default Comment;

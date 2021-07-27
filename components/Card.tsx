import { Post } from "../utils/Type/Post";

const Card = ({metadata}: {metadata: {[key: string]: any}}) => {
    return (
        <div className="card">
            <div className="card-header">
                <div className="profile">
                    <span className="letter">{metadata.author[0]}</span>
                </div>
                <div className="card-title-group">
                    <h5 className="card-title">{metadata.title}</h5>
                    <div className="card-date">{metadata.timedate}</div>
                </div>
            </div>
            <img className="card-image" src={metadata.thumbnail} alt="Logo" />
            <div className="card-text">{metadata.description}</div>
        </div>
    )
}

export default Card;

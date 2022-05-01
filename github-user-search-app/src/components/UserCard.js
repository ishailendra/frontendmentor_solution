import { ReactComponent as Location } from "../assets/icon-location.svg"
import { ReactComponent as Website } from "../assets/icon-website.svg"
import { ReactComponent as TwitterBird } from "../assets/icon-twitter.svg"
import { ReactComponent as Company } from "../assets/icon-company.svg"

const UserCard = (props) => {

  const getCreatedDate = (date) => {
      return new Date(date).toLocaleDateString("en-US", {
          month: "long",
          day: "numeric",
          year: "numeric"
      })
   
  }

    return (
        <div className="card user-card-wrap">
            <div className="user-details">
                <img className="avatar" src={props.user.avatar_url} alt="avtar" />
                <div className="user-info">
                    <h2>{props.user.name ? props.user.name : props.user.login}</h2>
                    <a href={props.user.html_url}>@{props.user.login}</a>
                    <p>Joined {getCreatedDate(props.user.created_at)}</p>
                </div>
            </div>
            <div className="bio">{props.user.bio ? props.user.bio : 'This profile has no bio'}</div>
            <div className="repo-details">
                <div>Repos</div>
                <div>Followers</div>
                <div>Following</div>
                <div>{props.user.public_repos}</div>
                <div>{props.user.followers}</div>
                <div>{props.user.following}</div>
            </div>
            <div className="other-info">
                <div className={props.user.location ? 'location' : ' location other-info__not'}>
                     <Location />{props.user.location ? (<span>{props.user.location}</span>) : (<span>Not Available</span>)}
                </div>
                <div className={props.user.blog ? 'website' : ' website other-info__not'}>
                     <Website />{props.user.blog ? (<a href={props.user.blog} target="_blank" rel="noreferrer">{props.user.blog}</a>) : (<span>Not Available</span>)}
                </div>
                <div className={props.user.twitter_username ? 'twitter' : ' twitter other-info__not'}>
                     <TwitterBird />{props.user.twitter_username ? (<a href={`https://twitter.com/${props.user.twitter_username}`} target="_blank" rel="noreferrer">@{props.user.twitter_username}</a>) : (<span>Not Available</span>)}
                </div>
                <div className={props.user.company ? 'company' : ' company other-info__not'}>
                     <Company />{props.user.company ? (<span>{props.user.company}</span>) : (<span>Not Available</span>)}
                </div>
            </div>
        </div>
    );
}

export default UserCard;
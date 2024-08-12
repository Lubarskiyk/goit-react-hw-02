import {
  list,
  profileImage,
  profileName,
  item,
  quantity,
  profileTop,
  profileText,
  profile,
} from "./Profile.module.css";

export default function Profile({
  image,
  name,
  tag,
  location,
  stats: { followers, views, likes },
}) {
  return (
    <div className={profile}>
      <div className={profileTop}>
        <img
          src={image}
          className={profileImage}
          alt="User avatar"
          width={100}
        />
        <p>{name}</p>
        <p className={profileText}>@{tag}</p>
        <p className={profileText}>{location}</p>
      </div>
      <ul className={list}>
        <li className={item}>
          <span className={profileName}>Followers</span>
          <span className={quantity}>{followers}</span>
        </li>
        <li className={item}>
          <span className={profileName}>Views</span>
          <span className={quantity}>{views}</span>
        </li>
        <li className={item}>
          <span className={profileName}>Likes</span>
          <span className={quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
}

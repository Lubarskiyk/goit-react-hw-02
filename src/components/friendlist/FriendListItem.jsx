import clsx from "clsx";
import css from "./FriendListItem.module.css";
export default function FriendListItem({ item: { avatar, name, isOnline } }) {
  return (
    <>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={css.nameTitle}>{name}</p>
      <p className={clsx(isOnline ? css.online : css.offline)}>
        {isOnline ? "online" : "offLine"}
      </p>
    </>
  );
}

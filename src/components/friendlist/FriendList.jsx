import clsx from "clsx";
import { listItem, list } from "./FriendList.module.css";
import FriendListItem from "./FriendListItem.jsx";

export default function FriendList({ friends }) {
  return (
    <ul className={list}>
      {friends.map(item => {
        return (
          <li className={listItem} key={item.id}>
            <FriendListItem item={item} />
          </li>
        );
      })}
    </ul>
  );
}

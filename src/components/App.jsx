import userData from "../data/userData.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";
import "./App.css";
import Profile from "./profile/Profile.jsx";
import FriendList from "./friendlist/FriendList.jsx";
import TransactionHistory from "./transactionhistory/TransactionHistory.jsx";

function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
      <TransactionHistory transactions={transactions} />
    </>
  );
}

export default App;

import { useState } from "react";
import "./index.css";
import Button from "./button";
import FriendList from "./friendList";
import FormaddFriend from "./formAddFriend";
import FormSplitBill from "./formSplitBill";

const friendsList = [
  {
    id: 118836,
    name: "Dhol",
    image: "./images/dhol.jpeg",
    balance: -7,
  },
  {
    id: 933372,
    name: "Hurko",
    image: "./images/hurko.jpg",
    balance: 20,
  },
  {
    id: 499476,
    name: "Sonai",
    image: "./images/sonai.jpeg",
    balance: 0,
  },
];

export default function App() {
  const [friends, setFriends] = useState(friendsList);
  const [showAddForm, setShowAddForm] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);

  function handleShowAddfriend() {
    return setShowAddForm((show) => !show);
  }
  function handleAddFriends(friend) {
    setFriends((friends) => [...friends, friend]);
    setShowAddForm(false);
  }
  function handleSelection(friend) {
    setSelectedFriend((selected) =>
      selected?.id === friend.id ? null : friend
    );
    setShowAddForm(false);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          onSelection={handleSelection}
          selectedFriend={selectedFriend}
        />

        {showAddForm && <FormaddFriend onAddFriends={handleAddFriends} />}

        <Button onClick={handleShowAddfriend}>
          {showAddForm ? "close" : "Add friend"}
        </Button>
      </div>

      {selectedFriend && <FormSplitBill selectedFriend={selectedFriend} />}
    </div>
  );
}

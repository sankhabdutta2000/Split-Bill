import { useState } from "react";
import Button from "./button";

export default function FormSplitBill({ selectedFriend }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const [paidByWhom, setPaidByWhom] = useState("user");
  const paidByFriend = bill ? bill - paidByUser : "";

  return (
    <form className="form-split-bill">
      <h2>spilt a bill with {selectedFriend.name}</h2>

      <lebel>Bill Value</lebel>
      <input
        type="number"
        value={bill}
        onChange={(e) => setBill(Number(e.target.value))}
      />

      <lebel>Your Expense</lebel>
      <input
        type="number"
        value={paidByUser}
        onChange={(e) =>
          setPaidByUser(
            Number(e.target.value) > bill ? paidByUser : Number(e.target.value)
          )
        }
      />

      <lebel>{selectedFriend.name}'s Expense</lebel>
      <input type="number" disabled value={paidByFriend} />

      <lebel>Who is paying your bill ?</lebel>
      <select
        value={paidByWhom}
        onChange={(e) => setPaidByWhom(e.target.value)}
      >
        <option value="user">You</option>
        <option value="friend">{selectedFriend.name}</option>
      </select>
      <Button>Split Bill</Button>
    </form>
  );
}

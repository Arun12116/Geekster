import ChatA from "./ChatA"
import ChatB from "./ChatB";
import "./Chat.css";
import { useState } from "react";

const Chat = () => {
  const [msgAInput, setMsgA] = useState("");
  const [msgBInput, setMsgB] = useState("");

  const [itemsA, setItemsA] = useState([]);
  const [itemsB, setItemsB] = useState([]);

  const handleChangeA = (msgAInput) => {
    setMsgA(msgAInput);
  };

  const handleChangeB = (msgBInput) => {
    setMsgB(msgBInput);
  };

  const handleListB = () => {
    setItemsB((old) => {
      return [...old, msgAInput];
    });
  };
  const handleListA = () => {
    setItemsA((old) => {
      return [...old, msgBInput];
    });
  };

  return (
    <>
      <div className="chatContainer">
        <ChatA msgA={handleChangeA} msgB={itemsA} listB={handleListB} />
        <ChatB msgB={handleChangeB} msgA={itemsB} listA={handleListA} />
      </div>
    </>
  );
};

export default Chat;

import { useState } from "react";

const ChatB = (props) => {
  const [val, setVal] = useState("");
  props.msgB(val);

  return (
    <>
      <div className="chatB chat">
        <h4>Chat B</h4>
        <input
          type="text"
          onChange={(e) => {
            setVal(e.target.value);
          }}
        />
        <button onClick={props.listA}>Send</button>
        <div className="msg">
          {props.msgA.map((item) => {
            return <p>{item}</p>;
          })}
        </div>
      </div>
    </>
  );
};

export default ChatB;

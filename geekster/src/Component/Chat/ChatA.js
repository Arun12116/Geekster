import "./Chat.css";
import { useState } from "react";

const ChatA = (props) => {
  const [val, setVal] = useState("");
  props.msgA(val);
  return (
    <>
      <div className="chatA chat">
        <h4>Chat A</h4>
        
        <input
          type="text"
          onChange={(e) => {
            setVal(e.target.value);
          }}
        />
        <button onClick={props.listB}>Send</button>
        <div className="msg">
          {props.msgB.map((item) => {
            return <p>{item}</p>;
          })}
        </div>
      </div>
    </>
  );
};
export default ChatA;

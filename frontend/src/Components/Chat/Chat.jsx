import "./chat.css";
import Conversation from "./Conversation/Conversation";
import OnlineFriend from "../Main/Contact/OnlineFriend/OnlineFriend";
import Message from "./Message/Message";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";

import Api from "../../config/axios";

export default function Chat() {
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(false);
  const [messages, setMessages] = useState([]);

  const { user } = useContext(AuthContext);

  useEffect(() => {
    const GetConversation = async () => {
      try {
        const res = await Api.get(`/conversation/${user?._id}`);
        setConversations(res.data);
      } catch (err) {
        console.log("erreur  : " + err);
      }
    };
    GetConversation();
  }, [user?._id]);

  // useEffect(() => {
  //   const GetCurrentChat = () => {};
  //   GetCurrentChat();
  // }, [conversations._id, conversations]);

  var HandleStartConversation = async (conversationId) => {
    try {
      const res = await Api.get(`/message/${conversationId}`);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="chat__container">
      <div className="chat__menu">
        <form className="chat__form__menu">
          <input placeholder="Rechercher un ami" />
        </form>

        {conversations.map((conv) => {
          return (
            <div
              onClick={() => {
                console.log(conv._id);
                HandleStartConversation(conv._id);
              }}
            >
              <Conversation
                conversation={conv}
                currentUser={user}
                key={conv._id}
              />
            </div>
          );
        })}
      </div>
      <div className="chat__box">
        <div className="chatbox__wrap">
          {currentChat ? (
            <>
              <div className="chatbox__top">
                <Message own={true} />
                <Message own={true} />
              </div>
              <div className="chatbox__bottom">
                <form>
                  <textarea type="text" placeholder="votre message" />
                  <button>Envoyer</button>
                </form>
              </div>
            </>
          ) : (
            <span className="open__conversation">Open a conversation</span>
          )}
        </div>
      </div>
      <div className="chat__online__friends">
        <div className="chatonline__wrapper">
          <OnlineFriend
            username="pomme"
            picture="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
          />
        </div>
      </div>
    </div>
  );
}

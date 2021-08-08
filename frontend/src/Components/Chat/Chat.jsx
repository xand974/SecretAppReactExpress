import "./chat.css";
import Conversation from "./Conversation/Conversation";
import OnlineFriend from "../Main/Contact/OnlineFriend/OnlineFriend";
import Message from "./Message/Message";
import { useContext, useEffect, useRef, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { io } from "socket.io-client";

import Api from "../../config/axios";

export default function Chat() {
  const scrollToTheEnd = useRef();
  var [userMessage, setUserMessage] = useState("");
  const [conversations, setConversations] = useState([]);
  const [currentChat, setCurrentChat] = useState(null);
  const [messages, setMessages] = useState([]);
  const [arrivalMessage, setArrivalMessage] = useState(null);
  const [onlineFriend, setOnlineFriend] = useState([]);
  var socket = useRef();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    socket.current = io("ws://localhost:8080");
    socket.current.on("getMessage", (res) => {
      setArrivalMessage({
        sender: res.senderId,
        text: res.text,
        createdAt: Date.now(),
      });
    });
  }, []);

  useEffect(() => {
    //check les nv messages depuis socket
    arrivalMessage &&
      //check si les messages sont bien envoyés aux bonnes personnes, sinon
      //va être envoyé à tout le monde des diff conversations
      currentChat?.members.includes(arrivalMessage.sender) &&
      setMessages((prev) => [...prev, arrivalMessage]);
  }, [arrivalMessage, currentChat]);

  useEffect(() => {
    socket.current?.emit("sendUser", user?._id);
    socket.current?.on("newUsers", (users) => {
      setOnlineFriend(users);
    });
  }, [user]);

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

  useEffect(() => {
    const GetMessages = async () => {
      try {
        const res = await Api.get(`/message/${currentChat?._id}`);
        setMessages(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    GetMessages();
  }, [currentChat]);

  const receiverId = currentChat?.members.find((member) => member !== user._id);

  const HandleSendMessage = async () => {
    var newMessage = {
      sender: user._id,
      conversationId: currentChat._id,
      text: userMessage,
    };

    socket.current?.emit("sendMessage", {
      senderId: user?._id,
      text: userMessage,
      receiverId: receiverId,
    });
    try {
      const res = await Api.post("/message/", newMessage);
      setMessages([...messages, res.data]);
      setUserMessage("");
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    scrollToTheEnd.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

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
                setCurrentChat(conv);
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
                {messages.map((m) => {
                  return (
                    <div ref={scrollToTheEnd}>
                      <Message
                        key={m._id}
                        message={m}
                        own={m.sender === user._id ? true : false}
                      />
                    </div>
                  );
                })}
              </div>
              <div className="chatbox__bottom">
                <form
                  onSubmit={(e) => {
                    e.preventDefault();
                  }}
                >
                  <textarea
                    onChange={(e) => {
                      setUserMessage(e.target.value);
                    }}
                    value={userMessage}
                    type="text"
                    placeholder="votre message"
                  />
                  <button onClick={HandleSendMessage}>Envoyer</button>
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
            onlineFriend={onlineFriend}
            user={user}
            setCurrentChat={setCurrentChat}
            username="Pomme"
            picture="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
          />
        </div>
      </div>
    </div>
  );
}

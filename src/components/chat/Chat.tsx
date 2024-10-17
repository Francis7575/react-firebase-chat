import { useState } from 'react'
import './chat.css'
import EmojiPicker from "emoji-picker-react"
import { EmojisType } from '../../types'

const Chat = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [textInput, setTextInput] = useState<string>("");

  const handleEmoji = (e: EmojisType) => {
    setTextInput((prev) => prev + e.emoji);
    setIsOpen(false);
  };

  return (
    <div className="chat">
      <div className="top">
        <div className="user">
          <img src="./avatar.png" alt="" />
          <div className="texts">
            <span>Francis Sanchez</span>
            <p>Lorem ipsum dolor, sit amet.</p>
          </div>
        </div>
        <div className="icons">
          <img src="./phone.png" alt="" />
          <img src="./video.png" alt="" />
          <img src="./info.png" alt="" />
        </div>
      </div>
      <div className="center"></div>
      <div className="bottom">
        <div className="icons">
          <img src="./img.png" alt="" />
          <img src="./camera.png" alt="" />
          <img src="./mic.png" alt="" />
        </div>
        <input
          value={textInput}
          onChange={(e) => setTextInput(e.target.value)}
          type="text"
          placeholder="Type a message..."
        />
        <div
          className='emoji-container'>
          <button onClick={() => setIsOpen((prev) => !prev)}
                className='emoji'>
            <img
              src="./emoji.png"
              alt=""
            />
            {isOpen && (
              <div className='picker'>
                <EmojiPicker onEmojiClick={handleEmoji} />
              </div>
            )}
          </button>
        </div>
        <button
          className="sendButton"
        >
          Send
        </button>
      </div>
    </div>
  )
}

export default Chat
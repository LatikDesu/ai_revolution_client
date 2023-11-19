import { UUID } from 'crypto'

interface MessageProps {
	message: {
		id: UUID
		conversation: any
		content: string
		is_from_user: boolean
		in_reply_to: any
		created_at: string
	}[]
}

const MessagesList: React.FC<MessageProps> = ({ message }) => {
    return (
        <div className="chat-container">
          {message.map((message) => (
            <div
              key={message.id}
              className={`message ${message.is_from_user ? 'user-message' : 'robot-message'}`}
            >
              <p>{message.content}</p>
            </div>
          ))}
        </div>
      );
    };

export default MessagesList

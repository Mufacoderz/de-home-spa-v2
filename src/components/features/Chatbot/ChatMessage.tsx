import ChatBubble from "./ChatBubble";
import RecommendationCard from "./RecommendationCard";
import type { ChatMessage as ChatMessageType } from "@/types/chat";

type Props = {
  message: ChatMessageType;
};

export default function ChatMessage({ message }: Props) {
  if (message.type === "recommendation") {
    return (
      <div className="space-y-3">
        <ChatBubble role="assistant" message={message.content} />

        {message.treatments?.map((item) => (
          <RecommendationCard key={item.kode} treatment={item} />
        ))}
      </div>
    );
  }

  return <ChatBubble role={message.role} message={message.content} />;
}
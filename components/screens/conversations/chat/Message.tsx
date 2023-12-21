"use client";

import { useSaveMessageMutation } from "@/redux/features/conversations/chatApiSlice";
import { IMessage } from "@/types/chat.types";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useRef, useState, useCallback } from "react";
import ReactMarkdown from "react-markdown";
import { SSE } from "sse";

export default function Message({ message }: { message: IMessage }) {
  const { id } = useParams();
  const baseUrl = `${process.env.NEXT_PUBLIC_HOST}/api/v1`;
  const isSender = message.role === "user";

  const [isLoading, setIsLoading] = useState(false);
  const [result, setResult] = useState("");
  const [saveMessage] = useSaveMessageMutation();

  const resultRef = useRef<string | null>(null);

  useEffect(() => {
    resultRef.current = result;
  }, [result]);

  useEffect(() => {
    const isStreamingFromStorage = localStorage.getItem("isStreaming") === "true";

    const startStreaming = async () => {
      setIsLoading(true);
      setResult("");

      let source = new SSE(`${baseUrl}/conversations/${id}/stream/`, {
        withCredentials: true,
      });

      source.addEventListener("message", (e: MessageEvent) => {
        let payload = JSON.parse(e.data);
        let text = payload.content;
        if (text !== null && text !== "\n") {
          resultRef.current = (resultRef.current || "") + text;
          setResult(resultRef.current);
        }

        if (payload.finish_reason) {
          try {
            saveMessage({
              id,
              content: resultRef.current,
              role: "assistant",
            }).unwrap();
          } catch (error) {
            console.error("Error sending message:", error);
          }
          source.close();
        }
      });

      source.addEventListener("readystatechange", (e: any) => {
        if (e.readyState >= 2) {
          setIsLoading(false);
        }
      });

      source.stream();
    };

    if (isStreamingFromStorage) {
      localStorage.setItem("isStreaming", "false");
      startStreaming();
    }
  }, [id, baseUrl, result, saveMessage]);

  return (
    <>
      <div className="flex justify-start mb-4 px-10">
        <div className="relative flex items-start">
          {isSender ? <Image src="/no-avatar.png" alt="Avatar" className="rounded-full" width={60} height={60} /> : <Image src="/AI-Avatar.png" alt="Avatar" className="rounded-full" width={60} height={60} />}

          <div className="ml-6 flex flex-col">
            <p className="text-texthover text-semibold text-lg pb-2">{isSender ? "Ты" : "Ассистент"}</p>
            <div className="text-sm text-textlight ">
              <ReactMarkdown>{message.content}</ReactMarkdown>
            </div>
          </div>
        </div>
      </div>
      {isLoading && <ExtraComponent streamResponse={result} />}
    </>
  );
}

const ExtraComponent = ({ streamResponse }: { streamResponse: any }) => {
  return (
    <div className="flex justify-start mb-4 px-10">
      <div className="relative flex items-start">
        <Image src="/AI-Avatar.png" alt="Avatar" className="rounded-full" width={60} height={60} />
        <div className="ml-6 flex flex-col">
          <p className="text-texthover text-semibold text-lg pb-2">Ассистент</p>
          <div className="text-sm text-textlight ">
            <ReactMarkdown>{streamResponse}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
};

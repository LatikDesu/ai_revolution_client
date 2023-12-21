"use client";

import { Loader, Message, MessageField } from "@/components/screens/conversations";
import { useGetMessageListQuery } from "@/redux/features/conversations/chatApiSlice";
import { selectCurrentChat, setCurrentChat } from "@/redux/features/conversations/chatSlice";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { UUID } from "crypto";
import isEqual from "lodash/isEqual";
import { useEffect, useRef, useState } from "react";
import Template from "./Template";
import TemplateButton from "./TemplateButton";

export default function Chat({ id }: { id: UUID }) {
  const dispatch = useAppDispatch();
  const currentChat = useAppSelector(selectCurrentChat);

  const { data: messagesList, isLoading } = useGetMessageListQuery({ id: id });
  const [message, setMessage] = useState("");

  useEffect(() => {
    if (messagesList && !isEqual(messagesList, currentChat)) {
      dispatch(setCurrentChat(messagesList));
    }
  }, [messagesList, dispatch, currentChat]);

  const messagesContainerRef = useRef<HTMLDivElement>(null);

  const handleTemplateClick = (templateText: string) => {
    setMessage((prevMessage) => prevMessage + templateText);
  };

  const handleButtonClick = () => {
    console.log("Button clicked!");
  };

  return (
    <div className="relative w-full h-full bg-bgchatmessage" style={{ display: "flex", justifyContent: "center" }}>
      {isLoading ? (
        <div className="flex items-center justify-center">
          <Loader />
        </div>
      ) : (
        <>
          {(messagesList?.messages?.length ?? 0) === 0 ? (
            <div className="mb-4 w-4/5">
              <p className="text-texthover text-semibold text-lg pb-2" style={{ color: "#F6F6F6", fontSize: "32px", marginTop: "3%", marginBottom: "3%" }}>
                Шаблоны
              </p>
              <div className="flex flex-wrap " style={{ maxWidth: "800px" }}>
                {[...Array(5)].map((_, index) => (
                  <div key={index} className="w-1/2 mb-4 pr-2" style={{ maxWidth: "50%", flexBasis: "50%", boxSizing: "border-box", maxHeight: "111px", marginLeft: 0 }}>
                    <Template onClickTemplate={handleTemplateClick} templateText="Lorem ipsum dolor sit amet consectetur. Convallis risus arcu id accumsan massa sapien" />
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div ref={messagesContainerRef} className="p-4 border-t border-darkgrey" style={{ overflowY: "auto", maxHeight: "calc(100vh - 260px)", width: "85%" }}>
              {messagesList?.messages?.map((message) => (
                <Message key={message.id} message={message} />
              ))}
            </div>
          )}
        </>
      )}
      <TemplateButton onClick={handleButtonClick} />
      <MessageField message={message} setMessage={setMessage} />

      <style jsx>{`
        ::-webkit-scrollbar {
          width: 5px;
        }

        ::-webkit-scrollbar-thumb {
          background-color: #8d8d8d;
        }
      `}</style>
    </div>
  );
}

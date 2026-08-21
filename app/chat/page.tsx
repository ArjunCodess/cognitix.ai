"use client";

// Install AI Elements components:
// npx ai-elements@latest add conversation message prompt-input

import {
  IconAdjustmentsHorizontal,
  IconBolt,
  IconMessageCircle,
  IconPaperclip,
  IconRefresh,
  IconSparkles,
} from "@tabler/icons-react";
import type { ChatStatus } from "ai";
import { useEffect, useRef, useState } from "react";
import {
  Conversation,
  ConversationContent,
  ConversationScrollButton,
} from "@/components/ai-elements/conversation";
import {
  Message,
  MessageContent,
  MessageResponse,
} from "@/components/ai-elements/message";
import {
  PromptInput,
  PromptInputButton,
  PromptInputFooter,
  PromptInputSubmit,
  PromptInputTextarea,
  PromptInputTools,
} from "@/components/ai-elements/prompt-input";
import { cn } from "@/lib/utils";

interface DemoMessage {
  id: string;
  role: "user" | "assistant";
  content: string;
}

interface Message {
  question: string;
  answer: string;
}

const INITIAL_MESSAGES: DemoMessage[] = [
  {
    id: "intro",
    role: "assistant",
    content: "**Welcome back.** I can help you explore about Cognitix.AI.",
  },
  {
    id: "question",
    role: "user",
    content: "What makes it useful?",
  },
  {
    id: "answer",
    role: "assistant",
    content:
      "It is an AI consulting company which helps organizations looking to embed advanced AI capabilities directly into their product offerings at scale.",
  },
];

const REPLIES: Message[] = [
  {
    question: "What is it?",
    answer:
      "It is an AI consulting company which helps organizations looking to embed advanced AI capabilities directly into their product offerings at scale.",
  },
  {
    question: "Who is it for?",
    answer:
      "It's for organizations looking to embed advanced AI capabilities directly into their product offerings.",
  },
  {
    question: "What type of business is this?",
    answer: "This is an AI Consulting business.",
  },
  {
    question: "How do you work?",
    answer:
      "Contact us from the /contact page and then we will respond to you with all the information.",
  },
];

export default function Chat() {
  const [messages, setMessages] = useState<DemoMessage[]>(INITIAL_MESSAGES);
  const [inputValue, setInputValue] = useState("");
  const [status, setStatus] = useState<ChatStatus>("ready");
  const replyTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (replyTimeoutRef.current) {
        window.clearTimeout(replyTimeoutRef.current);
      }
    };
  }, []);

  const handleSend = (text: string) => {
    const trimmed = text.trim();
    if (!trimmed) {
      return;
    }

    const newMessage: DemoMessage = {
      id: `user-${Date.now()}`,
      role: "user",
      content: trimmed,
    };

    setMessages((prev) => [...prev, newMessage]);
    setInputValue("");
    setStatus("submitted");

    replyTimeoutRef.current = window.setTimeout(() => {
      const response: DemoMessage = {
        id: `assistant-${Date.now()}`,
        role: "assistant",
        content: (() => {
          const matchedReply = REPLIES.find(
            (reply) => reply.question.toLowerCase() === trimmed.toLowerCase(),
          );

          return matchedReply
            ? matchedReply.answer
            : "I'm sorry, I don't have an answer for that specific question.";
        })(),
      };

      setMessages((prev) => [...prev, response]);
      setStatus("ready");
    }, 900);
  };

  return (
    <div className="w-full h-screen p-2">
      <div className="flex w-full flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-lg border">
        <Conversation className="bg-muted/30">
          <ConversationContent className="gap-6 pl-1">
            {messages.map((message) => (
              <Message from={message.role} key={message.id}>
                <MessageContent
                  className={cn(
                    "leading-relaxed",
                    message.role === "assistant" && "max-w-prose",
                  )}
                >
                  {message.role === "assistant" ? (
                    <MessageResponse>{message.content}</MessageResponse>
                  ) : (
                    <p className="whitespace-pre-wrap text-pretty">
                      {message.content}
                    </p>
                  )}
                </MessageContent>
              </Message>
            ))}
          </ConversationContent>
          <ConversationScrollButton />
        </Conversation>

        <div className="gap-5 border p-4 m-4 rounded-lg">
          <h1>Example Questions:</h1>
          <div className="flex flex-row gap-3">
            {REPLIES.map((reply): any => (
              <button
                className="cursor-pointer"
                onClick={() => handleSend(reply.question)}
              >
                {reply.question}
              </button>
            ))}
          </div>
        </div>

        <div className="bg-background">
          <PromptInput
            className="w-full [&>[data-slot=input-group]]:rounded-none [&>[data-slot=input-group]]:border-border/80 [&>[data-slot=input-group]]:border-x-0 [&>[data-slot=input-group]]:border-t [&>[data-slot=input-group]]:border-b-0 [&>[data-slot=input-group]]:shadow-none [&>[data-slot=input-group]]:focus-within:border-border/80 [&>[data-slot=input-group]]:focus-within:outline-none [&>[data-slot=input-group]]:focus-within:ring-0 [&>[data-slot=input-group]]:focus-within:ring-transparent [&>[data-slot=input-group]]:focus-within:ring-offset-0"
            onSubmit={(message: any) => handleSend(message.text)}
          >
            <PromptInputTextarea
              onChange={(event: any) =>
                setInputValue(event.currentTarget.value)
              }
              placeholder="Ask about Cognitix.AI"
              value={inputValue}
            />
            <PromptInputFooter>
              <PromptInputTools>
                <PromptInputButton aria-label="Attach">
                  <IconPaperclip className="size-4" />
                </PromptInputButton>
                <PromptInputButton aria-label="Quick prompt">
                  <IconBolt className="size-4" />
                </PromptInputButton>
                <PromptInputButton aria-label="New chat">
                  <IconMessageCircle className="size-4" />
                </PromptInputButton>
              </PromptInputTools>
              <PromptInputSubmit
                disabled={!inputValue.trim() || status !== "ready"}
                status={status}
              />
            </PromptInputFooter>
          </PromptInput>
        </div>
      </div>
    </div>
  );
}

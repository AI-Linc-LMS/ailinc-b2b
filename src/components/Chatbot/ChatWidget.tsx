"use client";

import { useCallback, useEffect, useMemo, useRef, useState } from "react";

type Message = {
  id: string;
  role: "user" | "bot";
  content: string;
  createdAt: number;
};

type MessageBubbleProps = {
  message: Message;
};

const CHAT_API_URL = "https://be-app.ailinc.com/api/clients/1/ai-agent/";

const INITIAL_BOT_MESSAGE: Message = {
  id: "welcome",
  role: "bot",
  content:
    "Hi there! I’m the AI Linc assistant. How can I help you today? Ask about our programs, workshops, or anything else you need.",
  createdAt: Date.now(),
};

const AUTO_OPEN_DELAY_MS = 3_000;
const FOLLOW_UP_DELAY_MS = 90_000;

const QUICK_QUESTIONS: string[] = [
  "What services does AI Linc offer?",
  "How can we partner with AI Linc?",
  "Do you have pricing information?",
  "What workshops are upcoming?",
];

function createId() {
  return Math.random().toString(36).slice(2, 10);
}

const renderTextWithFormatting = (text: string, forceWhiteText = false) => {
  const segments = text.split(/(\*\*[^*]+\*\*)/g);
  return segments.map((segment, index) => {
    const isBold = segment.startsWith("**") && segment.endsWith("**");
    if (isBold) {
      return (
        <strong
          key={index}
          className={`font-semibold ${forceWhiteText ? "text-white" : "text-gray-900"}`}
        >
          {segment.slice(2, -2)}
        </strong>
      );
    }
    return <span key={index}>{segment}</span>;
  });
};

const renderMessageBlocks = (content: string, forceWhiteText = false) => {
  const lines = content.split(/\r?\n/);
  const blocks: React.ReactNode[] = [];
  let currentList: string[] = [];

  const flushList = () => {
    if (currentList.length === 0) return;
    blocks.push(
      <ol key={`list-${blocks.length}`} className="ml-5 list-decimal space-y-1 text-sm leading-relaxed">
        {currentList.map((item, index) => (
          <li key={index} className="text-gray-700">
            {renderTextWithFormatting(item.replace(/^\d+\.\s*/, ""), forceWhiteText)}
          </li>
        ))}
      </ol>
    );
    currentList = [];
  };

  lines.forEach((rawLine) => {
    const line = rawLine.trim();
    if (line === "") {
      flushList();
      return;
    }

    if (/^\d+\.\s+/.test(line)) {
      currentList.push(line);
    } else {
      flushList();
      blocks.push(
        <p
          key={`paragraph-${blocks.length}`}
          className={`mb-2 text-sm leading-relaxed ${
            forceWhiteText ? "text-white" : "text-gray-700"
          }`}
        >
          {renderTextWithFormatting(line, forceWhiteText)}
        </p>
      );
    }
  });

  flushList();
  return blocks;
};

const MessageBubble = ({ message }: MessageBubbleProps) => {
  const isUser = message.role === "user";
  const aligned = isUser ? "justify-end" : "justify-start";
  const bubbleColors = isUser
    ? "bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-600 text-white"
    : "bg-white text-gray-800 border border-gray-200";
  const timestamp = new Date(message.createdAt).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });

  return (
    <div className={`flex ${aligned}`}>
      {!isUser && (
        <div className="mr-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-md">
          <span className="text-xs font-semibold">AI</span>
        </div>
      )}
      <div className="max-w-[80%]">
        <div
          className={`relative rounded-2xl px-4 py-3 text-sm shadow-sm transition ${bubbleColors} ${
            isUser ? "[&_*]:text-white" : ""
          }`}
        >
          <div className="space-y-1">
            {renderMessageBlocks(message.content, isUser)}
          </div>
        </div>
        <p
          className={`mt-1 text-[11px] uppercase tracking-wide ${
            isUser ? "text-indigo-200 text-right" : "text-gray-400"
          }`}
        >
          {isUser ? "You" : "AI Linc"} • {timestamp}
        </p>
      </div>
      {isUser && (
        <div className="ml-2 flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 text-white shadow-md">
          <span className="text-xs font-semibold">You</span>
        </div>
      )}
    </div>
  );
};

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [messages, setMessages] = useState<Message[]>([INITIAL_BOT_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasAutoOpened, setHasAutoOpened] = useState(false);
  const [showFloatingPrompt, setShowFloatingPrompt] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [firstUserMessageTime, setFirstUserMessageTime] = useState<number | null>(null);

  const messagesEndRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const autoOpenTimerRef = useRef<NodeJS.Timeout | null>(null);
  const promptTimerRef = useRef<NodeJS.Timeout | null>(null);
  const followUpTimerRef = useRef<NodeJS.Timeout | null>(null);
  const followUpSentRef = useRef(false);

  const handleToggle = useCallback(() => {
    setIsOpen((prev) => !prev);
  }, []);

  const handlePromptClick = useCallback(() => {
    setShowFloatingPrompt(false);
    setIsOpen(true);
    setTimeout(() => {
      inputRef.current?.focus();
    }, 150);
  }, []);

  useEffect(() => {
    if (!hasAutoOpened) {
      autoOpenTimerRef.current = setTimeout(() => {
        setHasAutoOpened(true);
      }, AUTO_OPEN_DELAY_MS);
    }

    promptTimerRef.current = setTimeout(() => {
      setShowFloatingPrompt(true);
    }, AUTO_OPEN_DELAY_MS);

    return () => {
      if (autoOpenTimerRef.current) {
        clearTimeout(autoOpenTimerRef.current);
      }
      if (promptTimerRef.current) {
        clearTimeout(promptTimerRef.current);
      }
    };
  }, [hasAutoOpened]);

  useEffect(() => {
    if (!isOpen && hasAutoOpened) {
      setShowFloatingPrompt(true);
    }
  }, [hasAutoOpened, isOpen]);

  useEffect(() => {
    if (isOpen) {
      setShowFloatingPrompt(false);
      setIsMinimized(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen) {
      inputRef.current?.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, isLoading]);

  const handleSend = useCallback(async () => {
    const trimmed = inputValue.trim();
    if (!trimmed || isLoading) {
      return;
    }

    const timestamp = Date.now();
    const userMessage: Message = {
      id: createId(),
      role: "user",
      content: trimmed,
      createdAt: timestamp,
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);
    setError(null);
    setIsMinimized(false);

    if (!firstUserMessageTime) {
      setFirstUserMessageTime(timestamp);
      if (followUpTimerRef.current) {
        clearTimeout(followUpTimerRef.current);
      }
      followUpTimerRef.current = setTimeout(() => {
        if (followUpSentRef.current) return;
        followUpSentRef.current = true;
        setMessages((prev) => [
          ...prev,
          {
            id: "follow-up-prompts",
            role: "bot",
            content:
              "Just checking in! Need help with course recommendations, pricing, or upcoming workshops? I'm still here to help.",
            createdAt: Date.now(),
          },
        ]);
      }, FOLLOW_UP_DELAY_MS);
    }

    try {
      const response = await fetch(CHAT_API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input_as_text: trimmed }),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      const data: { output_text?: string } = await response.json();
      const botText = data.output_text?.trim();

      setMessages((prev) => [
        ...prev,
        {
          id: createId(),
          role: "bot",
          content:
            botText && botText.length > 0
              ? botText
              : "I'm here to help, but I didn't receive any information from the server. Please try asking again.",
          createdAt: Date.now(),
        },
      ]);
    } catch (err) {
      console.error("Chat API error", err);
      setError("Sorry, I couldn't reach the assistant. Please try again in a moment.");
      setMessages((prev) => [
        ...prev,
        {
          id: createId(),
          role: "bot",
          content:
            "I’m experiencing some technical difficulties reaching the AI assistant right now. Please try again shortly!",
          createdAt: Date.now(),
        },
      ]);
    } finally {
      setIsLoading(false);
    }
  }, [firstUserMessageTime, inputValue, isLoading]);

  const handleKeyDown = useCallback(
    (event: React.KeyboardEvent<HTMLInputElement>) => {
      if (event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();
        handleSend();
      }
    },
    [handleSend]
  );

  const statusText = useMemo(() => {
    if (isLoading) {
      return "AI Linc bot is typing...";
    }
    if (error) {
      return error;
    }
    return "Our assistant is online and ready to help.";
  }, [isLoading, error]);

  const handleQuickQuestion = useCallback(
    (question: string) => {
      setInputValue(question);
      setIsOpen(true);
      setTimeout(() => {
        inputRef.current?.focus();
      }, 100);
    },
    []
  );

  const minimizeButton = (
    <button
      type="button"
      onClick={() => setIsMinimized((prev) => !prev)}
      className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
      aria-label={isMinimized ? "Expand chat" : "Minimize chat"}
    >
      {isMinimized ? (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 5v14m-7-7h14" />
        </svg>
      ) : (
        <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14" />
        </svg>
      )}
    </button>
  );

  return (
    <div className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end space-y-3">
      {showFloatingPrompt && !isOpen && (
        <button
          type="button"
          onClick={handlePromptClick}
          className="flex max-w-xs cursor-pointer flex-col space-y-2 rounded-3xl border border-blue-100 bg-white/95 px-4 py-3 text-left shadow-2xl backdrop-blur-xl transition hover:-translate-y-1 hover:shadow-[0_20px_35px_rgba(59,130,246,0.25)] focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-300"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.28em] text-blue-500">
            AI Linc Bot
          </span>
          <span className="text-sm font-semibold text-gray-900">
            Hi, need help? Click here to chat.
          </span>
        </button>
      )}

      {isOpen && (
        <div className="w-[320px] sm:w-[380px] overflow-hidden rounded-3xl border border-white/40 bg-white/80 shadow-2xl backdrop-blur-xl">
          <div className="relative bg-gradient-to-r from-[#0f172a] via-[#172554] to-[#2563eb] px-5 py-5 text-white shadow-inner">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'220\' height=\'220\' viewBox=\'0 0 220 220\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=%27none%27 stroke=%27rgba(255,255,255,0.05)%27 stroke-width=%270.6%27%3E%3Ccircle cx=%27110%27 cy=%27110%27 r=%27109%27/%3E%3Ccircle cx=%27110%27 cy=%27110%27 r=%2785%27/%3E%3Ccircle cx=%27110%27 cy=%27110%27 r=%2760%27/%3E%3C/g%3E%3C/svg%3E')] opacity-40" />
            <div className="relative flex items-start justify-between">
              <div className="flex items-start space-x-3">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/15 text-2xl shadow-lg">
                  🤖
                </div>
                <div>
                  <p className="text-lg font-semibold tracking-wide">AI Linc Support Bot</p>
                  <p className="flex items-center space-x-2 text-[12px] font-semibold uppercase tracking-[0.4em] text-emerald-200">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-emerald-300" />
                    <span className="tracking-normal">Online • Ready to help</span>
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-2">
                {minimizeButton}
                <button
                  type="button"
                  onClick={handleToggle}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/15 transition hover:bg-white/25 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/60"
                  aria-label="Close chat"
                >
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {isMinimized ? (
            <div className="border-t border-gray-200 bg-white/95 px-5 py-4 text-sm text-gray-600">
              <div className="flex items-center justify-between">
                <span>Chat minimized. Tap the plus icon to continue.</span>
                <button
                  type="button"
                  onClick={() => setIsMinimized(false)}
                  className="rounded-full border border-indigo-200 px-3 py-1 text-xs font-semibold text-indigo-600 transition hover:border-indigo-400 hover:bg-indigo-50"
                >
                  Expand
                </button>
              </div>
            </div>
          ) : (
            <>
              <div className="max-h-80 space-y-4 overflow-y-auto bg-gradient-to-b from-white via-white to-indigo-50/40 px-5 py-4">
            <div className="flex flex-wrap gap-2">
              {QUICK_QUESTIONS.map((question) => (
                <button
                  key={question}
                  type="button"
                  onClick={() => handleQuickQuestion(question)}
                  className="rounded-full border border-indigo-200 bg-white px-3 py-1.5 text-xs font-semibold text-indigo-600 shadow-sm transition hover:border-indigo-400 hover:bg-indigo-50"
                >
                  {question}
                </button>
              ))}
            </div>

            {messages.map((message) => (
              <MessageBubble key={message.id} message={message} />
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="flex items-center space-x-2 rounded-2xl border border-gray-200 bg-white px-3 py-2 text-xs text-gray-600 shadow-sm">
                  <span className="inline-flex h-2 w-2 animate-bounce rounded-full bg-blue-500" />
                  <span
                    className="inline-flex h-2 w-2 animate-bounce rounded-full bg-blue-500"
                    style={{ animationDelay: "0.15s" }}
                  />
                  <span
                    className="inline-flex h-2 w-2 animate-bounce rounded-full bg-blue-500"
                    style={{ animationDelay: "0.3s" }}
                  />
                  <span className="font-medium">AI is typing...</span>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t border-gray-200 bg-white/90 px-5 py-4">
            <p className="mb-2 text-[11px] font-medium uppercase tracking-[0.18em] text-gray-400">
              {statusText}
            </p>
            <div className="flex items-center space-x-3">
              <input
                ref={inputRef}
                type="text"
                value={inputValue}
                onChange={(event) => setInputValue(event.target.value)}
                onKeyDown={handleKeyDown}
                disabled={isLoading}
                placeholder="Ask about programs, pricing, or support..."
                className="flex-1 rounded-2xl border border-gray-200 px-4 py-2.5 text-sm shadow-inner focus:border-indigo-500 focus:outline-none focus:ring focus:ring-indigo-200/60 disabled:bg-gray-100"
              />
              <button
                type="button"
                onClick={handleSend}
                disabled={isLoading || inputValue.trim().length === 0}
                className="inline-flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg transition hover:shadow-xl disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {isLoading ? (
                  <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <circle className="opacity-25" cx="12" cy="12" r="10" strokeWidth="4" />
                    <path className="opacity-75" d="M4 12a8 8 0 018-8" strokeWidth="4" strokeLinecap="round" />
                  </svg>
                ) : (
                  <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
              </button>
            </div>
          </div>
            </>
          )}
        </div>
      )}

      <button
        type="button"
        onClick={handleToggle}
        className="group relative flex items-center justify-center rounded-full bg-gradient-to-r from-indigo-600 via-purple-600 to-blue-600 p-4 text-white shadow-2xl transition hover:shadow-[0_20px_45px_rgba(79,70,229,0.45)] focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-400"
        aria-label={isOpen ? "Close AI assistant chat" : "Open AI assistant chat"}
      >
        <svg className="h-7 w-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={1.8}
            d="M7 8h10M7 12h6m-1 8l-4-4H7a4 4 0 01-4-4V8a4 4 0 014-4h10a4 4 0 014 4v4a4 4 0 01-4 4h-1l-4 4z"
          />
        </svg>
      </button>
    </div>
  );
};

export default ChatWidget;

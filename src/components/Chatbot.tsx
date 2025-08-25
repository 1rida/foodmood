"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

export default function Chatbot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: "bot", text: "Assalamualaikum! 👋 Deals, price ya order ke bare me puchhain." }
  ]);
  const [input, setInput] = useState("");

  const sendMessage = () => {
    if (!input) return;

    const newMessages = [...messages, { role: "user", text: input }];

    let reply = "Samajh nahi aya, zara clear puchhein 🙂";
    if (input.toLowerCase().includes("deal")) reply = "Hamari Family Deal, Burger Combo, Biryani Special available hain.";
    if (input.toLowerCase().includes("price")) reply = "Prices deal ke hisaab se hain: Biryani Special ₨800, Burger Combo ₨1200.";
    if (input.toLowerCase().includes("order")) reply = "Order ke liye website ka cart use karein.";

    newMessages.push({ role: "bot", text: reply });

    setMessages(newMessages);
    setInput("");
  };

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(!open)}
        className="fixed bottom-4 right-4 z-50 bg-green-600 text-white p-4 rounded-full shadow-lg animate-bounce"
      >
        {open ? "✖" : <MessageCircle size={24} />}
      </button>

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-16 right-4 w-80 z-50 bg-white border rounded-lg shadow-lg flex flex-col">
          <div className="p-2 font-bold bg-green-600 text-white">Chat Support</div>

          <div className="flex-1 p-2 overflow-y-auto" style={{ maxHeight: "300px" }}>
            {messages.map((m, i) => (
              <div key={i} className={`my-1 ${m.role === "user" ? "text-right" : "text-left"}`}>
                <span
                  className={`inline-block px-2 py-1 rounded ${
                    m.role === "user" ? "bg-green-500 text-white" : "bg-gray-200"
                  }`}
                >
                  {m.text}
                </span>
              </div>
            ))}
          </div>

          <div className="flex p-2 border-t">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="flex-1 border rounded px-2"
              placeholder="Type here..."
            />
            <button onClick={sendMessage} className="ml-2 bg-green-600 text-white px-3 rounded">
              Send
            </button>
          </div>
        </div>
      )}
    </>
  );
}

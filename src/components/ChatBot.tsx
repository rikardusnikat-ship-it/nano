import React, { useState, useRef, useEffect } from 'react';
import { Message, getBotResponse, generateId, formatMarkdown } from '../utils/chatEngine';
import { suggestedQuestions, categories } from '../data/knowledgeBase';

const ChatBot: React.FC = () => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: generateId(),
      text: "Halo! 👋 Saya **CakraNewton**, asisten virtual untuk pengembangan video pembelajaran fisika.\n\nSaya dirancang khusus untuk membantu mahasiswa Pendidikan Fisika dalam membuat video pembelajaran yang efektif dan menarik.\n\nSilakan tanyakan apa saja seputar:\n• 🎬 Software & tools editing video\n• 📋 Desain instruksional\n• 📐 Visualisasi konsep fisika\n• 🎥 Teknik produksi video\n• 📚 Strategi pedagogi\n\nAtau pilih salah satu pertanyaan di bawah untuk memulai! 👇",
      sender: 'bot',
      timestamp: new Date(),
      category: 'pengantar'
    }
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [showSidebar, setShowSidebar] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (text?: string) => {
    const messageText = text || inputText.trim();
    if (!messageText) return;

    const userMessage: Message = {
      id: generateId(),
      text: messageText,
      sender: 'user',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputText('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const response = getBotResponse(messageText);
      const botMessage: Message = {
        id: generateId(),
        text: response.text,
        sender: 'bot',
        timestamp: new Date(),
        category: response.category
      };
      setMessages(prev => [...prev, botMessage]);
      setIsTyping(false);
    }, 800 + Math.random() * 700);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleClearChat = () => {
    setMessages([{
      id: generateId(),
      text: "Chat telah direset! 🔄 Silakan tanyakan kembali seputar pengembangan video pembelajaran fisika. Saya siap membantu! 💡",
      sender: 'bot',
      timestamp: new Date(),
      category: 'pengantar'
    }]);
  };

  return (
    <div className="flex h-screen bg-gray-950 text-white overflow-hidden">
      {/* Sidebar */}
      <div className={`${showSidebar ? 'translate-x-0' : '-translate-x-full'} fixed lg:relative lg:translate-x-0 z-40 w-72 h-full bg-gray-900 border-r border-gray-800 transition-transform duration-300 flex flex-col`}>
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-800">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-lg font-bold">
              ⚛️
            </div>
            <div>
              <h2 className="font-bold text-sm">CakraNewton</h2>
              <p className="text-xs text-gray-400">Video Pembelajaran Fisika</p>
            </div>
          </div>
        </div>

        {/* Categories */}
        <div className="flex-1 overflow-y-auto p-3">
          <p className="text-xs text-gray-500 uppercase tracking-wider mb-2 px-2">Topik Bahasan</p>
          {categories.map(cat => (
            <button
              key={cat.id}
              onClick={() => {
                handleSendMessage(`Beritahu saya tentang ${cat.label.replace(/[^\w\s]/g, '').trim()}`);
                setShowSidebar(false);
              }}
              className="w-full text-left px-3 py-2.5 rounded-lg text-sm text-gray-300 hover:bg-gray-800 hover:text-white transition-colors mb-1 flex items-center gap-2"
            >
              <span>{cat.icon}</span>
              <span>{cat.label.replace(/^[^\s]+\s/, '')}</span>
            </button>
          ))}
        </div>

        {/* Sidebar Footer */}
        <div className="p-3 border-t border-gray-800">
          <button
            onClick={handleClearChat}
            className="w-full px-3 py-2 rounded-lg text-sm text-gray-400 hover:bg-gray-800 hover:text-white transition-colors flex items-center gap-2"
          >
            <span>🔄</span>
            <span>Reset Chat</span>
          </button>
        </div>
      </div>

      {/* Overlay for mobile sidebar */}
      {showSidebar && (
        <div
          className="fixed inset-0 bg-black/50 z-30 lg:hidden"
          onClick={() => setShowSidebar(false)}
        />
      )}

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Header */}
        <header className="bg-gray-900/80 backdrop-blur-md border-b border-gray-800 px-4 py-3 flex items-center gap-3 shrink-0">
          <button
            onClick={() => setShowSidebar(!showSidebar)}
            className="lg:hidden p-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <div className="flex items-center gap-3 flex-1">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-base">
              ⚛️
            </div>
            <div>
              <h1 className="font-bold text-sm sm:text-base">CakraNewton</h1>
              <p className="text-xs text-green-400 flex items-center gap-1">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                Online — Siap membantu
              </p>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-xs text-gray-400 bg-gray-800/50 px-3 py-1.5 rounded-full">
            <span>🎓</span>
            <span>Untuk Mahasiswa Pendidikan Fisika</span>
          </div>
        </header>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto px-4 py-6 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'} animate-fadeIn`}
            >
              <div className={`flex gap-2 max-w-[85%] sm:max-w-[75%] ${message.sender === 'user' ? 'flex-row-reverse' : ''}`}>
                {message.sender === 'bot' && (
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xs shrink-0 mt-1">
                    ⚛️
                  </div>
                )}
                <div
                  className={`rounded-2xl px-4 py-3 ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white rounded-br-md'
                      : 'bg-gray-800 text-gray-100 rounded-bl-md border border-gray-700'
                  }`}
                >
                  <div
                    className="text-sm leading-relaxed whitespace-pre-wrap break-words"
                    dangerouslySetInnerHTML={{ __html: formatMarkdown(message.text) }}
                  />
                  <p className={`text-[10px] mt-1.5 ${
                    message.sender === 'user' ? 'text-blue-200' : 'text-gray-500'
                  }`}>
                    {message.timestamp.toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            </div>
          ))}

          {/* Typing Indicator */}
          {isTyping && (
            <div className="flex justify-start animate-fadeIn">
              <div className="flex gap-2">
                <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center text-xs shrink-0 mt-1">
                  ⚛️
                </div>
                <div className="bg-gray-800 border border-gray-700 rounded-2xl rounded-bl-md px-4 py-3">
                  <div className="flex gap-1.5">
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                    <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Suggested Questions (only show when there's just the welcome message) */}
          {messages.length === 1 && (
            <div className="mt-4 space-y-3 animate-fadeIn">
              <p className="text-xs text-gray-500 uppercase tracking-wider px-1">💡 Pertanyaan yang sering ditanyakan:</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                {suggestedQuestions.slice(0, 6).map((question, idx) => (
                  <button
                    key={idx}
                    onClick={() => handleSendMessage(question)}
                    className="text-left px-3 py-2.5 rounded-xl bg-gray-800/50 border border-gray-700 hover:border-blue-500/50 hover:bg-gray-800 transition-all text-sm text-gray-300 hover:text-white"
                  >
                    <span className="text-blue-400 mr-1.5">→</span>
                    {question}
                  </button>
                ))}
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input Area */}
        <div className="border-t border-gray-800 bg-gray-900/80 backdrop-blur-md p-4 shrink-0">
          {/* Quick suggestions */}
          {messages.length > 1 && messages.length <= 4 && (
            <div className="flex gap-2 mb-3 overflow-x-auto pb-2 scrollbar-hide">
              {suggestedQuestions.slice(3, 7).map((question, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSendMessage(question)}
                  className="shrink-0 px-3 py-1.5 rounded-full bg-gray-800 border border-gray-700 text-xs text-gray-400 hover:text-white hover:border-blue-500/50 transition-all"
                >
                  {question}
                </button>
              ))}
            </div>
          )}
          
          <div className="flex gap-2 items-center">
            <div className="flex-1 relative">
              <input
                ref={inputRef}
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ketik pertanyaan tentang video pembelajaran fisika..."
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 pr-12 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500/50 transition-all"
                disabled={isTyping}
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
            </div>
            <button
              onClick={() => handleSendMessage()}
              disabled={!inputText.trim() || isTyping}
              className="p-3 rounded-xl bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 disabled:opacity-50 disabled:cursor-not-allowed transition-all shrink-0"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </div>
          <p className="text-[10px] text-gray-600 mt-2 text-center">
            CakraNewton © 2024 — Chatbot Pengembangan Video Pembelajaran Fisika untuk Mahasiswa Pendidikan Fisika
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;

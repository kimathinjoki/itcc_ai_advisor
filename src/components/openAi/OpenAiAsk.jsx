import React, { useState, useEffect } from 'react';
import { OpenAI } from 'openai';
import { loadPdf, loadWord } from "../../helpers/textConverter";

const openai = new OpenAI({ apiKey: 'sk-proj-byfnGp0EmSqXuaOtBBXPT3BlbkFJeKHctjhiBlWg2bQbRiP6', dangerouslyAllowBrowser: true });



function OpenAiAsk() {
  const [question, setQuestion] = useState('');
  const [answer, setAnswer] = useState('');
  const [messages, setMessages] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadFiles();
  }, []);

  const loadFiles = async () => {
    setLoading(true);
    try {
      const pdfText = await loadPdf('../resources/files/informationsystemsandtechnology.pdf');  
      const wordText = await loadWord('../resources/files/Ist_Certificates.docx');  
      const combinedText = `${pdfText} ${wordText}`;
      localStorage.setItem('combinedText', combinedText);  
    } catch (error) {
      console.error('Error loading files:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleInputChange = (e) => {
    setQuestion(e.target.value);
  };



  const handleQuestion = async () => {
    setLoading(true);
    const combinedText = localStorage.getItem('combinedText');
    try {
      // Add question to messages
      setMessages([...messages, { type: 'question', text: question }]);
      
      const response = await openai.chat.completions.create({
        model: 'gpt-4-turbo',
        messages: [
          { role: 'system', content: 'You are a helpful assistant.' },
          { role: 'user', content: `Based on the following text and your general knowledge, answer the question:\n\n${combinedText}` },
          { role: 'user', content: `Question: ${question}` }
        ],
        max_tokens: 150,
      });
      // Add answer to messages
      setMessages([...messages, { type: 'question', text: question, timestamp: new Date() }, { type: 'answer', text: response.data.choices[0].message.content.trim() }]);
      
    } catch (error) {
      console.error('Error getting answer:', error);
    } finally {
      setLoading(false);   
    }
    setQuestion('')
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col flex-grow w-full max-w-xl  bg-transparent  shadow-xl rounded-lg overflow-hidden border border-black" style={{height: '700px', width: '700px'}}>
        <div className="flex-grow overflow-auto">
          {messages.map((message, index) => (
            <div key={index} className={`flex w-full mt-2 space-x-3 max-w-xs ${message.type === 'answer' ? 'ml-auto justify-end' : ''}`}>
              {message.type === 'question' ? (
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300" />
              ) : null}
              <div>
                <div className={`p-3 rounded-lg ${message.type === 'question' ? 'bg-gray-300 rounded-r-lg rounded-bl-lg' : 'bg-blue-600 text-white rounded-l-lg rounded-br-lg'}`}>
                  <p className="text-sm">{message.text}</p>
                </div>
                <span className="text-xs text-gray-500 leading-none">{message.timestamp ? message.timestamp.toLocaleTimeString() : ''}</span>
              </div>
              {message.type === 'answer' ? (
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300" />
              ) : null}
            </div>
          ))}
        </div>
        <div className="bg-gray-300 p-4">
          <input
            className="flex items-center h-10 w-full rounded px-3 text-sm"
            type="text"
            placeholder="Type your question…"
            value={question}
            onChange={handleInputChange}
          />
          <button
            onClick={()=>{
                handleQuestion();
            }}
            disabled={loading}
            className="mt-4 bg-blue-600 text-white p-2 rounded"
          >
            {loading ? 'Loading...' : 'Get Answer'}
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpenAiAsk;

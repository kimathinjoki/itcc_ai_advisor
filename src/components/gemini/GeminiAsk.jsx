import React, {useState, useEffect} from "react";
import file1 from '../resources/files/informationsystemsandtechnology.docx';
import file2 from '../resources/files/Ist_Certificates.docx';
import file3 from '../resources/files/IST_bulletin.docx'
import { loadWord } from "../../helpers/textConverter";
import ReactMarkdown from 'react-markdown';
import frequentQn  from '../resources/questions/frequentQn';

const { GoogleGenerativeAI } = require("@google/generative-ai");

const genAI = new GoogleGenerativeAI(process.env.REACT_APP_GEMINI_API_KEY);


 function GeminiAiAsk (){
    const [question, setQuestion] = useState('');
    const [loading, setLoading] = useState(false);
    const [messages, setMessages] = useState([]);


    

      useEffect(() => {
        // const postInitialQuestion = async () => {
        //     await handleQuestion();
        // };
    
        loadFiles();
        // postInitialQuestion();
      }, []);
    
      const loadFiles = async () => {
        setLoading(true);
        try {
          const wordText1 = await loadWord(file1);  
          const wordText2 = await loadWord(file2);  
          const wordText3 = await loadWord(file3); 
          const combinedText = `${wordText1} ${wordText2} ${wordText3}`;
          localStorage.setItem('combinedText', combinedText);  
        
        } catch (error) {
          console.error('Error loading files:', error);
        } finally {
          setLoading(false);
        }
      };

      // function fileToGenerativePart(path, mimeType) {
      //   return {
      //     inlineData: {
      //       data: path,
      //       mimeType
      //     },
      //   };
      // }

    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash"});
    
    const handleInputChange = (event) => {
        setQuestion(event.target.value);
      };

    const handleQuestion = async () => {
        setLoading(true);

        const combinedText = [localStorage.getItem('combinedText')];

        const result = await model.generateContent([`You are an academic advisor,if the question is about anything partaining the file use it. Else use your general knowledge to answer: ${question}`, ...combinedText]);
        const response = await result.response;
        const text_answer = response.text();
        setMessages([
            ...messages,
            { text: question, type: 'question', timestamp: new Date() },
            { text: text_answer, type: 'answer', timestamp: new Date() },
          ]);
        console.log(messages)
        console.log(text_answer)
        setQuestion('');
        setLoading(false);
    }

    



    return(
    <div className="flex items-center justify-center h-screen">
  
      {/* component */}
      <div className="flex w-96 mr-6">
        
        <ul className="flex flex-col bg-gray-300 p-4">
          <label className="text-center mb-2">Frequently asked questions</label>

          {frequentQn.map((item, index) => (
            <li 
            key={index} 
            onClick={()=>{
              setQuestion(item);
              handleQuestion();
            }}
            className="border-gray-400 flex flex-row mb-2">
              <div className="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
                <div className="flex-1 pl-1 mr-16">
                  <div className="font-small">{item}</div>
                </div>
              </div>
            </li>
          ))}
         
        </ul>
      </div>



    <div className="flex items-center justify-center h-screen mr-28">
      <div className="flex flex-col flex-grow w-full max-w-xl bg-transparent shadow-xl rounded-lg overflow-hidden border border-blue m-auto" style={{height: '700px', width: '700px'}}>
        <div className="flex-grow overflow-auto">
          {messages.map((message, index) => (
            <div key={index} className={`flex w-full mt-2 space-x-3 max-w-xs ${message.type === 'answer' ? 'ml-auto justify-end' : ''}`}>
              {message.type === 'question' ? (
                <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300" />
              ) : null}
              <div>
                <div className={`p-3 rounded-lg ${message.type === 'question' ? 'bg-gray-300 rounded-r-lg rounded-bl-lg' : 'bg-blue-600 text-white rounded-l-lg rounded-br-lg'}`}>
                  {/* <p className="text-sm">{message.text}</p> */}
                  <ReactMarkdown className="text-sm">{message.text}</ReactMarkdown>
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
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleQuestion();
          }}
        >
          <input
            className="flex items-center h-10 w-full rounded px-3 text-sm"
            type="text"
            placeholder="Type your question…"
            value={question}
            onChange={handleInputChange}
          />
          <button
            // onClick={()=>{
            //     handleQuestion();
            // }}
            disabled={loading}
            className="mt-4 bg-blue-600 text-white p-2 rounded"
          >
            {loading ? 'Loading...' : 'Get Answer'}
          </button>
          </form>
        </div>
      </div>
    </div>
    </div>
    )

}

export default GeminiAiAsk;
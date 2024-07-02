import React, { useState, useEffect } from 'react';
import { OpenAI } from 'openai';
import pdfFile from '../resources/files/informationsystemsandtechnology.pdf';
import docxFile from '../resources/files/Ist Certificates.docx';

const openai = new OpenAI({ apiKey: 'your-api-key', dangerouslyAllowBrowser: true });

function GeminiAiAsk() {
  const [question, setQuestion] = useState('');
  const [loading, setLoading] = useState(false);
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const createAssistant = async () => {
      const assistant = await openai.beta.assistants.create({
        name: "Academic advisor Assistant",
        instructions: "You are an academic advisor. Use you knowledge base to answer questions about classes.",
        model: "gpt-4o",
        tools: [{ type: "file_search" }],
      });

      // Here you would upload your files to the vector store and update the assistant
      // For now, we'll just log the assistant

      const fileStreams = [pdfFile, docxFile];
        
        // Create a vector store including our two files.
        let vectorStore = await openai.beta.vectorStores.create({
            name: "Academic advisor",
        });
        
        await openai.beta.vectorStores.fileBatches.uploadAndPoll(vectorStore.id, fileStreams)

        await openai.beta.assistants.update(assistant.id, {
            tool_resources: { file_search: { vector_store_ids: [vectorStore.id] } },
        });



      console.log(assistant);
    };

    createAssistant();
  }, []);

  const handleInputChange = (event) => {
    setQuestion(event.target.value);
  };


  const handleQuestion = async () => {


  setLoading(true);

  // Call the OpenAI API to get the answer to the question
  const stream = openai.beta.threads.runs
    .stream(thread.id, {
      assistant_id: assistant.id,
    })
    .on("textCreated", () => console.log("assistant >"))
    .on("toolCallCreated", (event) => console.log("assistant " + event.type))
    .on("messageDone", async (event) => {
      if (event.content[0].type === "text") {
        const { text } = event.content[0];
        const { annotations } = text;
        const citations = [];

        let index = 0;
        for (let annotation of annotations) {
          text.value = text.value.replace(annotation.text, "[" + index + "]");
          const { file_citation } = annotation;
          if (file_citation) {
            const citedFile = await openai.files.retrieve(file_citation.file_id);
            citations.push("[" + index + "]" + citedFile.filename);
          }
          index++;
        }

        console.log(text.value);
        console.log(citations.join("\n"));

        // Add the answer to the messages array
        setMessages((prevMessages) => [...prevMessages, { type: 'answer', text: text.value, timestamp: new Date() }]);
      }
    });

        setQuestion('');
        setLoading(false);
    };

  
  

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="flex flex-col flex-grow w-full max-w-xl bg-transparent shadow-xl rounded-lg overflow-hidden" style={{height: '700px', width: '700px'}}>
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

export default GeminiAiAsk;

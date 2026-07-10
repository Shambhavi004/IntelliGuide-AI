import './App.css';
import Sidebar from "./Sidebar.jsx";
import ChatWindow from "./ChatWindow.jsx";
import { MyContext } from "./MyContext.jsx";
import Auth from "./auth.jsx";

import React, { useState } from 'react';
import { v1 as uuidv1 } from "uuid";

import ResumeAnalyzer from "./ResumeAnalyzer.jsx";
import CompanyPrep from "./CompanyPrep.jsx";
import PlacementTracker from "./PlacementTracker";

function App() {

  
  const [isLoggedIn, setIsLoggedIn] = useState(
    localStorage.getItem("token") ? true : false
  );

  const [prompt, setPrompt] = useState("");
  const [reply, setReply] = useState(null);
  const [currThreadId, setCurrThreadId] = useState(uuidv1());
  const [prevChats, setPrevChats] = useState([]);
  const [newChat, setNewChat] = useState(true);
  const [allThreads, setAllThreads] = useState([]);
  const [activePage, setActivePage] = useState("chat");

  const providerValues = {
    prompt, setPrompt,
    reply, setReply,
    currThreadId, setCurrThreadId,
    newChat, setNewChat,
    prevChats, setPrevChats,
    allThreads, setAllThreads
  };

  return (
    <div className='app'>

      {
        isLoggedIn ? (

          <MyContext.Provider value={providerValues}>

            <Sidebar setActivePage={setActivePage} />

            {
              activePage === "chat" &&
              <ChatWindow />
            }

            {
              activePage === "resume" &&
              <ResumeAnalyzer />
            }

            {
              activePage === "companyprep" &&
              <CompanyPrep />
            }
            {
  activePage === "placement" &&
  <PlacementTracker />
}

          </MyContext.Provider>

        ) : (

          <Auth setIsLoggedIn={setIsLoggedIn} />

        )
      }

    </div>
  );
}

export default App;
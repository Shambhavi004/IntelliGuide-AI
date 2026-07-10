import "./Sidebar.css";
import { useContext, useEffect } from "react";
import { MyContext } from "./MyContext.jsx";
import { v1 as uuidv1 } from "uuid";
import logo from "./assets/logo.png";
function Sidebar({ setActivePage }) {

    const {
        allThreads,
        setAllThreads,
        currThreadId,
        setNewChat,
        setPrompt,
        setReply,
        setCurrThreadId,
        setPrevChats
    } = useContext(MyContext);

    const getAllThreads = async () => {

        try {

            const response = await fetch(
                "https://intelliguide-ai.onrender.com/api/thread",
                {
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                }
            );

            const res = await response.json();

            const filteredData = res.map(thread => ({
                threadId: thread.threadId,
                title: thread.title
            }));

            setAllThreads(filteredData);

        } catch (err) {

            console.log(err);

        }
    };

    useEffect(() => {

        getAllThreads();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currThreadId]);


    const createNewChat = () => {

        setActivePage("chat");

        setNewChat(true);
        setPrompt("");
        setReply(null);
        setCurrThreadId(uuidv1());
        setPrevChats([]);
    };


    const changeThread = async (newThreadId) => {

        setActivePage("chat");

        setCurrThreadId(newThreadId);

        try {

            const response = await fetch(
                `https://intelliguide-ai.onrender.com/api/thread/${newThreadId}`,
                {
                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                }
            );

            const res = await response.json();

            console.log(res);

            setPrevChats(res);

            setNewChat(false);

            setReply(null);

        } catch (err) {

            console.log(err);

        }
    };


    const deleteThread = async (threadId) => {

        try {

            const response = await fetch(
                `https://intelliguide-ai.onrender.com/api/thread/${threadId}`,
                {
                    method: "DELETE",

                    headers: {
                        Authorization: localStorage.getItem("token")
                    }
                }
            );

            const res = await response.json();

            console.log(res);

            setAllThreads(prev =>
                prev.filter(thread => thread.threadId !== threadId)
            );

            if (threadId === currThreadId) {

                createNewChat();

            }

        } catch (err) {

            console.log(err);

        }
    };

    return (

        <section className="sidebar">

            {/* NEW CHAT BUTTON */}

            <button
                onClick={createNewChat}
                className="newChatBtn"
            >

                <img
                    src={logo}
                     alt="Logo"
                    className="logo"
                    />

                <span>
                    Start a New Chat
                </span>

            </button>


            {/* RESUME ANALYZER */}

            <button
                onClick={() => setActivePage("resume")}
                className="resumeBtn"
            >

                <span>
                    <i className="fa-regular fa-file"></i>
                </span>

                Resume Analyzer

            </button>


            {/* COMPANY PREP */}

            <button
                onClick={() => setActivePage("companyprep")}
                className="resumeBtn"
            >

                <span>
                    <i className="fa-solid fa-building"></i>
                </span>

                Company Prep

            </button>
            <button
    onClick={() => setActivePage("placement")}
    className="resumeBtn"
>
    <span>
        <i className="fa-solid fa-briefcase"></i>
    </span>

    Placement Tracker
</button>


            {/* HISTORY */}

            <ul className="history">

                {
                    allThreads?.map((thread, idx) => (

                        <li
                            key={idx}

                            onClick={() =>
                                changeThread(thread.threadId)
                            }

                            className={
                                thread.threadId === currThreadId
                                    ? "highlighted"
                                    : ""
                            }
                        >

                            {thread.title}

                            <i
                                className="fa-solid fa-trash"

                                onClick={(e) => {

                                    e.stopPropagation();

                                    deleteThread(thread.threadId);

                                }}
                            ></i>

                        </li>
                    ))
                }

            </ul>


            {/* FOOTER */}

            <div className="sign">

                <p>
                    By Shambhavi &hearts;
                </p>

            </div>

        </section>
    );
}

export default Sidebar;
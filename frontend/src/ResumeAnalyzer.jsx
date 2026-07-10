import "./ResumeAnalyzer.css";
import ReactMarkdown from "react-markdown";
import { useState } from "react";

function ResumeAnalyzer() {
    const [file, setFile] = useState(null);
const [loading, setLoading] = useState(false);
const [result, setResult] = useState("");


const analyzeResume = async () => {

    if(!file){
        alert("Please upload a resume");
        return;
    }

    const formData = new FormData();
    formData.append("resume", file);

    try{

        setLoading(true);

        const response = await fetch("http://localhost:8080/api/resume-review",{
            method: "POST",
            headers:{
                Authorization: localStorage.getItem("token")
            },
            body: formData
        });

        const data = await response.json();

        setResult(data.review);

    }catch(err){
        console.log(err);
        alert("Something went wrong");
    }finally{
        setLoading(false);
    }
};

  return (
  <div className="resumePage">

    {/* LEFT SIDE */}
    <div className="resumeLeft">

      <div className="resumeContainer">

        <h1 className="resumeTitle">
          Resume Reviewer
        </h1>

        <div className="uploadBox">

          <label className="customFileUpload">

            <input
              type="file"
              className="hiddenInput"
              accept=".pdf"
              onChange={(e) => setFile(e.target.files[0])}
            />

            Upload Resume

          </label>

          <button
            className="analyzeBtn"
            onClick={analyzeResume}
          >

            {
              loading
                ? "Analyzing..."
                : "Analyze Resume"
            }

          </button>

          {
            file &&
            <p className="fileName">
              {file.name}
            </p>
          }

        </div>

        <p className="resumeInfo">
          Upload your resume and get brutally honest AI feedback,
          ATS score, strengths, weaknesses, and improvement tips.
        </p>

      </div>

    </div>

    {/* RIGHT SIDE */}
    <div className="resumeRight">

      <div className="resultContainer">

        <h2 className="resultTitle">
          AI Review
        </h2>

        {
          loading ? (

            <div className="loadingBox">
              Analyzing your resume...
            </div>

          ) : result ? (

            <div className="resultBox">

    <ReactMarkdown>
        {result}
    </ReactMarkdown>

</div>

          ) : (

            <div className="emptyResult">
              Your AI review will appear here.
            </div>

          )
        }

      </div>

    </div>

  </div>
);
}

export default ResumeAnalyzer;
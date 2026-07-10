import "./PlacementTracker.css";
import { useState, useEffect } from "react";

function PlacementTracker() {
  const [company, setCompany] = useState("");
  const [role, setRole] = useState("");
  const [status, setStatus] = useState("Applied");
  const [notes, setNotes] = useState("");

  const [placements, setPlacements] = useState([]);
  const [loading, setLoading] = useState(false);

  const [editingId, setEditingId] = useState(null);

  const [editRole, setEditRole] = useState("");

  const [editStatus, setEditStatus] = useState("Applied");

  const [editNotes, setEditNotes] = useState("");
  const addPlacement = async () => {
    if (!company || !role) {
      alert("Please enter company and role");
      return;
    }

    try {
      setLoading(true);

      const response = await fetch("https://intelliguide-ai.onrender.com/api/placement", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },

        body: JSON.stringify({
          company,
          role,
          status,
          notes,
        }),
      });

      const data = await response.json();

      console.log(data);

      
      getPlacements();
      // Clear the form
      setCompany("");
      setRole("");
      setStatus("Applied");
      setNotes("");
    } catch (err) {
      console.log(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  const editPlacement = (placement) => {
    setEditingId(placement._id);

    setEditRole(placement.role);

    setEditStatus(placement.status);

    setEditNotes(placement.notes);
  };
  const deletePlacement = async (id) => {
    try {
      await fetch(`https://intelliguide-ai.onrender.com/api/placement/${id}`, {
        method: "DELETE",

        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      getPlacements();
    } catch (err) {
      console.log(err);
    }
  };
  const savePlacement = async (id) => {
    try {
      await fetch(
        `https://intelliguide-ai.onrender.com/api/placement/${id}`,

        {
          method: "PUT",

          headers: {
            "Content-Type": "application/json",

            Authorization: localStorage.getItem("token"),
          },

          body: JSON.stringify({
            role: editRole,

            status: editStatus,

            notes: editNotes,
          }),
        },
      );

      setEditingId(null);

      getPlacements();
    } catch (err) {
      console.log(err);
    }
  };
  const getPlacements = async () => {
    try {
      const response = await fetch("https://intelliguide-ai.onrender.com/api/placement", {
        headers: {
          Authorization: localStorage.getItem("token"),
        },
      });

      const data = await response.json();

      setPlacements(data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getPlacements();
  }, []);

  return (
    <div className="placementPage">
      <div className="placementContainer">
        <h1>Placement Tracker</h1>

        <div className="placementForm">
          <input
            type="text"
            list="companies"
            placeholder="Enter Company"
            value={company}
            onChange={(e) => setCompany(e.target.value)}
          />

          <datalist id="companies">
            <option value="Google" />
            <option value="Amazon" />
            <option value="Microsoft" />
            <option value="Adobe" />
            <option value="Flipkart" />
            <option value="Walmart" />
            <option value="TCS" />
            <option value="Infosys" />
            <option value="Wipro" />
            <option value="Accenture" />
            <option value="Oracle" />
            <option value="SAP" />
            <option value="Zoho" />
            <option value="IBM" />
            <option value="Intel" />
            <option value="NVIDIA" />
            <option value="Goldman Sachs" />
            <option value="JPMorgan Chase" />
            <option value="Deloitte" />
            <option value="Capgemini" />
          </datalist>

          <select value={role} onChange={(e) => setRole(e.target.value)}>
            <option value="">Select Role</option>

            <option>Software Developer</option>
            <option>SWE Intern</option>
            <option>Frontend Developer</option>
            <option>Backend Developer</option>
            <option>Full Stack Developer</option>
            <option>Data Analyst</option>
            <option>Business Analyst</option>
          </select>

          <select value={status} onChange={(e) => setStatus(e.target.value)}>
            <option>Applied</option>
            <option>Aptitude</option>
            <option>Technical</option>
            <option>HR</option>
            <option>Offer</option>
            <option>Rejected</option>
          </select>

          <textarea
            placeholder="Personal Notes..."
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />

          <button onClick={addPlacement}>
            {loading ? "Adding..." : "Add Application"}
          </button>
        </div>
        {placements.map((placement) => (
          <div key={placement._id} className="placementCard">
            <div className="placementHeader">
              <div className="placementCompany">{placement.company}</div>

              <div className="statusBadge">
                {editingId === placement._id ? (
                  <select
                    className="editSelect"
                    value={editStatus}
                    onChange={(e) => setEditStatus(e.target.value)}
                  >
                    <option>Applied</option>
                    <option>Aptitude</option>
                    <option>Technical</option>
                    <option>HR</option>
                    <option>Offer</option>
                    <option>Rejected</option>
                  </select>
                ) : (
                  placement.status
                )}
              </div>
            </div>

            <div className="placementInfo">
              <div className="infoCard">
                <div className="infoTitle">Role</div>

                <div className="infoValue">
                  {editingId === placement._id ? (
                    <select
                      className="editSelect"
                      value={editRole}
                      onChange={(e) => setEditRole(e.target.value)}
                    >
                      <option>Software Developer</option>
                      <option>SWE Intern</option>
                      <option>Frontend Developer</option>
                      <option>Backend Developer</option>
                      <option>Full Stack Developer</option>
                      <option>Data Analyst</option>
                      <option>Business Analyst</option>
                    </select>
                  ) : (
                    placement.role
                  )}
                </div>
              </div>

              <div className="infoCard">

    <div className="infoTitle">
        Last Updated
    </div>

    <div className="infoValue">
        {
            new Date(
                placement.updatedAt
            ).toLocaleString()
        }
    </div>

</div>
            </div>

            <div className="notesCard">
              <div className="infoTitle">Notes</div>

              <div className="infoValue">
                {editingId === placement._id ? (
                  <textarea
                    className="editTextarea"
                    value={editNotes}
                    onChange={(e) => setEditNotes(e.target.value)}
                  />
                ) : placement.notes ? (
                  placement.notes
                ) : (
                  "No notes added."
                )}
              </div>
            </div>
            <div className="placementActions">

{
editingId === placement._id ?

<>

<button
    className="saveBtn"
    onClick={() => savePlacement(placement._id)}
>
    Save
</button>

<button
    className="cancelBtn"
    onClick={() => setEditingId(null)}
>
    Cancel
</button>

</>

:

<>

<button
    className="editBtn"
    onClick={() => editPlacement(placement)}
>
    Edit
</button>

<button
    className="deleteBtn"
    onClick={() => deletePlacement(placement._id)}
>
    Delete
</button>

</>

}

</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacementTracker;

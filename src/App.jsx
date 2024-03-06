import { useState } from "react";
import "./App.css";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import EditNoteRoundedIcon from "@mui/icons-material/EditNoteRounded";
import CloseIcon from "@mui/icons-material/Close";
import PermContactCalendarIcon from "@mui/icons-material/PermContactCalendar";
import AssistantPhotoIcon from "@mui/icons-material/AssistantPhoto";
import FeedbackIcon from "@mui/icons-material/Feedback";
import BugReportIcon from "@mui/icons-material/BugReport";

function App() {
  const [expanded, setExpanded] = useState(false);
  
  const handleExpand = () => {
    setExpanded(!expanded);
  };

  
  return (
    <>
       <Box> 
        <div style={{ position: "fixed", bottom: "10px", right: "56px" }}>
        <Fab color="action" aria-label="add" onClick={handleExpand}>
          {expanded ? <CloseIcon /> : <EditNoteRoundedIcon />}
        </Fab>
      </div>
      {expanded
       && (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-end",
            // float: "right",
            gap: 20,
            marginTop: "250px",
            marginLeft: "1250px",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 15,
            }}
          >
            <button >Report an Issue</button>
              <Fab color="action" aria-label="delete">
              <BugReportIcon />
            </Fab>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 15,
            }}
          >
            <button>Share Feedback</button>
            <Fab color="action" aria-label="save">
              <FeedbackIcon />
            </Fab>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 15,
            }}
          >
            <button>Give Suggestion</button>
            <Fab color="action" aria-label="send">
              <AssistantPhotoIcon />
            </Fab>
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 15,
            }}
          >
            <button>Contact us</button>
            <Fab color="action" aria-label="undo">
              <PermContactCalendarIcon />
            </Fab>
          </div>
        </div>
      )}
      </Box>
    </>
  );
}

export default App;
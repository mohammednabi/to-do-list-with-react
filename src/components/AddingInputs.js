import React, { useState } from 'react'
import TextField from "@mui/material/TextField";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Button from "@mui/material/Button";


export default function AddingInputs({ handleNewTasks }) {
    const [taskTitle, setTaskTitle] = useState("");
    
   

  


  return (
    <div>
      <Grid container spacing={2}>
        <Grid xs={3}>
          <Button
            variant="contained"
            style={{
              fontSize: "23px",
              height: "100%",

              width: "100%",
            }}
            onClick={() => {
              if (taskTitle !== "") {
                handleNewTasks(taskTitle);
                  setTaskTitle("");
                  // handleClick()
              }
            }}
            disabled={taskTitle ===""}
          >
            اضافة
          </Button>
        </Grid>
        <Grid xs={9}>
          <TextField
            label="عنوان المهمة"
            variant="outlined"
            fullWidth
            value={taskTitle}
            onChange={(e) =>
            {
            
              setTaskTitle(e.target.value);
            }}

            style={{direction:"rtl"}}
          />
        </Grid>
      </Grid>

      
    </div>
  );
}

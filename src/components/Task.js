import { Card, CardContent, Stack, Typography } from "@mui/material";
import React from "react";
import "./task.css"

import EditTwoToneIcon from "@mui/icons-material/EditTwoTone";
import DoneTwoToneIcon from "@mui/icons-material/DoneTwoTone";
import DeleteForeverTwoToneIcon from "@mui/icons-material/DeleteForeverTwoTone";




import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2






export default function Task({
  task,
  handleCheck,

 
  handleOpenDelete,
handleOpen
}) {
 

  return (
    <div style={{ direction: "rtl" }}>
      <Card
        sx={{
          marginBottom: "10px",
          backgroundColor: `${task.isAchieved ? "#00796b" : "failed.main"}`,
          color: "white",
          transition: ".2s",
        }}
      >
        <CardContent>
          <Grid container spacing={2}>
            <Grid xs={12} sm={8} style={{ textAlign: "right" }}>
              <Stack spacing={1}>
                <Typography
                  variant="h5"
                  sx={{
                    fontWeight: "bold",
                    textDecoration: task.isAchieved ? "line-through" : "none",
                  }}
                >
                  {task.title}
                </Typography>

                <Typography style={{ fontSize: "15px" }}>
                  {task.details}
                </Typography>
              </Stack>
            </Grid>
            <Grid xs={12} sm={4}>
              <Stack
                direction={"row"}
                spacing={2}
                style={{ direction: "ltr", textAlign: "center" }}
                id="icons"
              >
                <div
                  onClick={() => {
                    handleOpenDelete(task);
                  
                  }}
                >
                  <DeleteForeverTwoToneIcon
                    sx={{
                      fontSize: "2.5rem",
                      color: "#ff4081",
                      backgroundColor: "#fafafa",
                      borderRadius: "50%",
                      border: "solid 3px #ff4081",
                      cursor: "pointer",
                      transition: ".2s",
                      "&:hover": {
                        border: "solid 3px #ff1744",
                        color: "#ff1744",
                      },
                    }}
                  />
                </div>
                <div onClick={() =>
                {
                  handleOpen(task);
                }}>
                  <EditTwoToneIcon
                    sx={{
                      fontSize: "2.5rem",
                      color: "#81d4fa",
                      backgroundColor: "#fafafa",
                      borderRadius: "50%",
                      border: "solid 3px #81d4fa  ",
                      cursor: "pointer",
                      transition: ".2s",
                      "&:hover": {
                        border: "solid 3px #00b0ff",
                        color: "#00b0ff",
                      },
                    }}
                  />
                </div>
                <div
                  onClick={() => {
                    handleCheck(task.id);
                  }}
                >
                  <DoneTwoToneIcon
                    sx={{
                      fontSize: "2.5rem",
                      color: `${task.isAchieved ? "#fafafa" : "#a5d6a7"}`,
                      backgroundColor: `${
                        task.isAchieved ? "#00e676" : "#fafafa"
                      }`,
                      borderRadius: "50%",
                      border: "solid 3px #a5d6a7",
                      cursor: "pointer",
                      transition: ".2s",
                      "&:hover": {
                        border: "solid 3px #00e676",
                        color: `${task.isAchieved ? "#fafafa" : "#00e676"}`,
                      },
                    }}
                  />
                </div>
              </Stack>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
     
    </div>
  );
}

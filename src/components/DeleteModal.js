import React from "react";

import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function DeleteModal({ open, handleClose, handleDelete, task,myDialogTitle,myDialogContent }) {


  return (
    <div>
       <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        style={{direction:"rtl"}}
      >
        <DialogTitle id="alert-dialog-title">
          {myDialogTitle}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
           {myDialogContent}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>اغلاق</Button>
          <Button onClick={() =>
          {
            if (task !== undefined)
            {
              handleDelete(task.id);
            
            }
            else
            { 
              handleDelete();
            } 
           handleClose() 
          }} autoFocus>
            حذف
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

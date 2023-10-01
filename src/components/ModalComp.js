import React, { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";


export default function ModalComp({ open,handleClose,handleEdit ,task}) {
  
  const [newDescription, setNewDescription] = useState({
    title: task.title,
    details: task.details,
  });

  useEffect(() => {
    setNewDescription({ title: task.title, details: task.details });
  }, [open]);

  

  return (
    <div>
      <Dialog open={open} onClose={handleClose} style={{ direction: "rtl" }}>
        <DialogTitle>تعديل المهمة</DialogTitle>
        <DialogContent>
          <DialogContentText>
            قم بكتابة العنوان الجديد للمهمة وكذلك التفاصيل
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            label="عنوان المهمة"
            type="text"
            fullWidth
            variant="standard"
            value={newDescription.title}
            onChange={(e) => {
              setNewDescription({ ...newDescription, title: e.target.value });
            }}
          />
          <TextField
            autoFocus
            margin="dense"
            label=" تفاصيل المهمة"
            type="text"
            fullWidth
            variant="standard"
            value={newDescription.details}
            onChange={(e) => {
              setNewDescription({ ...newDescription, details: e.target.value });
            }}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>اغلاق</Button>
          <Button
            onClick={() => {
              if (newDescription.title !== "") {
                handleEdit(task.id, newDescription);
                handleClose();
              } else {
                handleClose();
              }
            }}
          >
            تأكيد
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

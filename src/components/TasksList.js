import React, { useContext, useMemo, useState } from 'react'
import Task from './Task';

import { Typography } from "@mui/material";
import { TaskContext } from '../contexts/TaskContext';
import DeleteModal from './DeleteModal';
import ModalComp from './ModalComp';


export default function TasksList({
  handleCheck,
  handleDelete,
  handleEdit,

  
  tabNumber,
})
{
  const { tasks } = useContext(TaskContext);

  const [openDelete, setOpenDelete] = useState(false);
  const [open, setOpen] = useState(false);
   const [task, setTask] = useState({id:"",title:"",details:"",isAchieved:false});
  const handleOpenDelete = (t) =>
  {
    setTask(t);
      setOpenDelete(true);
    };
  const handleCloseDelete = () => setOpenDelete(false);
   
  const handleOpen = (t) =>
  {
         setTask(t);
    setOpen(true);
  };
   const handleClose = () => setOpen(false);
  
 

      const achievedList = useMemo(() => {
        return tasks.filter((task) => {
       
          return task.isAchieved === true;
        });
      }, [tasks]);

      const notAchievedList = useMemo(() => {
        return tasks.filter((task) => {
        
          return task.isAchieved === false;
        });
      }, [tasks]);


  

  let renderedList = tasks
  
  if (tabNumber === 0)
  {
    renderedList=notAchievedList
  }
  else if (tabNumber === 1)
  {
    renderedList=achievedList
  }
  else
  {
    renderedList=tasks
  }






  return (
    <div style={{ maxHeight: "55vh", overflow: "auto", marginBottom: "10px" }}>
      {renderedList.length !== 0 ? (
        renderedList.map((task) => (
          <div key={task.id}>
            <Task
              task={task}
              handleCheck={handleCheck}
              handleEdit={handleEdit}
              handleOpenDelete={handleOpenDelete}
              handleOpen={handleOpen}
            />
          </div>
        ))
      ) : renderedList === achievedList ? (
        <Typography variant="h6" style={{ margin: "33px 0" }}>
          لا توجد مهام منجزة
        </Typography>
      ) : renderedList === notAchievedList ? (
        <Typography variant="h6" style={{ margin: "33px 0" }}>
          لا توجد مهام غير منجزة
        </Typography>
      ) : (
        <Typography variant="h6" style={{ margin: "33px 0" }}>
          لا توجد مهام
        </Typography>
      )}

      {/* delete modal */}

      <DeleteModal
        open={openDelete}
        handleClose={handleCloseDelete}
        handleDelete={handleDelete}
        task={task}
        myDialogTitle={ "هل انت متأكد انك تريد حذف هذه المهمة ؟"}
        myDialogContent={"لا يمكنك التراجع عن حذف المهمة عند الضغط على زر (حذف)"}
      />
      {/* =====delete modal===== */}
      {/* edit modal */}
      <ModalComp
        open={open}
        handleClose={handleClose}
        handleEdit={handleEdit}
        task={task}
      />
      {/* === edit modal === */}
    </div>
  );
}

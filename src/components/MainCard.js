import React, { useContext, useEffect, useReducer, useState } from 'react'

import {

  Container,
  CardContent,

  Card,
  Typography,
  Stack,
  Button,
 

} from "@mui/material";
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import TasksList from './TasksList';
import AddingInputs from './AddingInputs';
import { TaskContext } from '../contexts/TaskContext';
import AllTabs from './AllTabs';


import { ToastContext } from '../contexts/ToastContext';
import { reducer } from '../reducers/reducer';
import DeleteModal from './DeleteModal';







export default function MainCard() {
  
  const [tabNumber, setTabNumber] = useState(2)
  const [open,setOpen]=useState(false)
  const [tasks,dispatch]=useReducer(reducer,[])



  const taskCount = JSON.parse(localStorage.getItem("tasks"))
    ? JSON.parse(localStorage.getItem("tasks")).length: 0;
 

  const {showMySnackbar}=useContext(ToastContext)
  

  

  function addNewTask(newTaskTitle)
  {
    dispatch({
      type: "new",
      payload: {
        newTaskTitle,
      },
    });
 
  
  
     
    showMySnackbar("تمت اضافة مهمة جديدة");
  }
  
  




  
  function checkTask(taskId)
  {

    
  
    dispatch({
      type: "check",
      payload: {
        taskId: taskId,
      
      },
    });

    tasks.map((task) =>
    {
      if (taskId === task.id)
      {
        if (task.isAchieved === false)
        {
          
          showMySnackbar("تم انجاز المهمة");
        }
      }
    });
      
}

  function deleteTask(taskId)
  {


    dispatch({
      type: "delete", payload: {
      taskId:taskId
    }})
    showMySnackbar("تم حذف المهمة ");
  }


  function editTask(taskId, taskDescription)
  {
 

      dispatch({
        type: "edit",
        payload: {
          taskId: taskId,
          taskDescription,
        },
      });

     showMySnackbar("تم تعديل المهمة ");
  }
  
  function changeTabNumber(num)
  {

    
    setTabNumber(num)
  
  }

  function deleteAll()
  {
    dispatch({type:"delete all"})

  }


  useEffect(() =>
  {
   
     dispatch({type:"get"})
    

    
  
  },[])


  return (
    <TaskContext.Provider value={{ tasks }}>
      <Container maxWidth="sm">
        <Card>
          <CardContent>
            <Typography
              variant="h2"
              sx={{ fontWeight: "bold", marginBottom: "20px" }}
            >
              قائمة المهام
            </Typography>
            <Stack>
              <AllTabs
                tabNumber={tabNumber}
                changeTabNumber={changeTabNumber}
              />
              {taskCount !== 0 && (
                <Grid
                  container
                  spacing={2}
                  sx={{ direction: "rtl", marginBottom: 1 }}
                >
                  <Grid xs={7}>
                    <Typography variant="h6" style={{ marginBottom: "5px" }}>
                      لديك {taskCount} {taskCount === 1 ? "مهمة" : "مهمات"}
                    </Typography>
                  </Grid>
                  <Grid xs={4}>
                    <Button
                      variant="outlined"
                      onClick={() => {
                        setOpen(true);
                      }}
                    >
                      حذف الكل
                    </Button>
                    <DeleteModal
                      open={open}
                      handleClose={() => {
                        setOpen(false);
                      }}
                      handleDelete={deleteAll}
                      task={undefined}
                      myDialogTitle={"هل انت متأكد انك تريد حذف جميع المهام ؟"}
                      myDialogContent={
                        "لا يمكنك التراجع عن عملية الحذف عند الضغط على زر (حذف)"
                      }
                    />
                  </Grid>
                </Grid>
              )}
              <TasksList
                handleCheck={checkTask}
                handleDelete={deleteTask}
                handleEdit={editTask}
                tasksList={tasks}
                tabNumber={tabNumber}
              />

              <AddingInputs handleNewTasks={addNewTask} />
            </Stack>
          </CardContent>
        </Card>
      </Container>
    </TaskContext.Provider>
  );
}

import * as React from "react";
import Box from "@mui/material/Box";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";



export default function AllTabs({tabNumber,changeTabNumber}) {


  const handleChange = (event, newValue) => {
    changeTabNumber(newValue);
  
  };


 


  return (
    <Box sx={{ width: "100%", marginBottom: "20px" }}>
      <Tabs value={tabNumber} onChange={handleChange} centered>
        <Tab label="الغير منجز"  />
        <Tab label="المنجز"  />
        <Tab label="الكل"/>
      </Tabs>
    </Box>
  );
}

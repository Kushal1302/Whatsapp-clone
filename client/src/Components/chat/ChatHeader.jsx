import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";
import { useAccountContext } from "../../context/AccountProvider";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import SearchIcon from "@mui/icons-material/Search";

const ChatHeader = () => {
  const { person } = useAccountContext();
  return (
    <AppBar position="static"  >
      <Toolbar className="h-16 bg-white shadow-none " >
        <Box className="flex items-center jusitfy-evenly w-full">
          <Box className="flex items-center w-full">
            <img
              src={person?.picture}
              alt=""
              className="rounded-full w-12 h-12 mr-4"
            />
            <Typography className="ml-4 text-black">
              <Typography>{person?.name}</Typography>
              <Typography className="text-green-800 font-semibold" sx={{fontSize:12}}>Online</Typography>
            </Typography>
          </Box>
          <Box className="flex items-center w-full justify-end text-black">
            <SearchIcon className="mr-2 " />
            <MoreVertIcon />
          </Box>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default ChatHeader;

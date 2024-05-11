import { Box, Dialog } from "@mui/material";
import React, { useState } from "react";
import Menu from "./menu/Menu";
import EmptyChat from "./EmptyChat";
import ProfileDrawer from "./menu/ProfileDrawer";
import ChatBox from "./ChatBox";
import { useAccountContext } from "../../context/AccountProvider";

const ChatDialog = () => {
  const [open, setOpen] = useState(false);
  const { person } = useAccountContext();
  return (
    <Dialog
      open={true}
      PaperProps={{
        sx: {
          height: "96vh",
          width: "96%",
          maxWidth: "100%",
          minHeight: "100%",
          boxShadow: "none",
        },
      }}
      className="m-4 ml-0 shadow-lg w-full"
      hideBackdrop={true}
    >
      <Box className="grid grid-cols-12 h-full">
        <Box className="col-span-3 border-r-2 border-gray h-full p-3">
          {!open ? (
            <Menu setOpen={setOpen} />
          ) : (
            <ProfileDrawer open={open} setOpen={setOpen} />
          )}
        </Box>
        <Box className="col-span-9">
          {Object.keys(person).length === 0 ? <EmptyChat /> : <ChatBox />}
        </Box>
      </Box>
    </Dialog>
  );
};

export default ChatDialog;

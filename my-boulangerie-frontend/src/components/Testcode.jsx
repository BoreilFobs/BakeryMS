import React from "react";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormHelperText from "@mui/material/FormHelperText";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";

export default function Testcode() {
  return (
    <div>
      <i className="fa-solid fa-bars"></i>
      <IconButton
        aria-label="hi"
        onClick={() => {
          alert("hello world");
        }}
        color="primary"
        variant="outlined"
      >
        click me...
      </IconButton>
    </div>
  );
}

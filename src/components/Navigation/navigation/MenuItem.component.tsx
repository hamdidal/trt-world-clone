import { ExpandMore } from "@mui/icons-material";
import { Button, Popover } from "@mui/material";
import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useMyContext } from "../../../helper/context/context";

export type NavigationProps = {
  isSmall: boolean;
};

const MenuItem: React.FC<{
  menu: {
    name: string;
    options: Array<{ id: number; title: string }>;
  };
  color?: boolean;
  dialogCloseAction?: () => void;
}> = ({ menu, color, dialogCloseAction }) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const { setNewsTopic } = useMyContext();

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const opened = Boolean(anchorEl);

  const id = open ? "simple-popover" : undefined;

  const navigateAction = useCallback((opt: any) => {
    navigate(`/topics/${opt.title.toLocaleLowerCase()}`);
    setNewsTopic(opt.title.toLowerCase());
    dialogCloseAction && dialogCloseAction();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Button
        style={{
          fontFamily: "'trt', sans-serif",
          fontWeight: "400",
          color: color ? "blue" : "white",
          textTransform: "none",
          justifyContent: "space-between",
          fontSize: "12px",
        }}
        aria-describedby={id}
        variant="text"
        onClick={handleClick}
      >
        <span>{menu.name}</span>
        <ExpandMore style={{ color: "white" }} />
      </Button>
      <Popover
        id={id}
        open={opened}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        sx={{ width: "100%" }}
      >
        <Popover
          id={id}
          open={opened}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
          sx={{ width: "100%", boxShadow: "none" }}
        >
          {menu.options.map((opt) => (
            <p
              style={{
                cursor: "pointer",
                width: "100%",
                padding: "10px",
                fontFamily: "'trt', sans-serif",
                fontWeight: "400",
                color: "blue",
              }}
              onClick={() => navigateAction(opt)}
              key={opt.id}
            >
              {opt.title}
            </p>
          ))}
        </Popover>
      </Popover>
    </>
  );
};

export default MenuItem;

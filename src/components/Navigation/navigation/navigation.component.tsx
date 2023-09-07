import { Close, Search, Menu } from "@mui/icons-material";
import {
  AppBar,
  Box,
  Button,
  Dialog,
  IconButton,
  Slide,
  Toolbar,
  Typography,
} from "@mui/material";
import { TransitionProps } from "@mui/material/transitions";
import React, { useState } from "react";
import MenuItem from "./MenuItem.component";
import { MENU } from "./constants";
import "./navigation.css";
import Dot from "../../../assets/icons/dot";
import { useTranslation } from "react-i18next";
import "../../../helper/languages/i18next";
import { useMyContext } from "../../../helper/context/context";

export type NavigationProps = {
  isSmall: boolean;
};

const Transition = React.forwardRef(
  (
    props: TransitionProps & {
      children: React.ReactElement<any, any>;
    },
    ref: React.Ref<unknown>
  ) => {
    return <Slide direction="left" ref={ref} {...props} />;
  }
);

export const Navigation: React.FC<NavigationProps> = ({ isSmall }) => {
  const { t } = useTranslation();
  const { setNewsTopic } = useMyContext();

  const [open, setOpen] = useState(false);

  const onOpenHandler = () => setOpen(true);
  const onCloseHandler = () => setOpen(false);

  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(
    null
  );

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <>
      <div className="navigation-large">
        {MENU.map((menu, index) => (
          <MenuItem key={index} menu={menu} />
        ))}
        <Button
          style={{
            fontFamily: "'trt', sans-serif",
            fontWeight: "400",
            color: "white",
            textTransform: "none",
            justifyContent: "space-between",
          }}
          variant="text"
          onClick={handleClick}
        >
          <span className="live">
            <Dot />
            {t("navigation.live")}
          </span>
        </Button>

        <IconButton
          sx={{
            color: "white",
            cursor: "pointer",
            height: "48px",
            fontSize: "17px",
            width: "48px",
            borderRadius: "0px",
            backgroundColor: "#0089CC",
          }}
        >
          <Search />
        </IconButton>
      </div>

      <div className="navigation-small">
        <IconButton onClick={onOpenHandler}>
          <Search style={{ color: "white" }} />
        </IconButton>
        <IconButton onClick={onOpenHandler}>
          <Menu style={{ color: "white" }} />
        </IconButton>
        <Dialog
          open={open}
          fullScreen
          fullWidth
          TransitionComponent={Transition}
          hideBackdrop
          PaperProps={{
            sx: {
              boxShadow: "none",
            },
          }}
        >
          <AppBar position="static" sx={{ background: "white", color: "blue" }}>
            <Toolbar>
              <Typography
                style={{
                  fontFamily: "'trt', sans-serif",
                  fontWeight: "400",
                  color: "blue",
                }}
                variant="h5"
                sx={{ flexGrow: 1 }}
                onClick={() => setNewsTopic("america")}
              >
                {t("navigation.title")}
              </Typography>

              <IconButton color="inherit" onClick={onCloseHandler}>
                <Close />
              </IconButton>
            </Toolbar>
          </AppBar>
          <Box
            color={"black"}
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="30px"
            py={3}
            width="100%"
          >
            {MENU.map((menu, index) => (
              <MenuItem
                key={index}
                menu={menu}
                color
                dialogCloseAction={() => setOpen(false)}
              />
            ))}
            <Button
              style={{
                fontFamily: "'trt', sans-serif",
                fontWeight: "400",
                color: "blue",
                textTransform: "none",
                justifyContent: "space-between",
              }}
              variant="text"
              onClick={handleClick}
            >
              <span className="live">
                <Dot />
                {t("navigation.live")}
              </span>
            </Button>
          </Box>
        </Dialog>
      </div>
    </>
  );
};

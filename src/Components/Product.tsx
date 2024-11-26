import SettingsIcon from "@mui/icons-material/Settings";
import { useState, FC } from "react";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu, { MenuProps } from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import { useDispatch, useSelector } from "react-redux";
import { modalOpen, selectedProductForUpdate } from "../Store/Reducer";
import { Product as ProductType } from "../Store/Reducer";

const StyledMenu = styled((props: MenuProps) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: "rgb(55, 65, 81)",
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
    ...theme.applyStyles("dark", {
      color: theme.palette.grey[300],
    }),
  },
}));
const Product: FC<{
  product: ProductType;
  manage: boolean;
}> = ({ product, manage }) => {
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  function updateProduct(product: ProductType) {
    // update product in redux store
    dispatch(selectedProductForUpdate(product));
    // open modal
    dispatch(modalOpen({ target: "UPDATE" }));
  }

  return (
    <>
      <div
        className="product"
        style={{
          position: "relative",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0.5rem",
          alignItems: "center",
          background: "#FFF5E1",
          borderRadius: "0.5rem",
        }}
      >
        <div
          className="manage"
          style={{
            position: "absolute",
            top: "0",
            right: "0",
            display: manage === true ? "block" : "none",
          }}
        >
          <Button
            id="demo-customized-button"
            aria-controls={open ? "demo-customized-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            variant="contained"
            disableElevation
            onClick={handleClick}
            style={{
              background: "transparent",
              padding: "0",
              justifyContent: "right",
            }}
          >
            <SettingsIcon style={{ fontSize: "1rem", color: "#434D55" }} />
          </Button>
          <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              "aria-labelledby": "demo-customized-button",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={() => updateProduct(product)} disableRipple>
              <EditIcon />
              Update
            </MenuItem>
          </StyledMenu>
        </div>
        <div className="product-image">
          <img
            src=""
            alt=""
            style={{
              width: "100%",
              height: "100%",
              maxHeight: "6rem",
              objectFit: "contain",
              background: "#FFF5E1",
            }}
            srcSet={product.image}
          />
        </div>
        <div className="product-Name">
          <span>{product.title}</span>
        </div>
      </div>
    </>
  );
};

export default Product;

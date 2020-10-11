import React from "react";
import "./Header.css";
import LogoImage from "../../assets/img/logo.png";
import TextField from "@material-ui/core/TextField";
import SearchIcon from "@material-ui/icons/Search";
import CartIcon from "@material-ui/icons/ShoppingCart";
import InputAdornment from "@material-ui/core/InputAdornment";
import Avatar from "@material-ui/core/Avatar";
import { deepOrange, deepPurple } from "@material-ui/core/colors";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-router-dom";

function Header() {
  const useStyles = makeStyles((theme) => ({
    root: {
      display: "flex",
      "& > *": {
        margin: theme.spacing(1),
      },
    },
    orange: {
      color: theme.palette.getContrastText(deepOrange[500]),
      backgroundColor: deepOrange[500],
    },
    purple: {
      color: theme.palette.getContrastText(deepPurple[500]),
      backgroundColor: deepPurple[500],
    },
  }));

  const classes = useStyles();

  return (
    <div className="header">
      <Link to="/" style={{ textDecoration: "none" }}>
        <img className="header__logo" src={LogoImage} alt="Logo" />
      </Link>
      <h1 className="header__title">Coursehub</h1>
      <div className="header__search">
        <TextField
          className="header__searchInput"
          fullWidth
          id="search-text-field"
          label="Search"
          name="search"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          margin="normal"
          size="small"
        />
      </div>

      <div className="header__nav">
        <div className="header__option">
          <span className="header__optionLineOne">Explore</span>
          <span className="header__optionLineTwo">Courses</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Current</span>
          <span className="header__optionLineTwo">Progress</span>
        </div>
        <div className="header__option">
          <span className="header__optionLineOne">Guest</span>
          <span className="header__optionLineTwo">Sign In</span>
        </div>

        <Link to="/checkout" style={{ textDecoration: "none" }}>
          <div className="header__cart">
            <Avatar className={classes.purple}>
              <CartIcon />
            </Avatar>
            <span className="header__cartCounter">3</span>
          </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;

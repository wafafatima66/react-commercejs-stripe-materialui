import React from "react";
import hero from "../../assets/hero.jpg";

import useStyles from "./styles";

const Hero = () => {
  const classes = useStyles();

  return (
    <>
      <div className={classes.hero}>
        <h1 className={classes.heroText}>
          Why stay worry when you can order grocery from your home{" "}
        </h1>
        <h5 className={classes.heroSubtext}>Download our food app now on</h5>
        <h6 className={classes.heroButtonArea}>
          <button className={classes.button1}>Play Store</button>
        </h6>
      </div>
      {/* <img src={hero} alt="commerce.js" height="75px"  />  */}
    </>
  );
};

export default Hero;

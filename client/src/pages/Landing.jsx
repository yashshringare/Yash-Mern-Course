import React from "react";
import styled from "styled-components";
import Wrapper from "../assets/wrappers/LandingPage";
import main from "../assets/images/main.svg";
import { Link } from "react-router-dom";
import { Logo } from "../components";
// const StyledBth = styled.button`
//   font-size: 1.5rem;
//   background: red;
//   color: white;
// `;

const Landing = () => {
  return (
    <Wrapper>
      {/* <h1>Landing</h1>
      <div className="content">Some Content</div> */}
      {/* <StyledBth>styled btn</StyledBth> */}
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            Job <span>tracking</span> app
          </h1>
          <p>
            Fam humblebrag shabby chic hella, ugh occupy man braid forage. Ramps
            paleo iPhone deep v, brunch viral iceland grailed banh mi man bun
            wayfarers. Street art green juice bicycle rights enamel pin
            thundercats, farm-to-table af pitchfork hella banh mi seitan
            adaptogen subway tile chartreuse same. Pop-up messenger bag la croix
            succulents everyday carry shoreditch.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

// const Wrapper = styled.div`
//   background: red;
//   h1 {
//     color: white;
//   }

//   .content {
//     background: blue;
//     color: yellow;
//   }
// `;

export default Landing;

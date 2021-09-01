import React from "react";
import { Header } from "../Components/";
import * as ROUTES from "../constants/routes";
import Logo from "../logo.svg";
import BG from "../home-bg.jpg";

export function HeaderContainer({ children }) {
  return (
    <>
      <Header style={{ backgroundImage: `url(${BG})` }}>
        <Header.Frame>
          <Header.Logo to={ROUTES.HOME} src={Logo} alt="Netflix" />
          <Header.ButtonLink to={ROUTES.SIGN_IN}>Sign In</Header.ButtonLink>
        </Header.Frame>
        {children}
      </Header>
    </>
  );
}

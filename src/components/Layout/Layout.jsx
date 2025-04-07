// src/components/Layout/Layout.js
import React, { useState } from 'react';
import HeaderComponent from '../Header/HeaderComponent';
import SidebarMenu from '../SidebarMenu/SidebarMenu';
import styled from 'styled-components';

const LayoutWrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background: transparent;
  position: relative;
`;

const MainContent = styled.div`
  flex: 1;
  background: transparent;
`;

const Layout = ({ children }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <LayoutWrapper>
      <SidebarMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
      <HeaderComponent toggleMenu={toggleMenu} />
      <MainContent>{children}</MainContent>
    </LayoutWrapper>
  );
};

export default Layout;
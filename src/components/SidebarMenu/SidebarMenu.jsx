import React from "react";
import { Link } from "react-router-dom";
import {
  SidebarWrapper,
  SidebarContent,
  CloseButton,
  SidebarOverlay,
  MenuList,
  MenuItem,
  MenuLink
} from "./style";

const SidebarMenu = ({ isOpen, toggleMenu }) => {
  return (
    <>
      <SidebarOverlay $isOpen={isOpen} onClick={toggleMenu} />
      <SidebarWrapper $isOpen={isOpen}>
        <CloseButton onClick={toggleMenu}>×</CloseButton>
        <SidebarContent>
          <MenuList>
            <MenuItem>
              <MenuLink as={Link} to="/" onClick={toggleMenu}>
                Trang Chủ
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink as={Link} to="/rooms" onClick={toggleMenu}>
                Phòng
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink as={Link} to="/about" onClick={toggleMenu}>
                Giới Thiệu
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink as={Link} to="/services" onClick={toggleMenu}>
                Dịch Vụ
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink as={Link} to="/contact" onClick={toggleMenu}>
                Liên Hệ
              </MenuLink>
            </MenuItem>
            <MenuItem>
              <MenuLink as={Link} to="/login" onClick={toggleMenu}>
                Đăng Nhập
              </MenuLink>
            </MenuItem>

          </MenuList>
        </SidebarContent>
      </SidebarWrapper>
    </>
  );
};

export default SidebarMenu;
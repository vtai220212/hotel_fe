// src/components/Header/HeaderComponent.js
import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { StyledHeader, HeaderSection, MenuIcon, Logo, ContactLink, AboutLink, AvatarWrapper, Avatar, LoginButton, DropdownMenu, DropdownItem } from "./style";
import SidebarMenu from "../SidebarMenu/SidebarMenu";
import LogoImage from "../../assets/logo.svg";
import { FaUserCircle } from "react-icons/fa";

const HeaderComponent = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [dropdownOpen, setDropdownOpen] = useState(false); // Trạng thái cho dropdown
  const navigate = useNavigate();
  const dropdownRef = useRef(null); // Ref để kiểm tra click ngoài dropdown

  // Lấy thông tin người dùng từ localStorage khi component mount
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Ẩn dropdown khi nhấn ra ngoài
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const handleLoginClick = () => {
    navigate('/login');
  };

  const handleProfileClick = () => {
    setDropdownOpen(false);
    navigate('/profile');
  };

  const handleOrderHistoryClick = () => {
    setDropdownOpen(false);
    navigate('/order-history');
  };

  const handleLogoutClick = () => {
    localStorage.removeItem('user'); // Xóa thông tin người dùng khỏi localStorage
    setUser(null); // Cập nhật state user
    setDropdownOpen(false);
    navigate('/login'); // Chuyển hướng về trang đăng nhập
  };

  return (
    <>
      <StyledHeader>
        <HeaderSection>
          <MenuIcon onClick={toggleMenu} />
        </HeaderSection>

        <HeaderSection>
          <ContactLink onClick={() => navigate('/contact')}>
            Liên Hệ
          </ContactLink>
        </HeaderSection>

        <HeaderSection>
          <Logo src={LogoImage} alt="Logo" />
        </HeaderSection>

        <HeaderSection>
          <AboutLink onClick={() => navigate('/rooms')}>
            Phòng
          </AboutLink>
        </HeaderSection>

        <HeaderSection>
          {user ? (
            <AvatarWrapper ref={dropdownRef}>
              <Avatar onClick={toggleDropdown}>
                {user.avatar ? (
                  <img src={user.avatar} alt="Avatar" />
                ) : (
                  <div>
                    {user.username ? user.username.charAt(0).toUpperCase() : <FaUserCircle />}
                  </div>
                )}
              </Avatar>
              {dropdownOpen && (
                <DropdownMenu>
                  <DropdownItem onClick={handleProfileClick}>
                    Thông tin cá nhân
                  </DropdownItem>
                  <DropdownItem onClick={handleOrderHistoryClick}>
                    Lịch sử đơn hàng
                  </DropdownItem>
                  <DropdownItem onClick={handleLogoutClick}>
                    Đăng xuất
                  </DropdownItem>
                </DropdownMenu>
              )}
            </AvatarWrapper>
          ) : (
            <LoginButton onClick={handleLoginClick}>
              Đăng Nhập
            </LoginButton>
          )}
        </HeaderSection>
      </StyledHeader>

      <SidebarMenu isOpen={menuOpen} toggleMenu={toggleMenu} />
    </>
  );
};

export default HeaderComponent;
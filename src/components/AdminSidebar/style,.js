import styled from 'styled-components';
export const SidebarWrapper = styled.div`
  width: 80px;
  background: #1a2526;
  color: white;
  padding: 20px 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-right: 1px solid #2e3b3e;
`;

export const SidebarItem = styled.div`
  padding: 15px;
  cursor: pointer;
  transition: background 0.3s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #a1b4b6;

  &:hover {
    background: #2e3b3e;
    color: #fff;
  }
`;
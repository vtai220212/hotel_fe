import styled from 'styled-components';

export const AmenitiesContainer = styled.div`
  margin-top: 20px;
`;

export const AmenitiesTitle = styled.h3`
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;
`;

export const AmenitiesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  list-style: none;
  padding: 0;
`;

export const AmenityItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 16px;
  color: #555;
  padding: 10px;
  background-color: #fff;
  border: 1px solid #eee;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex: 1 1 calc(33.333% - 15px); /* Đảm bảo 3 mục trên 1 hàng với khoảng cách gap */
  box-sizing: border-box;
  min-width: 200px; /* Đảm bảo kích thước tối thiểu cho mỗi mục */
`;

export const AmenityIcon = styled.div`
  margin-right: 20px;
  
`;
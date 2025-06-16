import styled from 'styled-components';

export const AmenitiesContainer = styled.div`
  margin-top: 20px;

  @media (max-width: 768px) {
    margin-top: 15px;
  }
`;

export const AmenitiesTitle = styled.h3`
  font-size: 20px;
  color: #333;
  margin-bottom: 10px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 8px;
  }
`;

export const AmenitiesList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  gap: 15px;
  list-style: none;
  padding: 0;

  @media (max-width: 1024px) {
    gap: 10px;
  }

  @media (max-width: 768px) {
    gap: 8px;
  }
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
  flex: 1 1 calc(33.333% - 10px);
  box-sizing: border-box;
  min-width: 220px;
  max-width: calc(33.333% - 10px);

  @media (max-width: 1024px) {
    flex: 1 1 calc(50% - 10px);
    min-width: 220px; /* Giữ nguyên min-width */
    max-width: calc(50% - 10px);
    padding: 8px;
  }

  @media (max-width: 768px) {
    flex: 1 1 100%;
    min-width: 220px; /* Giữ nguyên min-width */
    max-width: 100%;
    padding: 6px;
    font-size: 14px;
  }
`;

export const AmenityIcon = styled.div`
  margin-right: 20px;

  @media (max-width: 768px) {
    margin-right: 10px;
  }

  
`;

export const ToggleButton = styled.button`
  margin-top: 15px;
  padding: 8px 16px;
  background-color:rgb(120, 124, 129);
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 20px;
  cursor: pointer;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 20px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;
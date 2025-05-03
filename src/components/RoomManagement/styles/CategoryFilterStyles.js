import styled from 'styled-components';

export const FilterWrapper = styled.div`
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  gap: 15px;
  justify-content: center;
  flex-wrap: wrap;
`;

export const FilterLabel = styled.label`
  color: #FFD700;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.5px;
`;

export const FilterSelect = styled.select`
  padding: 12px 20px;
  border-radius: 8px;
  background: #2e3b3e;
  color: #e0e0e0;
  border: 1px solid #FFD700;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 2px 10px rgba(255, 215, 0, 0.2);
  outline: none;

  &:focus {
    border-color: #DAA520;
    box-shadow: 0 0 10px rgba(255, 215, 0, 0.4);
  }

  option {
    background: #2e3b3e;
    color: #e0e0e0;
  }
`;
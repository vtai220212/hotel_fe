import React, { useState, useCallback } from 'react';
import styled from 'styled-components';

// Style cho RoomFilter
const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 10px;
  }
`;

const SearchInput = styled.input`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 300px;

  &:focus {
    outline: none;
    border-color: #007bff;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

const RoomFilter = ({ onSearchChange }) => {
  const [inputValue, setInputValue] = useState('');

  const debouncedSearch = useCallback(
    debounce((value) => {
      onSearchChange(value);
    }, 300),
    []
  );

  const handleInputChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    debouncedSearch(value);
  };

  return (
    <FilterContainer>
      <SearchInput
        type="text"
        value={inputValue}
        placeholder="Tìm kiếm phòng theo tên, mã phòng..."
        onChange={handleInputChange}
      />
    </FilterContainer>
  );
};

// Hàm debounce
function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}

export default RoomFilter;
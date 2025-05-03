import React from 'react';
import styled from 'styled-components';

const FilterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
  gap: 20px;
`;

const Select = styled.select`
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 5px;
  width: 200px;
  background-color: #fff;
  cursor: pointer;

  &:focus {
    outline: none;
    border-color: #007bff;
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
`;

const RoomFilter = ({ categories, onCategoryChange, onSearchChange }) => {
  return (
    <FilterContainer>
      <Select onChange={(e) => onCategoryChange(e.target.value)}>
        <option value="">Tất cả loại phòng</option>
        {categories.map(category => (
          <option key={category._id} value={category._id}>
            {category.name}
          </option>
        ))}
      </Select>
      <SearchInput
        type="text"
        placeholder="Tìm kiếm phòng theo tiêu đề..."
        onChange={(e) => onSearchChange(e.target.value)}
      />
    </FilterContainer>
  );
};

export default RoomFilter;
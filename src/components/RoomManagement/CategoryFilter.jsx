import React from 'react';
import { FilterWrapper, FilterLabel, FilterSelect } from './styles/CategoryFilterStyles';

const CategoryFilter = ({ selectedCategory, setSelectedCategory, categories, categoriesLoading, categoriesError }) => {
  return (
    <FilterWrapper>
      <FilterLabel htmlFor="category">Lọc theo danh mục:</FilterLabel>
      {categoriesLoading ? (
        <div style={{ color: '#FFD700' }}>Đang tải danh mục...</div>
      ) : categoriesError ? (
        <div style={{ color: '#ff4d4d' }}>Lỗi: {categoriesError.message}</div>
      ) : (
        <FilterSelect
          id="category"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="">Tất cả</option>
          {categories.map((category) => (
            <option key={category._id} value={category._id}>
              {category.name.charAt(0).toUpperCase() + category.name.slice(1)}
            </option>
          ))}
        </FilterSelect>
      )}
    </FilterWrapper>
  );
};

export default CategoryFilter;
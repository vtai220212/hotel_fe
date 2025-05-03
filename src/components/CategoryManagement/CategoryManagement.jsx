import React, { useState, useEffect } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import CategoryList from './CategoryList';
import AddCategoryModal from './AddCategoryModal';
import EditCategoryModal from './EditCategoryModal';
import { getCategories, createCategory, updateCategory, deleteCategory } from '../../services/categoryService';

const CategoryManagement = () => {
  const queryClient = useQueryClient();

  // State cho modal thêm danh mục
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newCategory, setNewCategory] = useState({ name: '' });

  // State cho modal chỉnh sửa danh mục
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editCategory, setEditCategory] = useState(null);

  // Lấy danh sách danh mục
  const { data: categories, isLoading, error } = useQuery({
    queryKey: ['categories'],
    queryFn: getCategories,
  });

  // Mutation để thêm danh mục
  const createCategoryMutation = useMutation({
    mutationFn: createCategory,
    onSuccess: () => {
      queryClient.invalidateQueries(['categories']);
      setIsAddModalOpen(false);
      setNewCategory({ name: '' });
    },
  });

  // Mutation để cập nhật danh mục
  const updateCategoryMutation = useMutation({
    mutationFn: updateCategory,
    onSuccess: () => {
      queryClient.invalidateQueries(['categories']);
      setIsEditModalOpen(false);
      setEditCategory(null);
    },
  });

  // Mutation để xóa danh mục
  const deleteCategoryMutation = useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      queryClient.invalidateQueries(['categories']);
    },
  });

  const handleAddSubmit = (e) => {
    e.preventDefault();
    createCategoryMutation.mutate(newCategory);
  };

  const handleEditSubmit = (e) => {
    e.preventDefault();
    updateCategoryMutation.mutate(editCategory);
  };

  const handleEdit = (category) => {
    setEditCategory(category);
    setIsEditModalOpen(true);
  };

  const handleDelete = (categoryId) => {
    if (window.confirm('Bạn có chắc chắn muốn xóa danh mục này?')) {
      deleteCategoryMutation.mutate(categoryId);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ color: '#ffd700', textAlign: 'center', marginBottom: '20px' }}>
        Quản lý danh mục
      </h1>
      <button
        onClick={() => setIsAddModalOpen(true)}
        style={{
          background: '#ffd700',
          color: '#1c2526',
          padding: '10px 20px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: '20px',
          fontSize: '16px',
          fontWeight: '600',
        }}
      >
        Thêm danh mục mới
      </button>

      {isLoading ? (
        <div style={{ color: '#ffd700', textAlign: 'center' }}>Đang tải danh mục...</div>
      ) : error ? (
        <div style={{ color: '#ff4d4d', textAlign: 'center' }}>Lỗi: {error.message}</div>
      ) : (
        <CategoryList categories={categories} onEdit={handleEdit} onDelete={handleDelete} />
      )}

      <AddCategoryModal
        isOpen={isAddModalOpen}
        onClose={() => setIsAddModalOpen(false)}
        newCategory={newCategory}
        setNewCategory={setNewCategory}
        onSubmit={handleAddSubmit}
        createCategoryMutation={createCategoryMutation}
      />

      <EditCategoryModal
        isOpen={isEditModalOpen}
        onClose={() => setIsEditModalOpen(false)}
        editCategory={editCategory}
        setEditCategory={setEditCategory}
        onSubmit={handleEditSubmit}
        updateCategoryMutation={updateCategoryMutation}
      />
    </div>
  );
};

export default CategoryManagement;
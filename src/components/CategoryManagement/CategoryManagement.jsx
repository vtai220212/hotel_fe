import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import CategoryList from './CategoryList';
import AddCategoryModal from './AddCategoryModal';
import EditCategoryModal from './EditCategoryModal';
import { getCategories, createCategory, updateCategory, deleteCategory } from '../../services/categoryService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import styled from 'styled-components';

// Styled-components cho modal xác nhận xóa
const DeleteModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const DeleteModalContent = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  width: 400px;
  max-width: 90%;
  text-align: center;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media (max-width: 768px) {
    width: 90%;
    padding: 15px;
  }
`;

const DeleteModalTitle = styled.h3`
  color: #dc3545;
  margin-bottom: 15px;
  font-size: 18px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const DeleteModalText = styled.p`
  color: #333;
  margin-bottom: 20px;
  font-size: 14px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const DeleteModalButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-top: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 8px;
  }
`;

const ConfirmButton = styled.button`
  background: #dc3545;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;

  &:hover {
    background: #c82333;
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;

const CancelButton = styled.button`
  background: #6c757d;
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  transition: background 0.3s;

  &:hover {
    background: #5a6268;
  }

  @media (max-width: 768px) {
    padding: 6px 12px;
    font-size: 12px;
  }
`;

const CategoryManagement = () => {
  const queryClient = useQueryClient();

  // State cho modal thêm danh mục
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [newCategory, setNewCategory] = useState({ name: '' });

  // State cho modal chỉnh sửa danh mục
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editCategory, setEditCategory] = useState(null);

  // State cho modal xác nhận xóa
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [categoryToDelete, setCategoryToDelete] = useState(null);

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
      toast.success('Thêm danh mục thành công!', {
        position: 'top-right',
        autoClose: 3000,
      });
    },
    onError: (error) => {
      toast.error(`Lỗi khi thêm danh mục: ${error.message}`, {
        position: 'top-right',
        autoClose: 3000,
      });
    },
  });

  // Mutation để cập nhật danh mục
  const updateCategoryMutation = useMutation({
    mutationFn: updateCategory,
    onSuccess: () => {
      queryClient.invalidateQueries(['categories']);
      setIsEditModalOpen(false);
      setEditCategory(null);
      toast.success('Cập nhật danh mục thành công!', {
        position: 'top-right',
        autoClose: 3000,
      });
    },
    onError: (error) => {
      toast.error(`Lỗi khi cập nhật danh mục: ${error.message}`, {
        position: 'top-right',
        autoClose: 3000,
      });
    },
  });

  // Mutation để xóa danh mục
  const deleteCategoryMutation = useMutation({
    mutationFn: deleteCategory,
    onSuccess: () => {
      queryClient.invalidateQueries(['categories']);
      toast.success('Xóa danh mục thành công!', {
        position: 'top-right',
        autoClose: 3000,
      });
    },
    onError: (error) => {
      toast.error(`Lỗi khi xóa danh mục: ${error.message}`, {
        position: 'top-right',
        autoClose: 3000,
      });
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
    setCategoryToDelete(categoryId);
    setIsDeleteModalOpen(true);
  };

  const confirmDelete = () => {
    if (categoryToDelete) {
      deleteCategoryMutation.mutate(categoryToDelete);
    }
    setIsDeleteModalOpen(false);
    setCategoryToDelete(null);
  };

  const cancelDelete = () => {
    setIsDeleteModalOpen(false);
    setCategoryToDelete(null);
  };

  return (
    <div style={{ padding: '20px', backgroundColor: '#000000' }}>
      <h1 style={{ color: '#FFFFFF', textAlign: 'center', marginBottom: '20px', fontFamily: 'Montserrat, sans-serif' }}>
        Quản lý danh mục
      </h1>
      <button
        onClick={() => setIsAddModalOpen(true)}
        style={{
          background: '#FFFFFF',
          color: '#000000',
          padding: '10px 20px',
          border: '1px solid #333333',
          borderRadius: '5px',
          cursor: 'pointer',
          marginBottom: '20px',
          fontSize: '16px',
          fontWeight: '600',
          fontFamily: 'Roboto, sans-serif',
          transition: 'all 0.3s ease',
        }}
        onMouseOver={(e) => (e.target.style.background = '#E0E0E0')}
        onMouseOut={(e) => (e.target.style.background = '#FFFFFF')}
      >
        Thêm danh mục mới
      </button>

      {isLoading ? (
        <div style={{ color: '#FFFFFF', textAlign: 'center', fontFamily: 'Roboto, sans-serif' }}>
          Đang tải danh mục...
        </div>
      ) : error ? (
        <div style={{ color: '#FF6666', textAlign: 'center', fontFamily: 'Roboto, sans-serif' }}>
          Lỗi: {error.message}
        </div>
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

      {isDeleteModalOpen && (
        <DeleteModalOverlay>
          <DeleteModalContent>
            <DeleteModalTitle>Bạn có chắc muốn xóa danh mục này?</DeleteModalTitle>
            <DeleteModalText>Hành động này không thể hoàn tác.</DeleteModalText>
            <DeleteModalButtons>
              <ConfirmButton onClick={confirmDelete}>Xóa</ConfirmButton>
              <CancelButton onClick={cancelDelete}>Hủy</CancelButton>
            </DeleteModalButtons>
          </DeleteModalContent>
        </DeleteModalOverlay>
      )}

      <ToastContainer />
    </div>
  );
};

export default CategoryManagement;
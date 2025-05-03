import React from 'react';
import { ModalOverlay, ModalContent, ModalTitle, CloseButton, Form, Input, SubmitButton } from './styles/AddCategoryModalStyles';

const EditCategoryModal = ({ isOpen, onClose, editCategory, setEditCategory, onSubmit, updateCategoryMutation }) => {
  if (!isOpen || !editCategory) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditCategory({ ...editCategory, [name]: value });
  };

  return (
    <ModalOverlay
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <ModalContent
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        <ModalTitle>Chỉnh sửa danh mục</ModalTitle>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Form onSubmit={onSubmit}>
          <div>
            <label style={{ color: '#ffd700', fontSize: '14px', marginBottom: '5px', display: 'block' }}>
              Tên danh mục
            </label>
            <Input
              type="text"
              name="name"
              placeholder="Nhập tên danh mục"
              value={editCategory.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <SubmitButton type="submit" disabled={updateCategoryMutation.isLoading}>
            {updateCategoryMutation.isLoading ? 'Đang cập nhật...' : 'Cập nhật danh mục'}
          </SubmitButton>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default EditCategoryModal;
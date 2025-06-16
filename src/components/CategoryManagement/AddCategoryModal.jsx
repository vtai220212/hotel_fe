import React from 'react';
import { ModalOverlay, ModalContent, ModalTitle, CloseButton, Form, Input, SubmitButton } from './styles/AddCategoryModalStyles';

const AddCategoryModal = ({ isOpen, onClose, newCategory, setNewCategory, onSubmit, createCategoryMutation }) => {
  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewCategory({ ...newCategory, [name]: value });
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
        <ModalTitle>Thêm danh mục mới</ModalTitle>
        <CloseButton onClick={onClose}>×</CloseButton>
        <Form onSubmit={onSubmit}>
          <div>
            <label style={{ color: '#FFFFFF', fontSize: '14px', marginBottom: '5px', display: 'block' }}>
              Tên danh mục
            </label>
            <Input
              type="text"
              name="name"
              placeholder="Nhập tên danh mục"
              value={newCategory.name}
              onChange={handleInputChange}
              required
            />
          </div>
          <SubmitButton type="submit" disabled={createCategoryMutation.isLoading}>
            {createCategoryMutation.isLoading ? 'Đang thêm...' : 'Thêm danh mục'}
          </SubmitButton>
        </Form>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AddCategoryModal;
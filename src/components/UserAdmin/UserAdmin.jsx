// frontend/src/components/UserAdmin/UserAdmin.jsx
import React, { useState, useEffect, useMemo } from 'react';
import { useReactTable, getCoreRowModel } from '@tanstack/react-table';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion'; // Thêm Framer Motion
import { getUsers, addUser, updateUser, deleteUser } from '../../services/UserService';
import UserTable from './UserTable';
import UserModal from './UserModal';
import DeleteModal from './DeleteModal';
import {
  Container,
  Title,
  AddButton,
  Actions,
  EditButton,
  DeleteButton,
} from './UserAdminStyles';

const UserAdmin = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isEditMode, setIsEditMode] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [userToDelete, setUserToDelete] = useState(null);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'customer',
  });

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleAddUser = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email || !formData.password) {
      toast.error('Please fill in all required fields');
      return;
    }
    setLoading(true);
    try {
      const newUser = await addUser(formData);
      setUsers([...users, newUser]);
      toast.success('User added successfully!');
      closeModal();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateUser = async (e) => {
    e.preventDefault();
    if (!formData.username || !formData.email) {
      toast.error('Please fill in all required fields');
      return;
    }
    setLoading(true);
    try {
      const updatedUser = await updateUser(selectedUser._id, formData);
      setUsers(users.map(user => (user._id === selectedUser._id ? updatedUser : user)));
      toast.success('User updated successfully!');
      closeModal();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteUser = async () => {
    setLoading(true);
    try {
      await deleteUser(userToDelete._id);
      setUsers(users.filter(user => user._id !== userToDelete._id));
      toast.success('User deleted successfully!');
      closeDeleteModal();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  const openAddModal = () => {
    setIsEditMode(false);
    setFormData({ username: '', email: '', password: '', role: 'customer' });
    setIsModalOpen(true);
  };

  const openEditModal = (user) => {
    setIsEditMode(true);
    setSelectedUser(user);
    setFormData({
      username: user.username,
      email: user.email,
      password: '',
      role: user.role,
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
    setFormData({ username: '', email: '', password: '', role: 'customer' });
  };

  const openDeleteModal = (user) => {
    setUserToDelete(user);
    setIsDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setUserToDelete(null);
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const columns = useMemo(
    () => [
      { accessorKey: '_id', header: 'ID' },
      { accessorKey: 'username', header: 'Username' },
      { accessorKey: 'email', header: 'Email' },
      { accessorKey: 'role', header: 'Role' },
      {
        accessorKey: 'actions',
        header: 'Actions',
        cell: ({ row }) => (
          <Actions>
            <EditButton onClick={() => openEditModal(row.original)}>
              Edit
            </EditButton>
            <DeleteButton onClick={() => openDeleteModal(row.original)}>
              Delete
            </DeleteButton>
          </Actions>
        ),
      },
    ],
    []
  );

  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Container>
      <Title>User Management</Title>
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
      >
        <AddButton onClick={openAddModal} disabled={loading}>
          Add New User
        </AddButton>
      </motion.div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <UserTable table={table} />
      )}

      <UserModal
        isOpen={isModalOpen}
        isEditMode={isEditMode}
        formData={formData}
        handleInputChange={handleInputChange}
        handleSubmit={isEditMode ? handleUpdateUser : handleAddUser}
        closeModal={closeModal}
      />

      <DeleteModal
        isOpen={isDeleteModalOpen}
        userToDelete={userToDelete}
        handleDelete={handleDeleteUser}
        closeModal={closeDeleteModal}
      />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        closeOnClick
        pauseOnHover
        theme="light"
      />
    </Container>
  );
};

export default UserAdmin;
import React, { useState, useEffect, useMemo } from 'react';
import { useReactTable, getCoreRowModel } from '@tanstack/react-table';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { motion } from 'framer-motion';
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
  UserInfoWrapper,
  InfoLabel,
  InfoValue,
} from './styles/UserAdminStyles';
import config from '../../config';

// Hook để kiểm tra kích thước màn hình
const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return isMobile;
};

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
    fullName: '',
    phoneNumber: '',
    address: '',
    avatar: null,
    role: 'customer',
  });

  const isMobile = useIsMobile();

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (error) {
      toast.error(error.message || 'Failed to fetch users');
      setUsers([]);
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
      const formDataToSend = new FormData();
      formDataToSend.append('username', formData.username);
      formDataToSend.append('email', formData.email);
      formDataToSend.append('password', formData.password);
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('phoneNumber', formData.phoneNumber);
      formDataToSend.append('address', formData.address);
      formDataToSend.append('role', formData.role);
      if (formData.avatar) {
        formDataToSend.append('avatar', formData.avatar);
      }

      const newUser = await addUser(formDataToSend);
      setUsers([...users, newUser]);
      toast.success('User added successfully!');
      closeModal();
    } catch (error) {
      toast.error(error.message || 'Failed to add user');
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
      const formDataToSend = new FormData();
      formDataToSend.append('username', formData.username);
      formDataToSend.append('email', formData.email);
      if (formData.password) {
        formDataToSend.append('password', formData.password);
      }
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('phoneNumber', formData.phoneNumber);
      formDataToSend.append('address', formData.address);
      formDataToSend.append('role', formData.role);
      if (formData.avatar && typeof formData.avatar !== 'string') {
        formDataToSend.append('avatar', formData.avatar);
      }

      const updatedUser = await updateUser(selectedUser._id, formDataToSend);
      setUsers(users.map(user => (user._id === selectedUser._id ? updatedUser : user)));
      toast.success('User updated successfully!');
      closeModal();
    } catch (error) {
      toast.error(error.message || 'Failed to update user');
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
      toast.error(error.message || 'Failed to delete user');
    } finally {
      setLoading(false);
    }
  };

  const openAddModal = () => {
    setIsEditMode(false);
    setFormData({
      username: '',
      email: '',
      password: '',
      fullName: '',
      phoneNumber: '',
      address: '',
      avatar: null,
      role: 'customer',
    });
    setIsModalOpen(true);
  };

  const openEditModal = (user) => {
    setIsEditMode(true);
    setSelectedUser(user);
    setFormData({
      username: user.username,
      email: user.email,
      password: '',
      fullName: user.fullName || '',
      phoneNumber: user.phoneNumber || '',
      address: user.address || '',
      avatar: user.avatar || null,
      role: user.role,
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedUser(null);
    setFormData({
      username: '',
      email: '',
      password: '',
      fullName: '',
      phoneNumber: '',
      address: '',
      avatar: null,
      role: 'customer',
    });
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

  const columns = useMemo(() => {
    // Cột cho giao diện mobile
    const mobileColumns = [
      {
        accessorKey: 'mobileInfo',
        header: 'Thông tin người dùng',
        cell: ({ row }) => (
          <UserInfoWrapper>
            <div className="mobile-view">
              <div className="info-row">
                <InfoLabel>Username</InfoLabel>
                <InfoValue>{row.original.username}</InfoValue>
              </div>
              <div className="info-row">
                <InfoLabel>Email</InfoLabel>
                <InfoValue>{row.original.email}</InfoValue>
              </div>
              <div className="info-row">
                <InfoLabel>Full Name</InfoLabel>
                <InfoValue>{row.original.fullName || '-'}</InfoValue>
              </div>
              <div className="info-row">
                <InfoLabel>Phone Number</InfoLabel>
                <InfoValue>{row.original.phoneNumber || '-'}</InfoValue>
              </div>
              <div className="info-row">
                <InfoLabel>Address</InfoLabel>
                <InfoValue>{row.original.address || '-'}</InfoValue>
              </div>
              <div className="info-row">
                <InfoLabel>Avatar</InfoLabel>
                <InfoValue>
                  {row.original.avatar ? (
                    <img
                      src={`${config.API_URL}${row.original.avatar}`}
                      alt="Avatar"
                      style={{ width: '30px', height: '30px', borderRadius: '50%' }}
                      onError={(e) => {
                        e.target.src = 'https://via.placeholder.com/30';
                        console.error('Error loading avatar:', row.original.avatar);
                      }}
                    />
                  ) : (
                    '-'
                  )}
                </InfoValue>
              </div>
              <div className="info-row">
                <InfoLabel>Role</InfoLabel>
                <InfoValue>{row.original.role}</InfoValue>
              </div>
            </div>
          </UserInfoWrapper>
        ),
      },
      {
        accessorKey: 'actions',
        header: 'Actions',
        cell: ({ row }) => (
          <Actions>
            <EditButton onClick={() => openEditModal(row.original)}>
              Sửa
            </EditButton>
            <DeleteButton onClick={() => openDeleteModal(row.original)}>
              Xóa
            </DeleteButton>
          </Actions>
        ),
      },
    ];

    // Cột cho giao diện desktop
    const desktopColumns = [
      { accessorKey: '_id', header: 'ID' },
      { accessorKey: 'username', header: 'Username' },
      { accessorKey: 'email', header: 'Email' },
      { accessorKey: 'fullName', header: 'Full Name' },
      { accessorKey: 'phoneNumber', header: 'Phone Number' },
      { accessorKey: 'address', header: 'Address' },
      {
        accessorKey: 'avatar',
        header: 'Avatar',
        cell: ({ row }) =>
          row.original.avatar ? (
            <img
              src={`${config.API_URL}${row.original.avatar}`}
              alt="Avatar"
              style={{ width: '40px', height: '40px', borderRadius: '50%' }}
              onError={(e) => {
                e.target.src = 'https://via.placeholder.com/40';
                console.error('Error loading avatar:', row.original.avatar);
              }}
            />
          ) : (
            '-'
          ),
      },
      { accessorKey: 'role', header: 'Role' },
      {
        accessorKey: 'actions',
        header: 'Actions',
        cell: ({ row }) => (
          <Actions>
            <EditButton onClick={() => openEditModal(row.original)}>
              Sửa
            </EditButton>
            <DeleteButton onClick={() => openDeleteModal(row.original)}>
              Xóa
            </DeleteButton>
          </Actions>
        ),
      },
    ];

    // Trả về cột tương ứng dựa trên kích thước màn hình
    return isMobile ? mobileColumns : desktopColumns;
  }, [isMobile]);

  const table = useReactTable({
    data: users,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <Container>
      <Title>Quản lý tài khoản</Title>
      <AddButton onClick={openAddModal} disabled={loading}>
        Thêm tài khoản mới
      </AddButton>

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
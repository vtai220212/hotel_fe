import React, { useState, useEffect } from 'react';
import { UserInfoFormStyled, FormGroup, Label, Input } from './styles/UserInfoFormStyles';

const UserInfoForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const newData = { ...prev, [name]: value };
      if (onSubmit) {
        onSubmit(newData); // Gửi dữ liệu ngay khi thay đổi
      }
      return newData;
    });
  };

  return (
    <UserInfoFormStyled>
      <h2>Thông tin người dùng</h2>
      <form>
        <FormGroup>
          <Label>Họ và Tên</Label>
          <Input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Email</Label>
          <Input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Số điện thoại</Label>
          <Input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Địa chỉ</Label>
          <Input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </FormGroup>
      </form>
    </UserInfoFormStyled>
  );
};

export default UserInfoForm;
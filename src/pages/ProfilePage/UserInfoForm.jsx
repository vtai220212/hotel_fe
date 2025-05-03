import React from 'react';
import {
  Form,
  FormGroup,
  Label,
  Input,
  FileInput,
  AvatarPreview,
  SubmitButton,
} from './styles/UserInfoFormStyles';

const UserInfoForm = ({ formData, handleInputChange, handleFileChange, handleSubmit, loading }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <FormGroup>
        <Label>Username *</Label>
        <Input
          type="text"
          name="username"
          value={formData.username}
          onChange={handleInputChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label>Email *</Label>
        <Input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          required
        />
      </FormGroup>
      <FormGroup>
        <Label>Họ và tên</Label>
        <Input
          type="text"
          name="fullName"
          value={formData.fullName}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>Số điện thoại</Label>
        <Input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>Địa chỉ</Label>
        <Input
          type="text"
          name="address"
          value={formData.address}
          onChange={handleInputChange}
        />
      </FormGroup>
      <FormGroup>
        <Label>Avatar</Label>
        {formData.avatar && typeof formData.avatar === 'string' && (
          <AvatarPreview src={`http://localhost:3001${formData.avatar}`} alt="Avatar Preview" />
        )}
        <FileInput
          type="file"
          name="avatar"
          accept="image/*"
          onChange={handleFileChange}
        />
      </FormGroup>
      <SubmitButton type="submit" disabled={loading}>
        {loading ? 'Đang cập nhật...' : 'Cập nhật thông tin'}
      </SubmitButton>
    </Form>
  );
};

export default UserInfoForm;
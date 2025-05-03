import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px; /* Tăng khoảng cách giữa các trường */
  padding: 20px;
  background: #fff;
  border-radius: 10px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1); 

  @media (max-width: 768px) {
    margin: 0; /* Xóa margin ngang trên mobile */
    padding: 15px;
    border-radius: 0; /* Xóa bo góc trên mobile để tận dụng không gian */
    box-shadow: none; /* Xóa bóng trên mobile */
  }
`;

export const Label = styled.label`
  font-size: 16px; /* Tăng kích thước chữ */
  font-weight: 500;
  color: #333; /* Màu đậm hơn để dễ đọc */
  margin-bottom: 5px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Input = styled.input`
  padding: 12px; 
  border: 1px solid #d0d0d0;
  border-radius: 8px;
  font-size: 16px; /* Tăng kích thước chữ */
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #FFD700;
    box-shadow: 0 0 5px rgba(255, 215, 0, 0.3);
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }
`;

export const Select = styled.select`
  padding: 12px; /* Tăng padding */
  border: 1px solid #d0d0d0;
  border-radius: 8px;
  font-size: 16px; /* Tăng kích thước chữ */
  width: 100%;
  box-sizing: border-box;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #FFD700;
    box-shadow: 0 0 5px rgba(255, 215, 0, 0.3);
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }
`;

export const FileInput = styled.input`
  padding: 12px 0; /* Tăng padding dọc */
  font-size: 16px;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

export const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => !['secondary'].includes(prop),
})`
  padding: 12px; /* Tăng padding cho nút dễ bấm */
  background: ${props => (props.secondary ? '#6c757d' : '#FFD700')};
  color: ${props => (props.secondary ? '#fff' : '#1a1a1a')};
  border: none;
  border-radius: 8px;
  font-size: 16px; /* Tăng kích thước chữ */
  font-weight: 600;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.2s ease;

  &:hover {
    background: ${props => (props.secondary ? '#5a6268' : '#DAA520')};
    transform: translateY(-2px);
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
    transform: none;
  }

  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }
`;

export const ImagePreview = styled.img`
  width: 100%;
  max-width: 250px; /* Tăng kích thước ảnh preview */
  margin-top: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;
import styled from 'styled-components';

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  overflow-y: auto; /* Đảm bảo overlay cuộn được nếu nội dung tràn */
`;

export const Modal = styled.div`
  background-color: #FFFFFF;
  padding: 20px; /* Giảm padding để modal nhỏ gọn hơn */
  border-radius: 8px; /* Giảm bo góc */
  width: 600px; /* Giảm chiều rộng */
  max-width: 90%;
  max-height: 70vh; /* Giảm chiều cao tối đa để tránh tràn */
  overflow-y: auto; /* Đảm bảo cuộn được */
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);
  box-sizing: border-box;

  /* Thanh cuộn tùy chỉnh */
  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-track {
    background: #f1f1f1;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 3px;
  }
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  @media (max-width: 1024px) {
    width: 80%;
    padding: 15px;
    max-height: 65vh;
  }
  @media (max-width: 768px) {
    width: 85%;
    padding: 12px;
    max-height: 60vh; /* Giảm chiều cao trên tablet */
    border-radius: 6px;
  }
  @media (max-width: 480px) {
    width: 90%;
    padding: 10px;
    max-height: 55vh; /* Giảm chiều cao trên mobile */
    border-radius: 4px;
  }
`;

export const ModalTitle = styled.h2`
  font-size: 20px; /* Giảm kích thước tiêu đề */
  margin-bottom: 15px; /* Giảm khoảng cách */
  color: #000000;
  text-align: center;
  font-weight: 600;
  line-height: 1.3;

  @media (max-width: 1024px) {
    font-size: 18px;
    margin-bottom: 12px;
  }
  @media (max-width: 768px) {
    font-size: 16px;
    margin-bottom: 10px;
  }
  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 8px;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 15px 20px; /* Giảm khoảng cách giữa các trường và cột */

  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Chuyển về 1 cột */
    gap: 10px;
  }
  @media (max-width: 480px) {
    gap: 8px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 6px; /* Giảm khoảng cách giữa label và input */

  @media (max-width: 480px) {
    gap: 4px;
  }
`;

export const FormLabel = styled.label`
  font-size: 12px; /* Giảm font size */
  color: #1A1A1A;
  font-weight: 500;
  line-height: 1.4;

  @media (max-width: 1024px) {
    font-size: 11px;
  }
  @media (max-width: 768px) {
    font-size: 12px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Input = styled.input`
  padding: ${props => (props.type === 'file' ? '6px 10px' : '8px 10px')}; \
  border: 1px solid #BBBBBB;
  border-radius: 4px; /* Giảm bo góc */
  font-size: 12px; /* Giảm font size */
  color: #1A1A1A;
  background-color: #F5F5F5;
  transition: border-color 0.3s, box-shadow 0.3s;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #000000;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.15); /* Giảm bóng */
    background-color: #FFFFFF;
  }

  &::placeholder {
    color: #999999;
    font-style: bold;
  }

  &[type="file"] {
    padding: 6px 10px;
    cursor: pointer;
  }

  &[type="file"]::-webkit-file-upload-button {
    background: #F5F5F5;
    color: #1A1A1A;
    border: 1px solid #BBBBBB;
    border-radius: 4px;
    padding: 4px 8px; /* Giảm padding */
    margin-right: 8px;
    cursor: pointer;
    transition: background 0.3s ease;

    &:hover {
      background: #E5E5E5;
    }
  }

  @media (max-width: 1024px) {
    padding: ${props => (props.type === 'file' ? '6px 8px' : '7px 8px')};
    font-size: 11px;
  }
  @media (max-width: 768px) {
    padding: ${props => (props.type === 'file' ? '6px 10px' : '8px 10px')};
    font-size: 12px;
  }
  @media (max-width: 480px) {
    padding: ${props => (props.type === 'file' ? '6px 8px' : '8px 8px')};
    font-size: 12px;
  }
`;

export const Select = styled.select`
  padding: 8px 10px; /* Giảm padding */
  border: 1px solid #BBBBBB;
  border-radius: 4px;
  font-size: 12px;
  color: #1A1A1A;
  background-color: #F5F5F5;
  transition: border-color 0.3s, box-shadow 0.3s;
  appearance: none;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%231A1A1A%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22/%3E%3C/svg%3E');
  background-repeat: no-repeat;
  background-position: right 8px center;
  background-size: 8px;
  width: 100%;
  box-sizing: border-box;

  &:focus {
    outline: none;
    border-color: #000000;
    box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
    background-color: #FFFFFF;
  }

  @media (max-width: 1024px) {
    padding: 7px 8px;
    font-size: 11px;
    background-position: right 6px center;
    background-size: 7px;
  }
  @media (max-width: 768px) {
    padding: 8px 10px;
    font-size: 12px;
    background-position: right 8px center;
    background-size: 8px;
  }
  @media (max-width: 480px) {
    padding: 8px 8px;
    font-size: 12px;
    background-position: right 6px center;
    background-size: 6px;
  }
`;

export const ImagePreview = styled.img`
  width: 100%;
  max-width: 120px; /* Giảm kích thước ảnh preview */
  height: auto;
  margin-top: 8px;
  border-radius: 6px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.3);

  @media (max-width: 768px) {
    max-width: 100px;
  }
  @media (max-width: 480px) {
    max-width: 80px;
  }
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 10px; /* Giảm khoảng cách giữa các nút */
  margin-top: 15px; /* Giảm khoảng cách trên */
  grid-column: 1 / -1;

  @media (max-width: 768px) {
    gap: 8px;
    margin-top: 12px;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 6px;
    margin-top: 10px;
  }
`;

export const SubmitButton = styled.button`
  background-color: #000000;
  color: #FFFFFF;
  padding: 8px 20px; /* Giảm padding */
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px; /* Giảm font size */
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: #333333;
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }

  @media (max-width: 1024px) {
    padding: 7px 18px;
    font-size: 11px;
  }
  @media (max-width: 768px) {
    padding: 8px 20px;
    font-size: 12px;
  }
  @media (max-width: 480px) {
    padding: 8px;
    font-size: 12px;
    width: 100%;
  }
`;

export const CancelButton = styled.button`
  background-color: #666666;
  color: #FFFFFF;
  padding: 8px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 12px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: #555555;
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }

  @media (max-width: 1024px) {
    padding: 7px 18px;
    font-size: 11px;
  }
  @media (max-width: 768px) {
    padding: 8px 20px;
    font-size: 12px;
  }
  @media (max-width: 480px) {
    padding: 8px;
    font-size: 12px;
    width: 100%;
  }
`;
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
`;

export const Modal = styled.div`
  background-color: #FFFFFF;
  padding: 30px; /* Giảm padding để modal nhỏ gọn hơn */
  border-radius: 12px;
  width: 800px; /* Tăng chiều rộng để chứa 2 cột */
  max-width: 90%;
  max-height: 75vh; /* Giảm chiều cao tối đa để modal không quá dài */
  overflow-y: auto;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.3);

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
    width: 90%;
    padding: 25px;
  }
  @media (max-width: 768px) {
    padding: 20px;
    max-height: 70vh;
  }
  @media (max-width: 480px) {
    padding: 15px;
    max-height: 65vh;
  }
`;

export const ModalTitle = styled.h2`
  font-size: 24px; /* Giảm kích thước tiêu đề */
  margin-bottom: 20px; /* Giảm khoảng cách dưới tiêu đề */
  color: #000000;
  text-align: center;
  font-weight: 600;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 15px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 12px;
  }
`;

export const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr; /* Sắp xếp thành 2 cột trên desktop */
  gap: 20px 30px; /* Giảm khoảng cách giữa các trường, tăng khoảng cách giữa các cột */
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr; /* Chuyển về 1 cột trên tablet và mobile */
    gap: 15px; /* Giảm khoảng cách trên mobile */
  }
  @media (max-width: 480px) {
    gap: 12px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px; /* Giảm khoảng cách giữa label và input */

  @media (max-width: 480px) {
    gap: 6px;
  }
`;

export const FormLabel = styled.label`
  font-size: 14px; /* Giảm font size để nhỏ gọn hơn */
  color: #1A1A1A;
  font-weight: 500;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 13px;
  }
  @media (max-width: 480px) {
    font-size: 12px;
  }
`;

export const Input = styled.input`
  padding: 10px 12px; /* Giảm padding để input nhỏ gọn hơn */
  border: 1px solid #BBBBBB;
  border-radius: 6px;
  font-size: 14px; /* Giảm font size */
  color: #1A1A1A;
  background-color: #F5F5F5;
  transition: border-color 0.3s, box-shadow 0.3s;

  &:focus {
    outline: none;
    border-color: #000000;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
    background-color: #FFFFFF;
  }

  &::placeholder {
    color: #999999;
    font-style: italic;
  }

  @media (max-width: 768px) {
    padding: 8px 10px;
    font-size: 13px;
  }
  @media (max-width: 480px) {
    padding: 6px 8px;
    font-size: 12px;
  }
`;

export const Select = styled.select`
  padding: 10px 12px;
  border: 1px solid #BBBBBB;
  border-radius: 6px;
  font-size: 14px;
  color: #1A1A1A;
  background-color: #F5F5F5;
  transition: border-color 0.3s, box-shadow 0.3s;
  appearance: none;
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%231A1A1A%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22/%3E%3C/svg%3E');
  background-repeat: no-repeat;
  background-position: right 10px center;
  background-size: 10px;

  &:focus {
    outline: none;
    border-color: #000000;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
    background-color: #FFFFFF;
  }

  @media (max-width: 768px) {
    padding: 8px 10px;
    font-size: 13px;
    background-position: right 8px center;
    background-size: 8px;
  }
  @media (max-width: 480px) {
    padding: 6px 8px;
    font-size: 12px;
    background-position: right 6px center;
    background-size: 6px;
  }
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px; /* Giảm khoảng cách giữa các nút */
  margin-top: 25px; /* Giảm khoảng cách trên cùng */
  grid-column: 1 / -1; /* Đảm bảo nút chiếm toàn bộ chiều rộng (cả 2 cột) */

  @media (max-width: 768px) {
    gap: 12px;
    margin-top: 20px;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
    margin-top: 15px;
  }
`;

export const SubmitButton = styled.button`
  background-color: #000000;
  color: #FFFFFF;
  padding: 10px 30px; /* Giảm padding để nút nhỏ gọn hơn */
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px; /* Giảm font size */
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: #333333;
    transform: translateY(-1px);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }

  @media (max-width: 768px) {
    padding: 8px 25px;
    font-size: 13px;
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
  padding: 10px 30px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: #555555;
    transform: translateY(-1px);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  }

  &:active {
    transform: translateY(0);
    box-shadow: none;
  }

  @media (max-width: 768px) {
    padding: 8px 25px;
    font-size: 13px;
  }
  @media (max-width: 480px) {
    padding: 8px;
    font-size: 12px;
    width: 100%;
  }
`;
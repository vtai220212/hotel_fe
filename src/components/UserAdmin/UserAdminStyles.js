// frontend/src/components/UserAdmin/UserAdminStyles.js
import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #1C2526; // Đen đậm làm nền chính
  border-radius: 10px;
  min-height: 100vh;

  // Responsive: Giảm padding trên mobile
  @media (max-width: 768px) {
    padding: 15px;
  }
  @media (max-width: 480px) {
    padding: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 28px;
  margin-bottom: 20px;
  color: #FFD700; // Vàng sáng cho tiêu đề
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 1px;

  // Responsive: Giảm font-size trên mobile
  @media (max-width: 768px) {
    font-size: 24px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 15px;
  }
`;

export const AddButton = styled.button`
  background-color: #FFD700; // Vàng sáng cho nút
  color: #1C2526; // Đen đậm cho chữ
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 20px;
  font-size: 16px;
  font-weight: 600;
  transition: background-color 0.3s, transform 0.2s;

  &:hover {
    background-color: #DAA520; // Vàng đậm khi hover
    transform: translateY(-2px);
  }
  &:disabled {
    background-color: #666; // Xám đen khi disabled
    cursor: not-allowed;
    transform: none;
  }

  // Responsive: Điều chỉnh kích thước trên mobile
  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
  }
  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 12px;
    width: 100%;
  }
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
  background-color: #333; // Xám đen cho nền bảng
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);

  // Responsive: Đảm bảo bảng cuộn ngang trên mobile
  @media (max-width: 768px) {
    margin: 0 -15px;
    padding: 0 15px;
  }
  @media (max-width: 480px) {
    margin: 0 -10px;
    padding: 0 10px;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
`;

export const Th = styled.th`
  padding: 15px;
  text-align: left;
  background-color: #FFD700; // Vàng sáng cho header
  color: #1C2526; // Đen đậm cho chữ
  font-weight: 600;
  border-bottom: 2px solid #DAA520; // Vàng đậm cho viền dưới

  // Responsive: Giảm padding trên mobile
  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }
  @media (max-width: 480px) {
    padding: 8px;
    font-size: 12px;
  }
`;

export const Td = styled.td`
  padding: 15px;
  border-bottom: 1px solid #444; // Xám đen nhạt cho viền
  color: #FFD700; // Vàng sáng cho chữ trong ô

  // Responsive: Giảm padding trên mobile
  @media (max-width: 768px) {
    padding: 10px;
    font-size: 14px;
  }
  @media (max-width: 480px) {
    padding: 8px;
    font-size: 12px;
  }
`;

export const Tr = styled.tr`
  &:hover {
    background-color: #444; // Xám đen nhạt khi hover
  }
`;

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.8); // Nền tối hơn
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

export const Modal = styled.div`
  background-color: #333; // Xám đen cho modal
  padding: 30px;
  border-radius: 10px;
  width: 500px;
  max-width: 90%;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);

  // Responsive: Điều chỉnh kích thước trên mobile
  @media (max-width: 768px) {
    padding: 20px;
    width: 90%;
  }
  @media (max-width: 480px) {
    padding: 15px;
    width: 95%;
  }
`;

export const ModalTitle = styled.h2`
  font-size: 24px;
  margin-bottom: 20px;
  color: #FFD700; // Vàng sáng cho tiêu đề modal
  text-align: center;

  // Responsive: Giảm font-size trên mobile
  @media (max-width: 768px) {
    font-size: 20px;
  }
  @media (max-width: 480px) {
    font-size: 18px;
    margin-bottom: 15px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 20px;

  // Responsive: Giảm gap trên mobile
  @media (max-width: 480px) {
    gap: 15px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormLabel = styled.label`
  font-size: 16px;
  margin-bottom: 8px;
  color: #FFD700; // Vàng sáng cho nhãn
  font-weight: 500;

  // Responsive: Giảm font-size trên mobile
  @media (max-width: 480px) {
    font-size: 14px;
    margin-bottom: 5px;
  }
`;

export const Input = styled.input`
  padding: 12px;
  border: 1px solid #666; // Xám đen cho viền
  border-radius: 5px;
  font-size: 16px;
  color: #FFD700; // Vàng sáng cho chữ
  background-color: #1C2526; // Đen đậm cho nền input
  &:focus {
    outline: none;
    border-color: #DAA520; // Vàng đậm khi focus
    box-shadow: 0 0 5px rgba(218, 165, 32, 0.5);
  }

  // Responsive: Giảm padding trên mobile
  @media (max-width: 480px) {
    padding: 10px;
    font-size: 14px;
  }
`;

export const Select = styled.select`
  padding: 12px;
  border: 1px solid #666; // Xám đen cho viền
  border-radius: 5px;
  font-size: 16px;
  color: #FFD700; // Vàng sáng cho chữ
  background-color: #1C2526; // Đen đậm cho nền select
  &:focus {
    outline: none;
    border-color: #DAA520; // Vàng đậm khi focus
    box-shadow: 0 0 5px rgba(218, 165, 32, 0.5);
  }

  // Responsive: Giảm padding trên mobile
  @media (max-width: 480px) {
    padding: 10px;
    font-size: 14px;
  }
`;

export const ModalActions = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 15px;
  margin-top: 20px;

  // Responsive: Điều chỉnh layout trên mobile
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const SubmitButton = styled.button`
  background-color: #FFD700; // Vàng sáng cho nút
  color: #1C2526; // Đen đậm cho chữ
  padding: 12px 25px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: background-color 0.3s, transform 0.2s;
  &:hover {
    background-color: #DAA520; // Vàng đậm khi hover
    transform: translateY(-2px);
  }

  // Responsive: Điều chỉnh kích thước trên mobile
  @media (max-width: 480px) {
    padding: 10px;
    font-size: 14px;
    width: 100%;
  }
`;

export const CancelButton = styled.button`
  background-color: #666; // Xám đen cho nút Cancel
  color: #FFD700; // Vàng sáng cho chữ
  padding: 12px 25px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: background-color 0.3s, transform 0.2s;
  &:hover {
    background-color: #555; // Xám đen nhạt khi hover
    transform: translateY(-2px);
  }

  // Responsive: Điều chỉnh kích thước trên mobile
  @media (max-width: 480px) {
    padding: 10px;
    font-size: 14px;
    width: 100%;
  }
`;

export const DeleteConfirmButton = styled.button`
  background-color: #FFD700; // Vàng sáng cho nút Delete
  color: #1C2526; // Đen đậm cho chữ
  padding: 12px 25px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  transition: background-color 0.3s, transform 0.2s;
  &:hover {
    background-color: #DAA520; // Vàng đậm khi hover
    transform: translateY(-2px);
  }

  // Responsive: Điều chỉnh kích thước trên mobile
  @media (max-width: 480px) {
    padding: 10px;
    font-size: 14px;
    width: 100%;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;

  // Responsive: Điều chỉnh layout trên mobile
  @media (max-width: 480px) {
    flex-direction: column;
    gap: 8px;
  }
`;

export const EditButton = styled.button`
  background-color: #FFD700; // Vàng sáng cho nút Edit
  color: #1C2526; // Đen đậm cho chữ
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: background-color 0.3s, transform 0.2s;
  &:hover {
    background-color: #DAA520; // Vàng đậm khi hover
    transform: translateY(-2px);
  }

  // Responsive: Điều chỉnh kích thước trên mobile
  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 12px;
    width: 100%;
  }
`;

export const DeleteButton = styled.button`
  background-color: #666; // Xám đen cho nút Delete
  color: #FFD700; // Vàng sáng cho chữ
  padding: 8px 15px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: background-color 0.3s, transform 0.2s;
  &:hover {
    background-color: #555; // Xám đen nhạt khi hover
    transform: translateY(-2px);
  }

  // Responsive: Điều chỉnh kích thước trên mobile
  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 12px;
    width: 100%;
  }
`;
import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
  background-color: #f5f5f5;
  min-height: 100vh;
`;

export const Title = styled.h1`
  font-size: 28px;
  color: #000000;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 15px;
  }
  @media (max-width: 480px) {
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

export const AddButton = styled.button`
  background-color: #000000;
  color: #FFFFFF;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 20px;
  transition: all 0.3s ease;

  &:hover {
    background-color: #333333;
    transform: translateY(-1px);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.15);
  }

  &:disabled {
    background-color: #666666;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 14px;
    margin-bottom: 15px;
  }
  @media (max-width: 480px) {
    padding: 6px 12px;
    font-size: 12px;
    margin-bottom: 10px;
    width: 100%;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
`;

export const EditButton = styled.button`
  background-color: #000000;
  color: #FFFFFF;
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: #333333;
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 5px 10px;
    font-size: 12px;
  }
  @media (max-width: 480px) {
    padding: 4px 8px;
    font-size: 10px;
  }
`;

export const DeleteButton = styled.button`
  background-color: #666666;
  color: #FFFFFF;
  padding: 6px 12px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;

  &:hover {
    background-color: #555555;
    transform: translateY(-1px);
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  }

  @media (max-width: 768px) {
    padding: 5px 10px;
    font-size: 12px;
  }
  @media (max-width: 480px) {
    padding: 4px 8px;
    font-size: 10px;
  }
`;

export const UserInfoWrapper = styled.div`
  padding: 10px;
  background-color: #FFFFFF;
  border-radius: 4px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);

  .mobile-view {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }

  .info-row {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 10px;
  }

  @media (max-width: 768px) {
    padding: 8px;
  }

  @media (max-width: 480px) {
    padding: 6px;
  }
`;

export const InfoLabel = styled.strong`
  font-size: 12px;
  color: #1A1A1A;
  font-weight: 600;
  flex: 1;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 14px; /* Tăng từ 12px lên 14px trên mobile */
  }

  @media (max-width: 480px) {
    font-size: 13px; /* Tăng từ 11px lên 13px trên màn hình nhỏ hơn */
  }
`;

export const InfoValue = styled.div`
  font-size: 12px;
  color: #333333;
  flex: 1;
  text-align: right;
  word-break: break-word;

  img {
    vertical-align: middle;
  }

  @media (max-width: 768px) {
    font-size: 14px; /* Tăng từ 12px lên 14px trên mobile */
  }

  @media (max-width: 480px) {
    font-size: 13px; /* Tăng từ 11px lên 13px trên màn hình nhỏ hơn */
  }
`;
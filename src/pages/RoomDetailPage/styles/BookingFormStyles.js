import styled from 'styled-components';

export const BookingContainer = styled.div`
  padding: 24px;
  width: 400px;
  box-shadow: 0px 3px 6px rgba(0, 0, 0, 0.16);
  border-radius: 8px;
  background-color: #fff;
  font-family: "Gidole", serif; /* Sử dụng font của trang web */

  @media (max-width: 1024px) {
    width: 320px;
    padding: 16px;
  }

  @media (max-width: 768px) {
    width: 100%;
    padding: 12px;
  }
`;

export const Title = styled.h6`
  margin-bottom: 16px;
  font-size: 1.5rem;
  font-weight: 600;
  font-family: "Gidole", serif; /* Đồng bộ font cho tiêu đề */

  @media (max-width: 768px) {
    font-size: 1.25rem;
    margin-bottom: 12px;
  }
`;

export const DatePickerContainer = styled.div`
  display: flex;
  gap: 16px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    margin-bottom: 16px;
  }
`;

export const DatePickerBox = styled.div`
  flex: 1;
  max-width: calc(50% - 8px);

  @media (max-width: 768px) {
    max-width: 100%;
  }
`;

export const DatePickerLabel = styled.p`
  margin-bottom: 8px;
  font-size: 0.875rem;
  font-family: "Gidole", serif; /* Đồng bộ font cho nhãn */

  @media (max-width: 768px) {
    font-size: 0.75rem;
    margin-bottom: 6px;
  }
`;

export const GuestField = styled.div`
  margin-bottom: 16px;

  & > * {
    width: 100%;
  }

  @media (max-width: 768px) {
    margin-bottom: 12px;
  }
`;

export const PriceInfo = styled.div`
  margin-bottom: 16px;

  @media (max-width: 768px) {
    margin-bottom: 12px;
  }
`;

export const PriceText = styled.p`
  margin-bottom: 8px;
  font-family: "Gidole", serif; /* Đồng bộ font cho giá */

  @media (max-width: 768px) {
    font-size: 0.875rem;
    margin-bottom: 6px;
  }
`;

export const InputField = styled.div`
  margin-bottom: 16px;

  & > * {
    width: 100%;
  }

  @media (max-width: 768px) {
    margin-bottom: 12px;
  }
`;

export const AlertStyled = styled.div`
  margin-bottom: 16px;

  @media (max-width: 768px) {
    margin-bottom: 12px;
  }
`;

export const SubmitButton = styled.button`
  width: 100%;
  padding: 8px;
  background-color: #1976d2;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-family: "Gidole", serif; /* Đồng bộ font cho nút */

  &:hover {
    background-color: #1565c0;
  }

  &:disabled {
    background-color: #bdbdbd;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    padding: 6px;
    font-size: 0.875rem;
  }
`;
import styled from 'styled-components';

export const SearchBarWrapper = styled.div`
  position: absolute;
  bottom: 50px;
  left: 50%;
  transform: translateX(-50%);
  width: 90%;
  max-width: 1200px;
  z-index: 10;

  /* Responsive */
  @media (max-width: 768px) {
    bottom: 20px; /* Giảm khoảng cách dưới trên tablet/mobile */
    width: 95%;
  }

  @media (max-width: 576px) {
    bottom: 10px;
    width: 100%;
    padding: 0 10px;
  }
`;

export const SearchContainer = styled.div`
  display: flex;
  align-items: center;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 50px;
  padding: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.1);
  gap: 10px;

  /* Responsive */
  @media (max-width: 768px) {
    flex-direction: column; /* Chuyển thành dọc trên tablet */
    border-radius: 20px;
    padding: 15px;
    gap: 15px;
  }

  @media (max-width: 576px) {
    padding: 10px;
  }
`;

export const SearchGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  flex: 1;
  min-width: 180px;
  position: relative;

  .icon {
    color: #666;
    font-size: 1.2rem;
  }

  .date-picker-input {
    border: none;
    background: transparent;
    font-size: 0.95rem;
    color: #333;
    width: 100%;
    cursor: pointer;

    &:focus {
      outline: none;
    }

    &::placeholder {
      color: #666;
    }
  }

  .react-datepicker-wrapper {
    width: 100%;
  }

  .react-datepicker-popper {
    position: fixed !important;
    bottom: 70px !important;
    left: 50% !important;
    top: auto !important;
    transform: translateX(-50%) !important;
    width: 800px;
    background: white;
    border-radius: 16px;
    box-shadow: 0 4px 24px rgba(0, 0, 0, 0.15);
    padding: 32px;
    z-index: 1000;

    /* Responsive */
    @media (max-width: 768px) {
      width: 90%;
      padding: 20px;
    }

    @media (max-width: 576px) {
      width: 95%;
      padding: 15px;
      bottom: 50px !important;
    }
  }

  .react-datepicker {
    width: 100%;
    font-family: inherit;
    border: none;
    background: transparent;
    display: flex !important;
    justify-content: space-between;

    /* Responsive */
    @media (max-width: 576px) {
      flex-direction: column;
      gap: 20px;
    }
  }

  .react-datepicker__month-container {
    float: none;
    width: 48%;

    /* Responsive */
    @media (max-width: 576px) {
      width: 100%;
    }
  }

  .react-datepicker__header {
    background: transparent;
    border: none;
    padding-top: 0;
    text-align: left;
  }

  .react-datepicker__current-month {
    font-size: 1.1rem;
    font-weight: 500;
    color: #333;
    margin-bottom: 24px;
    text-transform: capitalize;

    /* Responsive */
    @media (max-width: 576px) {
      font-size: 1rem;
      margin-bottom: 16px;
    }
  }

  .react-datepicker__day-names {
    display: flex;
    justify-content: space-between;
    margin-bottom: 16px;
  }

  .react-datepicker__day-name {
    color: #666;
    font-size: 0.8rem;
    width: 40px;
    margin: 0;
    text-transform: uppercase;

    /* Responsive */
    @media (max-width: 576px) {
      font-size: 0.7rem;
      width: 35px;
    }
  }

  .react-datepicker__month {
    margin: 0;
  }

  .react-datepicker__week {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
  }

  .react-datepicker__day {
    margin: 0;
    width: 40px;
    height: 40px;
    line-height: 40px;
    border-radius: 0;
    color: #333;
    font-size: 0.9rem;
    font-weight: 400;

    &:hover {
      background-color: #f5f5f5;
      border-radius: 0;
    }

    /* Responsive */
    @media (max-width: 576px) {
      width: 35px;
      height: 35px;
      line-height: 35px;
      font-size: 0.85rem;
    }
  }

  .react-datepicker__day--selected,
  .react-datepicker__day--in-range {
    background-color: #6B2B77;
    color: white;
    border-radius: 0;

    &:hover {
      background-color: #561D61;
      border-radius: 0;
    }
  }

  .react-datepicker__day--keyboard-selected {
    background-color: transparent;
    color: #333;
    border-radius: 0;
  }

  .react-datepicker__navigation {
    top: 32px;
    width: 32px;
    height: 32px;
    border: none;
    background: transparent;

    &:hover {
      background: transparent;
    }

    /* Responsive */
    @media (max-width: 576px) {
      top: 20px;
      width: 24px;
      height: 24px;
    }
  }

  .react-datepicker__navigation--previous {
    left: auto;
    right: 64px;
  }

  .react-datepicker__navigation--next {
    right: 32px;
  }

  .react-datepicker__navigation-icon::before {
    border-color: #333;
    border-width: 2px 2px 0 0;
    top: 12px;

    /* Responsive */
    @media (max-width: 576px) {
      top: 8px;
    }
  }

  .react-datepicker__close-icon {
    position: absolute;
    top: 24px;
    right: 24px;
    padding: 0;

    &::after {
      background-color: transparent;
      color: #666;
      font-size: 1.2rem;
      content: "×";
      height: auto;
      width: auto;
      padding: 0;
    }

    /* Responsive */
    @media (max-width: 576px) {
      top: 16px;
      right: 16px;
    }
  }

  .react-datepicker__day--outside-month {
    color: #ccc;
  }

  /* Responsive */
  @media (max-width: 768px) {
    min-width: unset; /* Bỏ min-width trên tablet/mobile */
    flex: none;
    width: 100%;
  }

  @media (max-width: 576px) {
    .icon {
      font-size: 1rem;
    }
  }
`;

export const SearchInput = styled.input`
  border: none;
  background: transparent;
  font-size: 0.95rem;
  color: #333;
  width: 100%;

  &:focus {
    outline: none;
  }

  &::placeholder {
    color: #666;
  }

  /* Responsive */
  @media (max-width: 768px) {
    font-size: 0.9rem;
  }

  @media (max-width: 576px) {
    font-size: 0.85rem;
  }
`;

export const SearchButton = styled.button`
  background: #6B2B77;
  color: white;
  border: none;
  border-radius: 6px;
  padding: 12px 24px;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  white-space: nowrap;
  transition: background-color 0.2s;
  min-width: 120px;
  justify-content: center;

  &:hover {
    background: #561D61;
  }

  /* Responsive */
  @media (max-width: 768px) {
    width: 100%;
    border-radius: 20px;
    padding: 10px;
    font-size: 0.9rem;
    min-width: unset;
  }

  @media (max-width: 576px) {
    padding: 8px;
    font-size: 0.85rem;
  }
`;

export const Divider = styled.div`
  width: 1px;
  height: 24px;
  background: rgba(255, 255, 255, 0.2);

  /* Responsive */
  @media (max-width: 768px) {
    display: none; /* Ẩn divider trên tablet/mobile */
  }
`;
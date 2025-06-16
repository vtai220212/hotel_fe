import styled from 'styled-components';

export const BookingPageWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px 20px;
  background-color: #f5f7fa;
  min-height: 100vh;

  h1 {
    font-size: 32px;
    color: #2d3748;
    margin-bottom: 30px;
    text-align: center;
    font-weight: 600;
  }

  .card {
    background-color: #ffffff;
    padding: 30px;
    border-radius: 12px;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
    margin-bottom: 30px;
    transition: transform 0.2s ease-in-out;

    &:hover {
      transform: translateY(-5px);
    }

    h2 {
      font-size: 24px;
      color: #1a202c;
      margin-bottom: 20px;
      border-bottom: 2px solid #e2e8f0;
      padding-bottom: 10px;
    }

    p {
      font-size: 16px;
      color: #4a5568;
      margin: 10px 0;
      line-height: 1.5;

      strong {
        color: #2d3748;
        font-weight: 600;
      }
    }
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  label {
    display: block;
    font-size: 16px;
    color: #2d3748;
    margin-bottom: 8px;
    font-weight: 500;
  }

  input {
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    font-size: 16px;
    background-color: #f7fafc;
    transition: border-color 0.3s ease;

    &:focus {
      outline: none;
      border-color: #3182ce;
      box-shadow: 0 0 0 3px rgba(49, 130, 206, 0.1);
    }
  }

  button {
    padding: 14px 24px;
    background-color: #3182ce;
    color: #ffffff;
    border: none;
    border-radius: 8px;
    font-size: 18px;
    font-weight: 500;
    cursor: pointer;
    transition: background-color 0.3s ease, transform 0.1s ease;
    align-self: center;

    &:hover {
      background-color: #2b6cb0;
      transform: translateY(-2px);
    }

    &:active {
      transform: translateY(0);
    }
  }

  /* Tùy chỉnh React Date Range */
  .rdrCalendarWrapper {
    font-size: 14px;
    border: 1px solid #e2e8f0;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .rdrMonthAndYearWrapper {
    background-color: #3182ce;
    color: #ffffff;
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
    padding: 12px 0;
  }

  .rdrDayNumber span {
    color: #2d3748;
  }

  .rdrDay:hover:not(.rdrDayPassive) .rdrDayNumber span {
    background-color: #e2e8f0;
    border-radius: 4px;
  }

  .rdrDayToday .rdrDayNumber span:after {
    background: #3182ce;
  }

  .rdrDayStartPreview,
  .rdrDayInPreview,
  .rdrDayEndPreview {
    background-color: rgba(49, 130, 206, 0.2);
  }

  .rdrDayStart .rdrDayNumber span,
  .rdrDayEnd .rdrDayNumber span,
  .rdrDayInRange .rdrDayNumber span {
    background-color: #3182ce;
    color: #ffffff;
    border-radius: 4px;
  }

  /* Responsive */
  @media (max-width: 768px) {
    padding: 20px 15px;

    h1 {
      font-size: 28px;
    }

    .card {
      padding: 20px;
    }

    button {
      width: 100%;
      font-size: 16px;
    }

    .rdrCalendarWrapper {
      font-size: 12px;
    }
  }
`;
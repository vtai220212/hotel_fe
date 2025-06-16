import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  padding: 20px;
  box-sizing: border-box;

  @media (max-width: 768px) {
    max-width: 100%;
    padding: 10px;
  }
`;

export const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #333;
  text-align: left;
`;

export const Input = styled.input`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  opacity: 1;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px;
  }
`;

export const Select = styled.select`
  padding: 10px;
  font-size: 14px;
  border: 1px solid #ddd;
  border-radius: 4px;
  width: 100%;
  box-sizing: border-box;
  background-color: #fff;
  opacity: 1;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px;
  }
`;

export const FileInput = styled.input`
  padding: 10px 0;
  font-size: 14px;
  width: 100%;
  box-sizing: border-box;
  border: 1px solid #ddd;
  border-radius: 4px;
  background-color: #fff;
  opacity: 1;

  &:focus {
    outline: none;
    border-color: #007bff;
    box-shadow: 0 0 5px rgba(0, 123, 255, 0.3);
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px 0;
  }
`;

export const ImagePreview = styled.img`
  width: 100%;
  max-width: 250px;
  margin-top: 10px;
  border-radius: 4px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

export const Button = styled.button.withConfig({
  shouldForwardProp: (prop) => prop !== 'secondary',
})`
  padding: 10px;
  font-size: 14px;
  font-weight: 500;
  color: #fff;
  background: ${props => (props.secondary ? '#6c757d' : '#007bff')};
  border: none;
  border-radius: 4px;
  cursor: pointer;
  width: 100%;
  box-sizing: border-box;

  &:hover {
    background: ${props => (props.secondary ? '#5a6268' : '#0056b3')};
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px;
  }
`;
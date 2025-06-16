import styled from 'styled-components';

export const UserInfoFormStyled = styled.div`
  background-color: white;
  padding: 20px;
  border: 1px solid #eee;
  border-radius: 5px;
  margin-bottom: 20px;

  h2 {
    margin-top: 0;
    color: #333;
  }

  form {
    display: flex;
    flex-direction: column;
    gap: 15px;
  }
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  font-size: 16px;
  color: #555;
  margin-bottom: 5px;
`;

export const Input = styled.input`
  padding: 8px;
  font-size: 16px;
  border: 1px solid #ddd;
  border-radius: 4px;
`;
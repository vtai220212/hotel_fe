import styled from 'styled-components';

export const RoomsWrapper = styled.div`
  padding: 20px;
`;

export const Title = styled.h1`
  font-size: 1.5rem;
  margin-bottom: 20px;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
  max-width: 400px;
  margin-bottom: 30px;
`;

export const Input = styled.input`
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  background: #2e3b3e;
  color: white;
`;

export const Button = styled.button`
  padding: 10px;
  background: #ffd700;
  color: #000;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background 0.3s ease;

  &:hover {
    background: #b8860b;
  }
`;

export const List = styled.div`
  margin-top: 20px;
`;

export const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  background: #2e3b3e;
  border-radius: 8px;
  margin-bottom: 10px;
`;
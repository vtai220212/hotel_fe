// frontend/src/components/RoomsAdmin/RoomAdminStyles.js
import styled from 'styled-components';

export const Container = styled.div`
  padding: 40px;
  max-width: 1600px;
  margin: 0 auto;
  background: linear-gradient(145deg, #1c2526 0%, #2e3b3e 100%);
  border-radius: 20px;
  min-height: 100vh;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.6);
  position: relative;
  overflow: hidden;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: radial-gradient(circle at 10% 20%, rgba(255, 215, 0, 0.1) 0%, transparent 50%);
    pointer-events: none;
  }

  @media (max-width: 1024px) {
    padding: 30px;
    border-radius: 15px;
  }
  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 10px;
  }
  @media (max-width: 480px) {
    padding: 15px;
    border-radius: 8px;
  }
`;

export const Title = styled.h1`
  font-size: 36px;
  margin-bottom: 40px;
  color: #FFD700;
  text-align: center;
  text-transform: uppercase;
  letter-spacing: 3px;
  font-family: 'Montserrat', sans-serif;
  font-weight: 700;
  text-shadow: 0 3px 8px rgba(255, 215, 0, 0.4);
  position: relative;

  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, transparent, #FFD700, transparent);
  }

  @media (max-width: 768px) {
    font-size: 28px;
    margin-bottom: 30px;
  }
  @media (max-width: 480px) {
    font-size: 24px;
    margin-bottom: 20px;
  }
`;

export const AddButton = styled.button`
  background: linear-gradient(135deg, #FFD700 0%, #DAA520 100%);
  color: #1c2526;
  padding: 14px 30px;
  border: none;
  border-radius: 10px;
  cursor: pointer;
  margin-bottom: 40px;
  font-size: 18px;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
  transition: all 0.4s ease;
  box-shadow: 0 6px 20px rgba(255, 215, 0, 0.4);
  position: relative;
  overflow: hidden;

  &:hover {
    background: linear-gradient(135deg, #DAA520 0%, #FFD700 100%);
    transform: translateY(-4px);
    box-shadow: 0 8px 25px rgba(255, 215, 0, 0.6);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: 0.5s;
  }

  &:hover:before {
    left: 100%;
  }

  &:disabled {
    background: #666;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }

  @media (max-width: 768px) {
    padding: 12px 25px;
    font-size: 16px;
  }
  @media (max-width: 480px) {
    padding: 10px 20px;
    font-size: 14px;
    width: 100%;
  }
`;

export const TableWrapper = styled.div`
  overflow-x: auto;
  background: #2e3b3e;
  border-radius: 15px;
  box-shadow: 0 6px 25px rgba(0, 0, 0, 0.4);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
  }

  @media (max-width: 768px) {
    background: transparent;
    box-shadow: none;
    margin: 0;
    padding: 0;
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const Th = styled.th`
  padding: 20px;
  text-align: left;
  background: linear-gradient(135deg, #FFD700 0%, #DAA520 100%);
  color: #1c2526;
  font-weight: 700;
  font-family: 'Roboto', sans-serif;
  font-size: 16px;
  text-transform: uppercase;
  letter-spacing: 1px;
  border-bottom: 3px solid #DAA520;
  position: sticky;
  top: 0;
  z-index: 10;

  &:first-child {
    border-top-left-radius: 15px;
  }
  &:last-child {
    border-top-right-radius: 15px;
  }

  @media (max-width: 1024px) {
    padding: 15px;
    font-size: 14px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Td = styled.td`
  padding: 20px;
  border-bottom: 1px solid #444;
  color: #e0e0e0;
  font-family: 'Roboto', sans-serif;
  font-size: 15px;
  transition: background 0.3s ease;

  &:last-child {
    display: flex;
    gap: 10px;
  }

  @media (max-width: 1024px) {
    padding: 15px;
    font-size: 14px;
  }
  @media (max-width: 768px) {
    display: none;
  }
`;

export const Tr = styled.tr`
  background: #2e3b3e;
  transition: all 0.3s ease;

  &:hover {
    background: #3a4b4e;
    transform: scale(1.01);
    box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

export const CardWrapper = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
`;

export const Card = styled.div`
  background: linear-gradient(145deg, #2e3b3e 0%, #1c2526 100%);
  border-radius: 15px;
  padding: 25px;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  border: 1px solid rgba(255, 215, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.5);
    border-color: #FFD700;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

export const CardField = styled.div`
  margin-bottom: 15px;
  color: #e0e0e0;
  font-size: 15px;
  font-family: 'Roboto', sans-serif;
  display: flex;
  justify-content: space-between;
  align-items: center;

  strong {
    color: #FFD700;
    font-weight: 500;
    letter-spacing: 0.5px;
  }

  &:last-child {
    display: flex;
    justify-content: flex-end;
    margin-top: 15px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    margin-bottom: 12px;
  }
`;

export const EditButton = styled.button`
  background: linear-gradient(135deg, #FFD700 0%, #DAA520 100%);
  color: #1c2526;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3);
  position: relative;
  overflow: hidden;

  &:hover {
    background: linear-gradient(135deg, #DAA520 0%, #FFD700 100%);
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(255, 215, 0, 0.5);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: 0.5s;
  }

  &:hover:before {
    left: 100%;
  }

  @media (max-width: 480px) {
    padding: 8px 15px;
    font-size: 13px;
    width: 100%;
  }
`;

export const DeleteButton = styled.button`
  background: linear-gradient(135deg, #ff4d4d 0%, #cc0000 100%);
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  font-size: 15px;
  font-weight: 600;
  font-family: 'Roboto', sans-serif;
  transition: all 0.3s ease;
  box-shadow: 0 4px 15px rgba(255, 77, 77, 0.3);
  position: relative;
  overflow: hidden;

  &:hover {
    background: linear-gradient(135deg, #cc0000 0%, #ff4d4d 100%);
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(255, 77, 77, 0.5);
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
    transition: 0.5s;
  }

  &:hover:before {
    left: 100%;
  }

  @media (max-width: 480px) {
    padding: 8px 15px;
    font-size: 13px;
    width: 100%;
  }
`;

export const Actions = styled.div`
  display: flex;
  gap: 15px;

  @media (max-width: 480px) {
    flex-direction: column;
    gap: 10px;
  }
`;
import React, { createContext, useState } from 'react';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  // Khởi tạo từ localStorage nếu có
  const [token, setToken] = useState(() => localStorage.getItem('token') || null);
  const [userId, setUserId] = useState(() => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user)._id : null;
  });
  const [user, setUser] = useState(() => {
    const user = localStorage.getItem('user');
    return user ? JSON.parse(user) : null;
  });

  const login = (newToken, newUserId, newUser) => {
    setToken(newToken);
    setUserId(newUserId);
    setUser(newUser);
    // Lưu vào localStorage
    localStorage.setItem('token', newToken);
    localStorage.setItem('user', JSON.stringify(newUser));
  };

  const logout = () => {
    setToken(null);
    setUserId(null);
    setUser(null);
    // Xóa khỏi localStorage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  };

  return (
    <AuthContext.Provider value={{ token, userId, user, setUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => React.useContext(AuthContext);

export default AuthContext;
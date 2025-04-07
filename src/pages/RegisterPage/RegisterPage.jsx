// src/pages/Auth/RegisterPage.jsx
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PageWrapper, MainContent, FormWrapper, Form, Title, Input, Button, SocialLogin, SocialButton, NavigateText, Divider } from './style';
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { registerUser } from '../../services/UserService';
import SuccessModal from '../../components/SuccessModal/SuccessModal';

const RegisterPage = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!username || !email || !password) {
      setError('Vui lòng điền đầy đủ thông tin');
      return;
    }

    try {
      const response = await registerUser({ username, email, password });
      localStorage.setItem('token', response.token);
      localStorage.setItem('user', JSON.stringify(response.user)); // Lưu thông tin người dùng
      setShowSuccessModal(true);
    } catch (err) {
      const errorMessage = err.message || 'Đăng ký thất bại';
      setError(errorMessage);
      alert(errorMessage);
    }
  };

  const handleSocialLogin = (platform) => {
    alert(`Đăng nhập bằng ${platform} chưa được triển khai!`);
  };

  const handleModalClose = () => {
    setShowSuccessModal(false);
    navigate('/login');
  };

  return (
    <PageWrapper>
      <Header />
      <MainContent>
        <FormWrapper>
          <Form onSubmit={handleSubmit}>
            <Title>Đăng Ký</Title>

            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

            <Input
              type="text"
              placeholder="Tên người dùng"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />

            <Input
              type="email"
              placeholder="Địa chỉ Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <Input
              type="password"
              placeholder="Mật khẩu"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <Button type="submit">
              Đăng Ký
            </Button>

            <Divider>hoặc đăng ký với</Divider>

            <SocialLogin>
              <SocialButton onClick={() => handleSocialLogin('Google')}>
                <FaGoogle />
              </SocialButton>
              <SocialButton onClick={() => handleSocialLogin('Facebook')}>
                <FaFacebook />
              </SocialButton>
              <SocialButton onClick={() => handleSocialLogin('GitHub')}>
                <FaGithub />
              </SocialButton>
            </SocialLogin>

            <NavigateText>
              Đã có tài khoản? {" "}
              <Link to="/login">Đăng nhập ngay</Link>
            </NavigateText>
          </Form>
        </FormWrapper>
      </MainContent>
      <Footer />

      <SuccessModal
        isOpen={showSuccessModal}
        message="Đăng ký thành công!"
        onClose={handleModalClose}
        redirectPath="/login"
      />
    </PageWrapper>
  );
};

export default RegisterPage;
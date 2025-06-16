import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { PageWrapper, MainContent, FormWrapper, Form, Title, Input, Button, SocialLogin, SocialButton, NavigateText, Divider } from './style';
import { FaGoogle, FaFacebook, FaGithub } from 'react-icons/fa';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import { loginUser } from '../../services/UserService';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useAuth } from '../../context/AuthContext';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!email || !password) {
      setError('Vui lòng điền đầy đủ thông tin');
      toast.error('Vui lòng điền đầy đủ thông tin');
      return;
    }

    try {
      const response = await loginUser({ email, password });
      const { token, user } = response;

      const userId = user._id || user.id;

      if (!token || !user || !userId) {
        throw new Error('Dữ liệu đăng nhập không hợp lệ từ server');
      }

      login(token, userId, user);

      toast.success('Đăng nhập thành công!', {
        onClose: () => {
          if (user && (user.role === 'admin' || user.role === 'staff')) { // Cả admin và staff đều vào /admin
            navigate('/admin');
          } else {
            navigate('/');
          }
        },
      });
    } catch (err) {
      const errorMessage = err.message || 'Đăng nhập thất bại';
      setError(errorMessage);
      toast.error(errorMessage);
    }
  };

  const handleSocialLogin = (platform) => {
    toast.info(`Đăng nhập bằng ${platform} chưa được triển khai!`);
  };

  return (
    <PageWrapper>
      <Header />
      <MainContent>
        <FormWrapper>
          <Form onSubmit={handleSubmit}>
            <Title>Đăng Nhập</Title>

            {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}

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

            <Button type="submit">Đăng Nhập</Button>

            <Divider>hoặc đăng nhập với</Divider>

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
              Chưa có tài khoản? <Link to="/register">Đăng ký ngay</Link>
            </NavigateText>
          </Form>
        </FormWrapper>
      </MainContent>
      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </PageWrapper>
  );
};

export default LoginPage;
import React from 'react';
import { FormSection, FormWrapper, Form, Input, TextArea, Button, FormTitle } from './style';

const ContactForm = () => {
  return (
    <FormSection>
      <FormWrapper>
        <FormTitle>Gửi Tin Nhắn</FormTitle>
        <Form>
          <Input type="text" placeholder="Họ và tên" required />
          <Input type="email" placeholder="Email" required />
          <Input type="tel" placeholder="Số điện thoại" required />
          <TextArea placeholder="Nội dung tin nhắn" rows="5" required />
          <Button type="submit">Gửi Ngay</Button>
        </Form>
      </FormWrapper>
    </FormSection>
  );
};

export default ContactForm;
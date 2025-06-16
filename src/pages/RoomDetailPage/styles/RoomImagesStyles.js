import styled from 'styled-components';

export const ImageContainer = styled.div`
  width: 100%; 
  
 
 
  margin-bottom: 20px;

  .ant-carousel {
    position: relative;
  }

  .ant-carousel .slick-slide {
    padding: 0 5px; /* Khoảng cách giữa các ảnh trong carousel */
  }

  .ant-carousel .slick-prev,
  .ant-carousel .slick-next {
    font-size: 0;
    line-height: 0;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    display: block;
    width: 40px;
    height: 40px;
    padding: 0;
    cursor: pointer;
    color: transparent;
    border: none;
    outline: none;
    background: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    z-index: 1;
  }

  .ant-carousel .slick-prev:before,
  .ant-carousel .slick-next:before {
    font-size: 24px;
    line-height: 1;
    color: #fff;
    opacity: 0.75;
  }

  .ant-carousel .slick-prev:before {
    content: '←';
  }

  .ant-carousel .slick-next:before {
    content: '→';
  }

  .ant-carousel .slick-prev {
    left: 10px;
  }

  .ant-carousel .slick-next {
    right: 10px;
  }

  .ant-carousel .slick-dots {
    position: absolute;
    bottom: 10px;
    display: block;
    width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
    text-align: center;
  }

  .ant-carousel .slick-dots li {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 0 5px;
    padding: 0;
    cursor: pointer;
  }

  .ant-carousel .slick-dots li button {
    font-size: 0;
    line-height: 0;
    display: block;
    width: 20px;
    height: 20px;
    padding: 5px;
    cursor: pointer;
    color: transparent;
    border: 0;
    outline: none;
    background: transparent;
  }

  .ant-carousel .slick-dots li button:before {
    font-size: 12px;
    line-height: 20px;
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    content: '•';
    text-align: center;
    opacity: 0.25;
    color: #fff;
  }

  .ant-carousel .slick-dots li.slick-active button:before {
    opacity: 0.75;
    color: #fff;
  }

  @media (max-width: 1024px) {
    margin-bottom: 15px;

    .ant-carousel .slick-prev,
    .ant-carousel .slick-next {
      width: 35px;
      height: 35px;
    }

    .ant-carousel .slick-prev:before,
    .ant-carousel .slick-next:before {
      font-size: 22px;
    }
  }

  @media (max-width: 768px) {
    margin-bottom: 10px;

    .ant-carousel .slick-prev,
    .ant-carousel .slick-next {
      width: 30px;
      height: 30px;
    }

    .ant-carousel .slick-prev:before,
    .ant-carousel .slick-next:before {
      font-size: 20px;
    }

    .ant-carousel .slick-dots li {
      width: 15px;
      height: 15px;
      margin: 0 3px;
    }

    .ant-carousel .slick-dots li button:before {
      font-size: 10px;
      line-height: 15px;
      width: 15px;
      height: 15px;
    }
  }
`;

export const SlideImage = styled.img`
  width: 100%;
  height: 300px; /* Thay đổi kích thước ảnh trên PC */
  object-fit: cover;
  border-radius: 5px;

  @media (max-width: 1024px) {
    height: 250px; /* Thay đổi kích thước ảnh trên tablet */
  }

  @media (max-width: 768px) {
    height: 200px; /* Thay đổi kích thước ảnh trên mobile */
  }
`;
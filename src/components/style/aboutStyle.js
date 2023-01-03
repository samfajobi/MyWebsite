import styled from 'styled-components';

const NewsWrapper = styled.section`
  h2 {
    box-shadow: 0 6px 9px 0 rgba(0, 0, 0, 0.2);
    background-color: rgba(255, 255, 255, 0.8);
    padding: 8px 20px;
    top: -1.5rem;
    left: -1rem;
  }

  .section-1 {
    width: 100%;
    .cont-height {
      height: 28rem;
    }
  }
  .section-2 {
    height: 28rem;
    width: 100%;
    background: #307fe2;
  }

  .mini-caurosel {
    top: 350px;
    left: 45%;
  }

  .social-caurosel {
    top: 350px;
    left: 45%;
  }

  .arrow::after {
    border-bottom: 15px solid transparent;
    border-top: 15px solid transparent;
    border-right: 15px solid #fff;
    content: "";
    height: 0;
    position: absolute;
    right: 50%;
    top: 25px;
    width: 0;
    z-index: 1;
    display: none;
  }

  .arrow::before {
    border-bottom: 15px solid #fff;
    border-left: 15px solid transparent;
    border-right: 15px solid transparent;
    content: "";
    height: 0;
    position: absolute;
    right: 45%;
    top: 385px;
    width: 0;
    z-index: 1;
  }

  .wrapper-2 {
    transition: all 1s ease;
    .img-cover1 {
      background: linear-gradient(180deg, #111b28 0%, rgba(0, 0, 0, 0.43) 100%);
      height: 100%;

      & :hover {
        opacity: 0.8;
      }
    }
    .img-cover2 {
      background: linear-gradient(
        76.97deg,
        #111b28 34.77%,
        rgba(0, 0, 0, 0.43) 90.6%
      );
      height: 100%;

      & :hover {
        opacity: 0.8;
      }
    }

    .section-hgt {
      height: 25rem;
    }
  }

  @media (min-width: 1024px) {
    .section-1 {
      width: 65%;
    }

    .section-2 {
      width: 30%;
    }

    .arrow::after {
      display: block;
    }

    .arrow::before {
      display: none;
    }

    .social-caurosel {
      left: 45%;
    }

    .mini-caurosel {
      left: 15%;
    }
  }

  @media (min-width: 1536px) {
    .social-caurosel {
      left: 48%;
    }

    .mini-caurosel {
      left: 27%;
    }

    .arrow::after {
      right: 50%;
    }
  }
`;

export default NewsWrapper;
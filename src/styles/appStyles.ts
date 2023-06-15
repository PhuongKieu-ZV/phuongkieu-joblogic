import { Card } from 'antd';
import styled from 'styled-components';

interface IProps {
  popularity: number;
  selected: boolean;
}

export const HomePageWrapper = styled.div`
  .header {
    img {
      position: fixed;
      left: 0;
      top: 0;
      height: 300px;
      width: 100%;
      object-fit: cover;
    }
  }

  .layer {
    position: relative;
    z-index: 2;
    height: 100vh;
    .sidebar {
      position: absolute;
      width: 400px;
      height: 100%;
      left: 0;
      top: 0;
      background-color: #2d242480;
      display: flex;
      flex-direction: column;
      align-items: center;
      .logo {
        padding: 30px 0 55px 0;
      }
    }
    .content {
      position: absolute;
      left: 400px;
      top: 210px;
      display: flex;
      flex-direction: row;
      width: calc(100vw - 400px);
      height: calc(100vh - 210px);
      padding: 30px;
      .left {
        flex: 1;
        img {
          width: 80px;
          height: 80px;
          border-radius: 8px;
        }
      }
      .right {
        flex: 6;
        .name {
          font-size: 3rem;
          margin-bottom: 3rem;
        }
        .popular {
          margin-bottom: 5rem;
        }
      }
    }
  }
`;

export const ItemWrapper = styled.li<IProps>`
  font-size: ${(p) => p.popularity}rem;
  cursor: pointer;
  color: ${(p) => (p.selected ? 'blue' : 'black')};
`;

export const CardWrapper = styled(Card)`
  width: 100%;
  background: #000;
  color: #fff;
`;

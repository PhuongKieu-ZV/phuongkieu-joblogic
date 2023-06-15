import { Card } from 'antd';
import styled from 'styled-components';

interface IProps {
  popularity: number;
  selectedColleagues: boolean;
  itemSelected: boolean;
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
      box-shadow: rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px;
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
      box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
      .logo {
        padding: 30px 0 55px 0;
      }

      .users {
        width: 100%;
        text-align: center;
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
          border: 2px solid #fff;
          box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px;
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
  color: ${(p) => (p.selectedColleagues ? 'blue' : 'black')};
  background: ${(p) => (p.itemSelected ? '#988' : 'none')};
  padding: 10px 0;
`;

export const CardWrapper = styled(Card)`
  width: 100%;
  background: #646262;
  color: #fff;
  border-color: #646262;
`;

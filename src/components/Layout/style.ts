import styled from 'styled-components';
import { Layout } from 'antd';

export const LayoutWrapper = styled(Layout)`
  height: 100vh;
  display: flex;
  justify-content: center;
  flex-direction: row;
  .container {
    width: 100%;
    background-color: #000000ab;
  }
`;

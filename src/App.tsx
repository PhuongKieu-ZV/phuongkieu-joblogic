import AppLayout from '@components/Layout';
import headerImage from '@assets/images/headerImage/Godfather header.jpg';
import logo from '@assets/svg/the-godfather.svg';
import dataJson from './mockData/EmployeeData.json';
import { useMemo, useState } from 'react';
import { CardWrapper, HomePageWrapper, ItemWrapper } from './styles/appStyles';
import { Slider } from 'antd';

interface IUser {
  name: string;
  popularity: number;
  biography: string;
  image: string;
  colleagues: string[];
}

const initialData = dataJson.employees as IUser[];

function App() {
  const [users] = useState<IUser[]>(initialData);
  const [userSelected, setUserSelected] = useState<IUser | undefined>(undefined);

  const selectedNames = useMemo(() => {
    const colleagues = [...(userSelected?.colleagues || []), userSelected?.name];

    return colleagues;
  }, [userSelected]);

  const handleSelectUser = (user: IUser) => {
    setUserSelected(user);
  };
  return (
    <AppLayout>
      <HomePageWrapper>
        <div className='header'>
          <img src={headerImage} alt='header' />
        </div>
        <div className='layer'>
          <div className='sidebar'>
            <div className='logo'>
              <img src={logo} alt='' />
            </div>
            <ul className='users'>
              {users.map((user) => {
                return (
                  <ItemWrapper
                    key={user.name}
                    popularity={user.popularity}
                    selectedColleagues={selectedNames.includes(user.name)}
                    itemSelected={user.name === userSelected?.name}
                    onClick={() => handleSelectUser(user)}
                  >
                    {user.name}
                  </ItemWrapper>
                );
              })}
            </ul>
          </div>
          {userSelected && (
            <>
              <div className='content'>
                <div className='left'>
                  <img src={`/src/assets/images/profile/${userSelected.image}`} alt='' />
                </div>
                <div className='right'>
                  <p className='name'>{userSelected.name}</p>
                  <div className='popular'>
                    <span>Popular</span>
                    <Slider value={userSelected.popularity} disabled={true} />
                  </div>
                  <CardWrapper>
                    <p>{userSelected.biography}</p>
                  </CardWrapper>
                </div>
              </div>
            </>
          )}
        </div>
      </HomePageWrapper>
    </AppLayout>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { useLocation, useHistory } from 'react-router';
import { Input, Layout } from 'antd';
import styled from 'styled-components';

const { Header: AntdHeader } = Layout;
const { Search } = Input;

const SearchWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-grow: 1;
  padding-right: 10px;
  padding-left: 10px;
`;

const Header = styled(AntdHeader)`
  display: flex;
  box-shadow: 0 2px 8px #f0f1f2;
  padding: 0;
`;

export const AppHeader = () => {
  const history = useHistory();
  const location = useLocation();
  const [search, setSearch] = useState<string>('');
  useEffect(() => {
    const { pathname } = location;
    const pathnameSubStrings = pathname.split('/');

    if (!pathname.includes('/shipments')) {
      setSearch('');
    }
    if (pathname.includes('/shipments') && pathnameSubStrings.length === 3) {
      setSearch(pathnameSubStrings[2]);
    }
  }, [location]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };
  const handleSearch = (query: string) => {
    const trimmedQuery = query.trim();

    return history.push(`/shipments/${trimmedQuery}`);
  };

  return (
    <Header>
      <SearchWrapper>
        <Search
          placeholder="Search 'S1001'"
          enterButton
          value={search}
          onChange={handleChange}
          onSearch={handleSearch}
        />
      </SearchWrapper>
    </Header>
  );
};

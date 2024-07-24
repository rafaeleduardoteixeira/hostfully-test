import { useContext, useEffect, useState } from 'react';
import {
  Container,
  HomeBanner,
  ImgBanner,
  TitleBanner,
  SearchContainer,
  SearchButton,
  SearchIcon,
} from './Home.styles';
import { PropertyList } from '../../components/PropertyList/PropertyList';
import { SearchInput } from '../../components/SearchInput/SearchInput';
import { AppContext, AppContextType } from '../../Context/App.context';
import { Property } from '../../interfaces/property';

export const Home = (): JSX.Element => {
  const { isLoading, getProperties } = useContext(AppContext) as AppContextType;
  const [properties, setProperties] = useState<Property[]>([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    setProperties(getProperties());
  }, [getProperties]);

  const handleChangeSearchTerm = (value: string) => {
    setSearchTerm(value);
  };

  // This function is responsible to filter the properties based on the search term
  const handleSearch = () => {
    setProperties(getProperties(searchTerm));
  };

  return (
    <Container>
      <HomeBanner>
        <TitleBanner>Find Your Property to Rental</TitleBanner>
        <ImgBanner />
        <SearchContainer>
          <SearchInput onChange={handleChangeSearchTerm} />
          <SearchButton onClick={() => handleSearch()}>
            <SearchIcon src="/icons/search.svg" alt="search" title="Search an property" />
          </SearchButton>
        </SearchContainer>
      </HomeBanner>
      <PropertyList isLoading={isLoading} properties={properties} />
    </Container>
  );
};

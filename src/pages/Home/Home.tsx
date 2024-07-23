//Home page without any filters, list all properties

import { useContext } from 'react';
import { Container, HomeBanner, ImgBanner, TitleBanner, SearchContainer } from './Home.styles';
import { PropertyList } from '../../components/PropertyList/PropertyList';
import { AppContext, AppContextType } from '../../Context/App.context';

const Home = (): JSX.Element => {
  const { isLoading, getProperties } = useContext(AppContext) as AppContextType;

  return (
    <Container>
      <HomeBanner>
        <TitleBanner>Find Your Property to Rental</TitleBanner>
        <ImgBanner />
        <SearchContainer />
      </HomeBanner>
      <PropertyList isLoading={isLoading} properties={getProperties()} />
    </Container>
  );
};

export default Home;

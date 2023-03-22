import { SiteInfo } from '../../data/SiteInfo';
import MainLogo from './MainLogo';

const Header = () => {
  return (
    <header className='py-2'>
      <h1 className='sr-only'>{SiteInfo.siteTitle}</h1>
      <MainLogo />
    </header>
  )
}

export default Header

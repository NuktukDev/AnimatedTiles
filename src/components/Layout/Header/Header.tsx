import './Header.scss';
import { Nav } from './Nav.tsx';

function Header() {
  /* Hooks */

  //const { isOpen, onOpen, onClose } = useDisclosure({ id: 'download' });

  /* Methods */

  return (
    <header className="header">
      <Nav />
    </header>
  );
}

export { Header };

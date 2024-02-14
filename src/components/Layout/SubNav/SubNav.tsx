import './SubNav.scss';
import { Button } from '@chakra-ui/react';

function SubNav() {
  return (
    <nav className="sub-nav">
      <div className="sub-nav__inner">
        <strong>Calendar</strong>
        <div className="d-flex">
          <div className="sub-nav__hideable">
            <Button variant="ghost">Features</Button>
            <Button variant="ghost">Integrations</Button>
            <Button variant="ghost">Downloads</Button>
          </div>
          <Button bgColor="black" color="white" _hover={{ bgColor: 'gray.600' }}>
            Get Notion Calendar Free
          </Button>
        </div>
      </div>
    </nav>
  );
}

export { SubNav };

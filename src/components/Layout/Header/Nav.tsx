import { AddIcon, ChevronUpIcon, ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons';
import { useDisclosure, Button, Menu, MenuButton, MenuList, MenuItem } from '@chakra-ui/react';
import logo from 'src/assets/logo.svg';
function Nav() {
  const menuOne = useDisclosure();
  const menuTwo = useDisclosure();
  const menuThree = useDisclosure();
  const menuFour = useDisclosure();
  return (
    <nav className="header__nav">
      <div className="d-flex">
        <a href="/">
          <img src={logo} alt="logo" className="logo" />
        </a>
        <div className="header__nav__first">
          <Menu isOpen={menuOne.isOpen} gutter={0}>
            <MenuButton
              as={Button}
              rightIcon={menuOne.isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              onMouseEnter={menuOne.onOpen}
              onMouseLeave={menuOne.onClose}
              variant="ghost"
            >
              Product
            </MenuButton>
            <MenuList onMouseEnter={menuOne.onOpen} onMouseLeave={menuOne.onClose}>
              <MenuItem icon={<AddIcon />}>Download</MenuItem>
              <MenuItem icon={<AddIcon />}>Download</MenuItem>
            </MenuList>
          </Menu>

          <Menu isOpen={menuTwo.isOpen} gutter={0}>
            <MenuButton
              as={Button}
              rightIcon={menuTwo.isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              onMouseEnter={menuTwo.onOpen}
              onMouseLeave={menuTwo.onClose}
              variant="ghost"
            >
              Download
            </MenuButton>
            <MenuList onMouseEnter={menuTwo.onOpen} onMouseLeave={menuTwo.onClose}>
              <MenuItem icon={<AddIcon />}>Download</MenuItem>
              <MenuItem icon={<AddIcon />}>Download</MenuItem>
            </MenuList>
          </Menu>

          <Menu isOpen={menuThree.isOpen} gutter={0}>
            <MenuButton
              as={Button}
              rightIcon={menuThree.isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              onMouseEnter={menuThree.onOpen}
              onMouseLeave={menuThree.onClose}
              variant="ghost"
            >
              Solutions
            </MenuButton>
            <MenuList onMouseEnter={menuThree.onOpen} onMouseLeave={menuThree.onClose}>
              <MenuItem icon={<AddIcon />}>Download</MenuItem>
              <MenuItem icon={<AddIcon />}>Download</MenuItem>
            </MenuList>
          </Menu>

          <Menu isOpen={menuFour.isOpen} gutter={0}>
            <MenuButton
              as={Button}
              rightIcon={menuFour.isOpen ? <ChevronUpIcon /> : <ChevronDownIcon />}
              onMouseEnter={menuFour.onOpen}
              onMouseLeave={menuFour.onClose}
              variant="ghost"
            >
              Resources
            </MenuButton>
            <MenuList onMouseEnter={menuFour.onOpen} onMouseLeave={menuFour.onClose}>
              <MenuItem icon={<AddIcon />}>Download</MenuItem>
              <MenuItem icon={<AddIcon />}>Download</MenuItem>
            </MenuList>
          </Menu>
        </div>
      </div>
      <div className="header__nav__second">
        <Button mr={4} variant="ghost">
          Request a demo
        </Button>
        <Button mr={4} variant="ghost">
          Log In
        </Button>
        <Button
          variant="outline"
          bgColor="white"
          color="black"
          borderColor="gray.200"
          _hover={{ bgColor: 'gray.100' }}
        >
          Get Notion Free
        </Button>
      </div>
      <Button
        type="button"
        aria-label="side menu toggle"
        size="md"
        className="header__nav__hamburger"
      >
        <HamburgerIcon boxSize={7} />
      </Button>
    </nav>
  );
}

export { Nav };

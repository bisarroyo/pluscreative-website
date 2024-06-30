import React from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  Link,
  Button
} from '@nextui-org/react'

import ThemeToggle from './ThemeToggle'

export default function App({ path }) {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false)

  const menuItemsMobile = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ]
  const menuItemsDesktop = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/services', label: 'Services' },
    { path: '/portfolio', label: 'Portfolio' },
    { path: '/blog', label: 'Blog' },
    { path: '/contact', label: 'Contact' }
  ]

  return (
    <Navbar onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent>
        <NavbarMenuToggle
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          className='sm:hidden'
        />
        <NavbarBrand>
          {/* <AcmeLogo /> */}
          <p className='font-bold text-inherit'>Plus Creative</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className='hidden sm:flex gap-4' justify='center'>
        {menuItemsDesktop.map((item, index) => (
          <NavbarItem key={`${item.label}-${index}`}>
            <Link
              color={item.path === path ? 'primary' : 'foreground'}
              className='w-full'
              href={item.path}
              size='lg'
            >
              {item.label}
            </Link>
          </NavbarItem>
        ))}
        <ThemeToggle />
      </NavbarContent>
      {/* <NavbarContent justify='end'>
        <NavbarItem className='hidden lg:flex'>
          <Link href='#'>Login</Link>
        </NavbarItem>
        <NavbarItem>
          <Button as={Link} color='primary' href='#' variant='flat'>
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent> */}
      <NavbarMenu>
        {menuItemsMobile.map((item, index) => (
          <NavbarMenuItem key={`${item.label}-${index}`}>
            <Link
              color={
                item.path === path
                  ? 'primary'
                  : index === menuItemsMobile.length - 1
                  ? 'danger'
                  : 'foreground'
              }
              className='w-full'
              href={item.path}
              size='lg'
            >
              {item.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  )
}

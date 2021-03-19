import Link from 'next/link';
import React from 'react';
import { Button, Col, HeaderMd, HeaderXl, Row } from 'src/components';
import styled from 'styled-components';

const NavRow = styled(Row)`
  margin: 0;
`;

const NavCol = styled(Col)`
  margin-bottom: 0;
`;

const NavBtn = styled(Button)`
  display: flex;
  height: 100%;
`;

const AlignBottom = styled.span`
  align-self: flex-end;
  padding-bottom: 0.25em;
`;

const StyledNavbar = styled.div`
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  border-bottom: 1px solid ${({ theme }) => theme?.palette?.common?.gray};
`;

interface NavbarProps {
  title: string;
  links: [string, string][];
}

export const Navbar: React.FC<NavbarProps> = ({ title, links }) => (
  <StyledNavbar>
    <NavRow>
      <NavCol size={{ xs: 8, sm: 3, lg: 1 }}>
        <Link href="/">
          <a>
            <NavBtn>
              <HeaderXl color="black" underline="primary">
                {title}
              </HeaderXl>
            </NavBtn>
          </a>
        </Link>
      </NavCol>
      {links.map(([page, path]) => (
        <NavCol key={path} size={{ xs: 1 }}>
          <Link href={path}>
            <a style={{ textDecoration: 'none' }}>
              <NavBtn>
                <AlignBottom>
                  <HeaderMd>{page}</HeaderMd>
                </AlignBottom>
              </NavBtn>
            </a>
          </Link>
        </NavCol>
      ))}
    </NavRow>
  </StyledNavbar>
);

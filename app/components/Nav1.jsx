// components/Navbar.js
"use client";
import Link from "next/link";
import styled from "styled-components";


const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #fff;
  //   background-color: #F2F2F2;

  color: #fff;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.5rem;
  font-weight: bold;

  a {
    display: flex;
    align-items: center;
    text-decoration: none;
    color: #333;
  }

  img {
    height: 30px;
    margin-right: 0.5rem;
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;

  ul {
    list-style: none;
    margin: 0;
    padding: 0;
    display: flex;
  }

  li {
    margin: 0 1rem;
  }

//   a {
//     text-decoration: none;
//     color: #333;
//   }
`;

const ServicesDropdown = styled.div`
  position: relative;
  cursor: pointer;

  &:hover {
    ul {
      display: block;
    }
  }

  ul {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #333;
    padding: 0.5rem;
    list-style: none;
    z-index: 1;

    li {
      margin: 0.5rem 0;
    }
    a {
      text-decoration: none;
      color: #fff;
    }
  }
`;

const ProfileDropdown = styled.div`
  position: relative;
  cursor: pointer;

  &:hover {
    ul {
      display: block;
    }
  }

  ul {
    display: none;
    position: absolute;
    top: 100%;
    right: 0;
    background-color: #333;
    padding: 0.5rem;
    list-style: none;
    z-index: 1;

    li {
      margin: 0.5rem 0;
    }
    a {
        text-decoration: none;
        color: #fff;
      }
  }
`;

const Navbar = () => {
    
  return (
    
    <NavbarContainer >
      <Logo>
        <Link legacyBehavior href="/Home">
          <a>
            <img
              src="/NavbarImages/Screenshot 2024-01-09 162341.png"
              alt="Logo"
            />
            <span>ImPar</span>
          </a>
        </Link>
      </Logo>

      <NavLinks>
        <ul>
          <li>
            <Link legacyBehavior href="/Home">
              <a className="text-black">Home</a>
            </Link>
          </li>

          <li>
            <ServicesDropdown>
              <span className="text-black">Services</span>
              <ul>
                <li>
                  <Link
                    href="/Home/Services/VacationManagement"
                  >
                    Vacation Manangement
                  </Link>
                </li>
                {/* <li>Vacation Management</li> */}
                {/* <li>Service 2</li>
                <li>Service 3</li> */}
              </ul>
            </ServicesDropdown>
          </li>
              <li>
                <Link legacyBehavior href="/Home/Admin">
                  <a className="text-black">Admin</a>
                </Link>
              </li>
          <li>
            <ProfileDropdown>
              <span className="text-black">Profile</span>
              <ul>
                <li>
                  <Link
                    href="/Home/Profile/ChangePassword"
                  >Change Password
                  </Link>
                </li>
                <li>
                  <Link
                    href="/"
                  >
                    Log Out
                  </Link>
                </li>

                {/* <li>Change Password</li>
                <li>Logout</li> */}
              </ul>
            </ProfileDropdown>
          </li>
        </ul>
      </NavLinks>
    </NavbarContainer>
  );
};

export default Navbar;

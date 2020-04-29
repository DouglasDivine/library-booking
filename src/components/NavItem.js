import React from "react";
import { Link, useLocation } from "react-router-dom";
import styled, { css } from "@wigxel/react-components";
import { useLayout } from "../libs/LayoutStore";
import t from "prop-types";
import { curry } from "ramda";

const NavItemStyle = styled.li`
  font-family: 1em;
  margin: 0.5rem 0;
  padding: 0.5rem 0;
  transition: background-color 0.2s ease;
  color: ${(props) => props.theme.textColor};

  ${(props) =>
    props.isDarkMode &&
    !props.active &&
    css`
      .icon img {
        filter: invert(1);
      }
    `}

  span {
    font: medium 1rem "Helvetica Neue";
  }

  ${(props) =>
    props.active &&
    css`
      color: dodgerblue;
      border-radius: 0 30px 30px 0;

      .icon {
        background-color: #cee6ff;
      }

      ${(props) =>
        props.showBg &&
        css`
          background-color: #cee6ff;
        `}
    `}
`;

const prop = curry((prop, style, props) => {
  return props[prop] && style;
});

const IconStyle = styled.span`
  &.icon {
    width: 40px;
    height: 40px;
    display: flex;
    position: relative;
    margin: 0 0.5rem;
    align-items: center;
    border-radius: 25px;
    justify-content: center;

    .a-badge {
      min-width: 20px;
      line-height: 20px;
      text-align: center;
      height: 20px;
      position: absolute;
      border: 0;
      font-size: 0.7rem;
      top: 0;
      background-color: #fff;
      color: dodgerblue;
      right: 0;
      border-radius: 16px;

      ${(props) =>
        props.bgColor &&
        css`
          background-color: ${(props) => props.bgColor};
          color: white;
        `}
    }

    img {
      width: 30px;

      ${prop(
        "small",
        css`
          width: 20px;
        `
      )}
    }
  }
`;

export const Icon = ({ small, className, bgColor, activity, icon }) => {
  return (
    <IconStyle
      className={"icon ".concat(className || "")}
      small={small}
      bgColor={bgColor}
    >
      {activity && <span className="a-badge">{activity}</span>}
      {icon}
    </IconStyle>
  );
};

const NavItem = ({ icon, route, activity, children }) => {
  const { store } = useLayout();
  const { pathname } = useLocation();
  return (
    <NavItemStyle
      showBg={store.menuOpen}
      isDarkMode={store.isDarkMode}
      active={pathname === route}
      className="nav-item w-full block px-3"
    >
      <Link to={route} className="w-full flex items-center">
        <Icon activity={activity} icon={icon} />
        <span>{children}</span>
      </Link>
    </NavItemStyle>
  );
};

NavItem.propTypes = {
  active: t.bool,
  activity: t.number,
  icon: t.element.isRequired,
  route: t.string.isRequired,
};

export default NavItem;

import styled from "@emotion/styled";
import { useState, useEffect } from "react";
import UtilStyles from '../styles/utils.module.css'

const ToggleButton = styled.button`
  --toggle-width: 60px;
  --toggle-height: 30px;
  --toggle-padding: 2px;
  position: absolute;
  right:0px;
  top: 0px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: 1rem;
  margin:1rem;
  line-height: 1;
  width: var(--toggle-width);
  height: var(--toggle-height);
  padding: var(--toggle-padding);
  border: 0px;
  border-radius: calc(var(--toggle-width) / 2);
  cursor: pointer;
  background: var(--color-bg-toggle);
  transition: background 0.25s ease-in-out;
`;

const ToggleThumb = styled.span`
  position: absolute;
  top: var(--toggle-padding);
  left: var(--toggle-padding);
  width: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  height: calc(var(--toggle-height) - (var(--toggle-padding) * 2));
  border-radius: 50%;
  background: white;
  transition: transform 0.25s ease-in-out;

  transform: ${(p) =>
    p.activeTheme === "dark"
      ? "translate3d(calc(var(--toggle-width) - var(--toggle-height)), 0, 0)"
      : "none"};
      transition: background 0.25s ease-in-out, box-shadow 0.25s ease-in-out;
  &:focus {
    outline-offset: 5px;
  }
  &:focus:not(:focus-visible) {
    outline: none;
  }
  &:hover {
    box-shadow: 0 0 5px 2px var(--color-bg-toggle);
  },
`;

const ThemeToggle = () => {
    const [activeTheme, setActiveTheme] = useState("light");
    const inactiveTheme = activeTheme === "light" ? "dark" : "light";

    useEffect(() => {
        document.body.dataset.theme = activeTheme;
      }, [activeTheme]);
      
      useEffect(() => {
        const savedTheme = window.localStorage.getItem("theme");
        savedTheme && setActiveTheme(savedTheme);
      }, []);
    
      useEffect(() => {
        document.body.dataset.theme = activeTheme;
        window.localStorage.setItem("theme", activeTheme);
      }, [activeTheme])


  return (
    <ToggleButton type="button" onClick={() => setActiveTheme(inactiveTheme)} aria-label={`Change to ${inactiveTheme} mode`}
    title={`Change to ${inactiveTheme} mode`}>
      <ToggleThumb activeTheme={activeTheme} />

           <span  aria-hidden={true}>   <svg
          
          xmlns="http://www.w3.org/2000/svg"
          className={UtilStyles.svg}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg> </span>
        <span aria-hidden={true}>
        <svg
         
          xmlns="http://www.w3.org/2000/svg"
                    className={UtilStyles.svg}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
          />
        </svg>
        </span>

    </ToggleButton>
  );
};

export default ThemeToggle;
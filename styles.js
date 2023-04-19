import { createGlobalStyle } from "styled-components";
import { Lora } from "@next/font/google";

const lora = Lora({
  subsets: ["latin"],
  style: ["normal", "italic"],
});

export default createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  body {
  font-family: ${lora.style.fontFamily}, serif;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 48px 0px;
  gap: 48px;
  position: relative;
  width: 390px;
  height: 844px;
  background: #f1f1f1;
  }
`;

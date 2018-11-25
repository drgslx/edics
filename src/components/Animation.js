import React from "react";
import styled, { keyframes } from "styled-components";

export const keyFrameOne = keyframes`
  0%   { transform:translate(0,-15px); opacity: 0;  }
  50%  { opacity: 1;  }
  100% { transform:translate(0,13px); opacity: 0; }
`;

import { keyframes } from "styled-components";

export const Bounce = keyframes`
     0%   { transform: translateY(-50px); }
    50%  { transform: translateY(0); }
    100% { transform: translateY(-50px); }
`;

export const SecondBounce = keyframes`
     0%   { transform: translateY(0); }
    50%  { transform: translateY(-50px); }
    100% { transform: translateY(0); }
`;

export const SkipBounce = keyframes`
     0%   { transform: translateY(-20px); }
    50%  { transform: translateY(0); }
    100% { transform: translateY(-20px); }
`;

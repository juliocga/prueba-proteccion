import { Button, css, styled, Typography } from "@mui/material";

export const Content = styled("div")`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`

export const ClocksContent = styled("div")`
  display: flex;
  column-gap: 40px;
`;

export const CustomTimeContent = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const CustomButton = styled(Button)`
  text-transform: capitalize;
`;

export const RealTimeContent = styled("div")`
  display: flex;
  flex-direction: column;
  row-gap: 15px;
`;

export const FiboNumbers = styled(Typography)``

export const FiboContent = styled("div")`
  display: flex;
  flex-wrap: wrap;
  width: 450px;
  height: 200px;
  overflow: auto;
  box-shadow: 1px 1px 21px 0px rgb(229 229 229 / 75%);
  margin-bottom: 20px;
`;

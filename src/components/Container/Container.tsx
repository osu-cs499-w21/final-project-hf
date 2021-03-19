import styled from 'styled-components';
import { addGridWidth, GridProps } from 'src/components/responsive';

interface ContainerProps extends GridProps {
  bgColor?: string;
}

export const Container = styled.div`
  display: block;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;

  justify-content: center;
  padding: 1em;
  max-width: 100%;
  background-color: ${({ bgColor }: ContainerProps) => bgColor || 'inherit'};

  ${addGridWidth}
`;

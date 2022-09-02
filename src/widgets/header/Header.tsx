import { Title, Wrap } from "./styles"

export const Header: React.FC<{ title: string }> = ({ title }) => {
  return <Wrap>
    <Title>{title}</Title>
  </Wrap>
}
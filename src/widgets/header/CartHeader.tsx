import { Title, Wrap } from "./styles"

export const CartHeader: React.FC<{ title: string }> = ({ title }) => {
  return <Wrap>
    <Title>{title}</Title>
  </Wrap>
}
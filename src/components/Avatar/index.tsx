import { Container } from "./styles";

interface AvatarProps {
  urlImage: string;
  size: string;
}

export function Avatar({ urlImage, size }: AvatarProps) {
  return <Container size={size} src={urlImage} alt="Avatar" />;
}

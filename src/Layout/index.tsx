import { ReactNode } from "react";
import { AsideLeft } from "./components/AsideLeft";
import { AsideRight } from "./components/AsideRight";
import { MobileMenu } from "./components/MobileMenu";
import { Container } from "./styles";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <Container>
      <AsideLeft />
      {children}
      <AsideRight />
      <MobileMenu />
    </Container>
  );
}

import { Container } from "./styles";

import { BiSearch as IconSearch } from "react-icons/bi";
import { InputHTMLAttributes } from "react";
import { useState } from "react";

interface InputSearchProps extends InputHTMLAttributes<HTMLInputElement> {}

export function InputSearch({ ...rest }: InputSearchProps) {
  const [isFocus, setIsFocus] = useState(false);

  return (
    <Container isFocus={isFocus}>
      <IconSearch />
      <input
        placeholder="Buscar no Twitter"
        type="text"
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        {...rest}
      />
    </Container>
  );
}

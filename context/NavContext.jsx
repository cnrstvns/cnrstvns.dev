import { createContext } from "react";

const NavContext = createContext({
  open: false,
  setOpen: (open) => {}
});

export default NavContext;
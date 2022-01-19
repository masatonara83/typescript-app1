import { HamburgerIcon } from "@chakra-ui/icons";
import { IconButton } from "@chakra-ui/react";
import { memo, VFC } from "react";

type Props = {
  onOpen: () => void;
}

export const MenuIconButton: VFC<Props> = memo((props) => {
  const {onOpen} = props;
  return (
    <IconButton
     aria-label="メニューボタン"
     icon={<HamburgerIcon />}
     size="sm" 
     variant="ghost" 
     _hover={{opacity: 0.5}}
     display={{base: "block", md : "none"}} 
     onClick={onOpen}/>
  )
});
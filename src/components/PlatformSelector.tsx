import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import usePlatforms from "../hooks/usePlatforms";

const PlatformSelector = () => {
  const { data, error } = usePlatforms();
  if (error) return null;
  return (
    <>
      {" "}
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<BsChevronDown />}
          px={4}
          py={2}
          transition="all 0.2s"
          borderRadius="md"
          borderWidth="1px"
          _hover={{ bg: "gray.400" }}
          _expanded={{ bg: "gray.500" }}
          _focus={{ boxShadow: "outline" }}
        >
          Platform
        </MenuButton>
        <MenuList>
          {data.map((platforms) => (
            <MenuItem key={platforms.id}>{platforms.name}</MenuItem>
          ))}
        </MenuList>
      </Menu>
    </>
  );
};

export default PlatformSelector;

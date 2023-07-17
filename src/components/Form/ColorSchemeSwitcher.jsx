import { Button } from "@chakra-ui/react";

function ColorSwitcher({ darkTheme, setDarkTheme }) {
  function handleSwitch() {
    setDarkTheme(!darkTheme);
  }
  return (
    <>
      <Button
        onClick={handleSwitch}
        colorScheme={"messenger"}
      >
        {darkTheme ? "🌞" : "🌜"}
      </Button>
    </>
  );
}

export default ColorSwitcher;

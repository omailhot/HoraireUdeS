import { Box } from "@mui/material";

const Logo = () => {
  return (
    <Box
      component="img"
      sx={{ height: "40px", width: "40px" }}
      alt="Logo de l'Université de Sherbrooke"
      src={"logo.png"}
    />
  );
};

export default Logo;

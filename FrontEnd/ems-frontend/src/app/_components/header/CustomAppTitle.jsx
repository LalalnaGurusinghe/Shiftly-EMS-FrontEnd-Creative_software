import Box from "@mui/material/Box";
import Image from "next/image";

export default function CustomAppTitle() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        px: { md: 2, xs: 0 },
        gap: { md: 2, xs: 0 },
      }}
    >
      <Image
        src="/shiftly-logo.png"
        alt="Company Logo"
        width={75}
        height={50}
      />
    </Box>
  );
}

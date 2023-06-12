import { styled } from "@mui/material/styles";

const Image = styled("img", {
  shouldForwardProp: (prop) =>
    prop !== "fullWidth" && prop !== "centered" && prop !== "sx",
})((props) => ({
  display: "block",
  maxWidth: "100%",
  width: props.fullWidth ? "100%" : "auto",
  height: "auto",
  marginLeft: props.centered ? "auto" : "0",
  marginRight: props.centered ? "auto" : "0",
}));

function ResponsiveImage({ alt, sx = [], src, fullWidth = false, centered }) {
  return (
    <Image
      alt={alt}
      src={src}
      title={alt}
      fullWidth={fullWidth}
      centered={centered}
      sx={sx}
    />
  );
}

export default ResponsiveImage;

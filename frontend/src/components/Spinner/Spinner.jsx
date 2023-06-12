import PuffLoader from "react-spinners";

export default function Spinner() {
  const override = {
    display: "block",
    margin: "0 auto",
    borderColor: "red",
  };

  return (
    <PuffLoader
      cssOverride={override}
      size={150}
      aria-label="Loading Spinner"
      data-testid="loader"
    />
  );
}

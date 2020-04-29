const Generic = {
  primary: "#705DF5",
  accent: "#FFAA00",
  danger: "#E56464",
  grey: "#878787",
  greylight: "#848484",
  navbar: "#FDFDFD",
  padding: {
    6: "2rem",
    12: "2.5rem",
  },
  alert: {
    custom: { bg: "beige", text: "dodgerblue" },
  },
};

export const Light = {
  bgColor: "#fff",
  textColor: "#333",
  whitesmoke: "#FCFCFC",
  shadowColor: "#1877ff1c",
  ...Generic,
};

export const Dark = {
  bgColor: "#333",
  textColor: "#fff",
  whitesmoke: "#252525",
  shadowColor: "#0000001c",
  ...Generic,
};

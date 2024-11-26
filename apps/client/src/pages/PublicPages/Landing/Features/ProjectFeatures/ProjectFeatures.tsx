import { Box } from "@mui/material";
import { Feature } from "./Feature/Feature";

const featuresData = [
  {
    title: "RTKQ",
    descriptionKey: "features.rtkq",
    link: "https://redux-toolkit.js.org/tutorials/rtk-query#introduction",
  },
  {
    title: "Lambda",
    descriptionKey: "features.lambda",
    link: "https://aws.amazon.com/lambda/",
  },
  {
    title: "Terraform",
    descriptionKey: "features.terraform",
    link: "https://www.terraform.io/",
  },
  {
    title: "React Router",
    descriptionKey: "features.reactRouter",
    link: "https://reactrouter.com/",
  },
  {
    title: "Formik",
    descriptionKey: "features.formik",
    link: "https://formik.org/",
  },
  {
    title: "Zod",
    descriptionKey: "features.zod",
    link: "https://zod.dev/",
  },
  {
    title: "Toastify",
    descriptionKey: "features.toastify",
    link: "https://fkhadra.github.io/react-toastify/",
  },
];

export const ProjectFeatures = () => {
  return (
    <Box sx={{ overflow: "hidden" }}>
      {featuresData.map((feature, index) => (
        <Feature
          key={index}
          title={feature.title}
          descriptionKey={feature.descriptionKey}
          link={feature.link}
          index={index + 1}
        />
      ))}
    </Box>
  );
};

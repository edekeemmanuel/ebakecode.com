//import { LoremIpsum } from "react-lorem-ipsum";
import React from "react"
import {Text} from "./Text.tsx"
import { motion, useDeprecatedInvertedScale } from "framer-motion";

export const ContentPlaceholder = React.memo(() => {
  const inverted = useDeprecatedInvertedScale();
  return (
    <motion.div
      className="content-container"
      style={{ ...inverted, originY: 0, originX: 0 }}
    >
      <Text />
    </motion.div>
  );
});
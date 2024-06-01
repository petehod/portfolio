import { motion } from "framer-motion";
type ActionButtonProps = {
  buttonText: string;
  onPress: () => void;
};
export const ActionButton = ({ buttonText, onPress }: ActionButtonProps) => {
  return (
    <motion.button
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.5 },
      }}
      whileTap={{ scale: 0.9 }}
      onClick={onPress}
      className="btn--large btn--link rounded btn--white btn"
    >
      {buttonText}
    </motion.button>
  );
};

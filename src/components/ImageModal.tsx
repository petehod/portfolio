import { BUTTON_VARIANTS } from "@constants/animation.constants";
import { AnimatePresence, motion } from "framer-motion";
import Image, { ImageProps } from "next/image";
export const ImageModal = ({
  alt,
  onClose,
  ...props
}: ImageProps & {
  alt: string;
  onClose: () => void;
}) => {
  return (
    <AnimatePresence>
      <motion.div
        className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75 z-50 cursor-pointer"
        initial={{
          opacity: 0,
        }}
        animate={{
          opacity: 1,
        }}
        exit={{
          opacity: 0,
        }}
        onClick={onClose}
      >
        <motion.div
          className="relative"
          initial={{
            scale: 0.8,
          }}
          animate={{
            scale: 1,
          }}
          exit={{
            scale: 0.8,
          }}
          style={{
            height: "100%",
            width: "100%",
            maxHeight: "90vh",
            maxWidth: "90vw",
          }}
          whileTap={`tap`}
          whileHover={`hover`}
        >
          <Image
            alt={alt}
            fill
            className={`object-contain rounded`}
            {...props}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
};

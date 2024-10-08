import ClassName from "models/classname";
import NextImage from "next/image";
import styles from "./Image.module.scss";
const Image = ({
  children,
  className,
  src,
  alt,
  srcSet,
  sizes,
  dangerouslySetInnerHTML,
}) => {
  const imageClassName = new ClassName(styles.image);

  imageClassName.addIf(className, className);

  return (
    <figure className={imageClassName.toString()}>
      <div className="!flex justify-center items-center" id="#image-container">
        <NextImage
          className="w-full h-auto"
          width={580}
          height={400}
          alt={alt || ""}
          src={srcSet || src}
          sizes="(min-width: 808px) 50vw, 100vw"
          loading="lazy"
        />
      </div>
      {children && <figcaption>{children}</figcaption>}
      {dangerouslySetInnerHTML && (
        <figcaption
          dangerouslySetInnerHTML={{
            __html: dangerouslySetInnerHTML,
          }}
        />
      )}
    </figure>
  );
};

export default Image;

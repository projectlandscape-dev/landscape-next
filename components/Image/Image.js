import ClassName from 'models/classname';
import NextImage from "next/image"
import styles from './Image.module.scss';
const Image = ({
  children,
  className,
  width = '580',
  height = '400',
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
      <div className={styles.featuredImageImg} id="#image-container" style={{display: 'flex', justifyContent:'center', alignItems:'center'}}>
        <NextImage className='w-full h-auto' width={580} height={400}  alt={alt || ''} src={srcSet || src} sizes={sizes} loading='lazy' />
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

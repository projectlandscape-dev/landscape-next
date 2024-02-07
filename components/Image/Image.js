import ClassName from 'models/classname';
import styles from './Image.module.scss';

const Image = ({
  children,
  className,
  width = '100%',
  height = 'auto',
  src,
  alt = '',
  srcSet,
  sizes,
  dangerouslySetInnerHTML,
}) => {
  const imageClassName = new ClassName(styles.image);
  imageClassName.addIf(className, className);

  return (
    <figure className={imageClassName.toString()}>
   <div className={styles.featuredImageImg} id="#image-container">
        <img width={width} height={height} src={src} alt={alt || ''} srcSet={srcSet} sizes={sizes} loading='lazy' />
      </div>
      {(children || dangerouslySetInnerHTML) && (
        <figcaption>
          {children}
          {dangerouslySetInnerHTML && (
            <span dangerouslySetInnerHTML={{ __html: dangerouslySetInnerHTML }} />
          )}
        </figcaption>
      )}
    </figure>
  );
};

export default Image;

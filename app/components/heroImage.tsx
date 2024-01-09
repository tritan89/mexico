import React from 'react';
import styles from '@/app/ui/home.module.css';
import backgroundpic from '@/public/images/cr-huatulco-fachada.jpg';
import { quicksand } from '@/app/ui/fonts';
import Image from 'next/image';
interface HeroImageProps {
  imageUrl: string;
  altText: string;
  caption?: string;
}

const HeroImage: React.FC<HeroImageProps> = ({
  imageUrl,
  altText,
  caption,
}) => {
  return (
    <div className={styles.heroWrapper}>
      <Image
        src={imageUrl}
        className={styles.heroImage}
        alt={altText}
        layout="fill"
      />
      <div className={styles.heroContent}>
          <h1 className={quicksand.className}>{caption}</h1>
      </div>
    </div>
  );
};

export default HeroImage;

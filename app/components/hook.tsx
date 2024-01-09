import React from 'react';
import styles from '@/app/ui/home.module.css';
import { quicksand, lusitana, inter } from '@/app/ui/fonts';
interface ImageTextComponentProps {
    title: string;
    text: string;
    imagePath: string;
}

const ImageTextComponent: React.FC<ImageTextComponentProps> = ({ title, text, imagePath }) => {
    return (
        <div className={styles.hookContainer}>
            <div style={{ flex: 1 }}>
                <img src={imagePath} alt="Image" style={{ width: '100%', height: '100%' }} />
            </div>
            <div className={styles.hookTitle}  >
                <div className='text-4xl'>
                <h1 className={quicksand.className} >{title}</h1>
                </div>
                
                <p className={quicksand.className}>{text}</p>   
                </div>
                
            
        </div>
    );
};

export default ImageTextComponent;

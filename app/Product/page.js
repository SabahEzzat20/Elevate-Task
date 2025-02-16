import Image from "next/image";
import Grid from '@mui/material/Grid2';
import styles from '../page.module.css'
import Link from "next/link";

export default function Products({ product }) {
    if (!product) {
        return <p>Product data is unavailable</p>;
    }

    return (
        <div>
            <div className={styles.productImage}>
                {product.image && (
                    <Image
                        src={product.image}
                        width={100} 
                        height={100}
                        alt="Product Image"
                        unoptimized
                    />
                )}
            </div>
            <div>
                <p className={styles.productName}>{product.title}</p>
                <p className={styles.productDescription}>{product.description}</p>
            </div>
            <div className={styles.productPrice}>${product.price}</div>
            <Link href={`/${product.id}`} passHref>
                <button className={styles.showDetailsBtn}>Show Product Details</button>
            </Link>
        </div>
    )
};
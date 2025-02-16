import styles from './page.module.css'
export const metadata = {
  title: "BuyHub – The Ultimate Online Marketplace",
  description: "Shop from multiple brands and sellers in one place! BuyHub offers everything from fashion to electronics, all in one convenient platform.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={styles.body}>
        {children}
      </body>
    </html>
  );
}

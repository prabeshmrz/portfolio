import styles from "../styles/Footer.module.css";

const Footer = ({className}:any) => {
  return (
    <>
        <div className={`${styles.footer} ${className}`}>
            <span>Footer </span>
        </div>
    </>
  )
}

export default Footer;

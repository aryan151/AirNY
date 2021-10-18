import styles from './Footer.module.css';

const Footer = () => {
  return (
    <div className={`${styles.footer_container} layout__footer_container`}>
      <a 
        href='https://github.com/aryan151'   
        target='_blank'
        rel="noreferrer"
      >
        <i className='fab fa-github'></i>
      </a>
      <a 
        href='https://www.linkedin.com/in/aryan151/'
        target='_blank' 
        rel="noreferrer"
      >
        <i className='fab fa-linkedin'></i>
      </a>
      <a 
        href='https://angel.co/u/aryan151'
        target='_blank'
        rel="noreferrer"
      >
        <i className='fab fa-angellist'></i>
      </a>
    </div>
  );
};

export default Footer;
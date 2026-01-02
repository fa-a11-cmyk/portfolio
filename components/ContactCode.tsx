import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  
  {
    social: 'email',
    link: 'fatma.adel@episousse.com.tn',
    href: 'mailto:fatma.adel@episousse.com.tn',
  },
  /*{
    social: 'github',
    link: 'itsnitinr',
    href: 'https://github.com/itsnitinr',
  },*/
  {
    social: 'linkedin',
    link: 'fatma adel',
    href: 'https://www.linkedin.com/in/fatma-adel-9667862b6',
  },

  {
    social: 'WhatsApp',
    link: '+216 55234910',
    href: 'https://wa.me/+21655234910',
  },

];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;

import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: '✨ Всё в одном месте',
    Img: '/img/allinone.png',
    description: (
      <>
        Надоело искать информацию по разным сайтам и форумам? Эта база знаний создана, чтобы всё, что вам нужно, было под рукой.
      </>
    ),
  },
  {
    title: '🔍 Простота поиска',
    Img: '/img/fastsearch.png',
    description: (
      <>
        Благодаря структуре <code>Docusaurus</code> вы легко найдёте нужный контент с помощью встроенного поиска.
      </>
    ),
  },
  {
    title: '⏱️ Актуальность',
    Img: '/img/actual.png',
    description: (
      <>
        Забудьте об устаревшей информации! 🛠️ Этот проект — open source, и вы можете предлагать свои статьи и исправления прямо на GitHub.
      </>
    ),
  },
];

function Feature({Img, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureImg} src={Img} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

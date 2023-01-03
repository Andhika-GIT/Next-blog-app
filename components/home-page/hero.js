import classes from './hero.module.css';
import Image from 'next/image';

const Hero = () => {
  return (
    <>
      <section className={classes.hero}>
        <div className={classes.image}>
          <Image src="/images/site/Uganda.png" alt="image about showing max" width={300} height={300} />
        </div>
        <h1>Hi, im Hubla</h1>
        <p>blog about web development</p>
      </section>
    </>
  );
};

export default Hero;

import React from 'react';
import styles from './Home.module.scss'
import { MainButton } from '../../shared/MainButton';
import { PageLayout } from '../../shared/PageLayout';
import banner from '../../app/assets/images/banner.png';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <PageLayout>
      <div className={styles.block}>
        <div>
          <div>
            <h1 className={styles.header}>
              <span className={styles.highlight}>tsks...</span><br/>
              just tasks
            </h1>
          </div>

          <p className={styles.subtitle}>
            Keep track of the daily tasks in life and get that satisfaction upon completion.
          </p>

          <div className={styles.buttons}>
            <Link to='/sign-in'>
              <MainButton name={'Get Started'} gradient={true} />
            </Link>
            <Link to='/collections'>
              <MainButton name={'Try Demo'} />
            </Link>
          </div>
        </div>

        <div>
          <img
            src={banner}
            alt="Happy girl"
          />
        </div>
      </div>
    </PageLayout>
  );
};

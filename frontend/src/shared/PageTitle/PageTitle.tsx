import React from 'react';
import styles from './PageTitle.module.scss'
import classNames from 'classnames';
import { Icons } from '../Icons/Icons';

type Props = {
  title: string,
  button?: boolean,
  onClick?: () => void,
}

export const PageTitle:React.FC<Props> = ({title, button, onClick}) => {
  return (
    <div className={classNames(styles.titleWrapper, {[styles.withButton]: button} )}>
      {button && <button
        className={styles.button}
        onClick={onClick}
      >
        <Icons name={'arrowLeft'}/>
      </button>}
      <div className={styles.title}>
        {title}
      </div>
    </div>

  );
};

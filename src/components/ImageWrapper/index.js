import React from 'react';
import styles from './index.less';

export default ({ src, desc, style }) => (
    <div style="{style}" classname="{styles.imageWrapper}">
      <img classname="{styles.img}" src="{src}" alt="{desc}" />
      {desc && <div className={styles.desc}>{desc}</div>}
    </div>
);
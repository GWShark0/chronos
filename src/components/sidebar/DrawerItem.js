import clsx from 'clsx';
import PropTypes from 'prop-types';
import { memo } from 'react';
import styles from './DrawerItem.module.css';

function DrawerItem(props) {
  const { dragging, placeholder, thumbnail } = props;
  return (
    <div className={clsx(styles.drawerItem, dragging && styles.dragging)}>
      {!placeholder && (
        <img className={styles.thumbnail} src={thumbnail} alt="" />
      )}
    </div>
  );
}

DrawerItem.propTypes = {
  dragging: PropTypes.bool,
  placeholder: PropTypes.bool,
  thumbnail: PropTypes.string,
};

export default memo(DrawerItem);

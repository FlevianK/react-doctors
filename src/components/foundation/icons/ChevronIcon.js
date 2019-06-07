import React from 'react';
import PropTypes from 'prop-types';

import { mainFill } from '../Colors';

const ChevronIcon = ({ size = '24', color = mainFill, rotate = 0 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g transform={'rotate(' + rotate + ' 12 12)'}>
      <path
        // eslint-disable-next-line max-len
        d="M5.99609 14.3438C5.94141 14.2891 5.91406 14.2344 5.91406 14.125C5.91406 14.043 5.94141 13.9609 5.99609 13.8789L11.7383 8.16406C11.793 8.10938 11.875 8.05469 11.957 8.05469C12.0664 8.05469 12.1211 8.10938 12.1758 8.16406L17.918 13.8789C17.9727 13.9609 18 14.043 18 14.125C18 14.2344 17.9727 14.2891 17.918 14.3438L17.3711 14.8906C17.3164 14.9727 17.2617 15 17.1523 15C17.0703 15 16.9883 14.9727 16.9063 14.8906L11.957 9.94141L7.00781 14.8906C6.95313 14.9727 6.87109 15 6.76172 15C6.67969 15 6.59766 14.9727 6.54297 14.8906L5.99609 14.3438Z"
        fill={color}
      />
    </g>
  </svg>
);

ChevronIcon.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  rotate: PropTypes.number
};

export default ChevronIcon;

import React from 'react';
import './widget.scss';

function Widget({ type }) {
  let title, count, unit;

  switch (type) {
    case 'PendAccount':
      title = 'Pending Accounts';
      count = 3;
      unit = 'Account(s)';
      break;
    case 'ActiveAccount':
      title = 'Active Accounts';
      count = 156;
      unit = 'Account(s)';
      break;
    case 'ActiveCentra':
      title = 'Active Centras';
      count = 36;
      unit = 'Facility(s)';
      break;
    default:
      title = '';
      count = 0;
      unit = '';
      break;
  }

  return (
    <div className="widget">
      <div className="left">
        <span className="title">{title}</span>
        <div className="bottom">
          <span className="counter">{count}</span>
          <span className="type">{unit}</span>
        </div>
      </div>
    </div>
  );
}

export default Widget;

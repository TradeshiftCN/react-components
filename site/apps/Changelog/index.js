import React from 'react';
import Markdown from 'widgets/Markdown';
import html from '../../../CHANGELOG.md';
import './index.less';

const Changelog = () => {
  return (
    <div className="changelog">
      {/* <Center> */}
      <Markdown html={html} />
      {/* </Center> */}
    </div>
  );
};

export default Changelog;

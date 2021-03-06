import React from 'react';
import { python,react} from './imports';
import './Brand.scss';

const Brand = () => (
  <div className="gpt3__brand section__padding" id="brand">
    <div>
      <img src={python} alt="Python Logo"/>
    </div>
    <div>
      <img src={react} id='react' alt="React Logo"/>
    </div>
    {/* <div>
      <img src={slack} />
    </div>
    <div>
      <img src={atlassian} />
    </div>
    <div>
      <img src={dropbox} />
    </div>
    <div>
      <img src={shopify} />
    </div> */}
  </div>
);

export default Brand;
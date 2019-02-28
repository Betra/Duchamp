import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

import './CSS/global.css';
import { Body } from './Сomponents/Body';

ReactDOM.render(<Body />, document.getElementById('root'));

serviceWorker.unregister();
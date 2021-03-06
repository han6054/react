import React from 'react';
import ReactDom from 'react-dom';
// import GetDerivedStateFromProps from './6.getDerivedStateFromProps'
// import GetSnapshotBeforeUpdate from './7.getSnapshotBeforeUpdate'
// import Context from './doc/8.context'
// import PurComponent from './doc/10.purComponent'
// import MouseTracker from './doc/11.render/MouseTracker'
// import Picture from './doc/11.render/Picture'
// import './doc/13.redux/doc/counter'
// import Modal from './doc/12.createPortal'
// import Counter from './doc/13.redux/component/Counter'

// ReactDom.render(
//     <Modal/>,
//     document.getElementById('root'));

//     <MouseTracker>
//         {
//             (props) => <Picture {...props}/>
//         }
//     </MouseTracker>,

//     // render props
//     <MouseTracker render={(props) => <Picture {...props}/>}/>,

// ReactDom.render(
//     // render props
//     <Picture/>,
//     document.getElementById('root'));


import Counter from './doc/react-redux/component/Counter';
import {Provider} from './doc/react-redux/index';
import store from './doc/react-redux/store';
ReactDom.render((
    <Provider store={store}>
        <Counter/>
    </Provider>
),document.getElementById('root'));

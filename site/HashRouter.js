import createHashSource from 'hash-source';
import { createHistory } from '@reach/router';

const history = createHistory(createHashSource());

// history.listen(({ location }) => {
//   // react router updates only iframe url hash, so we have to change window.top location manually
//   window.top.location.hash = [
//     window.top.location.hash,
//     location.pathname,
//     location.search,
//     location.hash
//   ].join('')
// })
//
// console.log('window.top.location.hash', window.top.location.hash)

export const HashRouter = history;
export const navigate = history.navigate;

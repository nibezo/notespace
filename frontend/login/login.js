const h2 = React.createElement('p', null, 'Hello with H2');
const helloWorldHeading = React.createElement(
  'h1',
  null,
  'Simple app',
  h2
);

const container = document.getElementById('login');
const root = ReactDOM.createRoot(container);
root.render(helloWorldHeading);

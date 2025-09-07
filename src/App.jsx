import Alert from './Alert';

function App() {
  return (
    <Alert type="Information" heading="Success" closable onClose={() => console.log('closed')}>
      Everything is good
    </Alert>
  );
}

export default App;

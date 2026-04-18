import { useState, useEffect } from 'react';
import { Welcome } from './components/Welcome';
import { Wizard } from './components/Wizard';

function App() {
  const [started, setStarted] = useState(false);

  // Check if we already have some data in session to skip welcome
  useEffect(() => {
    const saved = sessionStorage.getItem('notfallakte_data');
    if (saved) {
      try {
        const parsed = JSON.parse(saved);
        if (parsed.firstName || parsed.lastName || parsed.bankAccounts?.length > 0) {
          setStarted(true);
        }
      } catch {
        // ignore
      }
    }
  }, []);

  return (
    <>
      {started ? (
        <Wizard />
      ) : (
        <Welcome onStart={() => setStarted(true)} />
      )}
    </>
  );
}

export default App;

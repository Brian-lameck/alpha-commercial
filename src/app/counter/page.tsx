'use client';

import React, { useState, ChangeEvent } from 'react';

export default function CounterPage() {
  const [count, setCount] = useState<number>(0);
  const [lastAction, setLastAction] = useState<string>('None');
  const [customInputValue, setCustomInputValue] = useState<string>('');

  const handleIncrement = () => {
    setCount((prev) => prev + 1);
    setLastAction('Incremented ');
  };

  const handleDecrement = () => {
    setCount((prev) => prev - 1);
    setLastAction('Decremented ');
  };

  const handleReset = () => {
    setCount(0);
    setCustomInputValue('');
    setLastAction('Reset ');
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setCustomInputValue(e.target.value);
  };

  const handleSetCount = () => {
    const parsedValue = parseInt(customInputValue, 10);
    
    // Safety check: ensure input is a valid number before updating state
    if (!isNaN(parsedValue)) {
      setCount(parsedValue);
      setLastAction(`Set to ${parsedValue} `);
      setCustomInputValue(''); // Clear input box after setting
    } else {
      alert('Please enter a valid integer.');
    }
  };

  return (
    <main style={styles.container}>
      <div style={styles.card}>
        <h1 style={styles.title}>System Counter Matrix</h1>
        <p style={styles.subtitle}></p>
        
        <hr style={styles.divider} />

        {/* Dynamic State Metrics */}
        <div style={styles.metricContainer}>
          <div style={styles.counterValue}>
            {count}
          </div>
          <div style={styles.badge}>
            Last Action: {lastAction}
          </div>
        </div>

        {/* Primary Control Interface Layout */}
        <div style={styles.buttonGroup}>
          <button style={{ ...styles.btn, ...styles.btnDecrement }} onClick={handleDecrement}>
            Decrement (-)
          </button>
          
          <button style={{ ...styles.btn, ...styles.btnReset }} onClick={handleReset}>
            Reset
          </button>
          
          <button style={{ ...styles.btn, ...styles.btnIncrement }} onClick={handleIncrement}>
            Increment (+)
          </button>
        </div>

        <hr style={styles.divider} />

        {/* Custom Set Value Section */}
        <div style={styles.setContainer}>
          <input 
            type="number" 
            placeholder="Enter custom value..." 
            value={customInputValue}
            onChange={handleInputChange}
            style={styles.input}
            onKeyDown={(e) => { if (e.key === 'Enter') handleSetCount(); }}
          />
          <button style={styles.btnSet} onClick={handleSetCount}>
            Set Count
          </button>
        </div>
      </div>
    </main>
  );
}

// Updated Inline Styles Framework
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f7f7f7',
    fontFamily: "'Segoe UI', system-ui, -apple-system, sans-serif",
    padding: '20px',
  },
  card: {
    background: '#ffffff',
    border: '1px solid #e5e5e5',
    borderRadius: '12px',
    padding: '40px',
    maxWidth: '450px',
    width: '100%',
    boxShadow: '0 10px 25px rgba(0,0,0,0.05)',
    textAlign: 'center',
  },
  title: {
    fontSize: '24px',
    fontWeight: 700,
    color: '#111',
    marginBottom: '8px',
  },
  subtitle: {
    fontSize: '14px',
    color: '#666',
    marginBottom: '20px',
  },
  divider: {
    border: '0',
    height: '1px',
    background: '#eee',
    margin: '25px 0',
  },
  metricContainer: {
    margin: '30px 0',
  },
  counterValue: {
    fontSize: '64px',
    fontWeight: 800,
    color: '#111',
    lineHeight: 1,
    fontFamily: 'monospace',
    marginBottom: '15px',
  },
  badge: {
    display: 'inline-block',
    background: '#111',
    color: '#fff',
    fontSize: '12px',
    fontWeight: 'bold',
    padding: '6px 14px',
    borderRadius: '20px',
  },
  buttonGroup: {
    display: 'flex',
    gap: '10px',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    padding: '12px 18px',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'opacity 0.2s',
    outline: 'none',
  },
  btnDecrement: {
    backgroundColor: '#f55151',
    color: '#fff',
    flexGrow: 2,
  },
  btnIncrement: {
    backgroundColor: '#34a853',
    color: '#fff',
    flexGrow: 2,
  },
  btnReset: {
    backgroundColor: '#e5e5e5',
    color: '#333',
    flexGrow: 1,
  },
  setContainer: {
    display: 'flex',
    gap: '10px',
    marginTop: '10px',
  },
  input: {
    flexGrow: 1,
    padding: '12px 15px',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '14px',
    outline: 'none',
  },
  btnSet: {
    padding: '12px 20px',
    backgroundColor: '#3665f3',
    color: '#fff',
    border: 'none',
    borderRadius: '6px',
    fontWeight: 'bold',
    fontSize: '14px',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
  },
};
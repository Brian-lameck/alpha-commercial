'use client';

import React, { useState, useEffect } from 'react';

export default function CalculatorPage() {
  const [expression, setExpression] = useState<string>('');
  const [result, setResult] = useState<string>('0');
  const [isEvaluated, setIsEvaluated] = useState<boolean>(false);

    const handleInput = (value: string) => {
    if (isEvaluated) {
            if (['+', '-', '*', '/'].includes(value)) {
        setExpression(result + value);
      } else {
        setExpression(value);
      }
      setIsEvaluated(false);
    } else {
      setExpression((prev) => prev + value);
    }
  };

  const handleClear = () => {
    setExpression('');
    setResult('0');
    setIsEvaluated(false);
  };

  const handleDelete = () => {
    if (isEvaluated) {
      handleClear();
    } else {
      setExpression((prev) => prev.slice(0, -1));
    }
  };

  const handleCalculate = () => {
    if (!expression) return;
    
    try {
                  const sanitizedExpression = expression.replace(/×/g, '*').replace(/÷/g, '/');
      
          const calculateValue = new Function(`return (${sanitizedExpression})`);
      const output = calculateValue();

      if (output === undefined || isNaN(output)) {
        throw new Error();
      }

      setResult(Number(output.toFixed(4)).toString());
      setIsEvaluated(true);
    } catch (error) {
      setResult('Error');
      setIsEvaluated(true);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key >= '0' && e.key <= '9') handleInput(e.key);
      if (['+', '-', '*', '/'].includes(e.key)) handleInput(e.key);
      if (e.key === '.') handleInput('.');
      if (e.key === 'Enter' || e.key === '=') handleCalculate();
      if (e.key === 'Backspace') handleDelete();
      if (e.key === 'Escape') handleClear();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [expression, result, isEvaluated]);

  return (
    <main style={styles.container}>
      <div style={styles.calculatorCard}>
        <h1 style={styles.appTitle}>Calculator</h1>
        <p style={styles.appSubtitle}></p>

        {/* Display Panel */}
        <div style={styles.displayPanel}>
          <div style={styles.expressionView}>
            {expression || ' '}
          </div>
          <div style={styles.resultView}>
            {result}
          </div>
        </div>

        {/* Keypad Layout Engine */}
        <div style={styles.keypadGrid}>
          <button style={{ ...styles.key, ...styles.operatorKey }} onClick={handleClear}>C</button>
          <button style={{ ...styles.key, ...styles.operatorKey }} onClick={handleDelete}>⌫</button>
          <button style={{ ...styles.key, ...styles.operatorKey }} onClick={() => handleInput('/')}>÷</button>
          <button style={{ ...styles.key, ...styles.operatorKey }} onClick={() => handleInput('*')}>×</button>

          <button style={styles.key} onClick={() => handleInput('7')}>7</button>
          <button style={styles.key} onClick={() => handleInput('8')}>8</button>
          <button style={styles.key} onClick={() => handleInput('9')}>9</button>
          <button style={{ ...styles.key, ...styles.operatorKey }} onClick={() => handleInput('-')}>-</button>

          <button style={styles.key} onClick={() => handleInput('4')}>4</button>
          <button style={styles.key} onClick={() => handleInput('5')}>5</button>
          <button style={styles.key} onClick={() => handleInput('6')}>6</button>
          <button style={{ ...styles.key, ...styles.operatorKey }} onClick={() => handleInput('+')}>+</button>

          <button style={styles.key} onClick={() => handleInput('1')}>1</button>
          <button style={styles.key} onClick={() => handleInput('2')}>2</button>
          <button style={styles.key} onClick={() => handleInput('3')}>3</button>
          
          {/* Equal button stretches vertically across rows */}
          <button style={{ ...styles.key, ...styles.equalKey }} onClick={handleCalculate}>=</button>

          {/* Stretched Zero button */}
          <button style={{ ...styles.key, ...styles.zeroKey }} onClick={() => handleInput('0')}>0</button>
          <button style={styles.key} onClick={() => handleInput('.')}>.</button>
        </div>
      </div>
    </main>
  );
}

// Inline Style Layout Metrics
const styles: { [key: string]: React.CSSProperties } = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundColor: '#f3f4f6',
    fontFamily: "'Segoe UI', system-ui, sans-serif",
    padding: '20px',
  },
  calculatorCard: {
    background: '#111111',
    borderRadius: '16px',
    padding: '30px',
    maxWidth: '380px',
    width: '100%',
    boxShadow: '0 20px 40px rgba(0,0,0,0.15)',
  },
  appTitle: {
    color: '#ffffff',
    fontSize: '18px',
    fontWeight: 700,
    textAlign: 'center',
    marginBottom: '2px',
  },
  appSubtitle: {
    color: '#666666',
    fontSize: '12px',
    textAlign: 'center',
    marginBottom: '20px',
  },
  displayPanel: {
    background: '#1a1a1a',
    borderRadius: '10px',
    padding: '20px',
    textAlign: 'right',
    marginBottom: '25px',
    minHeight: '90px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    wordBreak: 'break-all',
  },
  expressionView: {
    color: '#888888',
    fontSize: '14px',
    fontFamily: 'monospace',
    minHeight: '18px',
  },
  resultView: {
    color: '#ffffff',
    fontSize: '36px',
    fontWeight: 'bold',
    fontFamily: 'monospace',
    lineHeight: '1.1',
    marginTop: '5px',
  },
  keypadGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '12px',
  },
  key: {
    background: '#2c2c2c',
    color: '#ffffff',
    border: 'none',
    borderRadius: '8px',
    padding: '18px 10px',
    fontSize: '18px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'background-color 0.15s ease',
    outline: 'none',
    userSelect: 'none',
  },
  operatorKey: {
    background: '#3e3e3e',
    color: '#3665f3',
    fontWeight: '700',
  },
  equalKey: {
    background: '#3665f3',
    color: '#ffffff',
    gridRow: 'span 2',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '24px',
  },
  zeroKey: {
    gridColumn: 'span 2',
  },
};
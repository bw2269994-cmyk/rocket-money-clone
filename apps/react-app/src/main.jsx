import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles.css';

const subscriptions = [
  { name: 'Netflix', category: 'Entertainment', amount: '$15.99', status: 'renewing in 4 days' },
  { name: 'Spotify', category: 'Music', amount: '$10.99', status: 'renewing in 3 days' },
  { name: 'Adobe', category: 'Software', amount: '$52.99', status: 'renewing in 9 days' },
];

const spending = [
  { label: 'Jan', value: 46 },
  { label: 'Feb', value: 68 },
  { label: 'Mar', value: 58 },
  { label: 'Apr', value: 82 },
  { label: 'May', value: 74 },
  { label: 'Jun', value: 96 },
];

const categories = [
  { name: 'Housing', value: '$1,420', percent: '34%' },
  { name: 'Food', value: '$620', percent: '18%' },
  { name: 'Travel', value: '$440', percent: '14%' },
  { name: 'Utilities', value: '$325', percent: '11%' },
];

function App() {
  return (
    <main className="shell">
      <nav className="topbar">
        <div className="brand">
          <span className="brand-mark">R</span>
          <span>Rocket Money</span>
        </div>

        <div className="nav-actions">
          <button className="nav-pill">Overview</button>
          <button className="nav-pill">Accounts</button>
          <button className="primary-btn">+ Add account</button>
        </div>
      </nav>

      <div className="layout">
        <section className="hero card">
          <div className="hero-head">
            <div>
              <p className="eyebrow">Cash flow</p>
              <h1>Welcome back, Alex.</h1>
              <p className="muted">Here&apos;s how your finances are trending this month.</p>
            </div>
            <span className="success-pill">+ 12.4% vs last month</span>
          </div>

          <div className="balance-box">
            <div>
              <p className="eyebrow">Available balance</p>
              <div className="amount-main">$18,240.72</div>
            </div>
            <button className="primary-btn">Transfer</button>
          </div>

          <div className="stats-grid">
            <div className="stat-box">
              <span className="eyebrow">Income</span>
              <strong>$6,180</strong>
            </div>
            <div className="stat-box">
              <span className="eyebrow">Spending</span>
              <strong>$3,440</strong>
            </div>
            <div className="stat-box">
              <span className="eyebrow">Savings</span>
              <strong>$2,740</strong>
            </div>
          </div>
        </section>

        <aside className="budget card">
          <p className="eyebrow">Monthly budget</p>
          <h2>$5,500</h2>
          <div className="progress-wrap">
            <p className="eyebrow">Spent</p>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: '68%' }}></div>
            </div>
            <ul className="mini-list">
              <li><span>Allocated</span><strong>$3,760</strong></li>
              <li><span>Remaining</span><strong>$1,740</strong></li>
            </ul>
          </div>
        </aside>
      </div>

      <div className="lower-grid">
        <section className="card list-panel">
          <div className="section-head">
            <div>
              <p className="eyebrow">Subscriptions</p>
              <h3>Smart savings</h3>
            </div>
            <button className="secondary-btn">View all</button>
          </div>

          {subscriptions.map((item) => (
            <div className="sub-item" key={item.name}>
              <div className="sub-info">
                <span className="service-icon">{item.name[0]}</span>
                <div>
                  <strong>{item.name}</strong>
                  <small>{item.category} • {item.status}</small>
                </div>
              </div>
              <div className="sub-amount">
                <strong>{item.amount}</strong>
                <small>monthly</small>
              </div>
            </div>
          ))}
        </section>

        <section className="card chart-panel">
          <p className="eyebrow">Spending trend</p>
          <h3>Last 6 months</h3>

          <div className="chart">
            {spending.map((bar, index) => (
              <div key={bar.label} className="bar-column">
                <div
                  className="bar"
                  style={{
                    height: `${bar.value}%`,
                    background:
                      index % 2 === 0
                        ? 'linear-gradient(180deg, #74d7ff, #4ea4ff)'
                        : 'linear-gradient(180deg, #74ffbf, #2cc79a)',
                  }}
                ></div>
                <span>{bar.label}</span>
              </div>
            ))}
          </div>

          <div className="category-grid">
            {categories.map((category) => (
              <div key={category.name} className="category-box">
                <div className="category-top">
                  <strong>{category.name}</strong>
                  <span>{category.percent}</span>
                </div>
                <div>{category.value}</div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

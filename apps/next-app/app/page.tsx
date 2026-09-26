const subscriptions = [
  { name: 'Netflix', type: 'Streaming', amount: '$15.99', tone: 'blue', next: 'In 4 days' },
  { name: 'Spotify', type: 'Music', amount: '$10.99', tone: 'green', next: 'In 3 days' },
  { name: 'Adobe', type: 'Creative', amount: '$52.99', tone: 'gold', next: 'In 9 days' },
];

const bars = [
  { label: 'Jan', value: 44 },
  { label: 'Feb', value: 66 },
  { label: 'Mar', value: 55 },
  { label: 'Apr', value: 80 },
  { label: 'May', value: 70 },
  { label: 'Jun', value: 94 },
];

const categories = [
  { name: 'Housing', value: '$1,420', percent: 34 },
  { name: 'Food', value: '$620', percent: 18 },
  { name: 'Travel', value: '$440', percent: 14 },
  { name: 'Utilities', value: '$325', percent: 11 },
];

export default function Page() {
  return (
    <main className="dashboard-shell">
      <nav className="navbar">
        <div className="brand">
          <div className="brand-mark">R</div>
          <span>Rocket Money</span>
        </div>

        <div className="nav-actions">
          <button className="chip">Overview</button>
          <button className="secondary-btn">Accounts</button>
          <button className="primary-btn">+ Add account</button>
        </div>
      </nav>

      <div className="dashboard">
        <section className="top-grid">
          <div className="card hero-card">
            <div className="hero-header">
              <div>
                <div className="panel-label">Cash flow</div>
                <h1 className="hero-title">Welcome back, Alex.</h1>
                <p className="hero-subtext">Here&apos;s how your finances are trending this month.</p>
              </div>
              <span className="growth-pill">+ 12.4% vs last month</span>
            </div>

            <div className="balance-box">
              <div>
                <div className="panel-label">Available balance</div>
                <div className="balance-value">$18,240.72</div>
              </div>
              <button className="primary-btn">Transfer</button>
            </div>

            <div className="metric-row">
              <div className="metric-box">
                <div className="metric-label">Income</div>
                <div className="metric-value">$6,180</div>
              </div>
              <div className="metric-box">
                <div className="metric-label">Spending</div>
                <div className="metric-value">$3,440</div>
              </div>
              <div className="metric-box">
                <div className="metric-label">Savings</div>
                <div className="metric-value">$2,740</div>
              </div>
            </div>
          </div>

          <aside className="card side-card">
            <div className="panel-label">Monthly budget</div>
            <h2 className="panel-title">$5,500</h2>

            <div className="progress-wrap">
              <div className="panel-label">Spent</div>
              <div className="progress-line">
                <div className="progress-fill" style={{ width: '68%' }} />
              </div>
              <ul className="meta-list">
                <li className="meta-item">
                  <span>Allocated</span>
                  <span className="meta-pill">$3,760</span>
                </li>
                <li className="meta-item">
                  <span>Remaining</span>
                  <span className="meta-pill">$1,740</span>
                </li>
              </ul>
            </div>
          </aside>
        </section>

        <section className="bottom-grid">
          <div className="card list-card">
            <div className="hero-header">
              <div>
                <div className="panel-label">Subscriptions</div>
                <h2 className="panel-title">Smart savings</h2>
              </div>
              <button className="secondary-btn">View all</button>
            </div>

            {subscriptions.map((item) => (
              <div key={item.name} className="list-row">
                <div className="service">
                  <div className="service-icon" style={{ background: item.tone === 'blue' ? 'rgba(94, 167, 255, 0.12)' : item.tone === 'green' ? 'rgba(58, 215, 162, 0.12)' : 'rgba(248, 184, 75, 0.12)' }}>
                    {item.name.slice(0, 1)}
                  </div>
                  <div>
                    <div className="service-name">{item.name}</div>
                    <div className="service-meta">{item.type} • {item.next}</div>
                  </div>
                </div>
                <div className="amount">
                  <strong>{item.amount}</strong>
                  <span>monthly</span>
                </div>
              </div>
            ))}
          </div>

          <div className="card side-card">
            <div className="panel-label">Spending trend</div>
            <h2 className="panel-title">Last 6 months</h2>

            <div className="chart-bars">
              {bars.map((bar, index) => (
                <div key={bar.label} className="bar-group">
                  <div className="bar" style={{ height: `${bar.value}%`, background: index % 2 === 0 ? 'linear-gradient(180deg, #74d7ff, #4ea4ff)' : 'linear-gradient(180deg, #74ffbf, #2cc79a)' }} />
                  <div className="bar-label">{bar.label}</div>
                </div>
              ))}
            </div>

            <div className="category-grid">
              {categories.map((category) => (
                <div key={category.name} className="category-box">
                  <div className="category-head">
                    <strong>{category.name}</strong>
                    <span className="category-percent">{category.percent}%</span>
                  </div>
                  <div>{category.value}</div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}

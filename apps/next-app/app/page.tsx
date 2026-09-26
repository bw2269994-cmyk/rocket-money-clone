'use client';

import { BarChart, Bar, LineChart, Line, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useState } from 'react';
import { motion } from 'framer-motion';

const spendingBreakdown = [
  { name: 'Housing', value: 1420, percent: '34%', color: '#5ea7ff' },
  { name: 'Food', value: 620, percent: '18%', color: '#3ad7a2' },
  { name: 'Travel', value: 440, percent: '14%', color: '#f8b84b' },
  { name: 'Utilities', value: 325, percent: '11%', color: '#ff7585' },
];

const subscriptions = [
  { name: 'Netflix', category: 'Streaming', amount: '$15.99', due: 'in 4 days', tone: '#5ea7ff', status: 'active' },
  { name: 'Spotify', category: 'Music', amount: '$10.99', due: 'in 3 days', tone: '#3ad7a2', status: 'active' },
  { name: 'Adobe', category: 'Creative', amount: '$52.99', due: 'in 9 days', tone: '#f8b84b', status: 'active' },
  { name: 'Dropbox', category: 'Storage', amount: '$11.99', due: 'in 12 days', tone: '#9d82ff', status: 'active' },
];

const transactions = [
  { merchant: 'Whole Foods', category: 'Groceries', amount: '-$84.20', time: 'Today · 5:42 PM', positive: false },
  { merchant: 'Stripe payout', category: 'Income', amount: '+$1,240.00', time: 'Today · 11:16 AM', positive: true },
  { merchant: 'Uber', category: 'Travel', amount: '-$18.80', time: 'Yesterday · 8:05 PM', positive: false },
  { merchant: 'PayPal', category: 'Freelance', amount: '+$420.00', time: 'Yesterday · 2:10 PM', positive: true },
];

const goals = [
  { name: 'Emergency fund', saved: 8200, target: 12000, progress: 68, color: '#3ad7a2' },
  { name: 'Travel fund', saved: 3600, target: 5000, progress: 72, color: '#5ea7ff' },
  { name: 'New laptop', saved: 1150, target: 2000, progress: 58, color: '#f8b84b' },
];

const activity = [
  { label: 'Account connected', detail: 'Chase checking · 9:15 AM', type: 'good' },
  { label: 'Subscription identified', detail: 'Spotify · $10.99 monthly', type: 'warn' },
  { label: 'Budget alert', detail: 'Food is 14% over target', type: 'alert' },
];

const netWorthSeries = [
  { name: 'Week 1', value: 16800 },
  { name: 'Week 2', value: 18200 },
  { name: 'Week 3', value: 17600 },
  { name: 'Week 4', value: 19200 },
  { name: 'Week 5', value: 18800 },
  { name: 'Week 6', value: 20100 },
  { name: 'Week 7', value: 21400 },
];

const monthlySpending = [
  { month: 'Jan', income: 5600, expenses: 3200 },
  { month: 'Feb', income: 5800, expenses: 3400 },
  { month: 'Mar', income: 6100, expenses: 3100 },
  { month: 'Apr', income: 6300, expenses: 3800 },
  { month: 'May', income: 6500, expenses: 3600 },
  { month: 'Jun', income: 6800, expenses: 3900 },
];

export default function Home() {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showAllTransactions, setShowAllTransactions] = useState(false);

  return (
    <main className="app-shell">
      <header className="topbar">
        <div className="brand-wrap">
          <div className="brand-mark">R</div>
          <div>
            <div className="brand-name">Rocket Money</div>
            <div className="brand-sub">Finance overview</div>
          </div>
        </div>

        <div className="topbar-actions">
          <button className="topbar-chip">Overview</button>
          <button className="topbar-chip muted">Accounts</button>
          <button className="primary-btn">+ Add account</button>
        </div>
      </header>

      <section className="hero-grid">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="panel main-panel">
          <div className="panel-header">
            <div>
              <div className="eyebrow">Cash flow</div>
              <h1>Welcome back, Alex.</h1>
            </div>
            <span className="tag success">+12.4% vs last month</span>
          </div>

          <div className="balance-card">
            <div>
              <div className="eyebrow muted">Available balance</div>
              <div className="huge-number">$18,240.72</div>
            </div>
            <button className="primary-btn">Transfer</button>
          </div>

          <div className="stats-grid">
            <div className="stat-card">
              <div className="eyebrow muted">Income</div>
              <div className="stat-number">$6,180</div>
            </div>
            <div className="stat-card">
              <div className="eyebrow muted">Spending</div>
              <div className="stat-number">$3,440</div>
            </div>
            <div className="stat-card">
              <div className="eyebrow muted">Savings</div>
              <div className="stat-number">$2,740</div>
            </div>
          </div>

          <div style={{ marginTop: '20px' }}>
            <div className="eyebrow" style={{ marginBottom: '14px' }}>Income vs Expenses</div>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={monthlySpending}>
                <CartesianGrid strokeDasharray="3 3" stroke="rgba(154, 176, 203, 0.1)" />
                <XAxis dataKey="month" stroke="#8ea6c8" />
                <YAxis stroke="#8ea6c8" />
                <Tooltip contentStyle={{ background: '#121f2d', border: '1px solid rgba(154, 176, 203, 0.2)' }} />
                <Legend />
                <Bar dataKey="income" stackId="a" fill="#3ad7a2" />
                <Bar dataKey="expenses" stackId="a" fill="#ff7585" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </motion.div>

        <motion.aside initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} className="panel side-panel">
          <div className="eyebrow">Monthly budget</div>
          <h2>$5,500</h2>

          <div className="progress-wrap">
            <div className="progress-meta">
              <span className="eyebrow muted">Spent</span>
              <span className="progress-text">68%</span>
            </div>
            <div className="progress-bar">
              <span style={{ width: '68%' }} />
            </div>

            <ul className="budget-list">
              <li>
                <span>Allocated</span>
                <strong>$3,760</strong>
              </li>
              <li>
                <span>Remaining</span>
                <strong>$1,740</strong>
              </li>
            </ul>
          </div>

          <div style={{ marginTop: '20px' }}>
            <div className="eyebrow" style={{ marginBottom: '12px' }}>Spending breakdown</div>
            <ResponsiveContainer width="100%" height={200}>
              <PieChart>
                <Pie data={spendingBreakdown} cx="50%" cy="50%" labelLine={false} label={(entry) => entry.percent} outerRadius={60} fill="#8884d8" dataKey="value">
                  {spendingBreakdown.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.aside>
      </section>

      <section className="content-grid">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} className="panel table-panel">
          <div className="panel-header compact">
            <div>
              <div className="eyebrow">Recent activity</div>
              <h3>Transactions</h3>
            </div>
            <button className="ghost-btn" onClick={() => setShowAllTransactions(!showAllTransactions)}>
              {showAllTransactions ? 'Collapse' : 'View all'}
            </button>
          </div>

          <div className="table-wrap">
            {transactions.slice(0, showAllTransactions ? transactions.length : 4).map((item) => (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} key={item.merchant} className="transaction-row">
                <div className="merchant-block">
                  <div className="merchant-badge">{item.merchant.slice(0, 1)}</div>
                  <div>
                    <strong>{item.merchant}</strong>
                    <div className="transaction-meta">{item.category}</div>
                  </div>
                </div>

                <div className="transaction-time">{item.time}</div>

                <div className={`transaction-amount ${item.positive ? 'positive' : 'negative'}`}>
                  {item.amount}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.3 }} className="panel insight-panel">
          <div className="panel-header compact">
            <div>
              <div className="eyebrow">Smart insights</div>
              <h3>Money moves</h3>
            </div>
            <button className="ghost-btn">Refresh</button>
          </div>

          <div className="insight-list">
            {activity.map((item) => (
              <div className={`insight-item ${item.type}`} key={item.label}>
                <div className="insight-dot" />
                <div>
                  <strong>{item.label}</strong>
                  <div className="insight-detail">{item.detail}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </section>

      <section className="bottom-grid">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.4 }} className="panel list-panel">
          <div className="panel-header compact">
            <div>
              <div className="eyebrow">Subscriptions</div>
              <h3>Smart savings</h3>
            </div>
            <button className="ghost-btn">Review</button>
          </div>

          <div className="subscription-list">
            {subscriptions.map((item) => (
              <div className="subscription-item" key={item.name}>
                <div className="service-left">
                  <div className="service-icon" style={{ background: `${item.tone}22`, color: item.tone }}>
                    {item.name.slice(0, 1)}
                  </div>
                  <div>
                    <strong>{item.name}</strong>
                    <div className="transaction-meta">{item.category} · due {item.due}</div>
                  </div>
                </div>

                <div className="amount-block">
                  <strong>{item.amount}</strong>
                  <span>monthly</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.5 }} className="panel chart-panel">
          <div className="panel-header compact">
            <div>
              <div className="eyebrow">Net worth</div>
              <h3>Growth trend</h3>
            </div>
            <span className="tag neutral">+9.2%</span>
          </div>

          <ResponsiveContainer width="100%" height={200}>
            <LineChart data={netWorthSeries} margin={{ top: 5, right: 10, left: 0, bottom: 5 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="rgba(154, 176, 203, 0.1)" />
              <XAxis dataKey="name" stroke="#8ea6c8" style={{ fontSize: '0.8rem' }} />
              <YAxis stroke="#8ea6c8" style={{ fontSize: '0.8rem' }} />
              <Tooltip contentStyle={{ background: '#121f2d', border: '1px solid rgba(154, 176, 203, 0.2)' }} />
              <Line type="monotone" dataKey="value" stroke="#3ad7a2" dot={false} strokeWidth={2} />
            </LineChart>
          </ResponsiveContainer>
        </motion.div>
      </section>

      <section className="goals-grid">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.6 }} className="panel goals-panel">
          <div className="panel-header compact">
            <div>
              <div className="eyebrow">Goals</div>
              <h3>Future plans</h3>
            </div>
            <button className="ghost-btn">Add goal</button>
          </div>

          <div className="goals-list">
            {goals.map((goal) => (
              <div className="goal-item" key={goal.name}>
                <div className="goal-topline">
                  <strong>{goal.name}</strong>
                  <span>${goal.saved.toLocaleString()} / ${goal.target.toLocaleString()}</span>
                </div>
                <div className="goal-bar">
                  <span style={{ width: `${goal.progress}%`, background: goal.color }} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.7 }} className="panel category-panel">
          <div className="panel-header compact">
            <div>
              <div className="eyebrow">Spending</div>
              <h3>By category</h3>
            </div>
          </div>

          <div className="category-grid">
            {spendingBreakdown.map((category) => (
              <motion.div
                key={category.name}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedCategory(category.name)}
                className="category-card"
              >
                <div className="category-header">
                  <span className="category-dot" style={{ background: category.color }} />
                  <strong>{category.name}</strong>
                  <span className="category-percent">{category.percent}</span>
                </div>
                <div className="category-value">${category.value.toLocaleString()}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </main>
  );
}

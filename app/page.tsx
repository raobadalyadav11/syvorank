'use client'

import { useMemo, useState } from 'react'
import {
  Activity, ArrowDownRight, ArrowUpRight, BarChart3, Bell, BookOpen, Bot,
  ChevronDown, ChevronRight, CircleHelp, FileText, Gauge, Globe2, Inbox,
  LayoutDashboard, Lightbulb, Menu, MoreHorizontal, PanelLeft, Plus, Search,
  Settings, Sparkles, Target, TrendingUp, Users, X, Zap,
} from 'lucide-react'

const nav = [
  { label: 'Overview', icon: LayoutDashboard }, { label: 'SEO', icon: Gauge },
  { label: 'AI Visibility', icon: Sparkles }, { label: 'Opportunities', icon: Lightbulb },
  { label: 'Content', icon: FileText }, { label: 'Pages', icon: Globe2 },
  { label: 'Actions', icon: Zap }, { label: 'Reports', icon: BarChart3 },
]
const secondary = [{ label: 'Team', icon: Users }, { label: 'Settings', icon: Settings }, { label: 'Help center', icon: CircleHelp }]
const points = [38, 42, 39, 50, 47, 58, 56, 64, 61, 68, 72, 76, 73, 83, 79, 86, 89, 94]
const opportunities = [
  { title: 'Build a comparison page for “best HR software”', type: 'Content brief', score: 92, impact: 'High impact', detail: 'Strong demand, low competition, and a clear path to AI citations.' },
  { title: 'Add Organization schema to /pricing', type: 'Technical SEO', score: 84, impact: 'Quick win', detail: 'Help search engines and answer engines understand your pricing structure.' },
  { title: 'Refresh “Remote work guide” with 2026 benchmarks', type: 'Content refresh', score: 77, impact: 'Medium impact', detail: 'Your page is slipping while competitors add current research and examples.' },
]

function TrendChart({ mode }: { mode: 'traffic' | 'conversions' }) {
  const values = mode === 'traffic' ? points : [29, 33, 31, 38, 35, 44, 41, 48, 46, 54, 51, 58, 55, 63, 60, 68, 72, 79]
  const path = values.map((v, i) => `${i ? 'L' : 'M'} ${i * 5.88} ${100 - v}`).join(' ')
  const area = `${path} L 100 100 L 0 100 Z`
  return <svg className="trend-svg" viewBox="0 0 100 100" preserveAspectRatio="none" role="img" aria-label={`${mode} trend chart`}><defs><linearGradient id="trend-fill" x1="0" x2="0" y1="0" y2="1"><stop offset="0" stopColor="var(--brand)" stopOpacity=".22"/><stop offset="1" stopColor="var(--brand)" stopOpacity="0"/></linearGradient></defs><path d={area} fill="url(#trend-fill)"/><path d={path} fill="none" stroke="var(--brand)" strokeWidth="1.5" vectorEffect="non-scaling-stroke"/></svg>
}

export default function Page() {
  const [active, setActive] = useState('Overview')
  const [range, setRange] = useState('Last 30 days')
  const [mode, setMode] = useState<'traffic' | 'conversions'>('traffic')
  const [mobileOpen, setMobileOpen] = useState(false)
  const [done, setDone] = useState<string[]>([])
  const [notice, setNotice] = useState(false)
  const visibleOpps = useMemo(() => opportunities.filter((item) => !done.includes(item.title)), [done])
  const selectNav = (label: string) => { setActive(label); setMobileOpen(false) }

  return <div className="app-shell">
    <aside className={`sidebar ${mobileOpen ? 'sidebar-open' : ''}`}>
      <div className="brand"><div className="brand-mark"><Sparkles size={16}/></div><span>SyvoRank</span><span className="brand-ai">AI</span><button className="mobile-close" onClick={() => setMobileOpen(false)} aria-label="Close navigation"><X size={18}/></button></div>
      <div className="workspace"><div className="workspace-avatar">N</div><div><span className="eyebrow">Workspace</span><strong>Northstar Labs</strong></div><ChevronDown size={15}/></div>
      <nav aria-label="Main navigation"><span className="nav-heading">Workspace</span>{nav.map(({ label, icon: Icon }) => <button key={label} className={`nav-item ${active === label ? 'active' : ''}`} onClick={() => selectNav(label)}><Icon size={17}/><span>{label}</span>{label === 'Opportunities' && <span className="nav-count">3</span>}</button>)}</nav>
      <nav className="secondary-nav" aria-label="Secondary navigation">{secondary.map(({ label, icon: Icon }) => <button key={label} className={`nav-item ${active === label ? 'active' : ''}`} onClick={() => selectNav(label)}><Icon size={17}/><span>{label}</span></button>)}</nav>
      <div className="sidebar-foot"><div className="plan-meter"><div className="meter-row"><span>AI credits</span><strong>68%</strong></div><div className="meter"><i/></div><small>Resets in 12 days</small></div><div className="profile"><div className="profile-avatar">JD</div><div><strong>Jordan Davis</strong><span>Admin</span></div><MoreHorizontal size={17}/></div></div>
    </aside>
    {mobileOpen && <button className="mobile-overlay" onClick={() => setMobileOpen(false)} aria-label="Close navigation overlay"/>}
    <main className="main-content">
      <header className="topbar"><button className="mobile-menu" onClick={() => setMobileOpen(true)} aria-label="Open navigation"><Menu size={21}/></button><div className="breadcrumbs"><span>Northstar Labs</span><ChevronRight size={14}/><strong>{active}</strong></div><div className="top-actions"><button className="search-button"><Search size={17}/><span>Search</span><kbd>⌘ K</kbd></button><button className="icon-button" onClick={() => setNotice(!notice)} aria-label="Notifications"><Bell size={18}/>{notice && <i className="notification-dot"/>}</button><div className="top-avatar">JD</div></div></header>
      {active === 'Overview' ? <div className="page-wrap">
        <div className="page-heading"><div><p className="kicker"><span className="live-dot"/>Live workspace</p><h1>Good morning, Jordan.</h1><p className="subheading">Here&apos;s what&apos;s moving across your organic growth engine.</p></div><div className="heading-actions"><select value={range} onChange={(e) => setRange(e.target.value)} aria-label="Date range"><option>Last 30 days</option><option>Last 90 days</option><option>Year to date</option></select><button className="button primary"><Plus size={16}/> Add project</button></div></div>
        <section className="metric-grid" aria-label="Key metrics"><Metric label="Organic clicks" value="24,892" change="18.4%" positive note="vs. previous period" icon={TrendingUp}/><Metric label="AI visibility" value="42.8%" change="6.2%" positive note="across 148 prompts" icon={Sparkles}/><Metric label="Conversions" value="1,284" change="12.8%" positive note="from organic traffic" icon={Target}/><Metric label="Active opportunities" value="18" change="3" positive note="new this week" icon={Lightbulb}/></section>
        <div className="dashboard-grid top-grid"><section className="panel trend-panel"><div className="panel-header"><div><h2>Organic performance</h2><p>Search traffic and conversions over time</p></div><div className="toggle-group"><button className={mode === 'traffic' ? 'selected' : ''} onClick={() => setMode('traffic')}>Clicks</button><button className={mode === 'conversions' ? 'selected' : ''} onClick={() => setMode('conversions')}>Conversions</button></div></div><div className="chart-legend"><strong>{mode === 'traffic' ? '24,892' : '1,284'}</strong><span className="positive"><ArrowUpRight size={14}/>18.4%</span><span className="muted">{range.toLowerCase()}</span></div><div className="chart-wrap"><div className="y-labels"><span>100</span><span>75</span><span>50</span><span>25</span><span>0</span></div><div className="chart"><div className="grid-lines"/><TrendChart mode={mode}/><div className="x-labels"><span>May 28</span><span>Jun 4</span><span>Jun 11</span><span>Jun 18</span><span>Jun 25</span></div></div></div></section>
          <section className="panel visibility-panel"><div className="panel-header"><div><h2>AI visibility</h2><p>How often your brand appears in answers</p></div><button className="more-button" aria-label="More visibility options"><MoreHorizontal size={18}/></button></div><div className="visibility-score"><div className="score-ring"><div><strong>42.8</strong><span>/ 100</span></div></div><div><span className="positive"><ArrowUpRight size={14}/>6.2%</span><p>vs. previous period</p></div></div><div className="bar-list"><Bar label="ChatGPT" value="58%" width="72%" color="blue"/><Bar label="Perplexity" value="41%" width="51%" color="violet"/><Bar label="Google AI Overviews" value="29%" width="36%" color="orange"/></div><button className="text-link" onClick={() => setActive('AI Visibility')}>View AI visibility report <ArrowUpRight size={14}/></button></section></div>
        <div className="dashboard-grid bottom-grid"><section className="panel opportunities-panel"><div className="panel-header"><div><div className="title-with-badge"><h2>Priority opportunities</h2><span className="badge">{visibleOpps.length} to review</span></div><p>Recommended actions ranked by expected impact</p></div><button className="text-link" onClick={() => setActive('Opportunities')}>View all <ArrowUpRight size={14}/></button></div><div className="opportunity-list">{visibleOpps.map((item) => <article className="opportunity" key={item.title}><div className="opp-icon"><Lightbulb size={17}/></div><div className="opp-body"><div className="opp-meta"><span>{item.type}</span><span className="impact">{item.impact}</span></div><h3>{item.title}</h3><p>{item.detail}</p><div className="opp-actions"><button className="button small" onClick={() => setDone([...done, item.title])}>Approve</button><button className="button small ghost" onClick={() => setDone([...done, item.title])}>Dismiss</button></div></div><div className="opp-score"><strong>{item.score}</strong><span>score</span></div></article>)}</div></section>
          <div className="side-stack"><section className="panel health-panel"><div className="panel-header"><div><h2>Content health</h2><p>Across 86 tracked pages</p></div><button className="more-button" aria-label="More content options"><MoreHorizontal size={18}/></button></div><div className="health-row"><div className="health-score">78<span>/100</span></div><div className="health-copy"><strong>Good foundation</strong><p>12 pages need attention</p></div></div><div className="health-bar"><i/></div><div className="health-breakdown"><span><i className="dot green"/>Healthy <b>62</b></span><span><i className="dot yellow"/>Needs review <b>18</b></span><span><i className="dot red"/>At risk <b>6</b></span></div></section><section className="panel agent-panel"><div className="panel-header"><div><h2>Agent activity</h2><p>Your autonomous growth team</p></div><span className="status-pill"><i/>Working</span></div><div className="agent-row"><div className="agent-icon"><Bot size={18}/></div><div><strong>Content Agent</strong><p>Drafted brief for /hr-software</p></div><span>2m ago</span></div><div className="agent-row"><div className="agent-icon"><Activity size={18}/></div><div><strong>SEO Agent</strong><p>Found 4 technical issues</p></div><span>18m ago</span></div><button className="text-link" onClick={() => setActive('Actions')}>Open activity log <ArrowUpRight size={14}/></button></section></div></div>
      </div> : <PlaceholderPage active={active} onBack={() => setActive('Overview')}/>} </main>
  </div>
}

function Metric({ label, value, change, note, positive, icon: Icon }: { label: string; value: string; change: string; note: string; positive: boolean; icon: typeof TrendingUp }) { return <div className="metric"><div className="metric-top"><span>{label}</span><Icon size={17}/></div><div className="metric-value">{value}</div><div className="metric-bottom"><span className={positive ? 'positive' : 'negative'}>{positive ? <ArrowUpRight size={14}/> : <ArrowDownRight size={14}/>} {change}</span><span>{note}</span></div></div> }
function Bar({ label, value, width, color }: { label: string; value: string; width: string; color: string }) { return <div className="bar-item"><div><span>{label}</span><strong>{value}</strong></div><div className="bar-track"><i className={color} style={{ width }}/></div></div> }
function PlaceholderPage({ active, onBack }: { active: string; onBack: () => void }) { return <div className="placeholder"><div className="placeholder-icon"><PanelLeft size={25}/></div><p className="kicker">SyvoRank workspace</p><h1>{active}</h1><p>This module is ready for your growth workflow. Connect your data sources to unlock detailed insights, recommendations, and autonomous actions.</p><button className="button primary" onClick={onBack}>Back to overview <ArrowUpRight size={16}/></button></div> }

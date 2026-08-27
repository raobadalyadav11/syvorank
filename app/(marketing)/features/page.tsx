import { StandardPage } from '../routes'

export const metadata = { title: 'Features | SyvoRank AI', description: 'Everything your growth team needs to win search and AI visibility.' }

export default function FeaturesPage() {
  return <StandardPage kicker="Platform capabilities" title="A complete growth system, not another dashboard." intro="From the first signal to the final publish, SyvoRank AI gives your team one connected place to discover, decide, create, and measure." cards={[
    ['Search intelligence', 'Track rankings, competitors, technical health, and demand shifts in one live view.'],
    ['AI visibility', 'Measure how often your brand appears in ChatGPT, Perplexity, and AI search answers.'],
    ['Content operations', 'Turn opportunities into briefs, drafts, reviews, and publishing workflows without context switching.'],
    ['Autonomous agents', 'Let specialized agents monitor, research, and recommend the next best action around the clock.'],
    ['Reporting that lands', 'Share clear progress with stakeholders through executive-ready reports and narratives.'],
    ['Team workflows', 'Assign owners, review changes, and keep every growth initiative moving forward.'],
  ]} />
} 

import { StandardPage } from '../routes'

export const metadata = { title: 'Insights | SyvoRank AI', description: 'Practical ideas for modern search and growth teams.' }

export default function BlogPage() {
  return <StandardPage kicker="The growth library" title="Ideas for becoming the answer." intro="Practical playbooks, research, and product thinking for teams building durable organic growth in the age of AI." cards={[
    ['The AI visibility playbook', 'How to build a measurement system for the answers your buyers see.'],
    ['Content that earns citations', 'A practical framework for creating useful, trusted, reference-worthy pages.'],
    ['The modern SEO operating system', 'Connect technical health, editorial velocity, and commercial outcomes.'],
  ]} />
}

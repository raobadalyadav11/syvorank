import { SiteFrame, eyebrow, section } from '@/components/marketing'

export const metadata = { title: 'Terms | SyvoRank AI' }

export default function TermsPage() {
  return <SiteFrame><main className={`${section} max-w-4xl py-24`}><p className={eyebrow}>Trust center</p><h1 className="mt-5 text-5xl font-semibold tracking-tight">Simple, fair terms.</h1><div className="mt-10 flex flex-col gap-8 text-muted-foreground"><p>These terms describe the relationship between SyvoRank AI and the teams using our platform. By using the product, you agree to use it lawfully and keep your account credentials secure.</p><p>Plans, usage limits, support commitments, and cancellation terms are presented clearly at the time of purchase. Reach out if you need help understanding any part of your subscription.</p></div></main></SiteFrame>
}

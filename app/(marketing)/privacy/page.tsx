import { SiteFrame, eyebrow, section } from '@/components/marketing'

export const metadata = { title: 'Privacy | SyvoRank AI' }

export default function PrivacyPage() {
  return <SiteFrame><main className={`${section} max-w-4xl py-24`}><p className={eyebrow}>Trust center</p><h1 className="mt-5 text-5xl font-semibold tracking-tight">Privacy, made clear.</h1><div className="mt-10 flex flex-col gap-8 text-muted-foreground"><p>SyvoRank AI is built for teams that care about responsible growth. We collect only the information needed to provide the product, improve reliability, and support your workspace.</p><p>Your workspace data remains yours. We use secure infrastructure, role-based access, and clear controls to help you manage how information is used.</p><h2 className="text-2xl font-semibold text-foreground">Questions?</h2><p>Contact our team through the contact page and we will help with any privacy request.</p></div></main></SiteFrame>
}

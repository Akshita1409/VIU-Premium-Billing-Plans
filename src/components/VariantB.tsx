import React, { useState } from 'react';
import { ActiveModal, VariantType } from '../types';
import {
  ShieldCheck,
  CheckCircle2,
  MinusCircle,
  Bell,
  MousePointerClick,
  Receipt,
  Info,
  ChevronDown,
  ChevronUp,
  Sparkles,
  ArrowRight,
  Tv,
  Film,
  Lock,
  Layers
} from 'lucide-react';

interface VariantBProps {
  onSelectVariant: (variant: VariantType) => void;
  onOpenModal: (modal: ActiveModal) => void;
  onSelectPlanForCheckout?: (planName: string, monthlyDisplay: string, totalBilled: string, overseasFee: string) => void;
}

export const VariantB: React.FC<VariantBProps> = ({
  onSelectVariant,
  onOpenModal,
  onSelectPlanForCheckout,
}) => {
  const [billingCycle, setBillingCycle] = useState<'annual' | 'monthly'>('annual');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setExpandedFaq(expandedFaq === idx ? null : idx);
  };

  const handleSelectPlan = (name: string, monthly: string, total: string) => {
    if (onSelectPlanForCheckout) {
      onSelectPlanForCheckout(name, monthly, total, '$0.00 (Local Merchant Processing)');
    }
    onOpenModal('checkout_sim');
  };

  return (
    <div className="w-full bg-[#131313] text-[#e5e2e1] pt-24 pb-20 selection:bg-[#ffc880] selection:text-[#452b00]">
      {/* Top Research Mode Diagnostic Anchor */}
      <div className="w-full bg-[#1c1b1b] px-4 lg:px-12 py-2 flex flex-wrap items-center justify-between gap-2 border-b border-[#2a2a2a] text-xs">
        <div className="flex items-center gap-2 flex-wrap font-mono-code text-[11px]">
          <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-400 border border-emerald-500/30">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            PROTOCOL ACTIVE: VARIANT B (ETHICAL REDESIGN)
          </span>
          <span className="text-[#a09e9c] hidden sm:inline">
            • Remediating Partitioned Pricing &amp; Asymmetric Defaults
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs text-[#a09e9c]">
          <button
            onClick={() => onSelectVariant('A')}
            className="hover:text-amber-300 transition-colors flex items-center gap-1"
          >
            Switch to Variant A (?v=A)
          </button>
          <span className="text-[#353534]">/</span>
          <button
            onClick={() => onOpenModal('consent')}
            className="hover:text-amber-300 transition-colors"
          >
            Study Consent
          </button>
          <span className="text-[#353534]">/</span>
          <button
            onClick={() => onOpenModal('debrief')}
            className="hover:text-amber-300 transition-colors"
          >
            Debrief Notes
          </button>
        </div>
      </div>

      {/* Main Hero Canvas & Headline Section */}
      <section className="relative w-full px-4 lg:px-12 pt-10 pb-8 overflow-hidden text-center">
        {/* Ambient Scrim Backdrop */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[840px] h-[340px] bg-[#f5a623]/5 rounded-full blur-[110px] pointer-events-none" />
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-[130px] pointer-events-none" />

        <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center gap-4">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#2a2a2a] text-emerald-400 font-mono-code text-[11px] font-semibold border border-[#383838]">
            <ShieldCheck className="w-4 h-4 text-emerald-400" />
            <span>TRANSPARENT REVENUE &amp; FAIR BILLING COMMITMENT</span>
          </div>

          <h1 className="font-outfit text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-3xl">
            StreamDemo Premium Plans
          </h1>

          <p className="text-base sm:text-lg text-[#d7c3ae] max-w-2xl leading-relaxed">
            Transparent pricing with no surprise renewals. Change or cancel anytime online in 1 click without retention labyrinths or hidden exit fees.
          </p>

          {/* Billing Frequency Segmented Switcher */}
          <div className="mt-4 flex flex-col items-center gap-2">
            <div
              className="inline-flex p-1 rounded-xl bg-[#2a2a2a] border border-[#383838] shadow-inner"
              role="group"
              aria-label="Billing frequency selection"
            >
              <button
                type="button"
                onClick={() => setBillingCycle('annual')}
                className={`px-5 py-2 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center gap-2 ${
                  billingCycle === 'annual'
                    ? 'bg-[#f5a623] text-[#141414] shadow-md'
                    : 'text-[#d7c3ae] hover:text-white'
                }`}
              >
                <span>Annual Billing</span>
                <span className="px-1.5 py-0.5 rounded bg-[#0e0e0e]/50 text-[#ffc880] text-[10px] font-mono-code">
                  SAVE 18-20%
                </span>
              </button>

              <button
                type="button"
                onClick={() => setBillingCycle('monthly')}
                className={`px-5 py-2 rounded-lg text-xs font-medium transition-all duration-200 flex items-center gap-2 ${
                  billingCycle === 'monthly'
                    ? 'bg-[#f5a623] text-[#141414] font-bold shadow-md'
                    : 'text-[#d7c3ae] hover:text-white'
                }`}
              >
                <span>Monthly Billing</span>
              </button>
            </div>

            <span className="text-xs text-[#a09e9c] font-mono-code flex items-center gap-1.5 mt-1">
              <Lock className="w-3.5 h-3.5 text-emerald-400" />
              All plan options lock in current rates for 12 months guaranteed
            </span>
          </div>
        </div>
      </section>

      {/* Symmetric Pricing Grid (Equal Weight & All-In Upfront Pricing) */}
      <section className="w-full px-4 lg:px-12 py-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 items-stretch">
          {/* PLAN 1: Bundle Tier */}
          <div className="relative flex flex-col justify-between rounded-xl bg-[#201f1f] border border-[#333333] hover:border-[#f5a623]/60 p-6 sm:p-8 transition-all duration-300 hover:bg-[#252424] shadow-xl">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="px-2.5 py-1 rounded bg-[#9a6c00]/30 text-[#f6bd55] font-mono-code text-[11px] font-semibold tracking-wide flex items-center gap-1.5 border border-[#9a6c00]/40">
                  <Sparkles className="w-3.5 h-3.5" />
                  COMPLETE STREAMING BUNDLE
                </span>
                <span className="text-xs text-[#d7c3ae] flex items-center gap-1">
                  <Tv className="w-3.5 h-3.5 text-emerald-400" />
                  4 Simultaneous Screens
                </span>
              </div>

              <div>
                <h2 className="font-outfit text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  StreamDemo Premium + HBO Max
                </h2>
                <p className="text-xs sm:text-sm text-[#d7c3ae] mt-1 leading-relaxed">
                  The dual cinema pass: premium Asian cinema, Korean dramas, plus global WarnerMedia blockbusters.
                </p>
              </div>

              {/* All-In Upfront Pricing Display */}
              <div className="p-4 rounded-xl bg-[#1c1b1b] border border-[#2e2d2c] flex flex-col gap-1 shadow-inner">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="font-outfit text-3xl sm:text-4xl lg:text-5xl text-[#ffc880] font-bold tracking-tight">
                    {billingCycle === 'annual' ? '$189.98' : '$19.98'}
                  </span>
                  <span className="text-sm font-medium text-[#e5e2e1]">
                    {billingCycle === 'annual' ? '/ year billed today' : '/ month billed monthly'}
                  </span>
                </div>
                <div className="flex items-center gap-2 flex-wrap text-xs">
                  <span className="text-[#a09e9c]">
                    {billingCycle === 'annual'
                      ? 'Equivalent to $15.83/mo'
                      : 'Standard flexible monthly cadence'}
                  </span>
                  {billingCycle === 'annual' && (
                    <>
                      <span className="text-[#444]">•</span>
                      <span className="font-mono-code text-emerald-400 font-semibold">
                        Save $49.78 vs monthly
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Feature Breakdown Checklist */}
              <div className="pt-2">
                <p className="text-[11px] text-[#9f8e7a] uppercase tracking-wider font-semibold mb-3">
                  Everything Included:
                </p>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-[#e5e2e1]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>Full StreamDemo Asian drama, variety &amp; live performance catalog</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span className="font-medium text-white">
                      Complete HBO Max blockbuster movies &amp; global HBO originals access
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>4K Ultra HD + Dolby Atmos stream on up to 4 devices simultaneously</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>Unlimited offline video downloads across registered mobile &amp; tablet apps</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>100% ad-free experience with synchronized cross-platform watch history</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Action Area */}
            <div className="pt-6 mt-4 border-t border-[#2e2d2c] flex flex-col gap-2">
              <button
                type="button"
                onClick={() =>
                  handleSelectPlan(
                    'StreamDemo Premium + HBO Max Bundle',
                    billingCycle === 'annual' ? '$15.83/mo' : '$19.98/mo',
                    billingCycle === 'annual' ? '$189.98' : '$19.98'
                  )
                }
                className="w-full py-3.5 px-6 rounded-lg bg-[#f5a623] hover:bg-[#ffc55c] text-[#141414] font-outfit font-bold text-base transition-all shadow-md active:scale-[0.99] flex items-center justify-center gap-2"
              >
                <span>
                  {billingCycle === 'annual' ? 'Select Annual Bundle' : 'Select Monthly Bundle'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="flex items-center justify-between text-[#a09e9c] text-xs pt-1">
                <span className="flex items-center gap-1 text-emerald-400">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  10-min rate guarantee • Zero hidden surcharges
                </span>
                <span className="text-[#d7c3ae]">
                  {billingCycle === 'annual' ? 'Billed annually' : 'Billed monthly'}
                </span>
              </div>
            </div>
          </div>

          {/* PLAN 2: Standalone Membership Tier (Equal Visual Weight) */}
          <div className="relative flex flex-col justify-between rounded-xl bg-[#201f1f] border border-[#333333] hover:border-[#f5a623]/60 p-6 sm:p-8 transition-all duration-300 hover:bg-[#252424] shadow-xl">
            <div className="flex flex-col gap-4">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="px-2.5 py-1 rounded bg-[#2a2a2a] text-[#d7c3ae] font-mono-code text-[11px] font-semibold tracking-wide flex items-center gap-1.5 border border-[#3a3a3a]">
                  <Film className="w-3.5 h-3.5 text-[#ffc880]" />
                  STANDARD MEMBERSHIP
                </span>
                <span className="text-xs text-[#d7c3ae] flex items-center gap-1">
                  <Tv className="w-3.5 h-3.5 text-emerald-400" />
                  2 Simultaneous Screens
                </span>
              </div>

              <div>
                <h2 className="font-outfit text-2xl sm:text-3xl font-bold text-white tracking-tight">
                  StreamDemo Premium Standalone
                </h2>
                <p className="text-xs sm:text-sm text-[#d7c3ae] mt-1 leading-relaxed">
                  Curated access focused entirely on premier Asian episodic fiction, reality broadcasts, and film.
                </p>
              </div>

              {/* All-In Upfront Pricing Display */}
              <div className="p-4 rounded-xl bg-[#1c1b1b] border border-[#2e2d2c] flex flex-col gap-1 shadow-inner">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="font-outfit text-3xl sm:text-4xl lg:text-5xl text-white font-bold tracking-tight">
                    {billingCycle === 'annual' ? '$107.76' : '$10.98'}
                  </span>
                  <span className="text-sm font-medium text-[#e5e2e1]">
                    {billingCycle === 'annual' ? '/ year billed today' : '/ month billed monthly'}
                  </span>
                </div>
                <div className="flex items-center gap-2 flex-wrap text-xs">
                  <span className="text-[#a09e9c]">
                    {billingCycle === 'annual'
                      ? 'Equivalent to $8.98/mo'
                      : 'Standard flexible monthly cadence'}
                  </span>
                  {billingCycle === 'annual' && (
                    <>
                      <span className="text-[#444]">•</span>
                      <span className="font-mono-code text-emerald-400 font-semibold">
                        Save $24.00 vs monthly
                      </span>
                    </>
                  )}
                </div>
              </div>

              {/* Feature Breakdown Checklist */}
              <div className="pt-2">
                <p className="text-[11px] text-[#9f8e7a] uppercase tracking-wider font-semibold mb-3">
                  Everything Included:
                </p>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-[#e5e2e1]">
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>Full StreamDemo Asian drama, variety &amp; live performance catalog</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>Full HD (1080p) streaming on up to 2 devices simultaneously</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>Unlimited offline video downloads across phone and tablet apps</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                    <span>100% ad-free experience without commercial interruptions</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-[#88837e]">
                    <MinusCircle className="w-4 h-4 text-[#666] mt-0.5 shrink-0" />
                    <span>HBO Max catalog not included in standalone tier</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Action Area */}
            <div className="pt-6 mt-4 border-t border-[#2e2d2c] flex flex-col gap-2">
              <button
                type="button"
                onClick={() =>
                  handleSelectPlan(
                    'StreamDemo Premium Standalone',
                    billingCycle === 'annual' ? '$8.98/mo' : '$10.98/mo',
                    billingCycle === 'annual' ? '$107.76' : '$10.98'
                  )
                }
                className="w-full py-3.5 px-6 rounded-lg bg-[#2a2a2a] hover:bg-[#353535] text-white font-outfit font-semibold text-base transition-all border border-[#3e3e3e] shadow-md active:scale-[0.99] flex items-center justify-center gap-2"
              >
                <span>
                  {billingCycle === 'annual' ? 'Select Annual Premium' : 'Select Monthly Premium'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="flex items-center justify-between text-[#a09e9c] text-xs pt-1">
                <span className="text-emerald-400 flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  10-min rate guarantee
                </span>
                <span className="text-[#d7c3ae]">
                  {billingCycle === 'annual' ? 'Billed annually' : 'Billed monthly'}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ethical Renewal Guarantee & Autonomy Rights Box */}
      <section className="w-full px-4 lg:px-12 py-8">
        <div className="max-w-6xl mx-auto rounded-xl bg-[#1c1b1b] border border-[#2e2d2c] p-6 sm:p-8 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#2a2a2a]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-outfit text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Fair Billing &amp; Renewal Guarantee
                </h3>
                <p className="text-xs sm:text-sm text-[#a09e9c]">
                  We treat your subscription with total institutional transparency.
                </p>
              </div>
            </div>

            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#252525] border border-[#353534] font-mono-code text-[11px] text-[#e5e2e1] shrink-0">
              <span className="w-2 h-2 rounded-full bg-emerald-400" />
              FTC Fair Subscription Standard Compliant
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6">
            {/* Column 1 */}
            <div className="flex flex-col gap-2 p-5 rounded-lg bg-[#222121] border border-[#2e2d2c]">
              <div className="flex items-center gap-2 text-emerald-400 font-outfit font-bold text-base">
                <Bell className="w-5 h-5" />
                <h4>14-Day Advance Notice</h4>
              </div>
              <p className="text-xs sm:text-sm text-[#b8b4af] leading-relaxed">
                We will email you exactly 14 days before your card is ever charged for renewal. The email includes a direct 1-click renewal cancellation button—no logging in required.
              </p>
            </div>

            {/* Column 2 */}
            <div className="flex flex-col gap-2 p-5 rounded-lg bg-[#222121] border border-[#2e2d2c]">
              <div className="flex items-center gap-2 text-emerald-400 font-outfit font-bold text-base">
                <MousePointerClick className="w-5 h-5" />
                <h4>Self-Serve 1-Click Cancel</h4>
              </div>
              <p className="text-xs sm:text-sm text-[#b8b4af] leading-relaxed">
                Cancel whenever you want from your Account Settings. No mandatory telephone calls, no waiting queues, and zero multi-step guilt retention quizzes.
              </p>
            </div>

            {/* Column 3 */}
            <div className="flex flex-col gap-2 p-5 rounded-lg bg-[#222121] border border-[#2e2d2c]">
              <div className="flex items-center gap-2 text-emerald-400 font-outfit font-bold text-base">
                <Receipt className="w-5 h-5" />
                <h4>No Hidden Surcharges</h4>
              </div>
              <p className="text-xs sm:text-sm text-[#b8b4af] leading-relaxed">
                The price you see is the absolute total charged today. Never any account initiation fees, surprise currency surcharges, or post-cancellation penalties.
              </p>
            </div>
          </div>

          {/* Cancellation Sandbox Preview Trigger */}
          <div className="mt-6 pt-4 border-t border-[#2a2a2a] flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#242323] p-4 rounded-lg">
            <div className="flex items-center gap-2 text-xs text-[#d7c3ae]">
              <Info className="w-4 h-4 text-[#ffc880] shrink-0" />
              <span>
                Want to verify cancellation simplicity right now? You can simulate the 1-click flow anytime in our interactive sandbox.
              </span>
            </div>
            <button
              onClick={() => onOpenModal('cancel_sandbox')}
              className="px-4 py-2 rounded-md bg-[#2d2c2b] hover:bg-[#3a3938] border border-amber-500/40 text-[#ffc880] font-outfit font-semibold text-xs transition-colors shrink-0 flex items-center gap-1.5"
            >
              <span>Preview Cancellation Flow</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Editorial Catalog Showcase */}
      <section className="w-full px-4 lg:px-12 py-8">
        <div className="max-w-6xl mx-auto flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-2">
            <div>
              <span className="font-mono-code text-[11px] text-[#ffc880] uppercase tracking-wider font-semibold">
                Included Production Studios
              </span>
              <h3 className="font-outfit text-2xl sm:text-3xl font-bold text-white tracking-tight mt-1">
                Direct From Leading Asian &amp; Global Creators
              </h3>
            </div>
            <div className="text-xs text-[#a09e9c] font-mono-code">
              100% Licensed &amp; Fair Creator Royalty Backed
            </div>
          </div>

          {/* Media Visual Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Visual Card 1 */}
            <div className="group relative rounded-xl overflow-hidden bg-[#201f1f] border border-[#2e2d2c] hover:border-[#f5a623]/60 transition-all shadow-md flex flex-col">
              <div
                className="relative w-full h-52 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80')`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#201f1f] via-[#201f1f]/30 to-transparent" />
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-[#0e0e0e]/80 backdrop-blur font-mono-code text-[11px] text-[#ffc880]">
                  STREAMDEMO EXCLUSIVE
                </span>
                <span className="absolute top-3 right-3 px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 font-mono-code text-[11px]">
                  4K DOLBY
                </span>
              </div>
              <div className="p-4 flex flex-col gap-1">
                <h4 className="font-outfit text-lg font-semibold text-white">
                  The Silk Dynasty Chronicles
                </h4>
                <p className="text-xs text-[#a09e9c] line-clamp-2">
                  Season 2 Streaming Now. All 24 episodes uncompressed with multi-language subtitle tracks.
                </p>
              </div>
            </div>

            {/* Visual Card 2 */}
            <div className="group relative rounded-xl overflow-hidden bg-[#201f1f] border border-[#2e2d2c] hover:border-[#f5a623]/60 transition-all shadow-md flex flex-col">
              <div
                className="relative w-full h-52 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80')`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#201f1f] via-[#201f1f]/30 to-transparent" />
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-[#0e0e0e]/80 backdrop-blur font-mono-code text-[11px] text-[#ffc880]">
                  KOREAN DRAMA
                </span>
                <span className="absolute top-3 right-3 px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 font-mono-code text-[11px]">
                  NEW EPISODES WEEKLY
                </span>
              </div>
              <div className="p-4 flex flex-col gap-1">
                <h4 className="font-outfit text-lg font-semibold text-white">
                  Midnight in District 7
                </h4>
                <p className="text-xs text-[#a09e9c] line-clamp-2">
                  Award-winning crime procedural. Stream live with Seoul broadcast synchronization.
                </p>
              </div>
            </div>

            {/* Visual Card 3 */}
            <div className="group relative rounded-xl overflow-hidden bg-[#201f1f] border border-[#2e2d2c] hover:border-[#f5a623]/60 transition-all shadow-md flex flex-col">
              <div
                className="relative w-full h-52 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80')`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#201f1f] via-[#201f1f]/30 to-transparent" />
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-[#0e0e0e]/80 backdrop-blur font-mono-code text-[11px] text-[#f6bd55]">
                  HBO MAX PARTNER PASS
                </span>
                <span className="absolute top-3 right-3 px-2 py-0.5 rounded bg-emerald-950/80 text-emerald-400 font-mono-code text-[11px]">
                  BUNDLE ONLY
                </span>
              </div>
              <div className="p-4 flex flex-col gap-1">
                <h4 className="font-outfit text-lg font-semibold text-white">
                  House of the Dragon &amp; Dune
                </h4>
                <p className="text-xs text-[#a09e9c] line-clamp-2">
                  Included with StreamDemo + HBO Max Bundle. Unlock thousands of hours of worldwide prestige TV.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Side-by-Side Granular Feature Comparison Table */}
      <section className="w-full px-4 lg:px-12 py-8">
        <div className="max-w-6xl mx-auto rounded-xl bg-[#201f1f] border border-[#2e2d2c] p-6 sm:p-8 shadow-xl">
          <div className="mb-6">
            <h3 className="font-outfit text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Granular Plan Comparison
            </h3>
            <p className="text-xs sm:text-sm text-[#a09e9c] mt-1">
              Symmetric breakdown of features across both subscription tiers.
            </p>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="text-[#a09e9c] font-mono-code text-[11px] uppercase tracking-wider bg-[#1c1b1b] border-b border-[#2e2d2c]">
                  <th className="py-3 px-4 rounded-l-lg">Streaming Feature</th>
                  <th className="py-3 px-4 font-bold text-[#ffc880]">StreamDemo + HBO Max Bundle</th>
                  <th className="py-3 px-4 rounded-r-lg font-bold text-white">StreamDemo Standalone</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#2a2a2a]">
                <tr className="hover:bg-[#252424] transition-colors">
                  <td className="py-3.5 px-4 font-medium text-white">
                    StreamDemo Asian Entertainment Library
                  </td>
                  <td className="py-3.5 px-4 text-emerald-400 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> Complete (Unlimited)
                  </td>
                  <td className="py-3.5 px-4 text-emerald-400 font-semibold">
                    <span className="inline-flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" /> Complete (Unlimited)
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-[#252424] transition-colors">
                  <td className="py-3.5 px-4 font-medium text-white">
                    HBO Max Complete Streaming Catalog
                  </td>
                  <td className="py-3.5 px-4 text-emerald-400 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> Included (Full Access)
                  </td>
                  <td className="py-3.5 px-4 text-[#777]">
                    Not included
                  </td>
                </tr>
                <tr className="hover:bg-[#252424] transition-colors">
                  <td className="py-3.5 px-4 font-medium text-white">
                    Maximum Video Streaming Resolution
                  </td>
                  <td className="py-3.5 px-4 text-white font-semibold">
                    4K Ultra HD + HDR10 / Dolby Vision
                  </td>
                  <td className="py-3.5 px-4 text-white font-semibold">
                    Full HD (1080p)
                  </td>
                </tr>
                <tr className="hover:bg-[#252424] transition-colors">
                  <td className="py-3.5 px-4 font-medium text-white">Audio Standards</td>
                  <td className="py-3.5 px-4 text-[#d7c3ae]">Dolby Atmos + Spatial Audio</td>
                  <td className="py-3.5 px-4 text-[#d7c3ae]">5.1 Surround Sound</td>
                </tr>
                <tr className="hover:bg-[#252424] transition-colors">
                  <td className="py-3.5 px-4 font-medium text-white">
                    Simultaneous Streaming Screens
                  </td>
                  <td className="py-3.5 px-4 text-white font-semibold">4 Devices at once</td>
                  <td className="py-3.5 px-4 text-white font-semibold">2 Devices at once</td>
                </tr>
                <tr className="hover:bg-[#252424] transition-colors">
                  <td className="py-3.5 px-4 font-medium text-white">
                    Offline Download Capacity
                  </td>
                  <td className="py-3.5 px-4 text-emerald-400 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> Unlimited (Device storage limits apply)
                  </td>
                  <td className="py-3.5 px-4 text-emerald-400 font-semibold">
                    <span className="inline-flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" /> Unlimited (Device storage limits apply)
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-[#252424] transition-colors">
                  <td className="py-3.5 px-4 font-medium text-white">
                    Commercials &amp; Ad-Insertion
                  </td>
                  <td className="py-3.5 px-4 text-emerald-400 font-semibold flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4" /> 100% Ad-Free
                  </td>
                  <td className="py-3.5 px-4 text-emerald-400 font-semibold">
                    <span className="inline-flex items-center gap-1.5">
                      <CheckCircle2 className="w-4 h-4" /> 100% Ad-Free
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-[#252424] transition-colors">
                  <td className="py-3.5 px-4 font-medium text-white">Cancellation Friction</td>
                  <td className="py-3.5 px-4 text-emerald-400 font-semibold">
                    1-Click Instant (No surveys)
                  </td>
                  <td className="py-3.5 px-4 text-emerald-400 font-semibold">
                    1-Click Instant (No surveys)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions */}
      <section className="w-full px-4 lg:px-12 py-8">
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          <div className="text-center">
            <h3 className="font-outfit text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-[#a09e9c] mt-1">
              Clear answers with zero ambiguous legal jargon.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            {[
              {
                q: 'How does the 14-day renewal notice guarantee work?',
                a: "Fourteen calendar days before any recurring charge, we dispatch an alert to your account's primary email. Inside is the exact transaction amount, date of charge, and a direct authentication-free button to cancel future renewal immediately.",
              },
              {
                q: 'Can I switch between Annual and Monthly billing later?',
                a: 'Yes. You can switch plans at any moment inside your Account dashboard. If switching from Annual to Monthly, the pro-rated remainder of your prepaid period is credited directly to your profile.',
              },
              {
                q: 'Are there any hidden fees or termination charges?',
                a: 'None. The price presented on this page is the complete all-inclusive fee. There are no processing fees, equipment fees, or account closure costs under any circumstance.',
              },
            ].map((faq, i) => (
              <div
                key={i}
                className="rounded-xl bg-[#201f1f] border border-[#2e2d2c] p-4 transition-colors hover:border-[#3e3e3e]"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between text-left font-outfit text-base font-semibold text-white"
                >
                  <span>{faq.q}</span>
                  {expandedFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-[#ffc880]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#888]" />
                  )}
                </button>
                {expandedFaq === i && (
                  <div className="mt-3 text-xs sm:text-sm text-[#b8b4af] leading-relaxed border-t border-[#2a2a2a] pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-[#0e0e0e] border-t border-[#222] mt-12 py-8 px-4 lg:px-12 text-xs text-[#8e8a85]">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-outfit font-bold text-white text-base">StreamDemo</span>
            <span className="px-2 py-0.5 rounded bg-[#201f1f] text-emerald-400 font-mono-code text-[10px]">
              Ethical Streaming Pilot
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button onClick={() => onOpenModal('consent')} className="hover:text-white transition-colors">
              Study Protocol
            </button>
            <button onClick={() => onOpenModal('debrief')} className="hover:text-white transition-colors">
              Participant Debrief
            </button>
            <button onClick={() => onOpenModal('audit_inspector')} className="hover:text-white transition-colors">
              Behavioural Audit Table
            </button>
            <span className="text-[#333]">|</span>
            <span className="text-emerald-400">100% Transparent Billing</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

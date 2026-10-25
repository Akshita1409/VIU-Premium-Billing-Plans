import React, { useState } from 'react';
import { ActiveModal, VariantType } from '../types';
import {
  ShieldCheck,
  Check,
  Minus,
  Bell,
  MousePointerClick,
  Receipt,
  Info,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Tv,
  Film,
  Lock,
  Calendar,
  CreditCard,
  FileCheck
} from 'lucide-react';

interface VariantBProps {
  onSelectVariant: (variant: VariantType) => void;
  onOpenModal: (modal: ActiveModal) => void;
  onSelectPlanForCheckout?: (
    planName: string,
    monthlyDisplay: string,
    totalBilled: string,
    overseasFee: string
  ) => void;
}

export const VariantB: React.FC<VariantBProps> = ({
  onSelectVariant,
  onOpenModal,
  onSelectPlanForCheckout,
}) => {
  const [billingCycle, setBillingCycle] = useState<'annual' | 'monthly'>('annual');
  const [selectedPlanId, setSelectedPlanId] = useState<'bundle' | 'standalone'>('bundle');
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const toggleFaq = (idx: number) => {
    setExpandedFaq(expandedFaq === idx ? null : idx);
  };

  const handleSelectPlan = (name: string, monthly: string, total: string, planId: 'bundle' | 'standalone') => {
    setSelectedPlanId(planId);
    if (onSelectPlanForCheckout) {
      onSelectPlanForCheckout(name, monthly, total, '$0.00 (Local Merchant Processing)');
    }
    onOpenModal('checkout_sim');
  };

  return (
    <div className="w-full min-h-screen bg-[#EAF3FA] text-[#172B4D] pt-24 pb-20 selection:bg-[#087E8B]/20 selection:text-[#087E8B]">
      {/* Top Research Mode Diagnostic Banner (Clean Light-Coloured Banner) */}
      <div className="w-full bg-[#F0F7FC] px-4 lg:px-12 py-2.5 flex flex-wrap items-center justify-between gap-2 border-b border-[#D5E5F2] text-xs">
        <div className="flex items-center gap-2 flex-wrap font-mono-code text-[11px]">
          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-[#087E8B]/10 text-[#087E8B] font-semibold border border-[#087E8B]/30">
            <span className="w-1.5 h-1.5 rounded-full bg-[#087E8B] animate-pulse" />
            PROTOCOL ACTIVE: VARIANT B (ETHICAL REDESIGN)
          </span>
          <span className="text-[#556987] hidden sm:inline">
            • Light Visual Theme &amp; De-biased Upfront Information
          </span>
        </div>

        <div className="flex items-center gap-3 text-xs text-[#556987]">
          <button
            onClick={() => onSelectVariant('A')}
            className="hover:text-[#087E8B] font-medium transition-colors flex items-center gap-1"
          >
            Switch to Variant A (?v=A)
          </button>
          <span className="text-[#D5E5F2]">|</span>
          <button
            onClick={() => onOpenModal('consent')}
            className="hover:text-[#087E8B] font-medium transition-colors"
          >
            Study Consent
          </button>
          <span className="text-[#D5E5F2]">|</span>
          <button
            onClick={() => onOpenModal('debrief')}
            className="hover:text-[#087E8B] font-medium transition-colors"
          >
            Debrief Notes
          </button>
        </div>
      </div>

      {/* Top Section — Make the choice understandable */}
      <section className="relative w-full px-4 lg:px-12 pt-10 pb-8 text-center max-w-4xl mx-auto">
        <h1 className="font-outfit text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#172B4D]">
          Choose your StreamDemo plan
        </h1>

        <p className="mt-2.5 text-base sm:text-lg text-[#556987] max-w-2xl mx-auto leading-relaxed">
          Compare your options and review the full cost before subscribing.
        </p>

        {/* Compact Billing Frequency Toggle Bar (Restrained Teal Accent) */}
        <div className="mt-6 flex flex-col items-center gap-2">
          <div
            className="inline-flex p-1 rounded-xl bg-[#FFFFFF] border border-[#D5E5F2] shadow-xs"
            role="group"
            aria-label="Billing frequency selection"
          >
            <button
              type="button"
              onClick={() => setBillingCycle('annual')}
              className={`px-5 py-2 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center gap-2 ${
                billingCycle === 'annual'
                  ? 'bg-[#087E8B] text-[#FFFFFF] shadow-xs'
                  : 'text-[#556987] hover:text-[#172B4D]'
              }`}
            >
              <span>Annual Billing</span>
              <span
                className={`px-1.5 py-0.5 rounded text-[10px] font-mono-code font-bold ${
                  billingCycle === 'annual'
                    ? 'bg-[#FFFFFF]/20 text-[#FFFFFF]'
                    : 'bg-[#EAF3FA] text-[#087E8B]'
                }`}
              >
                SAVE 18–20%
              </span>
            </button>

            <button
              type="button"
              onClick={() => setBillingCycle('monthly')}
              className={`px-5 py-2 rounded-lg text-xs font-semibold transition-all duration-200 flex items-center gap-2 ${
                billingCycle === 'monthly'
                  ? 'bg-[#087E8B] text-[#FFFFFF] shadow-xs'
                  : 'text-[#556987] hover:text-[#172B4D]'
              }`}
            >
              <span>Monthly Billing</span>
            </button>
          </div>

          <span className="text-xs text-[#556987] font-mono-code flex items-center gap-1.5 mt-1">
            <Lock className="w-3.5 h-3.5 text-[#087E8B]" />
            Rates guaranteed for 12 months • Zero price surprises
          </span>
        </div>
      </section>

      {/* Middle Section — Simplified Subscription Cards (Equal Visual Stature) */}
      <section className="w-full px-4 lg:px-12 py-6">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* PLAN 1: Standalone Membership */}
          <div
            onClick={() => setSelectedPlanId('standalone')}
            className={`cursor-pointer relative flex flex-col justify-between rounded-2xl bg-[#FFFFFF] p-6 transition-all duration-200 shadow-sm hover:shadow-md ${
              selectedPlanId === 'standalone'
                ? 'border-2 border-[#087E8B] ring-2 ring-[#087E8B]/15'
                : 'border border-[#D5E5F2]'
            }`}
          >
            {/* Top Indicator */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-3 min-h-[24px]">
                <span className="text-xs text-[#556987] flex items-center gap-1.5 font-medium">
                  <Tv className="w-4 h-4 text-[#087E8B]" />
                  2 Simultaneous Screens
                </span>
                {selectedPlanId === 'standalone' && (
                  <span className="px-2.5 py-0.5 rounded-full bg-[#087E8B]/10 text-[#087E8B] font-mono-code text-[11px] font-semibold">
                    Selected plan
                  </span>
                )}
              </div>

              {/* Plan Name */}
              <h2 className="font-outfit text-xl font-bold text-[#172B4D] tracking-tight">
                StreamDemo Premium Standalone
              </h2>
              <p className="text-xs text-[#556987] mt-1">
                Curated access focused on premier Asian drama series, variety shows, and film.
              </p>

              {/* Price and Billing Frequency Stated Beside */}
              <div className="mt-4 pt-4 border-t border-[#D5E5F2] flex flex-col gap-1">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="font-outfit text-3xl sm:text-4xl font-bold text-[#172B4D] tracking-tight">
                    {billingCycle === 'annual' ? '$107.76' : '$10.98'}
                  </span>
                  <span className="text-sm font-medium text-[#344054]">
                    {billingCycle === 'annual' ? '/ year billed today' : '/ month billed monthly'}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  {billingCycle === 'annual' ? (
                    <span className="text-[#087E8B] font-medium">
                      Save $24.00 vs monthly (Equivalent to $8.98/mo)
                    </span>
                  ) : (
                    <span className="text-[#556987]">Standard flexible monthly cadence</span>
                  )}
                </div>
              </div>

              {/* Inclusions Checklist */}
              <div className="mt-5 pt-4 border-t border-[#D5E5F2]">
                <p className="text-[11px] text-[#556987] uppercase tracking-wider font-semibold mb-3">
                  Key Inclusions:
                </p>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-[#344054]">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#087E8B] mt-0.5 shrink-0" />
                    <span>Full Asian drama, variety &amp; live performance catalog</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#087E8B] mt-0.5 shrink-0" />
                    <span>Full HD (1080p) streaming on up to 2 devices simultaneously</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#087E8B] mt-0.5 shrink-0" />
                    <span>Unlimited offline video downloads across phone and tablet</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#087E8B] mt-0.5 shrink-0" />
                    <span>100% ad-free experience without commercial interruptions</span>
                  </li>
                  <li className="flex items-start gap-2.5 text-[#556987]">
                    <Minus className="w-4 h-4 text-[#556987] mt-0.5 shrink-0" />
                    <span>HBO Max catalog not included</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Action Button at Same Vertical Height */}
            <div className="mt-6 pt-4 border-t border-[#D5E5F2] flex flex-col gap-2">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectPlan(
                    'StreamDemo Premium Standalone',
                    billingCycle === 'annual' ? '$8.98/mo' : '$10.98/mo',
                    billingCycle === 'annual' ? '$107.76' : '$10.98',
                    'standalone'
                  );
                }}
                className={`w-full py-3 px-5 rounded-xl font-outfit font-semibold text-sm transition-all shadow-xs flex items-center justify-center gap-2 ${
                  selectedPlanId === 'standalone'
                    ? 'bg-[#087E8B] hover:bg-[#076b77] text-[#FFFFFF]'
                    : 'bg-[#F0F7FC] hover:bg-[#E2EFFB] text-[#172B4D] border border-[#D5E5F2]'
                }`}
              >
                <span>
                  {billingCycle === 'annual' ? 'Select Annual Plan' : 'Select Monthly Plan'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="flex items-center justify-between text-[#556987] text-xs pt-0.5">
                <span>10-min rate guarantee</span>
                <span>{billingCycle === 'annual' ? 'Billed annually' : 'Billed monthly'}</span>
              </div>
            </div>
          </div>

          {/* PLAN 2: Bundle Tier */}
          <div
            onClick={() => setSelectedPlanId('bundle')}
            className={`cursor-pointer relative flex flex-col justify-between rounded-2xl bg-[#FFFFFF] p-6 transition-all duration-200 shadow-sm hover:shadow-md ${
              selectedPlanId === 'bundle'
                ? 'border-2 border-[#087E8B] ring-2 ring-[#087E8B]/15'
                : 'border border-[#D5E5F2]'
            }`}
          >
            {/* Top Indicator */}
            <div>
              <div className="flex items-center justify-between gap-2 mb-3 min-h-[24px]">
                <span className="text-xs text-[#556987] flex items-center gap-1.5 font-medium">
                  <Tv className="w-4 h-4 text-[#087E8B]" />
                  4 Simultaneous Screens
                </span>
                {selectedPlanId === 'bundle' && (
                  <span className="px-2.5 py-0.5 rounded-full bg-[#087E8B]/10 text-[#087E8B] font-mono-code text-[11px] font-semibold">
                    Selected plan
                  </span>
                )}
              </div>

              {/* Plan Name */}
              <h2 className="font-outfit text-xl font-bold text-[#172B4D] tracking-tight">
                StreamDemo Premium + HBO Max
              </h2>
              <p className="text-xs text-[#556987] mt-1">
                The dual cinema pass: premium Asian cinema plus global WarnerMedia blockbusters.
              </p>

              {/* Price and Billing Frequency Stated Beside */}
              <div className="mt-4 pt-4 border-t border-[#D5E5F2] flex flex-col gap-1">
                <div className="flex items-baseline gap-2 flex-wrap">
                  <span className="font-outfit text-3xl sm:text-4xl font-bold text-[#172B4D] tracking-tight">
                    {billingCycle === 'annual' ? '$189.98' : '$19.98'}
                  </span>
                  <span className="text-sm font-medium text-[#344054]">
                    {billingCycle === 'annual' ? '/ year billed today' : '/ month billed monthly'}
                  </span>
                </div>
                <div className="flex items-center gap-2 text-xs">
                  {billingCycle === 'annual' ? (
                    <span className="text-[#087E8B] font-medium">
                      Save $49.78 vs monthly (Equivalent to $15.83/mo)
                    </span>
                  ) : (
                    <span className="text-[#556987]">Standard flexible monthly cadence</span>
                  )}
                </div>
              </div>

              {/* Inclusions Checklist */}
              <div className="mt-5 pt-4 border-t border-[#D5E5F2]">
                <p className="text-[11px] text-[#556987] uppercase tracking-wider font-semibold mb-3">
                  Key Inclusions:
                </p>
                <ul className="flex flex-col gap-2.5 text-xs sm:text-sm text-[#344054]">
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#087E8B] mt-0.5 shrink-0" />
                    <span>Full Asian drama, variety &amp; live performance catalog</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#087E8B] mt-0.5 shrink-0" />
                    <span className="font-medium text-[#172B4D]">
                      Complete HBO Max movies &amp; global HBO originals access
                    </span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#087E8B] mt-0.5 shrink-0" />
                    <span>4K Ultra HD + Dolby Atmos stream on up to 4 devices</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#087E8B] mt-0.5 shrink-0" />
                    <span>Unlimited offline video downloads across all registered apps</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <Check className="w-4 h-4 text-[#087E8B] mt-0.5 shrink-0" />
                    <span>100% ad-free experience with synchronized watch history</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Action Button at Same Vertical Height */}
            <div className="mt-6 pt-4 border-t border-[#D5E5F2] flex flex-col gap-2">
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectPlan(
                    'StreamDemo Premium + HBO Max Bundle',
                    billingCycle === 'annual' ? '$15.83/mo' : '$19.98/mo',
                    billingCycle === 'annual' ? '$189.98' : '$19.98',
                    'bundle'
                  );
                }}
                className={`w-full py-3 px-5 rounded-xl font-outfit font-semibold text-sm transition-all shadow-xs flex items-center justify-center gap-2 ${
                  selectedPlanId === 'bundle'
                    ? 'bg-[#087E8B] hover:bg-[#076b77] text-[#FFFFFF]'
                    : 'bg-[#F0F7FC] hover:bg-[#E2EFFB] text-[#172B4D] border border-[#D5E5F2]'
                }`}
              >
                <span>
                  {billingCycle === 'annual' ? 'Select Annual Plan' : 'Select Monthly Plan'}
                </span>
                <ArrowRight className="w-4 h-4" />
              </button>
              <div className="flex items-center justify-between text-[#556987] text-xs pt-0.5">
                <span>10-min rate guarantee</span>
                <span>{billingCycle === 'annual' ? 'Billed annually' : 'Billed monthly'}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Section — Clarify Payment Information ("Billing details") */}
      <section className="w-full px-4 lg:px-12 py-8">
        <div className="max-w-5xl mx-auto rounded-2xl bg-[#FFFFFF] border border-[#D5E5F2] p-6 sm:p-8 shadow-sm">
          {/* Section Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-5 border-b border-[#D5E5F2]">
            <div>
              <h3 className="font-outfit text-xl font-bold text-[#172B4D] tracking-tight">
                Billing details
              </h3>
              <p className="text-xs sm:text-sm text-[#556987]">
                Clear financial and contractual terms for your selected plan.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-[#F0F7FC] border border-[#D5E5F2] text-xs font-mono-code text-[#344054]">
              <FileCheck className="w-4 h-4 text-[#087E8B]" />
              <span>Transparent Terms Guarantee</span>
            </div>
          </div>

          {/* Structured Financial Breakdown Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-5 text-xs sm:text-sm">
            {/* Item 1: Amount Charged Today */}
            <div className="p-4 rounded-xl bg-[#F0F7FC] border border-[#D5E5F2] flex flex-col gap-1">
              <span className="text-xs font-semibold text-[#556987] uppercase tracking-wider font-mono-code">
                Amount charged today
              </span>
              <span className="font-outfit text-2xl font-bold text-[#172B4D]">
                {selectedPlanId === 'bundle'
                  ? billingCycle === 'annual'
                    ? '$189.98'
                    : '$19.98'
                  : billingCycle === 'annual'
                  ? '$107.76'
                  : '$10.98'}
              </span>
              <span className="text-xs text-[#344054]">
                All-in upfront net charge. No surprises.
              </span>
            </div>

            {/* Item 2: Billing Frequency & Next Date */}
            <div className="p-4 rounded-xl bg-[#F0F7FC] border border-[#D5E5F2] flex flex-col gap-1">
              <span className="text-xs font-semibold text-[#556987] uppercase tracking-wider font-mono-code">
                Billing frequency &amp; next date
              </span>
              <span className="font-outfit text-lg font-bold text-[#172B4D]">
                {billingCycle === 'annual' ? 'Annual (365 days)' : 'Monthly (30 days)'}
              </span>
              <span className="text-xs text-[#344054]">
                Next billing date:{' '}
                {billingCycle === 'annual' ? 'October 25, 2027' : 'November 25, 2026'}
              </span>
            </div>

            {/* Item 3: Additional Fees */}
            <div className="p-4 rounded-xl bg-[#F0F7FC] border border-[#D5E5F2] flex flex-col gap-1">
              <span className="text-xs font-semibold text-[#556987] uppercase tracking-wider font-mono-code">
                Additional fees
              </span>
              <span className="font-outfit text-2xl font-bold text-[#087E8B]">$0.00</span>
              <span className="text-xs text-[#344054]">
                Local processing. Zero international merchant fees.
              </span>
            </div>

            {/* Item 4: Renewal Conditions */}
            <div className="p-4 rounded-xl bg-[#F0F7FC] border border-[#D5E5F2] flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-[#172B4D] font-semibold">
                <Bell className="w-4 h-4 text-[#087E8B]" />
                <span>14-day advance renewal notice</span>
              </div>
              <p className="text-xs text-[#344054] leading-relaxed mt-1">
                You will receive an automated email alert 14 days before any recurring renewal with a direct 1-click cancel button.
              </p>
            </div>

            {/* Item 5: Cancellation Conditions & Deadlines */}
            <div className="p-4 rounded-xl bg-[#F0F7FC] border border-[#D5E5F2] flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-[#172B4D] font-semibold">
                <MousePointerClick className="w-4 h-4 text-[#087E8B]" />
                <span>Self-serve 1-click cancel</span>
              </div>
              <p className="text-xs text-[#344054] leading-relaxed mt-1">
                Cancel anytime directly inside your Account Settings. No phone calls, waiting queues, or retention quizzes.
              </p>
            </div>

            {/* Item 6: Pro-rated Balance Credit */}
            <div className="p-4 rounded-xl bg-[#F0F7FC] border border-[#D5E5F2] flex flex-col gap-1">
              <div className="flex items-center gap-1.5 text-[#172B4D] font-semibold">
                <Receipt className="w-4 h-4 text-[#087E8B]" />
                <span>Fair proration on switching</span>
              </div>
              <p className="text-xs text-[#344054] leading-relaxed mt-1">
                If switching from Annual to Monthly or cancelling early, unused prepaid days are credited directly to your profile.
              </p>
            </div>
          </div>

          {/* Interactive Cancellation Simulator Link */}
          <div className="mt-6 pt-4 border-t border-[#D5E5F2] flex flex-col sm:flex-row items-center justify-between gap-3 bg-[#F0F7FC] p-4 rounded-xl">
            <div className="flex items-center gap-2 text-xs text-[#344054]">
              <Info className="w-4 h-4 text-[#087E8B] shrink-0" />
              <span>
                Want to verify cancellation simplicity right now? You can simulate the self-serve 1-click flow in our interactive sandbox.
              </span>
            </div>
            <button
              onClick={() => onOpenModal('cancel_sandbox')}
              className="px-4 py-2 rounded-lg bg-[#FFFFFF] hover:bg-[#E2EFFB] border border-[#D5E5F2] text-[#087E8B] font-outfit font-semibold text-xs transition-colors shrink-0 flex items-center gap-1.5 shadow-xs"
            >
              <span>Preview Cancellation Flow</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </section>

      {/* Editorial Catalog Showcase */}
      <section className="w-full px-4 lg:px-12 py-8">
        <div className="max-w-5xl mx-auto flex flex-col gap-6">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-2 pb-2 border-b border-[#D5E5F2]">
            <div>
              <span className="font-mono-code text-[11px] text-[#087E8B] uppercase tracking-wider font-semibold">
                Included Production Studios
              </span>
              <h3 className="font-outfit text-2xl sm:text-3xl font-bold text-[#172B4D] tracking-tight mt-0.5">
                Direct From Leading Asian &amp; Global Creators
              </h3>
            </div>
            <div className="text-xs text-[#556987] font-mono-code">
              100% Licensed &amp; Fair Creator Royalty Backed
            </div>
          </div>

          {/* Media Visual Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Visual Card 1 */}
            <div className="group relative rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#D5E5F2] hover:border-[#087E8B] transition-all shadow-xs hover:shadow-md flex flex-col">
              <div
                className="relative w-full h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1578632767115-351597cf2477?auto=format&fit=crop&w=800&q=80')`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#172B4D]/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-[#172B4D]/85 backdrop-blur font-mono-code text-[10px] text-[#FFFFFF] font-semibold">
                  STREAMDEMO EXCLUSIVE
                </span>
                <span className="absolute top-3 right-3 px-2 py-0.5 rounded bg-[#087E8B]/90 text-[#FFFFFF] font-mono-code text-[10px] font-semibold">
                  4K DOLBY
                </span>
              </div>
              <div className="p-4 flex flex-col gap-1">
                <h4 className="font-outfit text-base font-bold text-[#172B4D]">
                  The Silk Dynasty Chronicles
                </h4>
                <p className="text-xs text-[#556987] line-clamp-2">
                  Season 2 Streaming Now. All 24 episodes uncompressed with multi-language subtitle tracks.
                </p>
              </div>
            </div>

            {/* Visual Card 2 */}
            <div className="group relative rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#D5E5F2] hover:border-[#087E8B] transition-all shadow-xs hover:shadow-md flex flex-col">
              <div
                className="relative w-full h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1514565131-fce0801e5785?auto=format&fit=crop&w=800&q=80')`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#172B4D]/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-[#172B4D]/85 backdrop-blur font-mono-code text-[10px] text-[#FFFFFF] font-semibold">
                  ASIAN DRAMA
                </span>
                <span className="absolute top-3 right-3 px-2 py-0.5 rounded bg-[#087E8B]/90 text-[#FFFFFF] font-mono-code text-[10px] font-semibold">
                  NEW WEEKLY
                </span>
              </div>
              <div className="p-4 flex flex-col gap-1">
                <h4 className="font-outfit text-base font-bold text-[#172B4D]">
                  Midnight in District 7
                </h4>
                <p className="text-xs text-[#556987] line-clamp-2">
                  Award-winning crime procedural. Stream live with synchronous broadcast captioning.
                </p>
              </div>
            </div>

            {/* Visual Card 3 */}
            <div className="group relative rounded-2xl overflow-hidden bg-[#FFFFFF] border border-[#D5E5F2] hover:border-[#087E8B] transition-all shadow-xs hover:shadow-md flex flex-col">
              <div
                className="relative w-full h-48 bg-cover bg-center"
                style={{
                  backgroundImage: `url('https://images.unsplash.com/photo-1518709268805-4e9042af9f23?auto=format&fit=crop&w=800&q=80')`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-t from-[#172B4D]/80 via-transparent to-transparent" />
                <span className="absolute top-3 left-3 px-2 py-0.5 rounded bg-[#172B4D]/85 backdrop-blur font-mono-code text-[10px] text-[#FFFFFF] font-semibold">
                  HBO MAX PASS
                </span>
                <span className="absolute top-3 right-3 px-2 py-0.5 rounded bg-[#087E8B]/90 text-[#FFFFFF] font-mono-code text-[10px] font-semibold">
                  BUNDLE TIER
                </span>
              </div>
              <div className="p-4 flex flex-col gap-1">
                <h4 className="font-outfit text-base font-bold text-[#172B4D]">
                  House of the Dragon &amp; Dune
                </h4>
                <p className="text-xs text-[#556987] line-clamp-2">
                  Included with StreamDemo + HBO Max Bundle. Unlock thousands of hours of global prestige TV.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Side-by-Side Granular Feature Comparison Table */}
      <section className="w-full px-4 lg:px-12 py-8">
        <div className="max-w-5xl mx-auto rounded-2xl bg-[#FFFFFF] border border-[#D5E5F2] p-6 sm:p-8 shadow-sm">
          <div className="mb-6">
            <h3 className="font-outfit text-2xl sm:text-3xl font-bold text-[#172B4D] tracking-tight">
              Granular Plan Comparison
            </h3>
            <p className="text-xs sm:text-sm text-[#556987] mt-1">
              Symmetric breakdown of features across both subscription tiers.
            </p>
          </div>

          <div className="w-full overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead>
                <tr className="text-[#556987] font-mono-code text-[11px] uppercase tracking-wider bg-[#F0F7FC] border-b border-[#D5E5F2]">
                  <th className="py-3 px-4 rounded-l-lg">Streaming Feature</th>
                  <th className="py-3 px-4 font-bold text-[#087E8B]">StreamDemo + HBO Max Bundle</th>
                  <th className="py-3 px-4 rounded-r-lg font-bold text-[#172B4D]">StreamDemo Standalone</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#D5E5F2]">
                <tr className="hover:bg-[#F0F7FC]/70 transition-colors">
                  <td className="py-3.5 px-4 font-medium text-[#172B4D]">
                    Asian Entertainment Library
                  </td>
                  <td className="py-3.5 px-4 text-[#087E8B] font-semibold flex items-center gap-1.5">
                    <Check className="w-4 h-4" /> Complete (Unlimited)
                  </td>
                  <td className="py-3.5 px-4 text-[#087E8B] font-semibold">
                    <span className="inline-flex items-center gap-1.5">
                      <Check className="w-4 h-4" /> Complete (Unlimited)
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-[#F0F7FC]/70 transition-colors">
                  <td className="py-3.5 px-4 font-medium text-[#172B4D]">
                    HBO Max Complete Catalog
                  </td>
                  <td className="py-3.5 px-4 text-[#087E8B] font-semibold flex items-center gap-1.5">
                    <Check className="w-4 h-4" /> Included (Full Access)
                  </td>
                  <td className="py-3.5 px-4 text-[#556987]">Not included</td>
                </tr>
                <tr className="hover:bg-[#F0F7FC]/70 transition-colors">
                  <td className="py-3.5 px-4 font-medium text-[#172B4D]">
                    Maximum Video Streaming Resolution
                  </td>
                  <td className="py-3.5 px-4 text-[#172B4D] font-semibold">
                    4K Ultra HD + HDR10 / Dolby Vision
                  </td>
                  <td className="py-3.5 px-4 text-[#172B4D] font-semibold">Full HD (1080p)</td>
                </tr>
                <tr className="hover:bg-[#F0F7FC]/70 transition-colors">
                  <td className="py-3.5 px-4 font-medium text-[#172B4D]">Audio Standards</td>
                  <td className="py-3.5 px-4 text-[#344054]">Dolby Atmos + Spatial Audio</td>
                  <td className="py-3.5 px-4 text-[#344054]">5.1 Surround Sound</td>
                </tr>
                <tr className="hover:bg-[#F0F7FC]/70 transition-colors">
                  <td className="py-3.5 px-4 font-medium text-[#172B4D]">
                    Simultaneous Streaming Screens
                  </td>
                  <td className="py-3.5 px-4 text-[#172B4D] font-semibold">4 Devices at once</td>
                  <td className="py-3.5 px-4 text-[#172B4D] font-semibold">2 Devices at once</td>
                </tr>
                <tr className="hover:bg-[#F0F7FC]/70 transition-colors">
                  <td className="py-3.5 px-4 font-medium text-[#172B4D]">
                    Offline Download Capacity
                  </td>
                  <td className="py-3.5 px-4 text-[#087E8B] font-semibold flex items-center gap-1.5">
                    <Check className="w-4 h-4" /> Unlimited (Device storage limits apply)
                  </td>
                  <td className="py-3.5 px-4 text-[#087E8B] font-semibold">
                    <span className="inline-flex items-center gap-1.5">
                      <Check className="w-4 h-4" /> Unlimited (Device storage limits apply)
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-[#F0F7FC]/70 transition-colors">
                  <td className="py-3.5 px-4 font-medium text-[#172B4D]">
                    Commercials &amp; Ad-Insertion
                  </td>
                  <td className="py-3.5 px-4 text-[#087E8B] font-semibold flex items-center gap-1.5">
                    <Check className="w-4 h-4" /> 100% Ad-Free
                  </td>
                  <td className="py-3.5 px-4 text-[#087E8B] font-semibold">
                    <span className="inline-flex items-center gap-1.5">
                      <Check className="w-4 h-4" /> 100% Ad-Free
                    </span>
                  </td>
                </tr>
                <tr className="hover:bg-[#F0F7FC]/70 transition-colors">
                  <td className="py-3.5 px-4 font-medium text-[#172B4D]">Cancellation Friction</td>
                  <td className="py-3.5 px-4 text-[#087E8B] font-semibold">
                    1-Click Instant (No surveys)
                  </td>
                  <td className="py-3.5 px-4 text-[#087E8B] font-semibold">
                    1-Click Instant (No surveys)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Frequently Asked Questions (Clean Accordion) */}
      <section className="w-full px-4 lg:px-12 py-8">
        <div className="max-w-4xl mx-auto flex flex-col gap-6">
          <div className="text-center">
            <h3 className="font-outfit text-2xl sm:text-3xl font-bold text-[#172B4D] tracking-tight">
              Frequently Asked Questions
            </h3>
            <p className="text-xs sm:text-sm text-[#556987] mt-1">
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
                className="rounded-xl bg-[#FFFFFF] border border-[#D5E5F2] p-4 transition-colors hover:border-[#087E8B]/40 shadow-xs"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(i)}
                  className="w-full flex items-center justify-between text-left font-outfit text-base font-semibold text-[#172B4D]"
                >
                  <span>{faq.q}</span>
                  {expandedFaq === i ? (
                    <ChevronUp className="w-5 h-5 text-[#087E8B]" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-[#556987]" />
                  )}
                </button>
                {expandedFaq === i && (
                  <div className="mt-3 text-xs sm:text-sm text-[#344054] leading-relaxed border-t border-[#D5E5F2] pt-3">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer (Warm Palette) */}
      <footer className="w-full bg-[#FFFFFF] border-t border-[#D5E5F2] mt-12 py-8 px-4 lg:px-12 text-xs text-[#556987]">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <span className="font-outfit font-bold text-[#172B4D] text-base">StreamDemo</span>
            <span className="px-2 py-0.5 rounded bg-[#F0F7FC] border border-[#D5E5F2] text-[#087E8B] font-mono-code text-[10px] font-semibold">
              Variant B Ethical Redesign
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 text-xs">
            <button onClick={() => onOpenModal('consent')} className="hover:text-[#087E8B] transition-colors">
              Study Protocol
            </button>
            <button onClick={() => onOpenModal('debrief')} className="hover:text-[#087E8B] transition-colors">
              Participant Debrief
            </button>
            <button onClick={() => onOpenModal('audit_inspector')} className="hover:text-[#087E8B] transition-colors">
              Behavioural Audit Table
            </button>
            <span className="text-[#D5E5F2]">|</span>
            <span className="text-[#087E8B] font-medium">100% Transparent Billing</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

import React, { useState } from 'react';
import { ActiveModal } from '../types';
import {
  AlertTriangle,
  Info,
  Tv,
  Ban,
  Download,
  Film,
  Zap,
  Monitor,
  Check,
  Eye,
  EyeOff
} from 'lucide-react';

interface VariantAProps {
  onOpenModal: (modal: ActiveModal) => void;
  onSelectPlanForCheckout?: (planName: string, monthlyDisplay: string, totalBilled: string, overseasFee: string) => void;
}

export const VariantA: React.FC<VariantAProps> = ({
  onOpenModal,
  onSelectPlanForCheckout,
}) => {
  // Baseline tab options in Viu
  const [selectedTab, setSelectedTab] = useState<'standalone' | 'bundle'>('standalone');
  const [selectedPlanPeriod, setSelectedPlanPeriod] = useState<'365' | '90' | '30'>('365');
  const [showAnnotations, setShowAnnotations] = useState(true);

  const handleSubscribe = (name: string, monthly: string, total: string, overseas: string) => {
    if (onSelectPlanForCheckout) {
      onSelectPlanForCheckout(name, monthly, total, overseas);
    }
    onOpenModal('checkout_sim');
  };

  return (
    <div className="w-full bg-[#141414] text-[#d6d3cf] min-h-screen pt-24 pb-20 px-4 md:px-8">
      <div className="max-w-5xl mx-auto flex flex-col gap-6">
        {/* Research Mode Annotation Toggle Bar */}
        <div className="w-full bg-[#1c1815] border border-amber-500/40 rounded-xl p-4 flex flex-wrap items-center justify-between gap-3 shadow-md">
          <div className="flex items-center gap-2.5">
            <span className="p-1.5 rounded-lg bg-amber-500/20 text-amber-400">
              <AlertTriangle className="w-5 h-5" />
            </span>
            <div>
              <div className="font-outfit font-bold text-sm text-[#ffc880] flex items-center gap-2">
                <span>Variant A Baseline: Replicating Viu Premium Sludge Architecture</span>
                <span className="text-[11px] font-mono-code px-2 py-0.5 rounded bg-amber-950/80 text-amber-300 border border-amber-600/40">
                  DECEPTIVE NUDGES ACTIVE
                </span>
              </div>
              <p className="text-xs text-[#b0a9a1]">
                Demonstrating partitioned pricing, asymmetric default framing, and shrouded foreign transaction surcharges.
              </p>
            </div>
          </div>

          <button
            onClick={() => setShowAnnotations(!showAnnotations)}
            className="px-3 py-1.5 rounded-lg bg-[#27221d] hover:bg-[#342e27] border border-amber-500/30 text-amber-300 text-xs font-medium flex items-center gap-1.5 transition-colors"
          >
            {showAnnotations ? <EyeOff className="w-3.5 h-3.5" /> : <Eye className="w-3.5 h-3.5" />}
            <span>{showAnnotations ? 'Hide Sludge Annotations' : 'Show Sludge Annotations'}</span>
          </button>
        </div>

        {/* Tab switch between Standalone & Bundle (As present in baseline Viu) */}
        <div className="flex items-center justify-center gap-3 pt-2">
          <button
            onClick={() => {
              setSelectedTab('standalone');
              setSelectedPlanPeriod('365');
            }}
            className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
              selectedTab === 'standalone'
                ? 'bg-[#f5a623] text-[#141414] font-bold shadow-lg shadow-amber-500/20'
                : 'bg-[#222] text-[#8e8a85] hover:text-white'
            }`}
          >
            StreamDemo Premium (Standalone)
          </button>
          <button
            onClick={() => {
              setSelectedTab('bundle');
            }}
            className={`px-5 py-2 rounded-full font-medium text-sm transition-all ${
              selectedTab === 'bundle'
                ? 'bg-[#f5a623] text-[#141414] font-bold shadow-lg shadow-amber-500/20'
                : 'bg-[#222] text-[#8e8a85] hover:text-white'
            }`}
          >
            StreamDemo + HBO Max Bundle
          </button>
        </div>

        {/* Content depending on Tab */}
        {selectedTab === 'standalone' ? (
          <div className="flex flex-col gap-6">
            {/* Top Baseline Trial Banner */}
            <div className="relative bg-[#1c1b1b] border border-[#2d2c2b] rounded-xl p-5 text-xs text-[#a8a39c] flex flex-col gap-1.5">
              {showAnnotations && (
                <div className="absolute -top-3 right-4 px-2 py-0.5 rounded bg-red-950 text-red-300 border border-red-500/50 text-[10px] font-mono-code flex items-center gap-1">
                  <span>Finding 4: 24h Trap & Hyperbolic Free Bias</span>
                </div>
              )}
              <p className="text-sm text-[#e8e4dc]">
                Enjoy a <strong>7-day FREE trial^</strong>, then{' '}
                <span className="font-semibold text-white">
                  {selectedPlanPeriod === '365'
                    ? '$107.76 for 365 days (U.P. $131.76)'
                    : selectedPlanPeriod === '90'
                    ? '$29.94 for 90 days (U.P. $32.94)'
                    : '$10.98 for 30 days'}
                </span>
                . Your subscription will auto-renew every{' '}
                {selectedPlanPeriod === '365'
                  ? '365 days'
                  : selectedPlanPeriod === '90'
                  ? '90 days'
                  : '30 days'}
                .
              </p>
              <p>
                You won't be charged during your free trial. If you don't wish to continue,{' '}
                <strong className="text-amber-300 underline">
                  please cancel at least 24 hours before your free trial ends
                </strong>{' '}
                to avoid being charged{' '}
                {selectedPlanPeriod === '365'
                  ? '$107.76'
                  : selectedPlanPeriod === '90'
                  ? '$29.94'
                  : '$10.98'}
                . Otherwise, the full fee will be charged automatically when your free trial ends.
              </p>
              <p className="text-[11px] text-[#706c67] italic pt-1">
                Free trial eligibility criteria^ apply. See the Terms & Conditions below* for more information.
              </p>
              <p className="text-[11px] text-[#706c67]">
                By proceeding, I agree to the associated{' '}
                <span className="underline cursor-pointer hover:text-white">Terms & Conditions</span>.
              </p>
            </div>

            {/* Plan Selector Sub-Tabs (365 days vs 90 days vs 30 days) */}
            <div className="flex gap-2">
              <button
                onClick={() => setSelectedPlanPeriod('365')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                  selectedPlanPeriod === '365'
                    ? 'border-amber-400 bg-amber-500/10 text-amber-300 font-semibold'
                    : 'border-[#333] text-[#8e8a85] hover:border-[#555]'
                }`}
              >
                365-Day Plan (Recommended)
              </button>
              <button
                onClick={() => setSelectedPlanPeriod('90')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                  selectedPlanPeriod === '90'
                    ? 'border-amber-400 bg-amber-500/10 text-amber-300 font-semibold'
                    : 'border-[#333] text-[#8e8a85] hover:border-[#555]'
                }`}
              >
                90-Day Plan
              </button>
              <button
                onClick={() => setSelectedPlanPeriod('30')}
                className={`px-3 py-1.5 rounded-lg text-xs font-medium border transition-colors ${
                  selectedPlanPeriod === '30'
                    ? 'border-amber-400 bg-amber-500/10 text-amber-300 font-semibold'
                    : 'border-[#333] text-[#8e8a85] hover:border-[#555]'
                }`}
              >
                30-Day Plan
              </button>
            </div>

            {/* Viu-Style Card (Exact replica of screenshot) */}
            <div className="relative rounded-2xl bg-white text-[#1a1a1a] p-6 shadow-xl border border-gray-200">
              {/* Sludge Finding 1 & 2 Annotation Badges */}
              {showAnnotations && (
                <div className="absolute -top-3 left-6 flex flex-wrap gap-2 z-10">
                  <span className="px-2 py-0.5 rounded bg-red-600 text-white text-[11px] font-mono-code font-bold shadow-md">
                    Finding 1: Partitioned Pricing Sludge
                  </span>
                  <span className="px-2 py-0.5 rounded bg-purple-600 text-white text-[11px] font-mono-code font-bold shadow-md">
                    Finding 2: Asymmetric Default (Pink Ribbon)
                  </span>
                </div>
              )}

              {/* Recommended Magenta Ribbon Badge */}
              {selectedPlanPeriod === '365' && (
                <div className="inline-block mb-3">
                  <div className="bg-[#e42575] text-white text-xs font-bold px-3 py-1 rounded-sm shadow-sm italic flex items-center gap-1">
                    <span>Recommended</span>
                  </div>
                </div>
              )}

              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                {/* Left: Deceptive monthly headline */}
                <div className="flex flex-col gap-1">
                  <div className="flex items-baseline gap-2">
                    <span className="font-outfit text-2xl md:text-3xl font-extrabold text-[#111]">
                      {selectedPlanPeriod === '365'
                        ? 'Only $8.98/month'
                        : selectedPlanPeriod === '90'
                        ? '$9.98/month'
                        : '$10.98/month'}
                    </span>
                  </div>
                  <div className="font-outfit text-lg font-bold text-[#111]">
                    {selectedPlanPeriod === '365'
                      ? 'Save 18% on 1 year!'
                      : selectedPlanPeriod === '90'
                      ? 'Save 9% off 90 days!'
                      : 'Start 30-day Premium!'}
                  </div>

                  {/* Shrouded Lump Sum Recurring Text */}
                  <div className="text-xs text-[#555] mt-1 flex flex-col gap-0.5 leading-relaxed">
                    <p className="font-medium text-[#222]">
                      {selectedPlanPeriod === '365'
                        ? 'Recurring payment of $107.76 (U.P. $131.76) charged every 365 days.'
                        : selectedPlanPeriod === '90'
                        ? 'Recurring payment of $29.94 (U.P. $32.94) charged every 90 days.'
                        : 'Recurring payment of $10.98 charged every 30 days.'}
                    </p>
                    <p>
                      No lock-in contract or minimum commitment. To avoid being charged for the next billing cycle, please cancel at least 24 hours before your next billing date.
                    </p>
                    <p className="text-amber-800 font-medium">
                      Additional bank charges may apply.
                    </p>
                    <p className="text-[#777]">Terms &amp; conditions apply.</p>
                  </div>
                </div>

                {/* Right: Viu Pink/Orange Gradient Subscribe Button */}
                <div className="shrink-0 flex flex-col items-center">
                  <button
                    onClick={() =>
                      handleSubscribe(
                        selectedPlanPeriod === '365'
                          ? 'Viu Premium 365 Days Plan'
                          : selectedPlanPeriod === '90'
                          ? 'Viu Premium 90 Days Plan'
                          : 'Viu Premium 30 Days Plan',
                        selectedPlanPeriod === '365'
                          ? '$8.98/month'
                          : selectedPlanPeriod === '90'
                          ? '$9.98/month'
                          : '$10.98/month',
                        selectedPlanPeriod === '365'
                          ? '$107.76'
                          : selectedPlanPeriod === '90'
                          ? '$29.94'
                          : '$10.98',
                        '$3.23 (3.0% Overseas Merchant Fee)'
                      )
                    }
                    className="w-full md:w-56 py-3 px-6 rounded-full bg-gradient-to-r from-[#f5a623] to-[#e42575] hover:opacity-95 text-white font-bold text-base shadow-lg transition-transform active:scale-[0.98] text-center"
                  >
                    Subscribe now
                  </button>
                  <span className="text-[11px] text-[#777] mt-1.5">
                    Instant activation • Cancel anytime
                  </span>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* BUNDLE TAB (Screenshots 4: HBO Max + Viu Bundle) */
          <div className="flex flex-col gap-6">
            <div className="bg-[#1c1b1b] border border-[#2d2c2b] rounded-xl p-5 text-xs text-[#a8a39c] flex flex-col gap-2">
              <h3 className="text-sm font-bold text-[#f5a623]">
                The best hits from Hollywood and Asia at an unbelievable price.
              </h3>
              <p>Stream Hollywood hits, K-dramas, and can't miss Asian originals with one bundle.</p>
              <div className="flex flex-col gap-1 text-[11px] text-[#8e8a85]">
                <p>Bundle includes:</p>
                <p>- StreamDemo Premium streaming service to enjoy ad-free viewing, video download, and priority/exclusive content access!</p>
                <p>- HBO Max Standard Plan (subject to HBO's Terms of Use)</p>
                <p>- By continuing, I agree to the applicable StreamDemo Terms &amp; Conditions and the HBO Max &amp; StreamDemo Bundle Terms &amp; Conditions.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Option 1: 30-Day Bundle */}
              <div className="rounded-2xl bg-white text-[#1a1a1a] p-5 shadow-xl border border-gray-200 flex flex-col justify-between gap-4">
                <div className="flex flex-col gap-2">
                  <h4 className="font-outfit text-xl font-bold text-[#111]">
                    $19.98/month - Start 30-day bundle subscription!
                  </h4>
                  <div className="text-xs text-[#555] leading-relaxed flex flex-col gap-1">
                    <p className="font-semibold text-[#222]">
                      Recurring payment of $19.98 charged every 30 days.
                    </p>
                    <p>
                      Cancel anytime - cancellation takes effect from the next billing cycle. To avoid being charged for the next cycle, please cancel at least 24 hours before the next billing date.
                    </p>
                    <p className="text-amber-800 font-medium">Additional bank charges may apply.</p>
                  </div>
                </div>
                <button
                  onClick={() =>
                    handleSubscribe(
                      'StreamDemo + HBO Max 30-Day Bundle',
                      '$19.98/month',
                      '$19.98',
                      '$0.60 (3.0% Overseas Merchant Fee)'
                    )
                  }
                  className="w-full py-2.5 px-4 rounded-full bg-gradient-to-r from-[#f5a623] to-[#e42575] hover:opacity-95 text-white font-bold text-sm shadow text-center"
                >
                  Subscribe now
                </button>
              </div>

              {/* Option 2: 365-Day Bundle (Recommended) */}
              <div className="relative rounded-2xl bg-white text-[#1a1a1a] p-5 shadow-xl border-2 border-[#e42575] flex flex-col justify-between gap-4">
                {showAnnotations && (
                  <div className="absolute -top-3 right-4 px-2 py-0.5 rounded bg-red-600 text-white text-[10px] font-mono-code font-bold">
                    Heuristic Partition: $15.83 vs $189.98 lump sum
                  </div>
                )}
                <div className="flex flex-col gap-2">
                  <div className="inline-block">
                    <span className="bg-[#e42575] text-white text-xs font-bold px-2.5 py-0.5 rounded-sm italic">
                      Recommended
                    </span>
                  </div>
                  <h4 className="font-outfit text-xl font-bold text-[#111]">
                    $15.83/month - Save 20% on a 365-day bundle!
                  </h4>
                  <div className="text-xs text-[#555] leading-relaxed flex flex-col gap-1">
                    <p className="font-semibold text-[#222]">
                      Recurring payment of $189.98 (U.P. $239.76) charged every 365 days.
                    </p>
                    <p>
                      Cancel anytime - cancellation takes effect from the next billing cycle. To avoid being charged for the next cycle, please cancel at least 24 hours before the next billing date.
                    </p>
                    <p className="text-amber-800 font-medium">Additional bank charges may apply.</p>
                  </div>
                </div>
                <button
                  onClick={() =>
                    handleSubscribe(
                      'StreamDemo + HBO Max 365-Day Bundle',
                      '$15.83/month',
                      '$189.98',
                      '$5.70 (3.0% Overseas Merchant Fee)'
                    )
                  }
                  className="w-full py-2.5 px-4 rounded-full bg-gradient-to-r from-[#f5a623] to-[#e42575] hover:opacity-95 text-white font-bold text-sm shadow text-center"
                >
                  Subscribe now
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Sludge Finding 3: Buried Overseas Bank Surcharges & No-Refund Fine Print */}
        <div className="relative mt-2 p-4 rounded-xl bg-[#171616] border border-[#2b2a29] text-[11px] text-[#7d7973] flex flex-col gap-2 leading-relaxed">
          {showAnnotations && (
            <div className="absolute -top-3 left-4 px-2 py-0.5 rounded bg-red-950 text-red-300 border border-red-500/50 text-[10px] font-mono-code font-bold">
              Finding 3: Hidden Overseas Merchant Surcharge &amp; No-Refund Lock-In
            </div>
          )}
          <p>
            This promotion is valid until 31 December 2026 and is applicable only to users who subscribe to the StreamDemo Premium 365 Days Plan via credit card payment. StreamDemo reserves the right to amend the promotion period without prior notice.
          </p>
          <p>
            <strong className="text-[#a8a39c]">No refunds</strong> will be provided for any partial or unused portion of the StreamDemo Premium 365 Days Plan if you cancel during an active subscription period.
          </p>
          <p className="text-[#c7a977] bg-amber-950/20 p-2 rounded border border-amber-900/30">
            <strong>Notice of International Surcharge:</strong> As StreamDemo's merchant account is maintained overseas, your bank may impose an international transaction fee on your purchase. StreamDemo is not responsible for any such fees charged by your bank.
          </p>
        </div>

        {/* Baseline Bottom Features Row (Kept Nudge: Cognitive Offloading) */}
        <div className="mt-4 pt-6 border-t border-[#252525] bg-[#161616] p-4 rounded-xl flex flex-wrap items-center justify-around gap-4 text-xs text-[#a09e9c]">
          <div className="flex items-center gap-2">
            <Tv className="w-4 h-4 text-[#f5a623]" />
            <span>Unlimited Access</span>
          </div>
          <div className="flex items-center gap-2">
            <Ban className="w-4 h-4 text-[#f5a623]" />
            <span>No Video Ads</span>
          </div>
          <div className="flex items-center gap-2">
            <Download className="w-4 h-4 text-[#f5a623]" />
            <span>Video Downloads</span>
          </div>
          <div className="flex items-center gap-2">
            <Film className="w-4 h-4 text-[#f5a623]" />
            <span>Full HD (1080p)</span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-4 h-4 text-[#f5a623]" />
            <span>Priority Viewing</span>
          </div>
          <div className="flex items-center gap-2">
            <Monitor className="w-4 h-4 text-[#f5a623]" />
            <span>Watch On Multiple Screens</span>
          </div>
        </div>
      </div>
    </div>
  );
};

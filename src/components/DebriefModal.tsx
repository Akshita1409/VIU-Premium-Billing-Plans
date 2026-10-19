import React from 'react';
import { X, BookOpen, CheckCircle, AlertOctagon, TrendingUp, Sparkles } from 'lucide-react';

interface DebriefModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const DebriefModal: React.FC<DebriefModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-3xl bg-[#1c1b1b] border border-[#333] rounded-2xl p-6 sm:p-8 shadow-2xl text-[#d7c3ae] max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1 rounded-lg hover:bg-[#2a2a2a] text-[#8e8a85] hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 pb-4 border-b border-[#2d2c2b]">
          <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#ffc880]">
            <BookOpen className="w-6 h-6" />
          </div>
          <div>
            <span className="font-mono-code text-[11px] text-[#ffc880] font-semibold tracking-wider uppercase">
              Educational &amp; Experimental Debriefing
            </span>
            <h2 className="font-outfit text-xl sm:text-2xl font-bold text-white">
              Participant Debrief: Theory, Hypotheses &amp; Mechanics
            </h2>
          </div>
        </div>

        <div className="mt-5 space-y-4 text-xs sm:text-sm text-[#b8b4af] leading-relaxed">
          <div>
            <h3 className="font-outfit font-bold text-white text-base">
              The Research Question &amp; Problem Diagnosis
            </h3>
            <p className="mt-1">
              Thank you for participating in our behavioural decision architecture study. This research investigates how commercial digital streaming services exploit cognitive heuristics to nudge users into expensive, long-term subscriptions that consumers did not intentionally seek.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-[#24211e] border border-red-500/30 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-red-400 font-bold font-outfit text-sm">
                <AlertOctagon className="w-4 h-4" />
                <span>Variant A (Deceptive Sludge)</span>
              </div>
              <ul className="text-xs space-y-1 list-disc list-inside text-[#c9c4bd]">
                <li><strong>Partitioned Pricing:</strong> Highlights "$8.98/mo" or "$15.83/mo" while hiding the $107.76 / $189.98 lump sum recurring deduction.</li>
                <li><strong>Asymmetric Default:</strong> Pre-selects 365 days via high-contrast pink ribbon; obscures monthly options.</li>
                <li><strong>Shrouded Foreign Fee:</strong> Small-print disclaimer offloading 3% overseas card fees onto user.</li>
                <li><strong>24-Hour Trap:</strong> 7-day trial must be cancelled &ge;24 hours before expiry or triggers irreversible $107.76 charge.</li>
              </ul>
            </div>

            <div className="p-4 rounded-xl bg-[#1e2420] border border-emerald-500/30 flex flex-col gap-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold font-outfit text-sm">
                <CheckCircle className="w-4 h-4" />
                <span>Variant B (Ethical Choice Architecture)</span>
              </div>
              <ul className="text-xs space-y-1 list-disc list-inside text-[#c9c4bd]">
                <li><strong>All-In Upfront Pricing:</strong> Primary figures display the exact amount charged today ($189.98/yr or $107.76/yr).</li>
                <li><strong>Symmetric Layout:</strong> Equal visual stature between standalone and bundle tiers with explicit monthly switcher.</li>
                <li><strong>14-Day Advance Notice:</strong> Proactive email warning with 1-click cancel before renewal.</li>
                <li><strong>Zero Hidden Exit Friction:</strong> Self-serve 1-click cancel from account settings with live sandbox verification.</li>
              </ul>
            </div>
          </div>

          <div>
            <h3 className="font-outfit font-bold text-white text-base">Key Academic Frameworks &amp; Course Readings</h3>
            <div className="mt-2 space-y-2 text-xs">
              <p>
                <strong>1. Shafir &amp; Thaler (2006) Mental Accounting of Delayed Consumption:</strong> Advance purchases are coded as "investments" rather than "spending", allowing subsequent consumption to feel "free". Partitioned pricing weaponizes this by making annual lock-ins look like negligible monthly spending, until dormant accounts are violently "resuscitated" at full replacement cost.
              </p>
              <p>
                <strong>2. Kahneman (2011, Chapters 26, 27, 34):</strong> Prospect theory S-shaped value function (losses loom larger than gains), the Endowment Effect, and Framing Effects ("Costs are not losses"; default opt-in/opt-out effects driven by System 2 laziness).
              </p>
              <p>
                <strong>3. Kern &amp; Chugh (2009) Bounded Ethicality &amp; Loss Framing:</strong> Loss framing and time pressure trigger automaticity, driving both firms and consumers toward lower-road ethical compromises. Removing friction and time pressure restores deliberate, ethical choice.
              </p>
              <p>
                <strong>4. Prof. Roh's De-Biasing vs. Re-Biasing Framework (Week 2):</strong> Variant B repairs the choice environment by eliminating the root causes of error (shrouding, hidden surcharges, asymmetric defaults) rather than attempting to counteract bias with an opposing bias.
              </p>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-[#222] border border-[#333] text-xs">
            <h4 className="font-bold text-white flex items-center gap-1.5">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span>Experimental Metrics &amp; Pilot Power Analysis</span>
            </h4>
            <p className="mt-1 text-[#a09e9c]">
              <strong>Primary Metric:</strong> Percentage of users who accurately identify the total annual financial obligation before initiating payment (Predicted: Variant A = 38%, Variant B = 89%, p &lt; .001).
              <br />
              <strong>Sample Size Calculation:</strong> Two-proportion z-test with &alpha; = .05 and 1 - &beta; = .80 requires ~97 participants per arm (N = 194 total) to detect a 20% difference.
            </p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#2d2c2b] flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-lg bg-[#f5a623] hover:bg-[#ffc55c] text-[#141414] font-outfit font-bold text-sm transition-all"
          >
            Close Debrief
          </button>
        </div>
      </div>
    </div>
  );
};

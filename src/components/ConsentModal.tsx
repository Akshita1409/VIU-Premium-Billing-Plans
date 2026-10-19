import React, { useState } from 'react';
import { X, ShieldCheck, CheckSquare, Square } from 'lucide-react';

interface ConsentModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const ConsentModal: React.FC<ConsentModalProps> = ({ isOpen, onClose }) => {
  const [agreed, setAgreed] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#1c1b1b] border border-[#333] rounded-2xl p-6 sm:p-8 shadow-2xl text-[#d7c3ae] max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1 rounded-lg hover:bg-[#2a2a2a] text-[#8e8a85] hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 pb-4 border-b border-[#2d2c2b]">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <span className="font-mono-code text-[11px] text-emerald-400 font-semibold tracking-wider uppercase">
              Institutional Review Board • Protocol #2024-ETH-088
            </span>
            <h2 className="font-outfit text-xl sm:text-2xl font-bold text-white">
              Participant Information &amp; Study Consent
            </h2>
          </div>
        </div>

        <div className="mt-5 space-y-4 text-xs sm:text-sm text-[#b8b4af] leading-relaxed">
          <div>
            <h3 className="font-outfit font-bold text-white text-base">Study Title</h3>
            <p className="mt-1">
              <em>Evaluating the Impact of Partitioned Pricing and Asymmetric Choice Architecture in Digital Media Subscription Services.</em>
            </p>
          </div>

          <div>
            <h3 className="font-outfit font-bold text-white text-base">Principal Investigator</h3>
            <p className="mt-1">
              Behavioural Science &amp; Decision Architecture Lab, Singapore Management University (SMU), under supervision of Prof. Sungjong Roh, PhD.
            </p>
          </div>

          <div>
            <h3 className="font-outfit font-bold text-white text-base">Purpose &amp; Procedures</h3>
            <p className="mt-1">
              You are invited to participate in a human-centered decision simulation evaluating two interface designs (Variant A and Variant B) representing streaming entertainment subscription checkout flows. You will be asked to view plan options and simulate a subscription decision.
            </p>
          </div>

          <div className="p-3 rounded-lg bg-[#242323] border border-[#333]">
            <h4 className="font-semibold text-white">Ethical Protections &amp; Data Privacy</h4>
            <ul className="mt-1.5 list-disc list-inside space-y-1 text-xs">
              <li><strong>Zero Real Payments:</strong> No actual financial transactions take place; credit cards are simulated dummy inputs.</li>
              <li><strong>No Personal Identifiable Information (PII):</strong> No passwords, phone numbers, or government IDs are requested or stored.</li>
              <li><strong>Voluntary Participation:</strong> You may discontinue at any moment without penalty or loss of benefits.</li>
              <li><strong>Fictional Brand Usage:</strong> To prevent brand contamination, the prototype operates under the fictional research banner <em>StreamDemo</em>.</li>
            </ul>
          </div>

          <div>
            <h3 className="font-outfit font-bold text-white text-base">Risks &amp; Benefits</h3>
            <p className="mt-1">
              There are no foreseeable physical or psychological risks beyond normal computer screen viewing. Benefits include educational insight into behavioral economics principles (nudge vs sludge, partitioned pricing, and choice architecture).
            </p>
          </div>
        </div>

        <div className="mt-6 pt-4 border-t border-[#2d2c2b] flex flex-col sm:flex-row items-center justify-between gap-4">
          <button
            onClick={() => setAgreed(!agreed)}
            className="flex items-center gap-2 text-xs text-white cursor-pointer select-none"
          >
            {agreed ? (
              <CheckSquare className="w-5 h-5 text-emerald-400" />
            ) : (
              <Square className="w-5 h-5 text-[#666]" />
            )}
            <span>I have read the protocol terms and freely consent to participate.</span>
          </button>

          <button
            onClick={onClose}
            disabled={!agreed}
            className={`w-full sm:w-auto px-6 py-2.5 rounded-lg font-outfit font-bold text-sm transition-all ${
              agreed
                ? 'bg-emerald-500 hover:bg-emerald-400 text-[#141414] shadow-lg'
                : 'bg-[#2a2a2a] text-[#666] cursor-not-allowed'
            }`}
          >
            Proceed to Prototype
          </button>
        </div>
      </div>
    </div>
  );
};

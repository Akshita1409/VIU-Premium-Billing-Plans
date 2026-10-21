import React, { useState } from 'react';
import { ActiveModal } from '../types';
import { VariantA } from './VariantA';
import { VariantB } from './VariantB';
import { Columns, ArrowRightLeft, ShieldAlert, ShieldCheck } from 'lucide-react';

interface SideBySideCompareProps {
  onOpenModal: (modal: ActiveModal) => void;
  onSelectPlanForCheckout?: (planName: string, monthlyDisplay: string, totalBilled: string, overseasFee: string) => void;
}

export const SideBySideCompare: React.FC<SideBySideCompareProps> = ({
  onOpenModal,
  onSelectPlanForCheckout,
}) => {
  return (
    <div className="w-full bg-[#101010] min-h-screen pt-24 pb-16 px-2 sm:px-6">
      {/* Comparative Diff Header */}
      <div className="max-w-7xl mx-auto mb-6 bg-[#1a1919] border border-[#2d2c2b] rounded-2xl p-4 sm:p-6 shadow-xl">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-4 border-b border-[#282726]">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
              <Columns className="w-5 h-5" />
            </div>
            <div>
              <h2 className="font-outfit text-xl sm:text-2xl font-bold text-white">
                Dual-Variant Comparative Audit Screen
              </h2>
              <p className="text-xs sm:text-sm text-[#a09e9c]">
                Synchronized side-by-side evaluation of Baseline Viu Sludge (Left) vs Ethical Redesign (Right).
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => onOpenModal('audit_inspector')}
              className="px-3 py-1.5 rounded-lg bg-[#252525] hover:bg-[#333] border border-[#383838] text-amber-300 text-xs font-semibold"
            >
              Inspect 6-Line Audit Table
            </button>
            <button
              onClick={() => onOpenModal('cancel_sandbox')}
              className="px-3 py-1.5 rounded-lg bg-emerald-500/15 hover:bg-emerald-500/25 border border-emerald-500/40 text-emerald-400 text-xs font-semibold"
            >
              Compare Exit Flows
            </button>
          </div>
        </div>

        {/* 6 Behavioral Dimensions Comparison Matrix */}
        <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 text-[11px] font-mono-code">
          <div className="p-2.5 rounded-lg bg-[#141414] border border-[#2a2a2a] flex flex-col gap-1">
            <span className="text-[#888] font-semibold">1. Pricing Framing</span>
            <span className="text-red-400">A: Partitioned ($8.98)</span>
            <span className="text-emerald-400">B: All-In ($107.76)</span>
          </div>
          <div className="p-2.5 rounded-lg bg-[#141414] border border-[#2a2a2a] flex flex-col gap-1">
            <span className="text-[#888] font-semibold">2. Default Stature</span>
            <span className="text-red-400">A: 365d Ribbon Decoy</span>
            <span className="text-emerald-400">B: Symmetric Equal</span>
          </div>
          <div className="p-2.5 rounded-lg bg-[#141414] border border-[#2a2a2a] flex flex-col gap-1">
            <span className="text-[#888] font-semibold">3. Exit Friction</span>
            <span className="text-red-400">A: 4-Step Sludge Maze</span>
            <span className="text-emerald-400">B: Self-Serve 1-Click</span>
          </div>
          <div className="p-2.5 rounded-lg bg-[#141414] border border-[#2a2a2a] flex flex-col gap-1">
            <span className="text-[#888] font-semibold">4. Surcharge Clarity</span>
            <span className="text-red-400">A: Shrouded 3% Bank Fee</span>
            <span className="text-emerald-400">B: $0.00 Guaranteed</span>
          </div>
          <div className="p-2.5 rounded-lg bg-[#141414] border border-[#2a2a2a] flex flex-col gap-1">
            <span className="text-[#888] font-semibold">5. Renewal Autonomy</span>
            <span className="text-red-400">A: 24h Trap Cutoff</span>
            <span className="text-emerald-400">B: 14d Advance Notice</span>
          </div>
          <div className="p-2.5 rounded-lg bg-[#141414] border border-[#2a2a2a] flex flex-col gap-1">
            <span className="text-[#888] font-semibold">6. Sunk Cost Policy</span>
            <span className="text-red-400">A: 100% Forfeited</span>
            <span className="text-emerald-400">B: Pro-Rated Credit</span>
          </div>
        </div>
      </div>

      {/* Dual Split Container */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 gap-6 items-start">
        {/* Left Pane: Variant A */}
        <div className="rounded-2xl border-2 border-red-500/30 overflow-hidden shadow-2xl bg-[#141414] flex flex-col">
          <div className="bg-red-950/40 px-4 py-2.5 border-b border-red-500/30 flex items-center justify-between text-xs text-red-300 font-bold">
            <div className="flex items-center gap-2">
              <ShieldAlert className="w-4 h-4 text-red-400" />
              <span>VARIANT A (BASELINE VIU DARK PATTERNS)</span>
            </div>
            <span className="font-mono-code text-[11px] bg-red-900/50 px-2 py-0.5 rounded">
              SLUDGE ARCHITECTURE
            </span>
          </div>
          <div className="overflow-y-auto max-h-[85vh]">
            <VariantA
              onOpenModal={onOpenModal}
              onSelectPlanForCheckout={onSelectPlanForCheckout}
            />
          </div>
        </div>

        {/* Right Pane: Variant B */}
        <div className="rounded-2xl border-2 border-emerald-500/30 overflow-hidden shadow-2xl bg-[#131313] flex flex-col">
          <div className="bg-emerald-950/40 px-4 py-2.5 border-b border-emerald-500/30 flex items-center justify-between text-xs text-emerald-300 font-bold">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-400" />
              <span>VARIANT B (HUMAN-CENTERED ETHICAL REDESIGN)</span>
            </div>
            <span className="font-mono-code text-[11px] bg-emerald-900/50 px-2 py-0.5 rounded">
              TRANSPARENT REVENUE
            </span>
          </div>
          <div className="overflow-y-auto max-h-[85vh]">
            <VariantB
              onSelectVariant={() => {}}
              onOpenModal={onOpenModal}
              onSelectPlanForCheckout={onSelectPlanForCheckout}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

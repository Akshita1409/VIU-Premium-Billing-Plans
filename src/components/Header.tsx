import React from 'react';
import { VariantType, ActiveModal } from '../types';
import { Play, ShieldCheck, ArrowRightLeft, FileText, HelpCircle, Columns } from 'lucide-react';

interface HeaderProps {
  currentVariant: VariantType;
  onSelectVariant: (variant: VariantType) => void;
  onOpenModal: (modal: ActiveModal) => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentVariant,
  onSelectVariant,
  onOpenModal,
}) => {
  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#131313]/95 backdrop-blur-xl border-b border-[#252525] shadow-lg">
      {/* Top Academic & Research Protocol Toolbar */}
      <div className="w-full bg-[#0e0e0e] px-4 lg:px-12 py-1.5 flex flex-wrap items-center justify-between text-xs text-[#a09e9c] border-b border-[#1f1f1f]">
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono-code font-semibold ${
              currentVariant === 'B'
                ? 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                : currentVariant === 'A'
                ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                : 'bg-blue-500/15 text-blue-300 border border-blue-500/30'
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                currentVariant === 'B'
                  ? 'bg-emerald-400 animate-pulse'
                  : currentVariant === 'A'
                  ? 'bg-amber-400 animate-pulse'
                  : 'bg-blue-400 animate-pulse'
              }`}
            />
            {currentVariant === 'B'
              ? '?v=B (Ethical Redesign)'
              : currentVariant === 'A'
              ? '?v=A (Baseline Viu Sludge)'
              : 'Side-by-Side Comparison'}
          </span>

          <span className="text-[#3a3a3a] hidden sm:inline">|</span>

          {/* Quick Switch Buttons */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => onSelectVariant('A')}
              className={`px-2 py-0.5 rounded transition-colors ${
                currentVariant === 'A'
                  ? 'bg-[#2a2a2a] text-amber-300 font-semibold'
                  : 'text-[#a09e9c] hover:text-white'
              }`}
            >
              Variant A (Baseline)
            </button>
            <span className="text-[#3a3a3a]">/</span>
            <button
              onClick={() => onSelectVariant('B')}
              className={`px-2 py-0.5 rounded transition-colors ${
                currentVariant === 'B'
                  ? 'bg-[#2a2a2a] text-emerald-400 font-semibold'
                  : 'text-[#a09e9c] hover:text-white'
              }`}
            >
              Variant B (Ethical)
            </button>
            <span className="text-[#3a3a3a]">/</span>
            <button
              onClick={() => onSelectVariant('COMPARE')}
              className={`px-2 py-0.5 rounded inline-flex items-center gap-1 transition-colors ${
                currentVariant === 'COMPARE'
                  ? 'bg-[#2a2a2a] text-blue-300 font-semibold'
                  : 'text-[#a09e9c] hover:text-white'
              }`}
            >
              <Columns className="w-3 h-3" />
              Compare Both
            </button>
          </div>

          <span className="text-[#3a3a3a] hidden md:inline">|</span>

          {/* Modals & Protocol Actions */}
          <button
            onClick={() => onOpenModal('consent')}
            className="hover:text-amber-300 transition-colors hidden sm:inline-flex items-center gap-1"
          >
            Study Consent
          </button>
          <span className="text-[#3a3a3a] hidden sm:inline">|</span>
          <button
            onClick={() => onOpenModal('debrief')}
            className="hover:text-amber-300 transition-colors hidden sm:inline-flex items-center gap-1"
          >
            Debrief Notes
          </button>
          <span className="text-[#3a3a3a] hidden md:inline">|</span>
          <button
            onClick={() => onOpenModal('audit_inspector')}
            className="hover:text-amber-300 transition-colors inline-flex items-center gap-1 text-amber-400/90 font-medium"
          >
            <FileText className="w-3 h-3" />
            Audit Findings
          </button>
        </div>

        <div className="hidden lg:flex items-center gap-2 text-[#7e7b78] text-[11px] font-mono-code">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
          <span>SMU Leaders as Decision Architects • IRB #2024-ETH-088</span>
        </div>
      </div>

      {/* Main StreamDemo Brand Navigation */}
      <div className="h-16 w-full px-4 lg:px-12 flex items-center justify-between">
        <div className="flex items-center gap-8">
          {/* Logo */}
          <div
            onClick={() => onSelectVariant(currentVariant)}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-lg bg-[#f5a623] flex items-center justify-center transition-transform group-hover:scale-105 shadow-[0_0_14px_rgba(245,166,35,0.45)]">
              <Play className="w-4 h-4 text-[#141414] fill-current translate-x-0.5" />
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-outfit text-xl font-bold tracking-tight text-[#ffc880]">
                StreamDemo
              </span>
              <span className="text-[10px] font-mono-code text-[#998b7a] tracking-wider uppercase">
                {currentVariant === 'A' ? 'Baseline Pilot' : 'Ethical Redesign'}
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 text-sm font-medium">
            <button className="px-3 py-1.5 rounded-lg bg-[#252525] text-[#ffc880] font-semibold">
              Premium Plans
            </button>
            <button className="px-3 py-1.5 rounded-lg text-[#b8b3ae] hover:bg-[#202020] hover:text-white transition-colors">
              Fresh Releases
            </button>
            <button className="px-3 py-1.5 rounded-lg text-[#b8b3ae] hover:bg-[#202020] hover:text-white transition-colors">
              StreamDemo Original
            </button>
            <button className="px-3 py-1.5 rounded-lg text-[#b8b3ae] hover:bg-[#202020] hover:text-white transition-colors">
              Korean Dramas
            </button>
            <button className="px-3 py-1.5 rounded-lg text-[#b8b3ae] hover:bg-[#202020] hover:text-white transition-colors">
              Korean Variety
            </button>
          </nav>
        </div>

        {/* Right Tools */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenModal('cancel_sandbox')}
            className="px-2.5 py-1 text-xs rounded-md bg-[#252525] border border-[#3b3a39] text-[#e5e2e1] hover:border-amber-400 hover:text-amber-300 transition-colors flex items-center gap-1.5"
            title="Simulate 1-Click vs Labyrinth Cancellation Flow"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-400" />
            <span className="hidden sm:inline">Simulate</span> Cancellation
          </button>

          <div className="w-8 h-8 rounded-full bg-[#f5a623] flex items-center justify-center font-bold text-xs text-[#141414] shadow-sm cursor-pointer hover:ring-2 hover:ring-[#ffc880]">
            JD
          </div>
        </div>
      </div>
    </header>
  );
};

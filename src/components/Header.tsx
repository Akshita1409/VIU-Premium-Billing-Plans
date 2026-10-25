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
  const isLightMode = currentVariant === 'B';

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 backdrop-blur-xl border-b transition-colors duration-200 ${
        isLightMode
          ? 'bg-[#FFFFFF]/95 border-[#D0E2F0] shadow-xs text-[#172B4D]'
          : 'bg-[#131313]/95 border-[#252525] shadow-lg text-[#a09e9c]'
      }`}
    >
      {/* Top Academic & Research Protocol Toolbar */}
      <div
        className={`w-full px-4 lg:px-12 py-1.5 flex flex-wrap items-center justify-between text-xs border-b transition-colors duration-200 ${
          isLightMode
            ? 'bg-[#F0F6FB] border-[#D0E2F0] text-[#475467]'
            : 'bg-[#0e0e0e] border-[#1f1f1f] text-[#a09e9c]'
        }`}
      >
        <div className="flex items-center gap-2 flex-wrap">
          <span
            className={`inline-flex items-center gap-1.5 px-2 py-0.5 rounded text-[11px] font-mono-code font-semibold ${
              currentVariant === 'B'
                ? 'bg-[#087E8B]/10 text-[#087E8B] border border-[#087E8B]/30'
                : currentVariant === 'A'
                ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                : 'bg-blue-500/15 text-blue-300 border border-blue-500/30'
            }`}
          >
            <span
              className={`w-1.5 h-1.5 rounded-full ${
                currentVariant === 'B'
                  ? 'bg-[#087E8B] animate-pulse'
                  : currentVariant === 'A'
                  ? 'bg-amber-400 animate-pulse'
                  : 'bg-blue-400 animate-pulse'
              }`}
            />
            {currentVariant === 'B'
              ? '?v=B (Ethical Redesign)'
              : currentVariant === 'A'
              ? '?v=A (Baseline StreamDemo Sludge)'
              : 'Side-by-Side Comparison'}
          </span>

          <span className={isLightMode ? 'text-[#D0E2F0] hidden sm:inline' : 'text-[#3a3a3a] hidden sm:inline'}>|</span>

          {/* Quick Switch Buttons */}
          <div className="flex items-center gap-1.5">
            <button
              onClick={() => onSelectVariant('A')}
              className={`px-2 py-0.5 rounded transition-colors ${
                currentVariant === 'A'
                  ? isLightMode
                    ? 'bg-[#E2EDF8] text-[#172B4D] font-semibold'
                    : 'bg-[#2a2a2a] text-amber-300 font-semibold'
                  : isLightMode
                  ? 'text-[#475467] hover:text-[#087E8B]'
                  : 'text-[#a09e9c] hover:text-white'
              }`}
            >
              Variant A (Baseline)
            </button>
            <span className={isLightMode ? 'text-[#D0E2F0]' : 'text-[#3a3a3a]'}>/</span>
            <button
              onClick={() => onSelectVariant('B')}
              className={`px-2 py-0.5 rounded transition-colors ${
                currentVariant === 'B'
                  ? isLightMode
                    ? 'bg-[#087E8B] text-[#FFFFFF] font-semibold shadow-xs'
                    : 'bg-[#2a2a2a] text-emerald-400 font-semibold'
                  : isLightMode
                  ? 'text-[#475467] hover:text-[#087E8B]'
                  : 'text-[#a09e9c] hover:text-white'
              }`}
            >
              Variant B (Ethical)
            </button>
            <span className={isLightMode ? 'text-[#D0E2F0]' : 'text-[#3a3a3a]'}>/</span>
            <button
              onClick={() => onSelectVariant('COMPARE')}
              className={`px-2 py-0.5 rounded inline-flex items-center gap-1 transition-colors ${
                currentVariant === 'COMPARE'
                  ? isLightMode
                    ? 'bg-[#E2EDF8] text-[#087E8B] font-semibold'
                    : 'bg-[#2a2a2a] text-blue-300 font-semibold'
                  : isLightMode
                  ? 'text-[#475467] hover:text-[#087E8B]'
                  : 'text-[#a09e9c] hover:text-white'
              }`}
            >
              <Columns className="w-3 h-3" />
              Compare Both
            </button>
          </div>

          <span className={isLightMode ? 'text-[#D0E2F0] hidden md:inline' : 'text-[#3a3a3a] hidden md:inline'}>|</span>

          {/* Modals & Protocol Actions */}
          <button
            onClick={() => onOpenModal('consent')}
            className={`transition-colors hidden sm:inline-flex items-center gap-1 ${
              isLightMode ? 'hover:text-[#087E8B] text-[#475467]' : 'hover:text-amber-300 text-[#a09e9c]'
            }`}
          >
            Study Consent
          </button>
          <span className={isLightMode ? 'text-[#D0E2F0] hidden sm:inline' : 'text-[#3a3a3a] hidden sm:inline'}>|</span>
          <button
            onClick={() => onOpenModal('debrief')}
            className={`transition-colors hidden sm:inline-flex items-center gap-1 ${
              isLightMode ? 'hover:text-[#087E8B] text-[#475467]' : 'hover:text-amber-300 text-[#a09e9c]'
            }`}
          >
            Debrief Notes
          </button>
          <span className={isLightMode ? 'text-[#D0E2F0] hidden md:inline' : 'text-[#3a3a3a] hidden md:inline'}>|</span>
          <button
            onClick={() => onOpenModal('audit_inspector')}
            className={`transition-colors inline-flex items-center gap-1 font-medium ${
              isLightMode
                ? 'text-[#087E8B] hover:text-[#076b77]'
                : 'text-amber-400/90 hover:text-amber-300'
            }`}
          >
            <FileText className="w-3 h-3" />
            Audit Findings
          </button>
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
            <div
              className={`w-8 h-8 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105 shadow-sm ${
                isLightMode ? 'bg-[#087E8B] text-white' : 'bg-[#f5a623] text-[#141414] shadow-[0_0_14px_rgba(245,166,35,0.45)]'
              }`}
            >
              <Play className="w-4 h-4 fill-current translate-x-0.5" />
            </div>
            <div className="flex flex-col leading-tight">
              <span
                className={`font-outfit text-xl font-bold tracking-tight ${
                  isLightMode ? 'text-[#172B4D]' : 'text-[#ffc880]'
                }`}
              >
                StreamDemo
              </span>
              <span
                className={`text-[10px] font-mono-code tracking-wider uppercase ${
                  isLightMode ? 'text-[#087E8B] font-semibold' : 'text-[#998b7a]'
                }`}
              >
                {currentVariant === 'A' ? 'Baseline Pilot' : 'Ethical Redesign'}
              </span>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="hidden xl:flex items-center gap-1 text-sm font-medium">
            <button
              className={`px-3 py-1.5 rounded-lg font-semibold ${
                isLightMode
                  ? 'bg-[#EBF3FA] text-[#087E8B] border border-[#D0E2F0]'
                  : 'bg-[#252525] text-[#ffc880]'
              }`}
            >
              Premium Plans
            </button>
            <button
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                isLightMode
                  ? 'text-[#475467] hover:bg-[#F0F6FB] hover:text-[#172B4D]'
                  : 'text-[#b8b3ae] hover:bg-[#202020] hover:text-white'
              }`}
            >
              Fresh Releases
            </button>
            <button
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                isLightMode
                  ? 'text-[#475467] hover:bg-[#F0F6FB] hover:text-[#172B4D]'
                  : 'text-[#b8b3ae] hover:bg-[#202020] hover:text-white'
              }`}
            >
              StreamDemo Original
            </button>
            <button
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                isLightMode
                  ? 'text-[#475467] hover:bg-[#F0F6FB] hover:text-[#172B4D]'
                  : 'text-[#b8b3ae] hover:bg-[#202020] hover:text-white'
              }`}
            >
              Asian Dramas
            </button>
            <button
              className={`px-3 py-1.5 rounded-lg transition-colors ${
                isLightMode
                  ? 'text-[#475467] hover:bg-[#F0F6FB] hover:text-[#172B4D]'
                  : 'text-[#b8b3ae] hover:bg-[#202020] hover:text-white'
              }`}
            >
              Variety &amp; Documentaries
            </button>
          </nav>
        </div>

        {/* Right Tools */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => onOpenModal('cancel_sandbox')}
            className={`px-2.5 py-1 text-xs rounded-md border transition-colors flex items-center gap-1.5 ${
              isLightMode
                ? 'bg-[#FFFFFF] border-[#D0E2F0] text-[#344054] hover:border-[#087E8B] hover:text-[#087E8B] shadow-xs'
                : 'bg-[#252525] border-[#3b3a39] text-[#e5e2e1] hover:border-amber-400 hover:text-amber-300'
            }`}
            title="Simulate 1-Click vs Labyrinth Cancellation Flow"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            <span className="hidden sm:inline">Simulate</span> Cancellation
          </button>

          <div
            className={`w-8 h-8 rounded-full flex items-center justify-center font-bold text-xs shadow-xs cursor-pointer ${
              isLightMode
                ? 'bg-[#087E8B] text-white hover:ring-2 hover:ring-[#087E8B]/40'
                : 'bg-[#f5a623] text-[#141414] hover:ring-2 hover:ring-[#ffc880]'
            }`}
          >
            JD
          </div>
        </div>
      </div>
    </header>
  );
};

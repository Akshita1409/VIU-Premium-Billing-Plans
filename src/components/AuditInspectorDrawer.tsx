import React, { useState } from 'react';
import { X, FileText, CheckCircle2, AlertTriangle, ExternalLink, ShieldCheck } from 'lucide-react';
import { AUDIT_FINDINGS, EXISTING_NUDGE_KEPT } from '../data/auditData';

interface AuditInspectorDrawerProps {
  isOpen: boolean;
  onClose: () => void;
}

export const AuditInspectorDrawer: React.FC<AuditInspectorDrawerProps> = ({
  isOpen,
  onClose,
}) => {
  const [selectedFinding, setSelectedFinding] = useState<string>(AUDIT_FINDINGS[0].id);

  if (!isOpen) return null;

  const current = AUDIT_FINDINGS.find((f) => f.id === selectedFinding) || AUDIT_FINDINGS[0];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-end bg-black/75 backdrop-blur-sm">
      <div className="relative w-full max-w-3xl h-full bg-[#181818] border-l border-[#2e2d2c] p-6 sm:p-8 overflow-y-auto shadow-2xl text-[#d7c3ae] flex flex-col justify-between">
        <div>
          {/* Header */}
          <div className="flex items-center justify-between pb-4 border-b border-[#2d2c2b]">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-amber-500/10 border border-amber-500/30 flex items-center justify-center text-[#ffc880]">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <span className="font-mono-code text-[11px] text-[#ffc880] uppercase tracking-wider font-semibold">
                  Course Rubric Section 2 • AUDIT.md
                </span>
                <h2 className="font-outfit text-xl sm:text-2xl font-bold text-white">
                  Behavioural Audit Findings &amp; Theory
                </h2>
              </div>
            </div>
            <button
              onClick={onClose}
              className="p-1 rounded-lg hover:bg-[#2a2a2a] text-[#8e8a85] hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Finding Selector Pills */}
          <div className="mt-4 flex items-center gap-2 overflow-x-auto pb-2 border-b border-[#252525]">
            {AUDIT_FINDINGS.map((finding) => (
              <button
                key={finding.id}
                onClick={() => setSelectedFinding(finding.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono-code font-semibold whitespace-nowrap transition-all ${
                  selectedFinding === finding.id
                    ? 'bg-[#f5a623] text-[#141414] shadow'
                    : 'bg-[#222] text-[#8e8a85] hover:text-white'
                }`}
              >
                {finding.id}: {finding.principle.split('(')[0]}
              </button>
            ))}
          </div>

          {/* 6-Line Rubric Detail Inspector */}
          <div className="mt-5 space-y-4">
            <div className="p-4 rounded-xl bg-[#201f1f] border border-[#2e2d2c] flex flex-col gap-3">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span className="text-xs font-mono-code text-amber-300 font-bold">
                  Finding ID: {current.id}
                </span>
                <span
                  className={`text-[11px] font-mono-code px-2 py-0.5 rounded font-bold ${
                    current.severity >= 4
                      ? 'bg-red-950 text-red-300 border border-red-500/40'
                      : 'bg-amber-950 text-amber-300 border border-amber-500/40'
                  }`}
                >
                  Severity: {current.severity} / 5 ({current.severity >= 5 ? 'Critical' : 'High'})
                </span>
              </div>

              {/* Line 1: Where */}
              <div className="text-xs">
                <span className="font-bold text-white block uppercase tracking-wider text-[10px] text-[#9f8e7a]">
                  1. Where (Screen &amp; Exact Location):
                </span>
                <p className="mt-0.5 text-white font-medium">{current.where}</p>
              </div>

              {/* Line 2: What user sees & does */}
              <div className="text-xs">
                <span className="font-bold text-white block uppercase tracking-wider text-[10px] text-[#9f8e7a]">
                  2. What User Sees and Does:
                </span>
                <p className="mt-0.5 text-[#b8b4af] leading-relaxed">{current.whatUserSeesAndDoes}</p>
              </div>

              {/* Line 3: Principle with reading citation */}
              <div className="text-xs">
                <span className="font-bold text-white block uppercase tracking-wider text-[10px] text-[#9f8e7a]">
                  3. Principle &amp; Course Literature Citation:
                </span>
                <p className="mt-0.5 text-amber-300 font-semibold">{current.principle}</p>
                <p className="mt-0.5 text-[11px] font-mono-code text-[#8e8a85]">{current.readingCitation}</p>
              </div>

              {/* Line 4: Mechanism & whose goal wins */}
              <div className="text-xs">
                <span className="font-bold text-white block uppercase tracking-wider text-[10px] text-[#9f8e7a]">
                  4. Mechanism &amp; Whose Goal Wins (Nudge vs Sludge):
                </span>
                <p className="mt-0.5 text-[#b8b4af] leading-relaxed">{current.mechanism}</p>
                <div className="mt-1.5 p-2 rounded bg-red-950/20 border border-red-500/30 text-red-300 text-[11px] font-medium">
                  {current.whoseGoalWins}
                </div>
              </div>

              {/* Line 5: Severity with driver */}
              <div className="text-xs">
                <span className="font-bold text-white block uppercase tracking-wider text-[10px] text-[#9f8e7a]">
                  5. Severity Rating &amp; Driver:
                </span>
                <p className="mt-0.5 text-[#b8b4af] leading-relaxed">{current.severityDriver}</p>
              </div>

              {/* Line 6: Repair in Variant B */}
              <div className="text-xs pt-1 border-t border-[#2d2c2b]">
                <span className="font-bold text-emerald-400 block uppercase tracking-wider text-[10px]">
                  6. Repair in Variant B (Ethical Redesign):
                </span>
                <p className="mt-1 text-emerald-300 leading-relaxed font-medium bg-emerald-950/20 p-2.5 rounded border border-emerald-500/30">
                  {current.repairInB}
                </p>
              </div>
            </div>

            {/* Rubric Criterion: Good Existing Nudge Kept */}
            <div className="p-4 rounded-xl bg-[#1c221e] border border-emerald-500/30 text-xs flex flex-col gap-2">
              <div className="flex items-center gap-2 text-emerald-400 font-bold font-outfit text-sm">
                <CheckCircle2 className="w-4 h-4" />
                <span>Rubric Criterion: Good Existing Nudge Kept &amp; Rationale</span>
              </div>
              <p className="font-semibold text-white">{EXISTING_NUDGE_KEPT.name}</p>
              <p className="text-[#a09e9c] text-[11px]">
                <strong>Location:</strong> {EXISTING_NUDGE_KEPT.location} • <strong>Principle:</strong> {EXISTING_NUDGE_KEPT.principle}
              </p>
              <p className="text-[#c9c4bd] leading-relaxed">{EXISTING_NUDGE_KEPT.rationale}</p>
            </div>
          </div>
        </div>

        {/* Footer info */}
        <div className="pt-4 border-t border-[#252525] flex justify-between items-center text-xs text-[#7e7b78]">
          <span>Full Markdown report located in root <code className="font-mono-code text-white">/AUDIT.md</code></span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#252525] hover:bg-[#333] text-white font-medium"
          >
            Close Inspector
          </button>
        </div>
      </div>
    </div>
  );
};

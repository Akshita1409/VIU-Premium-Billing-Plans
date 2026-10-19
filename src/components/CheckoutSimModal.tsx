import React, { useState } from 'react';
import { X, CreditCard, ShieldCheck, AlertTriangle, CheckCircle } from 'lucide-react';

interface CheckoutSimModalProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  monthlyDisplay: string;
  totalBilled: string;
  overseasFee: string;
  variant: 'A' | 'B';
}

export const CheckoutSimModal: React.FC<CheckoutSimModalProps> = ({
  isOpen,
  onClose,
  planName,
  monthlyDisplay,
  totalBilled,
  overseasFee,
  variant,
}) => {
  const [completed, setCompleted] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="relative w-full max-w-lg bg-[#1c1b1b] border border-[#333] rounded-2xl p-6 sm:p-8 shadow-2xl text-[#d7c3ae]">
        <button
          onClick={() => {
            setCompleted(false);
            onClose();
          }}
          className="absolute top-5 right-5 p-1 rounded-lg hover:bg-[#2a2a2a] text-[#8e8a85] hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 pb-4 border-b border-[#2d2c2b]">
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              variant === 'B'
                ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/30'
                : 'bg-amber-500/10 text-amber-300 border border-amber-500/30'
            }`}
          >
            <CreditCard className="w-6 h-6" />
          </div>
          <div>
            <span
              className={`font-mono-code text-[11px] font-semibold tracking-wider uppercase ${
                variant === 'B' ? 'text-emerald-400' : 'text-amber-400'
              }`}
            >
              Simulated Checkout Terminal • Variant {variant}
            </span>
            <h2 className="font-outfit text-xl font-bold text-white">
              {variant === 'B' ? 'Transparent Invoice Confirmation' : 'Checkout & Hidden Fee Revelation'}
            </h2>
          </div>
        </div>

        {!completed ? (
          <div className="mt-5 space-y-4 text-xs sm:text-sm">
            <div className="p-4 rounded-xl bg-[#222121] border border-[#2e2d2c] flex flex-col gap-2">
              <div className="flex justify-between items-center text-white font-semibold">
                <span>Selected Plan:</span>
                <span className="text-[#ffc880]">{planName}</span>
              </div>
              <div className="flex justify-between items-center text-[#888]">
                <span>Advertised rate on page:</span>
                <span className="font-mono-code font-bold text-white">{monthlyDisplay}</span>
              </div>
              <div className="border-t border-[#333] my-1" />
              <div className="flex justify-between items-center text-[#888]">
                <span>Lump sum charged today:</span>
                <span className="font-mono-code font-bold text-white">{totalBilled}</span>
              </div>
              <div className="flex justify-between items-center text-[#888]">
                <span>Overseas Bank Processing Fee:</span>
                <span
                  className={`font-mono-code font-bold ${
                    variant === 'A' ? 'text-red-400' : 'text-emerald-400'
                  }`}
                >
                  {overseasFee}
                </span>
              </div>
            </div>

            {variant === 'A' && (
              <div className="p-3 bg-red-950/20 border border-red-500/30 rounded-lg text-xs text-red-200 flex items-start gap-2">
                <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Sludge Revelation:</strong> The user entered thinking they were paying {monthlyDisplay}, but checkout immediately authorizes {totalBilled} plus unexpected foreign transaction fees!
                </span>
              </div>
            )}

            {variant === 'B' && (
              <div className="p-3 bg-emerald-950/20 border border-emerald-500/30 rounded-lg text-xs text-emerald-200 flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span>
                  <strong>Ethical Pricing:</strong> Exact 1:1 match with advertised upfront annual/monthly cost. Zero foreign bank surcharges.
                </span>
              </div>
            )}

            <div className="p-3 bg-[#171616] rounded-lg border border-[#2a2a2a] text-xs text-[#777]">
              <span>Dummy Payment Info: </span>
              <span className="font-mono-code text-white">•••• •••• •••• 4242 (Simulated)</span>
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <button
                onClick={() => {
                  setCompleted(false);
                  onClose();
                }}
                className="px-4 py-2 rounded-lg bg-[#252525] hover:bg-[#333] text-xs text-[#aaa]"
              >
                Cancel
              </button>
              <button
                onClick={() => setCompleted(true)}
                className={`px-5 py-2.5 rounded-lg font-outfit font-bold text-sm shadow transition-all ${
                  variant === 'B'
                    ? 'bg-emerald-500 hover:bg-emerald-400 text-[#141414]'
                    : 'bg-gradient-to-r from-[#f5a623] to-[#e42575] text-white'
                }`}
              >
                Confirm Simulated Purchase
              </button>
            </div>
          </div>
        ) : (
          <div className="mt-5 p-6 rounded-xl bg-[#222121] border border-[#333] text-center flex flex-col items-center gap-3">
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center ${
                variant === 'B' ? 'bg-emerald-500/20 text-emerald-400' : 'bg-amber-500/20 text-amber-300'
              }`}
            >
              <CheckCircle className="w-6 h-6" />
            </div>
            <h3 className="font-outfit font-bold text-lg text-white">
              Simulated Transaction Processed
            </h3>
            <p className="text-xs text-[#b8b4af] max-w-sm">
              {variant === 'A'
                ? `Total deduction: ${totalBilled} + overseas charge. In a real scenario, this causes surprise overdrafts due to partitioned monthly framing.`
                : `Total deduction: ${totalBilled}. Exact match with advertised commitment. Confirmation email with 14-day renewal cancel button dispatched.`}
            </p>
            <button
              onClick={() => {
                setCompleted(false);
                onClose();
              }}
              className="mt-2 px-5 py-2 rounded-lg bg-[#2e2d2c] hover:bg-[#3a3938] text-xs font-semibold text-white"
            >
              Done &amp; Return
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

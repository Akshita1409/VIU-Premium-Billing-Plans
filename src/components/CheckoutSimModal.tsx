import React, { useState, useEffect } from 'react';
import { X, CreditCard, ShieldCheck, AlertTriangle, CheckCircle, Clock, RefreshCw } from 'lucide-react';

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
  // 10 minutes = 600 seconds for Variant B checkout
  const [secondsRemaining, setSecondsRemaining] = useState(600);
  const [completionTimeUsed, setCompletionTimeUsed] = useState(0);

  const isLightB = variant === 'B';

  // Reset and run timer when modal opens
  useEffect(() => {
    if (!isOpen) return;

    setCompleted(false);
    setSecondsRemaining(600); // 10 minutes

    const timer = setInterval(() => {
      setSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, variant]);

  if (!isOpen) return null;

  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  const isExpired = variant === 'B' && secondsRemaining <= 0;

  const handleConfirmPurchase = () => {
    if (isExpired) return;
    setCompletionTimeUsed(600 - secondsRemaining);
    setCompleted(true);
  };

  const handleRestartTimer = () => {
    setSecondsRemaining(600);
    setCompleted(false);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-sm">
      <div
        className={`relative w-full max-w-lg rounded-2xl p-6 sm:p-8 shadow-2xl transition-all ${
          isLightB
            ? 'bg-[#FFFFFF] border border-[#D5E5F2] text-[#172B4D]'
            : 'bg-[#1c1b1b] border border-[#333] text-[#d7c3ae]'
        }`}
      >
        <button
          onClick={() => {
            setCompleted(false);
            onClose();
          }}
          className={`absolute top-5 right-5 p-1 rounded-lg transition-colors ${
            isLightB
              ? 'hover:bg-[#EAF3FA] text-[#556987] hover:text-[#172B4D]'
              : 'hover:bg-[#2a2a2a] text-[#8e8a85] hover:text-white'
          }`}
          aria-label="Close checkout modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className={`flex items-center gap-3 pb-4 border-b ${isLightB ? 'border-[#D5E5F2]' : 'border-[#2d2c2b]'}`}>
          <div
            className={`w-10 h-10 rounded-lg flex items-center justify-center ${
              isLightB
                ? 'bg-[#087E8B]/10 text-[#087E8B] border border-[#087E8B]/25'
                : 'bg-amber-500/10 text-amber-300 border border-amber-500/30'
            }`}
          >
            <CreditCard className="w-6 h-6" />
          </div>
          <div>
            <span
              className={`font-mono-code text-[11px] font-semibold tracking-wider uppercase ${
                isLightB ? 'text-[#087E8B]' : 'text-amber-400'
              }`}
            >
              Simulated Checkout Terminal • Variant {variant}
            </span>
            <h2 className={`font-outfit text-xl font-bold ${isLightB ? 'text-[#172B4D]' : 'text-white'}`}>
              {isLightB ? 'Transparent Invoice Confirmation' : 'Checkout & Hidden Fee Revelation'}
            </h2>
          </div>
        </div>

        {/* 10-Minute Checkout Timer for Variant B */}
        {isLightB && !completed && (
          <div
            className={`mt-4 p-3.5 rounded-xl border flex flex-col gap-1.5 transition-colors ${
              isExpired
                ? 'bg-rose-50 border-rose-200 text-rose-900'
                : secondsRemaining < 120
                ? 'bg-amber-50 border-amber-200 text-amber-900'
                : 'bg-[#F0F7FC] border-[#D5E5F2] text-[#172B4D]'
            }`}
          >
            <div className="flex items-center justify-between text-xs font-mono-code">
              <div className="flex items-center gap-1.5">
                <Clock className={`w-4 h-4 ${isExpired ? 'text-rose-600' : 'text-[#087E8B]'}`} />
                <span className="font-semibold">
                  {isExpired ? 'Session Expired' : '10-Minute Checkout Reservation Window'}
                </span>
              </div>
              <span
                className={`font-bold px-2 py-0.5 rounded text-xs ${
                  isExpired
                    ? 'bg-rose-100 text-rose-800 border border-rose-300'
                    : secondsRemaining < 120
                    ? 'bg-amber-100 text-amber-800 border border-amber-300'
                    : 'bg-[#087E8B]/10 text-[#087E8B] border border-[#087E8B]/25'
                }`}
              >
                {formattedTime}
              </span>
            </div>
            {/* Progress Bar */}
            <div className="w-full bg-[#D5E5F2] h-1.5 rounded-full overflow-hidden">
              <div
                className={`h-full transition-all duration-1000 ${
                  isExpired
                    ? 'bg-rose-500 w-0'
                    : secondsRemaining < 120
                    ? 'bg-amber-500'
                    : 'bg-[#087E8B]'
                }`}
                style={{ width: `${(secondsRemaining / 600) * 100}%` }}
              />
            </div>
            <p className="text-[11px] text-[#556987]">
              {isExpired
                ? 'Your 10-minute cart reservation has elapsed. Please restart to re-lock current rates.'
                : 'Complete checkout under 10 minutes to secure your guaranteed zero-surcharge rate lock.'}
            </p>
          </div>
        )}

        {!completed ? (
          <div className="mt-4 space-y-4 text-xs sm:text-sm">
            <div
              className={`p-4 rounded-xl border flex flex-col gap-2 ${
                isLightB
                  ? 'bg-[#F0F7FC] border-[#D5E5F2]'
                  : 'bg-[#222121] border-[#2e2d2c]'
              }`}
            >
              <div className="flex justify-between items-center font-semibold">
                <span className={isLightB ? 'text-[#556987]' : 'text-white'}>Selected Plan:</span>
                <span className={isLightB ? 'text-[#172B4D] font-bold' : 'text-[#ffc880]'}>{planName}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className={isLightB ? 'text-[#556987]' : 'text-[#888]'}>Advertised rate on page:</span>
                <span className={`font-mono-code font-bold ${isLightB ? 'text-[#172B4D]' : 'text-white'}`}>
                  {monthlyDisplay}
                </span>
              </div>
              <div className={`border-t my-1 ${isLightB ? 'border-[#D5E5F2]' : 'border-[#333]'}`} />
              <div className="flex justify-between items-center">
                <span className={isLightB ? 'text-[#556987]' : 'text-[#888]'}>Lump sum charged today:</span>
                <span className={`font-mono-code font-bold text-base ${isLightB ? 'text-[#172B4D]' : 'text-white'}`}>
                  {totalBilled}
                </span>
              </div>
              <div className="flex justify-between items-center">
                <span className={isLightB ? 'text-[#556987]' : 'text-[#888]'}>Overseas Bank Processing Fee:</span>
                <span
                  className={`font-mono-code font-bold ${
                    isLightB ? 'text-[#087E8B]' : 'text-red-400'
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

            {isLightB && !isExpired && (
              <div className="p-3 bg-[#EAF5F8] border border-[#087E8B]/30 rounded-lg text-xs text-[#172B4D] flex items-start gap-2">
                <ShieldCheck className="w-4 h-4 text-[#087E8B] shrink-0 mt-0.5" />
                <span>
                  <strong className="text-[#087E8B]">Ethical Pricing:</strong> Exact 1:1 match with advertised upfront annual/monthly cost. Zero foreign bank surcharges. Complete under 10 minutes to activate.
                </span>
              </div>
            )}

            {isExpired && (
              <div className="p-3 bg-rose-50 border border-rose-200 rounded-lg text-xs text-rose-800 flex items-center justify-between gap-2">
                <div className="flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4 text-rose-600 shrink-0" />
                  <span>10-Minute Checkout Window Expired.</span>
                </div>
                <button
                  onClick={handleRestartTimer}
                  className="px-2.5 py-1 rounded bg-[#087E8B] hover:bg-[#076b77] text-xs font-semibold text-white flex items-center gap-1 shadow-xs"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Restart Timer</span>
                </button>
              </div>
            )}

            <div
              className={`p-3 rounded-lg border text-xs ${
                isLightB
                  ? 'bg-[#F0F7FC] border-[#D5E5F2] text-[#556987]'
                  : 'bg-[#171616] border-[#2a2a2a] text-[#777]'
              }`}
            >
              <span>Dummy Payment Info: </span>
              <span className={`font-mono-code ${isLightB ? 'text-[#172B4D] font-medium' : 'text-white'}`}>
                •••• •••• •••• 4242 (Simulated)
              </span>
            </div>

            <div className="pt-2 flex justify-end gap-3">
              <button
                onClick={() => {
                  setCompleted(false);
                  onClose();
                }}
                className={`px-4 py-2 rounded-lg text-xs transition-colors ${
                  isLightB
                    ? 'bg-[#FFFFFF] hover:bg-[#EAF3FA] border border-[#D5E5F2] text-[#556987] hover:text-[#172B4D]'
                    : 'bg-[#252525] hover:bg-[#333] text-[#aaa]'
                }`}
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmPurchase}
                disabled={isExpired}
                className={`px-5 py-2.5 rounded-lg font-outfit font-bold text-sm shadow transition-all ${
                  isExpired
                    ? isLightB
                      ? 'bg-[#E2EDF8] text-[#8C9AA8] cursor-not-allowed'
                      : 'bg-[#333] text-[#666] cursor-not-allowed'
                    : isLightB
                    ? 'bg-[#087E8B] hover:bg-[#076b77] text-white shadow-xs'
                    : 'bg-gradient-to-r from-[#f5a623] to-[#e42575] text-white'
                }`}
              >
                Confirm Simulated Purchase
              </button>
            </div>
          </div>
        ) : (
          <div
            className={`mt-5 p-6 rounded-xl border text-center flex flex-col items-center gap-3 ${
              isLightB
                ? 'bg-[#F0F7FC] border-[#D5E5F2]'
                : 'bg-[#222121] border-[#333]'
            }`}
          >
            <div
              className={`w-12 h-12 rounded-full flex items-center justify-center ${
                isLightB
                  ? 'bg-[#087E8B]/15 text-[#087E8B]'
                  : 'bg-amber-500/20 text-amber-300'
              }`}
            >
              <CheckCircle className="w-6 h-6" />
            </div>
            <h3 className={`font-outfit font-bold text-lg ${isLightB ? 'text-[#172B4D]' : 'text-white'}`}>
              Simulated Transaction Processed
            </h3>
            <p className={`text-xs max-w-sm ${isLightB ? 'text-[#344054]' : 'text-[#b8b4af]'}`}>
              {variant === 'A'
                ? `Total deduction: ${totalBilled} + overseas charge. In a real scenario, this causes surprise overdrafts due to partitioned monthly framing.`
                : `Total deduction: ${totalBilled}. Successfully checked out in ${Math.floor(
                    completionTimeUsed / 60
                  )}m ${completionTimeUsed % 60}s (well under the 10-minute window). Confirmation email with 14-day renewal cancel button dispatched.`}
            </p>
            {isLightB && (
              <span className="font-mono-code text-[11px] px-2.5 py-0.5 rounded bg-[#087E8B]/10 text-[#087E8B] border border-[#087E8B]/25 font-semibold">
                Completed within 10-min window • {formattedTime} remaining
              </span>
            )}
            <button
              onClick={() => {
                setCompleted(false);
                onClose();
              }}
              className={`mt-2 px-5 py-2 rounded-lg text-xs font-semibold transition-colors ${
                isLightB
                  ? 'bg-[#087E8B] hover:bg-[#076b77] text-white shadow-xs'
                  : 'bg-[#2e2d2c] hover:bg-[#3a3938] text-white'
              }`}
            >
              Done &amp; Return
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

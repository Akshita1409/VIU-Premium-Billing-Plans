import React, { useState, useEffect } from 'react';
import {
  X,
  MousePointerClick,
  AlertTriangle,
  CheckCircle,
  PhoneCall,
  Clock,
  ArrowRight,
  ShieldCheck,
  RefreshCw
} from 'lucide-react';

interface CancellationSandboxModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CancellationSandboxModal: React.FC<CancellationSandboxModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'ethical' | 'sludge'>('ethical');

  // Variant B ethical state
  const [ethicalCancelled, setEthicalCancelled] = useState(false);

  // Variant A sludge maze step
  const [sludgeStep, setSludgeStep] = useState<number>(1);
  const [surveyReason, setSurveyReason] = useState<string>('');
  const [sludgeCompleted, setSludgeCompleted] = useState(false);

  // 5-minute billing cancellation timer (300 seconds)
  const [cancelSecondsRemaining, setCancelSecondsRemaining] = useState(300);
  const [timeUsed, setTimeUsed] = useState(0);

  useEffect(() => {
    if (!isOpen) return;

    setCancelSecondsRemaining(300); // 5 minutes
    setEthicalCancelled(false);
    setSludgeCompleted(false);

    const timer = setInterval(() => {
      setCancelSecondsRemaining((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isOpen, activeTab]);

  if (!isOpen) return null;

  const minutes = Math.floor(cancelSecondsRemaining / 60);
  const seconds = cancelSecondsRemaining % 60;
  const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  const isExpired = cancelSecondsRemaining <= 0;

  const resetAll = () => {
    setEthicalCancelled(false);
    setSludgeStep(1);
    setSurveyReason('');
    setSludgeCompleted(false);
    setCancelSecondsRemaining(300);
  };

  const handleConfirmEthicalCancel = () => {
    if (isExpired) return;
    setTimeUsed(300 - cancelSecondsRemaining);
    setEthicalCancelled(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md">
      <div className="relative w-full max-w-2xl bg-[#1c1b1b] border border-[#333] rounded-2xl p-6 sm:p-8 shadow-2xl text-[#d7c3ae] max-h-[92vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-1 rounded-lg hover:bg-[#2a2a2a] text-[#8e8a85] hover:text-white transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 pb-4 border-b border-[#2d2c2b]">
          <div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400">
            <MousePointerClick className="w-6 h-6" />
          </div>
          <div>
            <span className="font-mono-code text-[11px] text-emerald-400 font-semibold tracking-wider uppercase">
              Interactive Autonomy Simulator
            </span>
            <h2 className="font-outfit text-xl sm:text-2xl font-bold text-white">
              Cancellation Flow Experience: Ethical vs Sludge
            </h2>
          </div>
        </div>

        {/* 5-Minute Billing Cancellation Timer */}
        <div
          className={`mt-4 p-3 rounded-xl border flex flex-col gap-1.5 transition-colors ${
            isExpired
              ? 'bg-red-950/30 border-red-500/50 text-red-200'
              : cancelSecondsRemaining < 60
              ? 'bg-amber-950/30 border-amber-500/50 text-amber-200'
              : 'bg-[#222121] border-[#383838] text-[#e5e2e1]'
          }`}
        >
          <div className="flex items-center justify-between text-xs font-mono-code">
            <div className="flex items-center gap-1.5">
              <Clock className={`w-4 h-4 ${isExpired ? 'text-red-400' : 'text-emerald-400'}`} />
              <span className="font-semibold">
                {isExpired ? 'Cancellation Window Expired' : 'Billing Cancellation Timer (Under 5 Mins)'}
              </span>
            </div>
            <span
              className={`font-bold px-2 py-0.5 rounded text-xs ${
                isExpired
                  ? 'bg-red-900/60 text-red-300'
                  : cancelSecondsRemaining < 60
                  ? 'bg-amber-900/60 text-amber-300'
                  : 'bg-emerald-950 text-emerald-400 border border-emerald-500/30'
              }`}
            >
              {formattedTime}
            </span>
          </div>

          <div className="w-full bg-[#141414] h-1.5 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-1000 ${
                isExpired
                  ? 'bg-red-500 w-0'
                  : cancelSecondsRemaining < 60
                  ? 'bg-amber-400'
                  : 'bg-emerald-400'
              }`}
              style={{ width: `${(cancelSecondsRemaining / 300) * 100}%` }}
            />
          </div>

          <p className="text-[11px] text-[#9f9b96]">
            {isExpired
              ? 'The 5-minute cancellation authorization window has expired. Please restart to re-authorize.'
              : 'Active security window: Please complete your cancellation request within 5 minutes.'}
          </p>
        </div>

        {/* Flow Switcher Tabs */}
        <div className="mt-3 flex items-center justify-between gap-2 border-b border-[#2a2a2a] pb-3">
          <div className="flex gap-2">
            <button
              onClick={() => {
                setActiveTab('ethical');
                resetAll();
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                activeTab === 'ethical'
                  ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                  : 'text-[#8e8a85] hover:text-white'
              }`}
            >
              <CheckCircle className="w-3.5 h-3.5" />
              <span>Variant B: 1-Click Ethical Flow</span>
            </button>
            <button
              onClick={() => {
                setActiveTab('sludge');
                resetAll();
              }}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold flex items-center gap-1.5 transition-colors ${
                activeTab === 'sludge'
                  ? 'bg-red-500/20 text-red-400 border border-red-500/40'
                  : 'text-[#8e8a85] hover:text-white'
              }`}
            >
              <AlertTriangle className="w-3.5 h-3.5" />
              <span>Variant A: Retention Sludge Maze</span>
            </button>
          </div>

          <button
            onClick={resetAll}
            className="p-1.5 rounded hover:bg-[#2a2a2a] text-[#8e8a85] hover:text-white text-xs flex items-center gap-1"
            title="Reset simulation"
          >
            <RefreshCw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>

        {/* Content Area */}
        <div className="mt-4 min-h-[290px] flex flex-col justify-center">
          {isExpired ? (
            <div className="p-6 rounded-xl bg-red-950/20 border border-red-500/40 text-center flex flex-col items-center gap-3">
              <AlertTriangle className="w-8 h-8 text-red-400" />
              <h3 className="font-outfit font-bold text-base text-white">
                Cancellation Window Elapsed (5-Min Limit Reached)
              </h3>
              <p className="text-xs text-[#b8b4af] max-w-md">
                For account authentication security, cancellation sessions expire after 5 minutes of inactivity. Please restart the session to confirm cancellation.
              </p>
              <button
                onClick={resetAll}
                className="mt-2 px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-[#141414] font-bold text-xs flex items-center gap-1.5"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Restart 5-Minute Window</span>
              </button>
            </div>
          ) : activeTab === 'ethical' ? (
            /* VARIANT B ETHICAL 1-CLICK */
            <div>
              {!ethicalCancelled ? (
                <div className="p-6 rounded-xl bg-[#222121] border border-[#2e2d2c] flex flex-col gap-4">
                  <div className="flex items-center gap-2 text-emerald-400 font-outfit font-bold text-lg">
                    <ShieldCheck className="w-5 h-5" />
                    <span>Instant Self-Serve Cancellation</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#b8b4af] leading-relaxed">
                    You are cancelling your <strong>StreamDemo Premium + HBO Max</strong> subscription.
                  </p>
                  <div className="p-3.5 rounded-lg bg-[#1a1919] border border-[#333] text-xs space-y-1.5">
                    <div className="flex justify-between">
                      <span className="text-[#888]">Active access until:</span>
                      <span className="font-semibold text-white">November 18, 2026</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#888]">Auto-renewal status:</span>
                      <span className="text-emerald-400 font-semibold">Will be permanently disabled</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#888]">Exit or cancellation fees:</span>
                      <span className="text-emerald-400 font-semibold">$0.00 (Guaranteed)</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-[#888]">Session timer:</span>
                      <span className="font-mono-code text-emerald-400 font-semibold">{formattedTime} remaining</span>
                    </div>
                  </div>
                  <div className="pt-2 flex flex-col sm:flex-row items-center justify-end gap-3">
                    <button
                      onClick={onClose}
                      className="w-full sm:w-auto px-4 py-2 rounded-lg bg-[#2a2a2a] text-xs text-[#b8b4af] hover:text-white"
                    >
                      Keep Subscription
                    </button>
                    <button
                      onClick={handleConfirmEthicalCancel}
                      className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-[#141414] font-outfit font-bold text-sm shadow-md transition-all flex items-center justify-center gap-1.5"
                    >
                      <span>Confirm 1-Click Cancellation</span>
                      <ArrowRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              ) : (
                <div className="p-6 rounded-xl bg-emerald-950/30 border border-emerald-500/40 text-center flex flex-col items-center gap-3">
                  <div className="w-12 h-12 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center">
                    <CheckCircle className="w-6 h-6" />
                  </div>
                  <h3 className="font-outfit font-bold text-lg text-white">
                    Subscription Successfully Cancelled in 1 Click
                  </h3>
                  <p className="text-xs text-[#b8b4af] max-w-md">
                    Zero retention guilt quizzes, zero telephone calls. Your confirmation receipt has been sent to your primary email with reference code <code className="font-mono-code text-emerald-400">#CAN-8842-ETH</code>.
                  </p>
                  <div className="text-[11px] font-mono-code text-emerald-400/80 bg-emerald-900/20 px-3 py-1 rounded">
                    Completed in {Math.floor(timeUsed / 60)}m {timeUsed % 60}s (well under the 5-minute window) • {formattedTime} remaining
                  </div>
                </div>
              )}
            </div>
          ) : (
            /* VARIANT A SLUDGE MAZE */
            <div>
              {!sludgeCompleted ? (
                <div className="p-6 rounded-xl bg-[#221c1c] border border-red-500/30 flex flex-col gap-4">
                  {/* Step Indicators */}
                  <div className="flex items-center justify-between text-[11px] font-mono-code text-[#888] border-b border-[#332a2a] pb-2">
                    <span className="text-red-400 font-bold">
                      Sludge Stage {sludgeStep} of 4: Retention Friction
                    </span>
                    <span className="text-amber-400">Timer: {formattedTime}</span>
                  </div>

                  {sludgeStep === 1 && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-red-400 font-outfit font-bold text-base">
                        <AlertTriangle className="w-5 h-5" />
                        <span>Are you REALLY sure you want to give up your drama access?</span>
                      </div>
                      <p className="text-xs text-[#c4bbb2]">
                        You will immediately forfeit your <strong>Watch History</strong>, saved subtitles, and upcoming episodes of <em>The Silk Dynasty Chronicles</em>!
                      </p>
                      <div className="p-3 bg-[#2b2222] rounded-lg text-center text-xs text-amber-300 font-semibold">
                        Over 24,192 viewers renewed today to avoid losing their streak!
                      </div>
                      <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                        <button
                          onClick={onClose}
                          className="w-full sm:w-auto px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#f5a623] to-[#e42575] text-white font-bold text-xs shadow"
                        >
                          Keep My Membership (Safe)
                        </button>
                        <button
                          onClick={() => setSludgeStep(2)}
                          className="text-[11px] text-[#777] underline hover:text-[#aaa]"
                        >
                          Continue cancellation &rarr;
                        </button>
                      </div>
                    </div>
                  )}

                  {sludgeStep === 2 && (
                    <div className="space-y-3">
                      <h4 className="font-outfit font-bold text-sm text-white">
                        Please tell us why you are leaving (Required):
                      </h4>
                      <div className="space-y-1.5 text-xs">
                        {[
                          'Price is too expensive for me',
                          'Not enough Korean content',
                          'Technical video playback issues',
                          'Switching to another provider',
                        ].map((reason, i) => (
                          <label
                            key={i}
                            className="flex items-center gap-2 p-2 rounded bg-[#2a2424] hover:bg-[#342c2c] cursor-pointer"
                          >
                            <input
                              type="radio"
                              name="cancel_reason"
                              value={reason}
                              onChange={(e) => setSurveyReason(e.target.value)}
                              checked={surveyReason === reason}
                              className="accent-[#e42575]"
                            />
                            <span>{reason}</span>
                          </label>
                        ))}
                      </div>
                      <div className="pt-2 flex justify-end gap-2">
                        <button
                          onClick={() => setSludgeStep(3)}
                          disabled={!surveyReason}
                          className={`px-4 py-2 rounded-lg text-xs font-bold ${
                            surveyReason
                              ? 'bg-[#3b2a2a] hover:bg-[#4a3434] text-red-300 border border-red-500/40'
                              : 'bg-[#252525] text-[#555] cursor-not-allowed'
                          }`}
                        >
                          Next Step &rarr;
                        </button>
                      </div>
                    </div>
                  )}

                  {sludgeStep === 3 && (
                    <div className="space-y-3 text-center">
                      <div className="p-3 bg-gradient-to-r from-amber-950/40 to-pink-950/40 border border-amber-500/30 rounded-xl">
                        <h4 className="font-outfit font-bold text-amber-300 text-sm">
                          Exclusive Retention Bribe: Stay for $4.99 this month!
                        </h4>
                        <p className="text-xs text-[#b8b4af] mt-1">
                          We will discount your subscription for 30 days before reverting to $107.76 automatically.
                        </p>
                      </div>
                      <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                        <button
                          onClick={onClose}
                          className="px-5 py-2.5 rounded-lg bg-gradient-to-r from-[#f5a623] to-[#e42575] text-white font-bold text-xs"
                        >
                          Claim $4.99 Discount Now
                        </button>
                        <button
                          onClick={() => setSludgeStep(4)}
                          className="text-[11px] text-[#777] underline hover:text-[#aaa]"
                        >
                          Decline and proceed to cancel
                        </button>
                      </div>
                    </div>
                  )}

                  {sludgeStep === 4 && (
                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-amber-400 font-outfit font-bold text-sm">
                        <PhoneCall className="w-4 h-4" />
                        <span>Mandatory Verification Step (Sludge Lock-in)</span>
                      </div>
                      <p className="text-xs text-[#b8b4af]">
                        To prevent unauthorized account closure, online cancellation is disabled for your tier. Please dial our retention desk during local business hours (09:00 - 17:00 SGT, Mon-Fri):
                      </p>
                      <div className="p-3 rounded-lg bg-[#2b2222] text-xs font-mono-code text-white text-center border border-red-500/20">
                        TEL: +65 6789 0123 (Expected queue wait: ~28 minutes)
                      </div>
                      <div className="pt-2 flex justify-between items-center">
                        <span className="text-[10px] text-[#777]">
                          *Calling outside business hours will reset cancellation request.
                        </span>
                        <button
                          onClick={() => setSludgeCompleted(true)}
                          className="px-3 py-1.5 rounded bg-red-950 text-red-300 border border-red-500/40 text-xs font-bold"
                        >
                          Simulate Completing Phone Call
                        </button>
                      </div>
                    </div>
                  )}
                </div>
              ) : (
                <div className="p-6 rounded-xl bg-red-950/20 border border-red-500/40 text-center flex flex-col items-center gap-2">
                  <div className="w-12 h-12 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center">
                    <Clock className="w-6 h-6" />
                  </div>
                  <h3 className="font-outfit font-bold text-base text-white">
                    Cancellation Finally Logged (After 4 Friction Walls)
                  </h3>
                  <p className="text-xs text-[#b8b4af] max-w-md">
                    Notice how the multi-layered sludge maze ate away precious time ({formattedTime} remaining of the 5-min window), attempting to push users past their session limit.
                  </p>
                  <div className="text-[11px] font-mono-code text-red-400/80 bg-red-900/20 px-3 py-1 rounded">
                    Total user time expended: ~18–35 minutes • Friction Index: 9.5/10
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        <div className="mt-5 pt-3 border-t border-[#2d2c2b] flex justify-between items-center text-xs text-[#7e7b78]">
          <span>Cancellation security window: 5 minutes. Autonomy standard compliant.</span>
          <button onClick={onClose} className="hover:text-white transition-colors">
            Close Sandbox
          </button>
        </div>
      </div>
    </div>
  );
};

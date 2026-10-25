import React, { useState, useEffect } from 'react';
import { VariantType, ActiveModal } from './types';
import { Header } from './components/Header';
import { VariantA } from './components/VariantA';
import { VariantB } from './components/VariantB';
import { SideBySideCompare } from './components/SideBySideCompare';
import { ConsentModal } from './components/ConsentModal';
import { DebriefModal } from './components/DebriefModal';
import { CancellationSandboxModal } from './components/CancellationSandboxModal';
import { AuditInspectorDrawer } from './components/AuditInspectorDrawer';
import { CheckoutSimModal } from './components/CheckoutSimModal';

export default function App() {
  const [variant, setVariant] = useState<VariantType>('B');
  const [activeModal, setActiveModal] = useState<ActiveModal>('none');

  // Checkout modal data
  const [checkoutData, setCheckoutData] = useState({
    planName: 'StreamDemo Premium + HBO Max Bundle',
    monthlyDisplay: '$15.83/mo',
    totalBilled: '$189.98',
    overseasFee: '$0.00 (Local Merchant Processing)',
  });

  // Sync with URL query parameter (?v=A, ?v=B, ?v=compare, ?v=consent, ?v=debrief)
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const vParam = params.get('v');

    if (vParam === 'A' || vParam === 'a') {
      setVariant('A');
    } else if (vParam === 'B' || vParam === 'b') {
      setVariant('B');
    } else if (vParam === 'compare') {
      setVariant('COMPARE');
    } else if (vParam === 'consent') {
      setActiveModal('consent');
    } else if (vParam === 'debrief') {
      setActiveModal('debrief');
    } else {
      // Default to Variant B as shown in prompt
      setVariant('B');
    }
  }, []);

  const handleSelectVariant = (newVariant: VariantType) => {
    setVariant(newVariant);
    const url = new URL(window.location.href);
    if (newVariant === 'A') {
      url.searchParams.set('v', 'A');
    } else if (newVariant === 'B') {
      url.searchParams.set('v', 'B');
    } else if (newVariant === 'COMPARE') {
      url.searchParams.set('v', 'compare');
    }
    window.history.pushState({}, '', url.toString());
  };

  const handleSelectPlanForCheckout = (
    planName: string,
    monthlyDisplay: string,
    totalBilled: string,
    overseasFee: string
  ) => {
    setCheckoutData({
      planName,
      monthlyDisplay,
      totalBilled,
      overseasFee,
    });
  };

  return (
    <div className="min-h-screen bg-[#131313] text-[#e5e2e1] flex flex-col font-sans selection:bg-[#ffc880] selection:text-[#452b00]">
      {/* Top Protocol and Main App Navigation */}
      <Header
        currentVariant={variant}
        onSelectVariant={handleSelectVariant}
        onOpenModal={(modal) => setActiveModal(modal)}
      />

      {/* Main View Router */}
      <main className="flex-1 w-full">
        {variant === 'A' ? (
          <VariantA
            onOpenModal={(modal) => setActiveModal(modal)}
            onSelectPlanForCheckout={handleSelectPlanForCheckout}
          />
        ) : variant === 'B' ? (
          <VariantB
            onSelectVariant={handleSelectVariant}
            onOpenModal={(modal) => setActiveModal(modal)}
            onSelectPlanForCheckout={handleSelectPlanForCheckout}
          />
        ) : (
          <SideBySideCompare
            onOpenModal={(modal) => setActiveModal(modal)}
            onSelectPlanForCheckout={handleSelectPlanForCheckout}
          />
        )}
      </main>

      {/* Modal Dialogs */}
      <ConsentModal
        isOpen={activeModal === 'consent'}
        onClose={() => setActiveModal('none')}
      />

      <DebriefModal
        isOpen={activeModal === 'debrief'}
        onClose={() => setActiveModal('none')}
      />

      <CancellationSandboxModal
        isOpen={activeModal === 'cancel_sandbox'}
        onClose={() => setActiveModal('none')}
        currentVariant={variant}
      />

      <AuditInspectorDrawer
        isOpen={activeModal === 'audit_inspector'}
        onClose={() => setActiveModal('none')}
      />

      <CheckoutSimModal
        isOpen={activeModal === 'checkout_sim'}
        onClose={() => setActiveModal('none')}
        planName={checkoutData.planName}
        monthlyDisplay={checkoutData.monthlyDisplay}
        totalBilled={checkoutData.totalBilled}
        overseasFee={checkoutData.overseasFee}
        variant={variant === 'A' ? 'A' : 'B'}
      />
    </div>
  );
}

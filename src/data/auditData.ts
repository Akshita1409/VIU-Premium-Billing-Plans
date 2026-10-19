import { AuditFinding, ExistingNudgeKept } from '../types';

export const AUDIT_FINDINGS: AuditFinding[] = [
  {
    id: 'F1',
    where: 'Pricing Plan Cards & Primary Hero Banner (Variant A)',
    whatUserSeesAndDoes:
      'The user sees prominent headline text in 32px bold typography reading "Only $8.98/month Save 18% on 1 year!" and "$15.83/month Save 20% on a 365-day bundle!". The user clicks the bright gradient "Subscribe now" button believing they are committing to an affordable single-digit monthly installment, but is immediately billed a lump-sum recurring charge of $107.76 or $189.98.',
    principle:
      'Mental Accounting of Delayed Consumption & Transaction Decoupling (Shafir & Thaler, 2006; Kahneman, 2011, Ch. 34 "Frames and Reality")',
    readingCitation:
      'Shafir, E., & Thaler, R. H. (2006). "Invest now, drink later, spend never: On the mental accounting of delayed consumption." Journal of Economic Psychology, 27(6), 694–712. / Kahneman, D. (2011). Thinking, Fast and Slow, Chapter 34 ("Frames and Reality: Good Frames and Mental Accounting", pp. 363–374).',
    mechanism:
      'In "Invest now, drink later, spend never", Shafir & Thaler (2006) show that advanced purchases are mentally coded as "investments" rather than spending, making subsequent consumption feel "free". Variant A exploits this by substituting a local, narrow per-month frame ("$8.98/mo") for the global annual reality ($107.76), decoupling payment from actual cash extraction. System 1 passively accepts this local frame (Kahneman, 2011, Ch. 34) because System 2 is lazy and avoids computing the annualized outlay.',
    whoseGoalWins:
      'Firm wins at user expense (Sludge): Converts impulse viewers under a low perceived price anchor while extracting high upfront annual liquidity.',
    severity: 5,
    severityDriver:
      'Direct unexpected financial depletion: triggers sudden credit card charges and bank overdrafts, especially for student and price-sensitive consumers.',
    repairInB:
      'Repaired in Variant B via De-biasing & All-In Upfront Pricing (Prof. Roh, Week 2 Slides): The primary headline displays "$107.76 / year billed today" and "$189.98 / year billed today" in high-contrast typography, accompanied by a neutral segmented toggle to choose genuine monthly billing ($10.98/mo and $19.98/mo).',
  },
  {
    id: 'F2',
    where: 'Plan Selection Grid & Pre-selected Card Stature (Variant A)',
    whatUserSeesAndDoes:
      'The 365-day annual plan is pre-selected by default and highlighted with an eye-catching magenta ribbon labelled "Recommended". Standard 30-day monthly billing is relegated to separate tabs or hidden behind confusing day increments (30 vs 90 vs 365 days).',
    principle:
      'Status Quo Bias, Endowment Effect & Asymmetric Defaults (Kahneman, 2011, Ch. 27 & Ch. 34; Kern & Chugh, 2009)',
    readingCitation:
      'Kahneman, D. (2011). Thinking, Fast and Slow, Chapter 27 ("The Endowment Effect", pp. 289–299) and Chapter 34 (Default Opt-Outs vs Opt-Ins, pp. 373–374). / Kern, M. C., & Chugh, D. (2009). "Bounded Ethicality: The Perils of Loss Framing." Psychological Science, 20(3), 378–384.',
    mechanism:
      'As Kahneman (2011, Ch. 34) notes regarding organ donation and opt-in forms, defaults are adopted effortlessly due to the laziness of System 2. By pre-selecting the 365-day tier and anchoring the user on the full bundle as the default endowment (Kahneman Ch. 27), stepping down to standalone or monthly feels like a subjective loss. Kern & Chugh (2009) show that loss framing prompts automatic compliance and compromises ethical decision-making.',
    whoseGoalWins:
      'Firm wins at user expense (Sludge): Exploits decision inertia to maximize Customer Lifetime Value (CLV) and offload renewal risk entirely onto the consumer.',
    severity: 4,
    severityDriver:
      'Locks short-term drama viewers into an annual non-refundable contract, distorting user autonomy through asymmetric choice architecture.',
    repairInB:
      'Repaired in Variant B with Symmetrical Visual Stature (Prof. Roh, Week 1 "Mindful vs Mindless"): Identical container sizing, balanced typography, and neutral segmented controls with zero auto-forced defaults.',
  },
  {
    id: 'F3',
    where: 'Footer Fine Print & Checkout Terms (Variant A)',
    whatUserSeesAndDoes:
      'Beneath the subscription cards in low-contrast 11px gray text, the interface states: "As StreamDemo\'s merchant account is maintained overseas, your bank may impose an international transaction fee on your purchase. StreamDemo is not responsible for any such fees charged by your bank."',
    principle:
      'Shrouded Attributes & "Costs Are Not Losses" Framing (Kahneman, 2011, Ch. 34, citing Thaler\'s Credit Card Surcharge Principle; Shafir & Thaler, 2006)',
    readingCitation:
      'Kahneman, D. (2011). Thinking, Fast and Slow, Chapter 34 ("Costs Are Not Losses", pp. 364–365, discussing Richard Thaler\'s credit-card surcharge vs cash discount debate). / Shafir, E., & Thaler, R. H. (2006). Journal of Economic Psychology.',
    mechanism:
      'Thaler observed that people will readily forgo a discount but vigorously resist paying a surcharge. The merchant deliberately strips out unavoidable 1.5%–3.5% international transaction fees from the focal price, framing the headline rate as clean while dumping the fee onto a separate, unmentioned bank account entry. By the time the consumer notices it on their statement, the transaction is non-refundable.',
    whoseGoalWins:
      'Firm wins at user expense (Sludge): Externalizes overseas payment clearing fees onto users without suffering negative conversion drag.',
    severity: 4,
    severityDriver:
      'Unannounced covert fees appearing post-purchase on bank statements, violating consumer price clarity and legal transparency standards.',
    repairInB:
      'Repaired in Variant B with Certified Zero Hidden Surcharges & Local Clearing (SMU MGMT6108 Fair Design Standard): The Fair Billing box guarantees that the price displayed is 100% all-inclusive with $0.00 foreign exchange markup.',
  },
  {
    id: 'F4',
    where: 'Promotional Free Trial Banner & Cancellation Deadline (Variant A)',
    whatUserSeesAndDoes:
      'The banner advertises "Enjoy a 7-day FREE trial^", but buries in dense clause copy that users must cancel "at least 24 hours before your free trial ends" or get automatically locked into $107.76, combined with an explicit "No refunds for partial or unused portions" clause.',
    principle:
      'Prospect Theory Loss Aversion, Account Resuscitation & The Perils of Loss Framing (Kahneman, 2011, Ch. 26; Shafir & Thaler, 2006; Kern & Chugh, 2009)',
    readingCitation:
      'Kahneman, D. (2011). Thinking, Fast and Slow, Chapter 26 ("Prospect Theory: The S-Shaped Value Function & Loss Aversion", pp. 278–288). / Shafir, E., & Thaler, R. H. (2006). "Invest now, drink later, spend never" (Account Resuscitation, pp. 698–700). / Kern, M. C., & Chugh, D. (2009). Psychological Science.',
    mechanism:
      'Free trial lures users via zero-cost framing. When the artificial 24-hour cutoff passes on Day 6, the dormant mental account is suddenly "resuscitated" (Shafir & Thaler, 2006) as an unavoidable $107.76 debt. Under prospect theory (Kahneman Ch. 26), losses loom roughly twice as large as gains. The firm leverages the strict no-refund policy to enforce sunk cost lock-in.',
    whoseGoalWins:
      'Firm wins at user expense (Sludge): Traps unsuspecting users on Day 6, converting free trials into irreversible annual revenue.',
    severity: 5,
    severityDriver:
      'Calculated entrapment mechanism intentionally truncating statutory trial periods and foreclosing cooling-off rights.',
    repairInB:
      'Repaired in Variant B with 14-Day Advance Notice & 1-Click Renewal Cancellation (Prof. Roh Week 2 De-biasing): Automated email warning sent 14 days before any card charge containing an authentication-free 1-click cancel link.',
  },
  {
    id: 'F5',
    where: 'Account Cancellation Funnel & Unsubscribe Flow (Variant A)',
    whatUserSeesAndDoes:
      'Cancelling an active membership requires navigating 4 separate screens, clicking through artificial guilt appeals ("You will lose your watch history and drama streak!"), filling out a mandatory survey, and encountering a telephone retention queue during limited business hours.',
    principle:
      'Goal Gradient Exploitation, Bounded Ethicality & Friction Sludge (Berger & Pope, 2011; Kern & Chugh, 2009; Kahneman, 2011, Ch. 34)',
    readingCitation:
      'Berger, J., & Pope, D. (2011). "Can Losing Lead to Winning?" Management Science, 57(5), 817–827 (Goal-Gradient Motivation & Reference Points). / Kern, M. C., & Chugh, D. (2009). "Bounded Ethicality: The Perils of Loss Framing." Psychological Science. / Prof. Roh Week 2 Slides ("Goal Gradient Effect & Perceived Progress").',
    mechanism:
      'The cancellation maze weaponizes the Goal Gradient Effect (Berger & Pope, 2011; Kivetz et al., 2006) by reminding users how close they are to completing their drama streak, framing exit as an agonizing loss. Kern & Chugh (2009) prove that cognitive overload and time friction degrade rational deliberation. Users abandon cancellation due to procedural exhaustion.',
    whoseGoalWins:
      'Firm wins at user expense (Sludge): Artificially suppresses voluntary subscriber churn by manufacturing procedural sludge.',
    severity: 4,
    severityDriver:
      'Violates consumer autonomy by holding customer subscriptions hostage behind multi-layered retention sludge.',
    repairInB:
      'Repaired in Variant B with Self-Serve 1-Click Cancel & Interactive Sandbox (FTC 2024 "Click to Cancel" Standard): Instant 1-click cancellation in Account Settings with zero retention surveys, immediate pro-rated credit, and sandbox verification.',
  },
];

export const EXISTING_NUDGE_KEPT: ExistingNudgeKept = {
  name: 'Multi-Device & Audio/Video Feature Specification Grid',
  location: 'Plan Comparison Matrix (Full HD, 4K Dolby, Concurrent Screens, Offline Downloads)',
  description:
    'The baseline platform features icon badges for Unlimited Access, No Video Ads, Video Downloads, Full HD (1080p), and Multi-Screen streaming.',
  principle:
    'Goal Visibility, Tangibility & Cognitive Offloading (Soman & Cheema, 2011; Cryder et al., 2013; Prof. Roh Week 2 Slides)',
  rationale:
    'In Prof. Roh\'s Week 2 framework, Goal Visibility (Soman & Cheema, 2011) and Tangibility (Cryder et al., 2013) increase consumer confidence and comprehension by transforming abstract offerings into concrete, bite-sized components. The baseline feature icons were a legitimate positive nudge that offloaded technical complexity. In Variant B, rather than discarding this, we elevated it into a comprehensive, symmetric Granular Plan Comparison table so users can transparently assess exact device limits across tiers.',
};

# PROMPTS.md: AI Collaboration Log & Engineering Prompt Trail

**Course:** MGMT 6108 — Decision Architecture for Managers  
**Institution:** Singapore Management University (SMU)  
**Contributors:** Akshita Kumar, Lin Xinyu, Vajeeha Farhath Mohamed Jameel, and Yaanipha Vetvitoon  
**Date:** October 2026

---

## Overview & Rubric Alignment

This document logs the iterative prompting process used to develop the StreamDemo decision architecture prototype. In accordance with the course evaluation rubric, this trail records:
1. How core class teachings and behavioural decision concepts were translated into prompt specifications.
2. The exact prompts provided to the AI.
3. The resulting AI output.
4. The verification checks conducted by our team.
5. The behavioural failures and cognitive traps caught, checked, and overruled.
6. The systematic guardrails established to prevent recurring design flaws.

---

## Chronological Prompt Sequence

### Prompt 1: De-Biasing the Core Decision vs. Cosmetic Restyling
- **Class Learning Inculcated:**
  In class, we learned that a meaningful redesign must fundamentally alter what the user sees at the critical moment of choice rather than merely updating colors or layout. The lecture emphasized the danger of "A Prettier B"—a superficial facelift where the underlying decision architecture remains unchanged. We also learned about mental accounting and transaction decoupling: when a subscription decouples payment from consumption by quoting a low per-month rate, consumers treat the purchase as an abstract investment rather than recognizing the full lump-sum cash outlay. We wanted to inculcate true *de-biasing* by tackling the root cause of price shrouding.
- **Prompt Given [AK]:**
  > "We are auditing a baseline streaming subscription flow that employs partitioned pricing by spotlighting '$8.98/month Save 18%' on an annual plan while burying the $107.76 lump sum and overseas merchant bank fees. We want to construct two distinct live versions under the fictional brand name StreamDemo: Variant A (replicating the baseline deceptive sludge) and Variant B (an ethical choice architecture redesign). Both variants must run at one live URL and be switchable via `?v=A` and `?v=B`. In Variant B, ensure that the pricing is de-biased so users clearly perceive the true all-in cost before committing, rather than being tricked by decoupled monthly figures."
- **AI Output:**
  The AI generated a dark-themed streaming landing page. However, in Variant B, it kept the headline as "$8.98/month" and simply added a bright yellow tooltip that said "Billed annually as $107.76". It also suggested adding an automated AI chatbot assistant in the corner to answer user billing questions.
- **Verification Performed:**
  Our team conducted a cognitive walk-through simulating a user rushing through checkout. We discovered that the eye still locked onto the prominent "$8.98/month" headline, and the tooltip required an extra hover action that most users in a hurry would never trigger. The AI chatbot was completely unnecessary and distracted from the focal choice.
- **AI Failure Caught, Checked & Overruled:**
  - *Identified Trap:* The AI fell directly into the **"Prettier B" trap** warned about in the term paper briefing. Adding a tooltip and chatbot while preserving the partitioned "$8.98/month" headline left the primary cognitive anchor uncorrected.
  - *Overrule Action:* We instructed the model to completely remove the chatbot, eliminate the prominent per-month anchor, and place the full, all-in upfront charge (`$107.76 / year billed today`) in the primary display typography, paired with a transparent segmented switch for genuine monthly billing.

---

### Prompt 2: Forensic Baseline Replication & Revealing Shrouded Fees
- **Class Learning Inculcated:**
  A core lesson on decision architecture is that firms frequently employ asymmetric default framing and shrouded attributes—hiding unavoidable surcharges and post-purchase costs in obscure fine print. The teaching highlighted that consumers readily forgo an optional discount but strongly resist paying a surprise surcharge. In the baseline product, the firm avoids merchant processing fees by processing overseas, passing a 3% international bank fee onto the user without upfront disclosure. Furthermore, a 7-day free trial is paired with an aggressive 24-hour premature cancellation trap. We needed Variant A to forensically replicate these baseline mechanisms so the empirical comparison would be valid.
- **Prompt Given [LX]:**
  > "For Variant A, faithfully recreate the baseline interface based on the audited screens. Include the 365-day plan highlighted with a prominent 'Recommended' ribbon, the 90-day plan, and the 30-day plan, alongside the Hollywood partner bundle. Accurately replicate the 24-hour trial trap ('cancel at least 24 hours before your free trial ends or you get billed $107.76 with no refunds') and the buried overseas merchant surcharge disclosure in the footer. To make this an effective audit prototype for evaluation, build a simulated checkout terminal that reveals the unexpected lump sum and the 3% overseas surcharge only when the user clicks 'Subscribe now', and add an on-screen toggle that allows graders to inspect where each behavioural sludge mechanism is located."
- **AI Output:**
  The AI built `VariantA.tsx` with high visual fidelity, complete with the period selection tabs, the magenta ribbon, the low-contrast footer disclosures, the simulated payment modal that surfaces the $110.99 surprise total upon card entry, and an on-screen annotation inspector.
- **Verification Performed:**
  We verified each interactive element: selecting each billing duration updated the fine print correctly, clicking "Subscribe now" launched the simulated payment revelation screen, and toggling the sludge annotations highlighted the exact locations of partitioned pricing, default decoys, shrouded bank fees, and the 24-hour trap.

---

### Prompt 3: The Nudge-Not-Sludge Check & Symmetric Choice Architecture
- **Class Learning Inculcated:**
  Our lectures covered the fundamental distinction between a nudge and sludge: an intervention is only a *nudge* if it alters the choice environment in a way that helps choosers achieve their own self-stated goals. If an intervention steers the user toward an outcome that primarily benefits the firm's balance sheet at the user's financial expense, it must be classified as *sludge*. In addition, we studied the door-stopper metaphor: true *de-biasing* removes the source of the distortion (fixing the broken spring) rather than *re-biasing* (applying a second opposing bias to force an outcome).
- **Prompt Given [VF]:**
  > "For Variant B, implement the ethical redesign following our design system specification. We need equal visual container stature between the Standalone membership and the Partner Bundle so neither tier acts as an asymmetric decoy. Implement a clear segmented frequency controller allowing users to deliberately pick Annual or Monthly billing. Include the three-pillar Fair Billing Guarantee (14-day advance notice before renewal, self-serve 1-click cancel, and zero hidden surcharges). Elevate the baseline technical icons into a comprehensive, symmetric comparison matrix so users can clearly evaluate device resolution and stream limits. Also, introduce a 10-minute active checkout session timer that guarantees the rate and reserves inventory during checkout, ensuring users must complete their purchase under 10 minutes to protect against unannounced price fluctuations."
- **AI Output & Failure Caught [CHECKED & OVERRULED]:**
  - *The Failure:* In the first iteration of the billing frequency toggle, the AI automatically pre-selected "Annual Billing" by default and attached a prominent animated badge stating "Best Value / Recommended". The AI justified this by claiming: "Annual billing saves users 18% over the year, so defaulting them into annual is a benevolent nudge."
  - *Identified Trap:* The AI committed the **"Sludge Relabelled as a Nudge" trap**. For a consumer who only intends to watch a single seasonal drama (an 8-week viewing goal), defaulting them into a 12-month lock-in forces an unwanted financial commitment. The firm benefits by locking in annual liquidity and relying on cancellation inertia; the consumer loses flexibility and cash.
  - *Overrule Action:* We overruled the AI and enforced strict symmetry: neither billing frequency is pre-selected by default. The toggle requires a deliberate user choice, both options are presented with equal typographic neutrality, and the 10-minute rate guarantee timer is prominently displayed to hold the firm accountable during checkout.

---

### Prompt 4: Autonomy Restoration & The 5-Minute Cancellation Security Window
- **Class Learning Inculcated:**
  We learned about the "Roach Motel" pattern where signing up is frictionless (1 click) but cancelling is trapped behind an asymmetric sludge labyrinth. In retention mazes, firms weaponize goal proximity and artificial loss aversion (warning users that cancelling forfeits their watch history and viewing streak), require mandatory exit surveys, offer confusing multi-step retention bribes, and eventually demand phone calls during restricted business hours. Under cognitive overload and time friction, consumers suffer from bounded ethicality and fatigue, causing voluntary churn to drop artificially. We wanted to build an interactive simulator that contrasts this retention sludge against a genuine 1-click cancellation flow protected by a 5-minute security authorization window.
- **Prompt Given [YV]:**
  > "Create an interactive Cancellation Sandbox Modal accessible from the navigation toolbar. Inside, build two contrasting simulation paths: 
  > 1. The Variant A Retention Sludge Maze: clicking cancel forces the user through 4 friction stages (guilt appeals about losing drama streaks, a mandatory multi-choice exit questionnaire, a temporary discount retention bribe, and a mandatory telephone customer service barrier with long wait times).
  > 2. The Variant B Ethical 1-Click Flow: an immediate self-serve cancellation screen displaying the active access date, $0.00 exit fee guarantee, and a single 'Confirm 1-Click Cancellation' button that completes the request in one step.
  > Across both cancellation paths, implement an active 5-minute billing security session timer (counting down from 05:00). If the 5 minutes elapse before completing the cancellation, the session expires for account protection and prompts a restart. If completed under 5 minutes, confirm the time elapsed and remaining security window."
- **AI Output:**
  The AI implemented `CancellationSandboxModal.tsx` with both paths, dynamic countdown logic from 300 seconds (5 minutes), visual progress bars, session expiration states with restart capability, and confirmation receipts detailing the exact seconds taken.
- **Verification Performed:**
  We tested both flows against the clock:
  - In the ethical flow, a user completes cancellation in ~3 seconds, preserving over 4 minutes and 55 seconds of their security window.
  - In the sludge maze, clicking through the 4 friction walls consumed substantial time, demonstrating how artificial barriers and telephone requirements push users close to session expiration or trigger outright abandonment.

---

## Behavioral Guardrails Established from Overruled AI Errors

1. **Guardrail G1 (De-biasing Root Cause over Cosmetic Re-styling):**  
   *Origin:* Grew out of Error 1, where the AI attempted to keep the partitioned monthly headline and mask it with tooltips.  
   *Policy:* A design change only qualifies as a repair if it corrects the information presented at the point of choice (displaying the full annual outlay) rather than relying on secondary tooltips, footnotes, or conversational chat overlays.

2. **Guardrail G2 (The Nudge-Not-Sludge Filter for Default Settings):**  
   *Origin:* Grew out of Error 2, where the AI relabelled an asymmetric annual default as a "helpful nudge".  
   *Policy:* Any default setting that benefits the firm's financial cash flow at the expense of the user's flexibility goal is classified as sludge. All duration and commitment selectors must provide symmetric effort and neutral presentation.

3. **Guardrail G3 (Empirical Decision Protection via Transparent Timers):**  
   *Origin:* Grew out of industry practices where firms create artificial urgency (e.g. fake resetting countdowns) to pressure impulse purchases.  
   *Policy:* Timers must be strictly operational and protective rather than coercive. The 10-minute checkout window guarantees the firm will not alter pricing or add surcharges during payment; the 5-minute cancellation window protects account session security while allowing friction-free 1-click execution.

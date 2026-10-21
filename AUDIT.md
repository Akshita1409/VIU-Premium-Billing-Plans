# Behavioural Science Audit: StreamDemo Premium Subscription Flow

**Course:** MGMT 6108 — Decision Architecture for Managers  
**Institution:** Singapore Management University (SMU), Lee Kong Chian School of Business  
**Target Product Audited:** Video-on-Demand Membership Subscription Page (Baseline: Viu Premium Web Platform)  
**Contributors:** Akshita Kumar, Lin Xinyu, Vajeeha Farhath Mohamed Jameel, and Yaanipha Vetvitoon  
**Prototype Environment:** Live URL switched via `?v=A` (Baseline) and `?v=B` (Ethical Redesign)  
**Fictional Brand:** `StreamDemo` (Adopted per SMU academic guidelines to eliminate trademark bias and isolate cognitive architecture effects)

---

## 1. Context & Focal Decision

- **Decision Maker:** Prospective and active entertainment viewers deciding whether and how to enroll in a premium streaming subscription plan.
- **Screen & Decision Context:** The primary subscription selection screen where users choose between standalone access and partner bundles across varying durations (30 days, 90 days, 365 days).
- **Stakes Involved:** Real monetary extraction ($107.76 to $189.98 recurring cash outlay), time, cognitive burden, and autonomy over ongoing billing renewals.
- **The Core Dilemma:** A viewer visiting the site to watch a single seasonal drama series (1–2 months planned viewing) is systematically steered into a high-cost 12-month commitment through psychological shrouding, default inertia, and severe cancellation sludge.

---

## 2. Findings Table (6-Line Rubric Specification Tied to Course Readings)

### Finding 1: Mental Accounting Shrouding & Transaction Decoupling (Sludge)

1. **Where:** Pricing Plan Cards & Hero Headline Banner (Variant A).
2. **What the user sees and does:** The user is greeted by prominent 32px bold typography reading *"Only $8.98/month Save 18% on 1 year!"* and *"$15.83/month Save 20% on a 365-day bundle!"*. The user clicks the bright orange-pink "Subscribe now" CTA expecting a manageable ~$9–$16 monthly charge, but is immediately billed an upfront lump sum of $107.76 or $189.98.
3. **Principle with course reading citation:** **Mental Accounting of Delayed Consumption & Transaction Decoupling** (**Shafir & Thaler, 2006**; **Kahneman, 2011, Chapter 34 "Frames and Reality"**).
   - *Primary Reading:* Shafir, E., & Thaler, R. H. (2006). "Invest now, drink later, spend never: On the mental accounting of delayed consumption." *Journal of Economic Psychology*, 27(6), 694–712.
   - *Supporting Reading:* Kahneman, D. (2011). *Thinking, Fast and Slow*, Chapter 34: "Good Frames and Mental Accounting", pp. 363–374.
4. **Mechanism and whose goal wins:** **Firm wins at user expense (Sludge).** In Shafir & Thaler's (2006) framework, advance purchases are cognitively categorized as "investments" rather than spending, decoupling payment from consumption so that subsequent usage is perceived as virtually "free" or as "savings". Variant A weaponizes this mental accounting rule by substituting a local, narrow per-month frame (`$8.98/month`) for the global annual reality (`$107.76`). System 1 passively accepts this local frame because System 2 is lazy and rarely computes the true annual cash drain (Kahneman, 2011, Ch. 34).
5. **Severity with its driver:** **Severity 5/5.** Driver: Direct, unexpected liquidity depletion at checkout; causes student budget shocks, unintended credit card overdrafts, and severe buyer remorse.
6. **Repair in Variant B:** Implemented **De-biasing via All-In Upfront Pricing** (Prof. Roh, Week 2 Slides 83–84 on De-biasing): Variant B fixes the root cause by displaying `$107.76 / year billed today` and `$189.98 / year billed today` in primary high-contrast typography, accompanied by an explicit segmented switcher for genuine monthly billing ($10.98/mo and $19.98/mo).

---

### Finding 2: Status Quo Bias, Asymmetric Default & Decoy Stature (Sludge)

1. **Where:** Plan Selection Matrix & Card Stature (Variant A).
2. **What the user sees and does:** The 365-day annual plan is pre-selected by default and marked with a high-contrast magenta ribbon labelled *"Recommended"*. Flexible monthly options are either segregated into secondary tabs or shrouded behind day counts (30 vs 90 vs 365 days).
3. **Principle with course reading citation:** **Status Quo Bias, Endowment Effect & Asymmetric Defaults** (**Kahneman, 2011, Chapter 27 & Chapter 34**; **Kern & Chugh, 2009**; **Prof. Roh Week 1 Taxonomy of Nudges**).
   - *Primary Reading:* Kahneman, D. (2011). *Thinking, Fast and Slow*, Chapter 27: "The Endowment Effect", pp. 289–299, and Chapter 34: "Default Opt-Outs vs. Opt-Ins", pp. 373–374.
   - *Supporting Reading:* Kern, M. C., & Chugh, D. (2009). "Bounded Ethicality: The Perils of Loss Framing." *Psychological Science*, 20(3), 378–384.
4. **Mechanism and whose goal wins:** **Firm wins at user expense (Sludge).** As Kahneman (2011, Ch. 34) demonstrates in the context of European organ donation, defaults are disproportionately adopted because switching requires System 2 cognitive effort. By pre-endowing users with the 365-day tier and labelling it "Recommended", stepping down to a 30-day tier is psychologically coded as a loss of value. Kern & Chugh (2009) show that loss framing prompts automatic compliance and compromises ethical choices under time constraints.
5. **Severity with its driver:** **Severity 4/5.** Driver: Exploits consumer decision inertia to artificially maximize Customer Lifetime Value (CLV) while transferring financial renewal risk to the user.
6. **Repair in Variant B:** Implemented **Symmetric Visual Stature & Neutral Choice Architecture** (Prof. Roh, Week 1 "Mindful Nudge"): The Standalone and Bundle tiers have identical container dimensions, equivalent typography hierarchy, and a neutral segmented toggle for billing frequency with zero forced pre-selections.

---

### Finding 3: Shrouded Surcharges & "Costs Are Not Losses" Framing (Sludge)

1. **Where:** Footer Disclosures & Checkout Summary (Variant A).
2. **What the user sees and does:** Below the subscription cards in low-contrast 11px gray text (`#777`), the interface states: *"As StreamDemo's merchant account is maintained overseas, your bank may impose an international transaction fee on your purchase. StreamDemo is not responsible for any such fees charged by your bank."*
3. **Principle with course reading citation:** **Shrouded Attributes & "Costs Are Not Losses" Framing** (**Kahneman, 2011, Chapter 34 "Frames and Reality"**, citing Richard Thaler's Credit Card Surcharge Principle; **Shafir & Thaler, 2006**).
   - *Primary Reading:* Kahneman, D. (2011). *Thinking, Fast and Slow*, Chapter 34, pp. 364–365 (Thaler's credit-card surcharge vs. cash-discount debate: people readily forgo a discount but resist paying a surcharge).
   - *Supporting Reading:* Shafir, E., & Thaler, R. H. (2006). *Journal of Economic Psychology*, 27, 694–712.
4. **Mechanism and whose goal wins:** **Firm wins at user expense (Sludge).** To avoid paying local corporate merchant clearing fees, the firm routes transactions offshore and strips out the 1.5%–3.5% foreign transaction fee from the advertised price. By shrouding the surcharge until the credit card statement arrives, the firm captures the sale while leaving the customer with an unannounced financial penalty.
5. **Severity with its driver:** **Severity 4/5.** Driver: Deceptive price partitioning that distorts price transparency and leaves consumers with unanticipated post-purchase fees.
6. **Repair in Variant B:** Implemented **Zero Hidden Surcharges & Certified Local Clearing Guarantee** (Prof. Roh Week 1 "Mind Over Matter"): The Fair Billing Guarantee box explicitly promises that the displayed price is the 100% all-inclusive figure with $0.00 surprise foreign transaction fees.

---

### Finding 4: Free Trial Entrapment & Dormant Account Resuscitation (Sludge)

1. **Where:** Promotional Free Trial Banner & Cancellation Conditions (Variant A).
2. **What the user sees and does:** The banner proclaims *"Enjoy a 7-day FREE trial^"*, but buries in fine print that cancellation must occur *"at least 24 hours before your free trial ends"* or the full $107.76 will be charged, coupled with an absolute *"No refunds for partial or unused portions"* restriction.
3. **Principle with course reading citation:** **Prospect Theory Loss Aversion & Dormant Account Resuscitation** (**Kahneman, 2011, Chapter 26 "Prospect Theory"**; **Shafir & Thaler, 2006**; **Kern & Chugh, 2009**).
   - *Primary Reading:* Kahneman, D. (2011). *Thinking, Fast and Slow*, Chapter 26: "The S-Shaped Value Function and Loss Aversion", pp. 278–288.
   - *Supporting Reading:* Shafir, E., & Thaler, R. H. (2006). "Invest now, drink later, spend never" (Section on Account Resuscitation, pp. 698–700).
4. **Mechanism and whose goal wins:** **Firm wins at user expense (Sludge).** The "FREE" framing triggers visceral positive affect. However, the artificial 24-hour cutoff catches users who attempt to cancel on Day 7. When the cutoff passes, the user's dormant mental account is abruptly "resuscitated" (Shafir & Thaler, 2006) as an involuntary $107.76 debt. Under prospect theory (Kahneman, 2011, Ch. 26), losses loom roughly twice as large as gains ($\lambda \approx 1.5\text{--}2.5$), and the firm exploits the strict no-refund policy to lock in revenue.
5. **Severity with its driver:** **Severity 5/5.** Driver: Entrapment mechanism that prematurely terminates the trial window and denies users legitimate cooling-off remedies.
6. **Repair in Variant B:** Implemented **14-Day Advance Notice & Self-Serve Renewal Protection**: An automated notification is sent 14 days before any card renewal with an authentication-free 1-click cancel button, eliminating trial traps.

---

### Finding 5: Roach Motel, Goal Gradient Exploitation & Bounded Ethicality (Sludge)

1. **Where:** Account Management & Subscription Cancellation Funnel (Variant A).
2. **What the user sees and does:** Cancelling requires clicking through 4 consecutive screens of emotional guilt appeals (*"You will lose your watch history and drama streak!"*), completing a mandatory survey, and being directed to call a telephone hotline during restricted business hours.
3. **Principle with course reading citation:** **Goal Gradient Exploitation, Bounded Ethicality & Friction Sludge** (**Berger & Pope, 2011**; **Kern & Chugh, 2009**; **Kahneman, 2011, Chapter 34**; **Prof. Roh Week 2 Slides on Goal Progress**).
   - *Primary Reading:* Berger, J., & Pope, D. (2011). "Can Losing Lead to Winning?" *Management Science*, 57(5), 817–827 (Reference Points, Goal Proximity & Loss Aversion).
   - *Supporting Reading:* Kern, M. C., & Chugh, D. (2009). "Bounded Ethicality: The Perils of Loss Framing." *Psychological Science*, 20(3), 378–384.
   - *Lecture Slides:* Prof. Roh, Week 2 Slides 14–24 ("Goal Gradient Effect & Perceived Progress").
4. **Mechanism and whose goal wins:** **Firm wins at user expense (Sludge).** The cancellation maze weaponizes the Goal Gradient Effect (Berger & Pope, 2011; Kivetz et al., 2006): by showing users how close they are to completing their drama streak, exit is framed as an intolerable loss. Kern & Chugh (2009) demonstrated that time pressure and procedural friction induce automaticity and ethical exhaustion. Users abandon cancellation due to fatigue.
5. **Severity with its driver:** **Severity 4/5.** Driver: Systematically depresses churn by holding customer billing hostage behind artificial transaction barriers.
6. **Repair in Variant B:** Implemented **Self-Serve 1-Click Cancel & Interactive Sandbox Simulator** (FTC 2024 "Click to Cancel" Standard): Direct cancellation in Account Settings with zero retention surveys, immediate pro-rated ledger balance, and an interactive sandbox preview.

---

### Finding 6: Sunk Cost Lock-in & Asymmetric Liquidity Forfeiture (Sludge)

1. **Where:** Terms & Conditions Disclosure & Subscription Lock-In Notice (Variant A).
2. **What the user sees and does:** The user sees the fine print clause: *"No refunds will be provided for any partial or unused portion of the StreamDemo Premium 365 Days Plan if you cancel during an active subscription period."* When a user only needs the service for a 2-month drama season, cancelling at month 3 provides zero pro-rated refund, resulting in 100% forfeiture of the remaining 9–10 months of prepaid funds ($80+ loss).
3. **Principle with course reading citation:** **Sunk Cost Fallacy & Asymmetric Liquidity Forfeiture** (**Shafir & Thaler, 2006**; **Kahneman, 2011, Chapter 34 "Frames and Reality"**).
   - *Primary Reading:* Shafir, E., & Thaler, R. H. (2006). "Invest now, drink later, spend never" (Study 4: Local vs. Global Accounting of Wasted Services, pp. 702–704).
   - *Supporting Reading:* Kahneman, D. (2011). *Thinking, Fast and Slow*, Chapter 34 ("Good Frames: Mental Accounting and the Sunk Cost Fallacy", pp. 370–372).
4. **Mechanism and whose goal wins:** **Firm wins at user expense (Sludge).** Shafir & Thaler (2006) demonstrate that when consumers pay upfront for a yearly bundle, discontinuing early triggers the aversive feeling of wasted money unless reframed. Variant A exploits the sunk cost fallacy (Kahneman Ch. 34) by imposing a total forfeiture rule, forcing users to remain captive to an unwanted subscription or surrender their prepaid funds, while denying statutory cooling-off rights.
5. **Severity with its driver:** **Severity 4/5.** Driver: Unfair wealth extraction: penalizes consumers who no longer need the service by denying pro-rated refunds for unconsumed months.
6. **Repair in Variant B:** Implemented **Guaranteed Pro-Rated Balance Protection & Fair Plan Switching**: Explicitly guaranteed in the Fair Billing box and FAQ that users can cancel or switch plans at any moment, and unused portions of prepaid subscriptions are pro-rated and credited directly to their profile with zero penalty or exit fees.

---

## 3. Good Existing Nudge Kept & Justification (Rubric Criterion)

### Kept Nudge: Multi-Device & Feature Specification Grid

- **Location:** Plan Comparison Matrix (Full HD 1080p, 4K Dolby, Concurrent Screens, Offline Downloads).
- **Behavioural Principle & Course Citation:** **Goal Visibility, Tangibility & Cognitive Offloading** (**Soman & Cheema, 2011**; **Cryder et al., 2013**; **Prof. Roh Week 2 Slides 10–16 & 43–44**).
  - *Readings:* Soman, D., & Cheema, A. (2011). Goal Visibility in Promoting Savings. / Cryder, C. et al. (2013). Tangibility Increases Generosity. / Prof. Roh, Week 2 Slides: *"Whittle down overwhelming goals into smaller goals that are concrete and easier to manage."*
- **Academic Justification:**
  In digital streaming, consumers face significant cognitive overload when comparing technical specifications across mobile, tablet, and TV environments. The baseline Viu interface included icons summarizing ad-free viewing, offline download allowances, and streaming resolution.
  
  In Prof. Roh's Week 2 framework, **Goal Visibility** and **Tangibility** assist decision-makers by making abstract features concrete and manageable. Rather than removing these badges, **Variant B expands them into a fully symmetric Granular Plan Comparison table**. This represents a legitimate, welfare-enhancing nudge: it empowers System 2 deliberate evaluation by standardizing technical dimensions across tiers without bias.

---

## 4. De-biasing vs. Re-biasing Analysis (Prof. Roh Week 2 Framework)

In Week 2 (Slides 81–84 & 126–129), Prof. Roh introduces the crucial metaphor of the **Door Stopper**:
- **Re-biasing Mechanism:** Imposing a second bias in the opposite direction (e.g., adding a counter-weight or lock) so that people behave as if they were not biased, even though the underlying error remains.
- **De-biasing Mechanism:** Identifying the root cause of the bias and removing it entirely (e.g., cleaning and replacing the broken spring) so that the error no longer occurs.

**Why Variant B is a De-biasing Redesign:**  
An unethical team might attempt to "re-bias" users by creating a counter-nudge (e.g., defaulting users to a monthly plan with loud warning sirens about annual fees). Instead, Variant B is a true **De-biasing intervention**: it strips away the psychological shrouding, eliminates the deceptive monthly denominator, provides identical visual container stature, and restores full transparency.

---

## 5. Summary Matrix Traced to Variant B

| Finding | Baseline Sludge Mechanism (A) | Ethical Choice Repair (B) | Course Reading Citation | Taxonomy / Category |
| :--- | :--- | :--- | :--- | :--- |
| **F1** | Partitioned monthly framing ($8.98/mo) | All-in upfront total ($107.76/yr billed today) | Shafir & Thaler (2006); Kahneman (2011, Ch. 34) | De-biasing / Mindful |
| **F2** | Asymmetric "Recommended" ribbon on 365d | Symmetric visual stature & explicit switcher | Kahneman (2011, Ch. 27 & 34); Kern & Chugh (2009) | Status Quo Neutralization |
| **F3** | Shrouded 3% foreign bank fee | Zero hidden fee guarantee & local processing | Kahneman (2011, Ch. 34: Thaler Surcharge Principle) | All-In Transparency |
| **F4** | 24-hr trial trap & premature cutoff | 14-day advance notice with 1-click cancel | Kahneman (2011, Ch. 26); Shafir & Thaler (2006) | Autonomy Restoration |
| **F5** | 4-step retention maze / phone barrier | Instant 1-click self-serve unsubscribe | Berger & Pope (2011); Kern & Chugh (2009) | Sludge Eradication |
| **F6** | Non-refundable sunk cost forfeiture | Guaranteed pro-rated balance credit | Shafir & Thaler (2006); Kahneman (2011, Ch. 34) | Fair Proration & Liquidity |
| **Kept** | Feature capability iconography | Granular symmetric comparison matrix | Soman & Cheema (2011); Cryder et al. (2013) | Cognitive Offloading Nudge |

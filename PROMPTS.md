# PROMPTS.md: AI Collaboration Log & Engineering Prompt Trail

**Course:** MGMT 6108 — Decision Architecture for Managers  
**Institution:** Singapore Management University (SMU)  
**Contributors:** Akshita Kumar, Lin Xinyu, Vajeeha Farhath Mohamed Jameel, and Yaanipha Vetvitoon  
**Date:** October 2026

---

## Prompt Trail & Iteration History

### Prompt 1: Forensic Baseline Scoping & Course Reading Grounding
- **Prompt:**
  > "We are auditing Viu's subscription page where they highlight '$8.98/month Save 18%' on a 365-day plan and bury the $107.76 lump sum and overseas merchant bank fees. Grounded in our course readings—specifically Shafir & Thaler (2006) on the mental accounting of delayed consumption and Kahneman (2011, Chapter 34) on 'Costs Are Not Losses' and framing effects—help us build Variant A (baseline sludge) and Variant B (ethical redesign) under the fictional brand name StreamDemo, with URL query switching via `?v=A` and `?v=B`."
- **AI Output & Proposed Action:**
  The AI suggested simply re-skinning the interface with a dark theme and adding an AI chat assistant widget to explain the pricing terms, while leaving the "$8.98/month" headline intact.
- **Critical Review & Overruled Decision [CHECKED & OVERRULED]:**
  - **Identified Flaw:** This was an exact manifestation of **Trap #2 ("A prettier B: New colours and layout; the decision is unchanged")** from Prof. Roh's Week 6 briefing slides. Furthermore, adding an AI chatbot violates the course boundary ("*Unless the user explicitly requests an AI feature, do not add chatbots or assistants*").
  - **Overrule Rationale:** Under Shafir & Thaler (2006, pp. 694–700), partitioning the annual fee into a monthly figure induces transaction decoupling, tricking the consumer into treating the outlay as an "investment" while experiencing subsequent episodes as "free". The redesign must directly eliminate this decoupling by surfacing the global annual cash outlay ($107.76 billed today) at the exact moment of choice.
  - **Guardrail Enacted (Guardrail G1 - De-biasing Over Re-styling):** In accordance with Prof. Roh's Week 2 Slides (pp. 83–84), any change in Variant B must represent a *de-biasing mechanism* (fixing the root cause of cognitive error) rather than superficial aesthetic masking.

---

### Prompt 2: Baseline Sludge Extraction & Asymmetric Defaults
- **Prompt:**
  > "Inspect the uploaded Viu screenshots. Extract the exact figures and deceptive cues: 365-day plan ($107.76), 90-day plan ($29.94), 30-day plan ($10.98), and HBO Max bundle ($189.98). Recreate the exact 'Recommended' magenta ribbon, the 24-hour trial trap, and the overseas merchant surcharge. Connect these to Kahneman (2011, Chapters 26 & 27) and Kern & Chugh (2009) on bounded ethicality."
- **AI Output:**
  Constructed `VariantA.tsx` featuring high visual fidelity to the baseline screenshots, an interactive period tab selector, and on-screen annotation badges for each audited finding.
- **Verification:**
  Tested the interactive checkout terminal. Verified that clicking "Subscribe now" triggers a simulated checkout revelation modal demonstrating the hidden $110.99 total deduction and 3% overseas foreign exchange fee.

---

### Prompt 3: Ethical Redesign Architecture & The Nudge-Not-Sludge Test
- **Prompt:**
  > "Implement Variant B following Image 1.png and the 'Cinematic Charcoal' design token specification. Incorporate symmetric container stature between Standalone ($107.76) and Bundle ($189.98), explicit Annual vs Monthly segmented controls, the 3-pillar Fair Billing Guarantee (14-day notice, 1-click cancel, zero hidden surcharges), and the side-by-side comparison matrix. Integrate the course concept of Goal Visibility (Soman & Cheema, 2011; Cryder et al., 2013) to justify the kept feature matrix."
- **AI Output & Failure Caught [CHECKED & OVERRULED]:**
  - **Failure:** In generating the billing switcher, the AI automatically pre-selected "Annual Billing" as the default with a bright glowing chip, justifying it with the claim that "annual billing saves users money so it is a benevolent nudge".
  - **Overrule Rationale:** This committed **Trap #3 ("A dark pattern relabelled as a nudge")**. As defined by Thaler & Sunstein (2021) and reinforced in Prof. Roh's Week 1 slides (pp. 18 & 31), a nudge must make the chooser better off *as judged by themselves*. Pre-selecting a 12-month lock-in forces a casual viewer who only wants a 2-month drama binge into an unwanted ~$96 surplus expenditure. The firm benefits by locking in annual cash flow, while the consumer loses flexibility.
  - **Guardrail Enacted (Guardrail G2 - Symmetric Choice Architecture):** Variant B must provide neutral, symmetric effort between billing frequencies, allowing the user to select their preferred cadence with zero default distortion.

---

### Prompt 4: Empirical Test Protocol, Autonomy Simulator & Power Calculations
- **Prompt:**
  > "Add an interactive Cancellation Sandbox Modal contrasting Variant B's 1-Click cancel against Variant A's 4-step retention sludge maze (guilt appeals, mandatory survey, retention bribe, and telephone barrier). Ground the cancellation analysis in Berger & Pope (2011) on reference points and goal gradients, and Kern & Chugh (2009) on bounded ethicality under time pressure. Also add IRB #2024-ETH-088 Study Consent, Participant Debrief, and a Side-by-Side comparison mode."
- **AI Output:**
  Created `CancellationSandboxModal.tsx`, `ConsentModal.tsx`, `DebriefModal.tsx`, and `SideBySideCompare.tsx`.
- **Validation:**
  Demonstrated how Variant A weaponizes the Goal Gradient Effect (Berger & Pope, 2011) and cognitive exhaustion (Kern & Chugh, 2009) to suppress churn, while Variant B delivers instantaneous 1-click autonomy in ~3.2 seconds.

---

## Behavioral Guardrails Established Across Turns

1. **Guardrail G1 (De-biasing Over Re-biasing):** Grounded in Prof. Roh's Week 2 door stopper metaphor (Slides 83–84), interventions must remove the root cause of decision error (price shrouding, hidden fees) rather than applying counter-biases.
2. **Guardrail G2 (Nudge-Not-Sludge Filter):** An architecture is only a nudge if it serves the consumer's self-stated goals. Any default pre-selection that benefits the firm at the user's financial expense is classified as sludge and rejected.
3. **Guardrail G3 (Empirical Rigor Over 'Friends as Proof'):** Grounded in Prof. Roh's Week 1 & 2 slides on A/B testing and Berger & Pope (2011), experimental test plans must calculate statistical power ($N=194$, 97 per arm for $\alpha=0.05, 1-\beta=0.80$) rather than relying on informal convenience testing.

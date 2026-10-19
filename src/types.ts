export type VariantType = 'A' | 'B' | 'COMPARE';

export type ActiveModal =
  | 'none'
  | 'consent'
  | 'debrief'
  | 'cancel_sandbox'
  | 'audit_inspector'
  | 'checkout_sim';

export interface AuditFinding {
  id: string;
  where: string;
  whatUserSeesAndDoes: string;
  principle: string;
  readingCitation: string;
  mechanism: string;
  whoseGoalWins: string;
  severity: 1 | 2 | 3 | 4 | 5;
  severityDriver: string;
  repairInB: string;
}

export interface ExistingNudgeKept {
  name: string;
  location: string;
  description: string;
  principle: string;
  rationale: string;
}

export interface PlanFeature {
  label: string;
  bundleValue: string | boolean;
  standaloneValue: string | boolean;
}

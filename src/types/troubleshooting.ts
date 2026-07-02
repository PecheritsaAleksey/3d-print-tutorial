export type TroubleshootingIssue = {
  slug: string;
  problem: string;
  symptoms: string[];
  likelyCauses: string[];
  checks: string[];
  fixes: string[];
  prevention: string[];
  tags: string[];
};

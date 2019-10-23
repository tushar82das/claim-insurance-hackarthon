export interface IClaims {
    claimId: number,
    policyId: number,
    diagnosis: string,
    ailment: string,
    admissionDate: string,
    dischargeDate: string,
    document: string,
    claimDate: string,
    status: string,
    comments: string,
    claimAmount: number,
    hospitalName: string,
    approver1Comment: string,
    approver2Comment: string,
    requestedClaimAmount: number
}
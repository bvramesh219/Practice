export enum UserRedirectAction {
    ChangePassword,
    LegalAgreement,
    Announcements,
    TwoFactorSetup,
    ComplianceVerification
}

export interface User {
    id: string;
    name: string;
    token: string;
    redirectAction: UserRedirectAction;
}
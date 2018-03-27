export interface BossDepartmentInterface {
    id: string;
    name: string;
    username: string;
    email: string;
    emailVerified: boolean;
    realm: string;
    hasRole?: boolean;
    type?: string;
}

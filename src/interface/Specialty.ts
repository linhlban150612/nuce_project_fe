export interface ISpecialty {
    id?: string;
    name?: string;
    imgUrl?: string;
    imageUrl?: string;
    imageObjectId?: string;
    descriptionHtml?: string | TrustedHTML;
    status?: string;
    data?: ISpecialty;
    currentPage?: number;
    totalItems?: number;
}
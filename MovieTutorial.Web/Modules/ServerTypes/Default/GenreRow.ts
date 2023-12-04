import { fieldsProxy } from "@serenity-is/corelib";

export interface GenreRow {
    GenreId?: number;
    Name?: string;
}

export abstract class GenreRow {
    static readonly idProperty = 'GenreId';
    static readonly nameProperty = 'Name';
    static readonly localTextPrefix = 'Default.Genre';
    static readonly deletePermission = '{';
    static readonly insertPermission = '{';
    static readonly readPermission = '{';
    static readonly updatePermission = '{';

    static readonly Fields = fieldsProxy<GenreRow>();
}
declare module "*.ejs" {
    export default function ejs(): string;
}

declare module "*.css" {
    const content: string;
    export default content;
}

declare const CWGpages : string[];

declare var require: any;


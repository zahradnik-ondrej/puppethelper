type HeadlessOption = boolean | 'new';
declare const BROWSER_OPTS: {
    headless: HeadlessOption;
    slowMo: number;
    devtools: boolean;
    executablePath: string;
};
export { BROWSER_OPTS };

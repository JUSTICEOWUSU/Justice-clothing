
export default interface InputPropsTypes {
    type: string;
    value: string;
    blur: string;
    onfocus: (event: React.FocusEvent<HTMLElement>) => void;
    onchange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    label: string;
}
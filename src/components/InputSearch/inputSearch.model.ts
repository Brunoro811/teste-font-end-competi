
export interface InputSearchData{
    placeholder?: string
    rest?: any
    value: string;
    onChange: React.Dispatch<React.SetStateAction<string>>;
    functionSearch? : ()=> void
}
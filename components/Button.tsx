import Link from "next/link";

interface IProps {
    className: string,
    label: string,
    action: string,
    callback?: () => void
}

const Button: (props: IProps) => JSX.Element = (props: IProps) => {
    return (
        <Link href={props.action} passHref={true}>
            <span className={`button ${props.className}`} onClick={props.callback}>
                {props.label}
            </span>
        </Link>
    )
}

export default Button;

import Link from "next/link";

interface IProps {
    className: string,
    label: string,
    action: string
}

const Button: (props: IProps) => JSX.Element = (props: IProps) => {
    return (
        <Link href={props.action} passHref={true}>
            <div className={`button ${props.className}`}>
                {props.label}
            </div>
        </Link>
    )
}

export default Button;

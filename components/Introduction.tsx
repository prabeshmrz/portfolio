interface IProps {
    className: string,
}

const Introduction = ({className}: IProps) => {

    return (
        <section id='home' data-index="0" className={"home " + className}>
            Introduction
        </section>
    )
}

export default Introduction;

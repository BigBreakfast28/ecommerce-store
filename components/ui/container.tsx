interface ContinerProps {
    children: React.ReactNode;
}


const Container: React.FC<ContinerProps> = ({
    children
}) => {
    return(
        <div className="mx-auto max-x-7xl">
            {children}
        </div>
    )
}
export default Container;
// Inspired by https://v1.tailwindcss.com/components/alerts

const AlertBox: React.FC<{
    title: string;
    message: string;
}> = (props) => {
    return (
        <>
            <br />
            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded flex flex-col items-center" role="alert">
                <strong className="font-bold">{props.title}</strong>
                <span>{props.message}</span>
            </div>
        </>
    );
}
export default AlertBox
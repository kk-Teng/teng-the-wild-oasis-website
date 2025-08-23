import Spinner from "@/app/_components/Spinner";

export default () => {
    return (
        <div className="grid place-items-center">
            <Spinner />
            <span>Account data loading...</span>
        </div>
    )
}
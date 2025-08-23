import Spinner from "@/app/_components/Spinner";

export default () => {
    return (
        <div className={ 'grid place-items-center' }>
            <Spinner />
            <span>Guest profile data loading...</span>
        </div>
    )
}
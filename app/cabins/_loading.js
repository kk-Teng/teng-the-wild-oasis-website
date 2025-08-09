import Spinner from "@/app/_components/Spinner";

// TODO 子页 loading, 但是如果想使用更细粒度(显示文字描述并显示loading)的loading, 可以用Suspense
export default function _loading() {
    return <div className={ 'grid items-center justify-center' }>
        <Spinner />
        <p className="text-xl text-slate-200">data cabins loading...</p>
    </div>
}

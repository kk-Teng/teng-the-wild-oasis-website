// 小说
// 不常见，也不怎么有用，正常用于聚合所有用于渲染客户端的数据
// 路径用文件夹表示。
export async function GET(request, { params }) {
    console.log(request)
    console.log(params)
    return Response.json({ test: 'test' })
}
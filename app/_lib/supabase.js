import { createClient } from '@supabase/supabase-js'

// TODO 将私密数据放入 .env.local文件中，这些数据只能在服务器中访问到，防止黑客恶意获取。

export const supabase = createClient(process.env.SUPABASE_URL, process.env.SUPABASE_KEY)
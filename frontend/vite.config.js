import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig(() => {
	return {
		plugins: [
			vue(),
			// 自动化导入
			AutoImport({
				imports: [
					'vue',
					'vue-router',
					{
						'naive-ui': ['useDialog', 'useMessage', 'useNotification', 'useLoadingBar']
					}
				],
				dts: 'auto-imports.d.ts'
			}),
			Components({
				// 指定组件所在文件夹的位置
				dirs: ['src/components', 'src/layouts'],
				// 文件扩展名
				extensions: ['vue'],
				// 配置type文件生成位置
				dts: 'components.d.ts',
				// 自动导入naive-ui组件解析
				resolvers: [NaiveUiResolver()]
			})
		],
		// 重定向
		resolve: {
			alias: {
				'@': path.resolve(__dirname, 'src')
			}
		}
	}
})
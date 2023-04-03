import vue from '@vitejs/plugin-vue';
import path from 'path';

console.log(__dirname);
const port = (process.env.X_IDE_API_ORIGIN || '').toLowerCase().startsWith('https') ? 443 : 80;
export default {
  plugins: [vue()],
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'), // 根路径
    },
  },
  server: {
    hmr: {
      port
    }
  }
};

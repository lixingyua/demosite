const path = require('path')

module.exports = {
    // webpack ����
    webpack: {
        // ���ñ���
        alias: {
            // Լ����ʹ�� @ ��ʾ src �ļ�����·��
            '@': path.resolve(__dirname, 'src')
        }
    }
}
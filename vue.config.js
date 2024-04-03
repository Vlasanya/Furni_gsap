module.exports = {
    publicPath: process.env.NODE_ENV === 'production'
      ? '/my-project/' // Тут вказується базовий шлях для вашого проекту на GitHub Pages
      : '/',
    outputDir: 'dist', // Папка для збірки
    // Додайте тут інші налаштування за потреби
  };
  
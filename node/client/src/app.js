export class App {
  configureRouter(config, router) {
    config.title = 'Aurelia';
    config.map([
      { route: ['', 'welcome'], name: 'welcome',  moduleId: 'welcome',      nav: true, title: 'Welcome' },
      { route: 'video',       name: 'video',      moduleId: 'video',        nav: true, title: 'Video' },
      { route: 'songs',       name: 'songs',      moduleId: 'songs',        nav: true, title: 'Songs' },
      { route: 'images',      name: 'images',     moduleId: 'images',        nav: true, title: 'Images' },
      { route: 'biography',   name: 'biography',  moduleId: 'biography',        nav: true, title: 'Biography' },
      { route: 'buy',         name: 'buy',        moduleId: 'buy',        nav: true, title: 'Buy' }
    ]);

    this.router = router;
  }
}
